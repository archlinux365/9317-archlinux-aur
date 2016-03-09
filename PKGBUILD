# Maintainer: Johannes Schleifenbaum <johannes [at] js-webcoding [dot] de>
# Please report issues at https://github.com/jojosch/pkgbuilds

pkgname="phpmd"
pkgver=2.4.1
pkgrel=1
pkgdesc="Takes a given PHP source code base and look for several potential problems within that source."
url="http://phpmd.org/"
license=("BSD")
arch=("any")
depends=("php>=5.3.0")
source=(
  "${pkgname}-${pkgver}.phar::http://static.phpmd.org/php/${pkgver}/${pkgname}.phar"
  "LICENSE"
)
install="${pkgname}.install"
sha256sums=(
  "b6a813de07257f992fb69df979d7b5adec53ad15aaa8ca88a5c7aa98130f7538"
  "faad499ee7fe2e75e18565c6b6b5cf43a3dc97a6eebffbfa5840d9205339fa9b"
)

package() {
  cd "${srcdir}"
  install -D -m644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m755 "${pkgname}-${pkgver}.phar" "${pkgdir}/usr/share/webapps/bin/${pkgname}.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/${pkgname}.phar" "${pkgdir}/usr/bin/${pkgname}"
}
