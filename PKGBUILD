# Maintainer: Jean Lucas <jean@4ray.co>
# Contributor: Danny Bautista <pyrolagus@gmail.com>

pkgname=ghidra-git
pkgver=9.0.4+309+g0e83fdbe
_d2j=2.0
_yajsw=12.12
_hfsx=0.21
pkgrel=2
pkgdesc='Software reverse engineering framework (git)'
arch=(x86_64)
url=https://www.nsa.gov/ghidra
_git=https://github.com/NationalSecurityAgency/ghidra
license=(Apache)
provides=(ghidra)
conflicts=(ghidra ghidra-bin)
depends=('java-environment>=11' bash)
makedepends=(gradle unzip bison flex)
source=(git+$_git
        git+$_git-data
        https://github.com/pxb1988/dex2jar/releases/download/$_d2j/dex-tools-$_d2j.zip
        https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/android4me/AXMLPrinter2.jar
        https://sourceforge.net/projects/yajsw/files/yajsw/yajsw-stable-$_yajsw/yajsw-stable-$_yajsw.zip
        https://sourceforge.net/projects/catacombae/files/HFSExplorer/$_hfsx/hfsexplorer-${_hfsx/./_}-bin.zip)
noextract=(AXMLPrinter2.jar
           yajsw-stable-$_yajsw.zip
           hfsexplorer-${_hfsx/./_}-bin.zip)
sha512sums=('SKIP'
            'SKIP'
            'c4a6c72ea09b58a44fcb8918cfada600467f10f99a02b53d2436ac68295e73c8daf9ba0a8bc7160ba1e28e87f032ee034435ebe40af35b6e2fe9fa4607581358'
            'c1168ec913f1fbb0675915d4fd865ec9a8e8573f6c8aedcb6e68166f61f11aeaececc7548d54d78134843c0102c57d6350973f6d3027d0ffdae52a5c57a7f601'
            '0ff5a228ae1c5251c8ba59f9bcd9b4a199b0caaf688f6eccba42c3d227784d8f56f9164b2fad73fc173ec314340c036144123ce152fe911013df5598bd708944'
            'b85b4316115695acc78cc7c675c673058c05a238451562be0c6a48b2d11a28e5645a42cb62cdf063be015369df26201dfab6cf2e60f39e6468d1d53b23f94415')

pkgver() {
  cd ghidra
  git describe --tags | sed 's/Ghidra_//;s/_build//;s/-/+/g'
}

prepare() {
  install -d hfsx
  unzip -u hfsexplorer-${_hfsx/./_}-bin.zip -d hfsx

  cd ghidra

  # Allow use of any Gradle version
  sed -i '/gradleVersion/,+2d' build.gradle

  # Add repositories
  cat >> build.gradle << EOF

allprojects {
	repositories {
		mavenCentral()
		jcenter()
		flatDir name: 'localRepository', dirs: "\${rootDir}/lib"
	}
}
EOF

  # Add libs
  install -Dm 644 ../dex2jar-$_d2j/lib/dex-*.jar \
    ../AXMLPrinter2.jar \
    ../hfsx/lib/{csframework,hfsx*,iharder-base64}.jar \
    -t lib

  # YAJSW expects this symlink
  ln -sf ghidra ../ghidra.bin
  install -Dm 644 ../yajsw-stable-$_yajsw.zip -t Ghidra/Features/GhidraServer

  # Add FID datasets
  install -Dm 644 ../ghidra-data/FunctionID/*.fidb -t Ghidra/Features/FunctionID/src/main/fidb

  # Ignore lack of licensing for YAJSW zip, packed FID datasets, and the native binaries
  sed -i '/FileTree tree/a\\t\texclude "yajsw-stable-**.zip"\n\t\texclude "src/main/fidb/**.fidb"\n\t\texclude "os/linux64/**"' gradle/support/ip.gradle
}

build() {
  cd ghidra
  msg2 'Unpacking YAJSW...'
  gradle yajswDevUnpack
  msg2 'Building native components...'
  gradle prebuildNatives_linux64
  msg2 'Building full package...'
  gradle buildGhidra
}

package() {
  cd ghidra
  install -d "$pkgdir"/{opt,usr/bin}
  _appver=$(grep -oP '(?<=^application.version=).*$' Ghidra/application.properties)
  _relname=$(grep -oP '(?<=^application.release.name=).*$' Ghidra/application.properties)
  unzip -u build/dist/ghidra_${_appver}_${_relname}_$(date +"%Y%m%d")_linux64.zip -d "$pkgdir"/opt
  mv "$pkgdir"/opt/ghidra{_${_appver}_${_relname},}
  ln -s /opt/ghidra/ghidraRun "$pkgdir"/usr/bin/ghidra
  ln -s /opt/ghidra/support/analyzeHeadless "$pkgdir"/usr/bin/ghidra-analyzeHeadless
  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/ghidra
}
