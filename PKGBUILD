# Maintainer: Rick de Bondt <codedwrench@teamxlink.com>
# Maintainer: CrunchBite <crunchbite@teamxlink.com>

pkgname=xlinkkai
pkgver=7.4.42
_commit=594048352
pkgrel=1
pkgdesc='XLink Kai is a global gaming network - that allows you to play system-link/LAN enabled games online for free.'

url='https://www.teamxlink.co.uk/'

_repo='https://repo.teamxlink.co.uk/debian'

arch=('x86_64' 'i486' 'aarch64' 'armv7h')

depends=('gcc-libs')
makedepends=('python3')

install=post.install

license=('custom')

source=("License.rtf"
  "post.install"
  "find_matching_sha512.py"
  # GPG signature check
  "Release::https://repo.teamxlink.co.uk/debian/Release"
  "Release.sig::https://repo.teamxlink.co.uk/debian/Release.gpg"
  "Packages::https://repo.teamxlink.co.uk/debian/Packages")
  
sha512sums=(
  "0cba12b15954a929b9811a211c200aec4bcea2ea864aced78663077ab203665d4c4d2ec5f300d6acc365dc31554ec11c15de633f32271c3dd995ef1c06b4c199"
  "662708edf02393ad698a154a91806b8a3c2c05ecc1a37966ab7bc66b1ce783fc7e379611e2a1b4067b3dd6680f8f2d086981b676e9ee67d0356479a3a9c5924b"
  "042122c71f0cf3b9f1a1417d023c3b613e3c6da2fbc2c18b5f59c7ac393279fed4244bcfd07e4e381e21d009b73dad2dd36348bc9d1bde5282dc0c34c42970d8"
  'SKIP'
  'SKIP'
  'SKIP')

  
source_x86_64=("${_repo}/amd64/${pkgname}_${pkgver}-${_commit}_amd64.deb")
sha512sums_x86_64=('SKIP')

source_i486=("${_repo}/i386/${pkgname}_${pkgver}-${_commit}_i386.deb")
sha512sums_i386=('SKIP')

source_aarch64=("${_repo}/aarch64/${pkgname}_${pkgver}-${_commit}_aarch64.deb")
sha512sums_aarch64=('SKIP')

source_armv7h=("${_repo}/armv7h/${pkgname}_${pkgver}-${_commit}_armv7h.deb")
sha512sums_armv7h=('SKIP')
  
validpgpkeys=("2DFECF08B21C8AACAEC391F4875B757DFFE7E108") # Team XLink <crunchbite@teamxlink.co.uk>

prepare() {
  ARCH=$CARCH
  
  case $ARCH in
    i686)
        DEBIAN_ARCH=i386
        ;;
    x86_64)
        DEBIAN_ARCH=amd64
        ;;
    armv7h)
        DEBIAN_ARCH=armv7
        ;;
    aarch64)
        DEBIAN_ARCH=aarch64
        ;;
    *)
        echo "Architecture unsupported"
        ;;
  esac
        
  # Validate Packages hash from the release file
  echo "$(grep Packages Release | tail -n 2 | head -n 1 | awk '{print $1}') Packages" \
    > "Packages.sha512"

  sha512sum -c "Packages.sha512"

  # Validate debian package hash from the Packages file
  ./find_matching_sha512.py $pkgname ${pkgver}-${_commit} $DEBIAN_ARCH Packages  \
    > "${pkgname}-${pkgver}-${_commit}-$DEBIAN_ARCH.deb.sha512"
          sha512sum -c "${pkgname}-${pkgver}-${_commit}-$DEBIAN_ARCH.deb.sha512"
}

package() { 
  tar -xvf data.tar.xz

  install -Dm644 License.rtf "$pkgdir/usr/share/licenses/$pkgname/License.rtf"
    
  install -Dm666 "${srcdir}/etc/kaiengine.conf" "${pkgdir}/etc/kaiengine.conf"

  install -Dm775 "${srcdir}/usr/bin/kaiengine" "${pkgdir}/usr/bin/kaiengine"
}
