# Maintainer: David Li <davidtianli@gmail.com>
pkgname=pax-mc-bin
pkgver=1.9.4
pkgrel=1
pkgdesc="The MC modpack manager for professionals. Binary version"
arch=('x86_64')
url="https://github.com/froehlicha/pax"
license=('MIT')
depends=()
provides=('pax-mc')
conflicts=('pax-mc' 'pax-mc-git')
replaces=()
changelog=
source=("pax-${pkgver}::https://github.com/froehlichA/pax/releases/download/v${pkgver}/pax")
sha256sums=('4aad764ac5c1366aa6a1863bb2a8ea7d087860402639f482793539831f23bc18')

package() {
    install -d -m755 "${pkgdir}/usr/bin"
    install -m755 "${srcdir}/pax-${pkgver}" "${pkgdir}/usr/bin/pax"
}
