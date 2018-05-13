# Based on file generated by debtap
# Maintainer: Shane Simmons <regeya@gmail.com>
# Contributor: Lev Lybin <lev.lybin@gmail.com>

pkgname=upwork-beta
pkgver=5.1.0.509
_rawver=${pkgver//./_}
_hashver="87zq7fllb6sf8y49"
pkgrel=5
pkgdesc="Desktop App (aka Team App) Standard version"
arch=('x86_64')
url="https://www.upwork.com/downloads?source=Footer"
license=('custom')
conflicts=('upwork-alpha' 'upwork-appimage' 'upwork-latest' 'upwork')
depends=('alsa-lib' 'gconf' 'gdk-pixbuf2' 'gtk2' 'libxss' 'libxtst' 'nss')
options=('!strip' '!emptydirs')
install=upwork.install
source_x86_64=(upwork_amd64_${pkgver}.deb::https://updates-desktopapp.upwork.com/binaries/v${_rawver}_${_hashver}/upwork_${pkgver}_amd64.deb)
sha256sums_x86_64=('32b802e25822d4c933e700cc7130afb0a81591e72bf8731110f87a9482c7efc0')

prepare() {
    cd "${srcdir}"
    tar -xJf "${srcdir}/data.tar.xz"
}

package() {
    cd "${srcdir}"
    cp -rp usr "${pkgdir}/usr"
}
