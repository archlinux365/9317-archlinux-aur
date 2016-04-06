# Maintainer: Pieter Goetschalckx <3.14.e.ter [at] gmail [dot] com>
# Contributor: Ricardo Funke <ricardo [at] gmail [dot] com>
# Contributor: Attila Bukor <r1pp3rj4ck [at] w4it [dot] eu>
# Contributor: Iwan Timmer <irtimmer [at] gmail [dot] com>
# Contributor: Eric Engestrom <aur [at] engestrom [dot] ch>
# Contributor: Ricardo Band <me [at] xengi [dot] de>
# Contributor: Axilleas Pipinellis (aka axil42) <axilleas [at] archlinux [dot] info>
# Contributor: UshakovVasilii <UshakovVasilii [at] yahoo [dot] com>
# Contributor: Giulio Fidente <gfidente [at] gmail [dot] com>
# Contributor: xantares <xantares09 [at] hotmail [dot] com>
# Contributor: petterk <stifler3k [at] hotmail [dot] com>

pkgname=popcorntime-bin
_pkgname=popcorntime
pkgver=0.3.9
pkgrel=6
pkgdesc="Stream movies and TV shows from torrents"
arch=('i686' 'x86_64')
url="https://popcorntime.sh"
license=('GPL3')
depends=('alsa-lib' 'gconf' 'gtk2' 'nss' 'ttf-font' 'libxtst' 'libnotify' 'desktop-file-utils')
provides=('popcorntime' 'popcorn-time-ce')
conflicts=('popcorntime')
options=('!strip')
install=popcorntime.install
source=("${_pkgname}.desktop")
source_i686=("https://get.popcorntime.sh/build/Popcorn-Time-${pkgver}-Linux-32.tar.xz")
source_x86_64=("https://get.popcorntime.sh/build/Popcorn-Time-${pkgver}-Linux-64.tar.xz")
sha256sums=('4422f21e16176fda697ed0c8a6d1fb6f9dd7c4bc3f3694f9bcc19cbe66630334')
sha256sums_i686=('SKIP')
sha256sums_x86_64=('SKIP')

[ "$CARCH" = "i686" ]   && _platform=linux32
[ "$CARCH" = "x86_64" ] && _platform=linux64

package() {
  _bpath="${_platform}"

  install -dm755 "${pkgdir}/usr/share/${_pkgname}"
  install -dm755 "${pkgdir}/usr/bin"

  # Program
  install -Dm755 "${_bpath}/Popcorn-Time" "${pkgdir}/usr/share/${_pkgname}/"
  install -Dm644 "${_bpath}/"{icudtl.dat,libffmpegsumo.so,nw.pak,package.json} \
    "${pkgdir}/usr/share/${_pkgname}/"

  # Directories
  cp -a "${_bpath}/"{locales,node_modules,src} "${pkgdir}/usr/share/${_pkgname}/"

  # Link to program
  ln -s "/usr/share/${_pkgname}/Popcorn-Time" "${pkgdir}/usr/bin/${_pkgname}"

  # Desktop file
  install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

  # Icon
  install -Dm644 "${_bpath}/src/app/images/icon.png" "${pkgdir}/usr/share/icons/hicolor/256x256/apps/${_pkgname}.png"
}

# vim:set ts=2 sw=2 et:

