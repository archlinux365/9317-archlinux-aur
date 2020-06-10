# Maintainer: Michael Beaumont <mjboamail@gmail.com>
pkgname=gsts
pkgver=2.3.0
pkgrel=1
pkgdesc="Obtain and store AWS STS credentials to interact with Amazon services by authenticating via G Suite SAML."
arch=(any)
url="https://github.com/ruimarinho/gsts"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/ruimarinho/gsts/archive/v${pkgver}.tar.gz")
noextract=("${pkgname}-${pkgver}.tar.gz")
sha256sums=('17445e969c911c307118dd004e2a427fc352376f633857efa4665afc89a67c47')

package() {
    npm install -g --user root --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tar.gz"
    chown -R root:root "${pkgdir}"
    find "${pkgdir}/usr" -name package.json -exec sed -i '/"_where"/d' '{}' '+'
    find "${pkgdir}/usr" -type d -exec chmod 755 {} +
}
