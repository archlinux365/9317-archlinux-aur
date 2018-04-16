# Maintainer: Ysblokje <ysblokje at gmail dot com>
pkgname=('gamemode-git')
_pkgname=('gamemode')
pkgver=53eece3
pkgrel=4
pkgdesc="A daemon/lib combo for Linux that allows games to request a set of optimisations be temporarily applied to the host OS."
arch=('x86_64')
url="https://github.com/FeralInteractive/gamemode.git"
license=('BSD 3-Clause License (Revised)')
depends=('polkit')
optdepends=('systemd')
makedepends=('meson' 'ninja' 'pkg-config' 'git')
provides=('gamemode')
source=("git+https://github.com/FeralInteractive/gamemode.git")
sha256sums=('SKIP')

pkgver() {
    cd gamemode
    echo $(git rev-parse --short HEAD)
}
build() {
  arch-meson ${_pkgname} build -Dwith-systemd-user-unit-dir=/etc/systemd/user
  ninja -C build
}

package() {
  DESTDIR=$pkgdir ninja -C build install
  mv ${pkgdir}/etc/systemd ${pkgdir}/usr/lib/systemd
  rm -rf ${pkgdir}/etc
  install -m644 -Dt "${pkgdir}/usr/share/licenses/${pkgname}" ${_pkgname}/LICENSE.txt
}
