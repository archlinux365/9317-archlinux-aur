# Maintainer: Kuan-Yen Chou <forendef2846 at gmail dot com>

pkgname=pacleaf
pkgver=1.0.0
pkgrel=1
pkgdesc='Generate the list of optional or orphan packages'
depends=()
arch=('x86_64')
url="https://github.com/kyechou/aur-pacleaf"
license=('MIT')
source=("pacleaf")
sha512sums=('6e1623f30e51e0889f91b45c4268791ea4928730f4d78ea85e524c72da20ff7979d7f2dcddf985109a8ccd76831a1124bc4f98d5f6cbd404b55b201617ac3cb5')

package() {
    cd "$srcdir"
    install -Dm 755 pacleaf -t "${pkgdir}/usr/bin/"
}

# vim: set ts=4 sw=4 et :
