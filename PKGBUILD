# Maintainer: Chris Werner Rau <aur@cwrau.io>
# Maintainer: flaviofearn <flavioislima@gmail.com>

pkgname=heroic-games-launcher-bin
_pkgver=v1.5.4
pkgver=${_pkgver#v}
pkgrel=1
pkgdesc="HGL, a Native alternative Linux Launcher for Epic Games"
arch=('x86_64')
url="https://github.com/flavioislima/HeroicGamesLauncher"
license=('GPL3')
conflicts=(${pkgname%-*}-{appimage,electron})
depends=('fuse2' 'gawk' 'python-wheel' 'python-setuptools')
_filename=heroic-${pkgver}.pacman
source=("$url/releases/download/${_pkgver}/${_filename}")
noextract=("${_filename}")
md5sums=('631052ce1ec5798cb1c7a2d6c2667479')
options=(!strip)

package() {
  tar -xJv -C "${pkgdir}" -f "${srcdir}/${_filename}" usr opt
  mkdir "$pkgdir/usr/bin"
  ln -s "/opt/heroic/heroic" "$pkgdir/usr/bin/heroic"
}

# vim:set ts=2 sw=2 et: syntax=sh
