# Maintainer: Derek Taylor (DistroTube) <derek@distrotube.com>
pkgname=dmscripts-git
_pkgname=dmscripts
pkgver=1.0.r408.5fd2806
pkgrel=1
pkgdesc="A collection of dmenu scripts"
arch=('any')
url="https://gitlab.com/dwt1/dmscripts.git"
license=('GPL3')
depends=(dmenu ffmpeg mpv findutils xclip xdotool xorg-xrandr bind jq)
groups=()
makedepends=(pandoc git)
checkdepends=()
optdepends=(
  'emacs: editor for dm-confedit'
  'libnotify: used by dm-logout'
  'maim: used by dm-main'
  'mpc: used by dm-music'
  'mpd: used by dm-music'
  'qutebrowser: used by dm-bookman'
  'reddio: used by dm-reddit'
  'yad: used by dm-reddit and dm-weather'
  'slock: used by dm-logout'
  'imv: the default image viewer used by dm-setbg, supports wayland'
  'sxiv: an alternative image viewer used by dm-setbg, X11 only'
  'xwallpaper: used by dm-setbg in x11'
  'swaybg: used by dm-setbg in wayland'
  'udisks2: used by dm-usbmount'
  'wl-clipboard: wayland alternative to xclip'
  )
provides=(dmscripts)
conflicts=(dmscripts)
replaces=()
backup=()
options=()
source=("git+$url")
noextract=()
md5sums=('SKIP')
validpgpkeys=()

pkgver() {
  cd "${_pkgname}"
  printf "1.0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${_pkgname}"
  DESTDIR="$pkgdir/" make clean build
}

package() {
  cd ${_pkgname}
  NAME="${pkgname}" DESTDIR="${pkgdir}/" make install
}

post_install () {
  mandb
}

