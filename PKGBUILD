# Maintainer: dctxmei <dctxmei@gmail.com>
pkgname=hmcl-git
_pkgname=HMCL
pkgver=3.0
pkgrel=1
pkgdesc="A powered Minecraft launcher that supports a lot of features."
arch=('any')
url="https://github.com/huanghongxun/HMCL"
license=('GPL3')
depends=('java-openjfx>=8')
makedepends=("git" "jdk")
provides=('hmcl')
conflicts=('hmcl')
source=("git://github.com/huanghongxun/$_pkgname.git"
        "$_pkgname.run")
sha512sums=("SKIP"
            "12d1ecf21e68aff07e8b24682476e2935256535a2e35ad31b42b2d2528769b46a9ebb42c62762e8641dbf519d759f0194914141d521d79d3fb1b1be4c76efa37")

pkgver() {
    git -C HMCL describe --tag | sed 's/^v//'
}

build() {
    _java=$(ls /usr/lib/jvm | grep java | grep jdk | sort -t - -k 2 -n | tail -n 1)
    export JAVA_HOME=/usr/lib/jvm/$_java
    cd $srcdir/$_pkgname
    sh gradlew build
}

package() {
    _path=$(echo $srcdir/$_pkgname/$_pkgname/build/libs/HMCL*.jar)
    install -Dm644 $_path $pkgdir/usr/share/hmcl/hmcl.jar
    install -Dm755 $srcdir/$_pkgname.run $pkgdir/usr/bin/hmcl
}
