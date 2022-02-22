# Maintainer: Andre Schröder <andre.schroedr at gmail dot com>

# All my PKGBUILDs are managed at https://github.com/schra/pkgbuilds

_name=x11docker
pkgname=$_name
pkgver=7.1.0
_mainfolder=$pkgname-$pkgver
pkgrel=1
pkgdesc='Run GUI applications and desktops in Docker. Focus on security.'
arch=(any)
url=https://github.com/mviereck/x11docker
license=(MIT)
install=x11docker.install

# these are the core and recommended dependencies from
# https://github.com/mviereck/x11docker/wiki/dependencies
depends=(bash docker xpra xorg-server-xephyr xorg-xinit xorg-xauth xclip
         xorg-xhost xorg-xrandr xorg-xdpyinfo)

optdepends=('cups: --printer support'
            'kwin: --kwin, --kwin-xwayland support'
            'nxagent: --nxagent support'
            'pulseaudio: --pulseaudio support'
            'weston: --weston, --xpra-xwayland, --weston-xwayland, --xdummy-xwayland support'
            'xdotool: --xpra-xwayland, --xdummy-xwayland support'
            'xorg-server-xvfb: --xvfb support'
            'xorg-server-xwayland: --xpra-xwayland, --weston-xwayland, --kwin-xwayland, --xwayland, --xdummy-xwayland support'
            'xorg-server: --xorg, --xdummy support')

source=($pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz)
sha256sums=('9fceb7131f9b421a8c31850b0266e5febf2328d04bd2fde95d8e1b8cca340ef7')

package() {
  cd "$srcdir/$_mainfolder"

  # I don't use `x11docker --install` on purpose here since it wasn't designed
  # for packaging but rather for directly installing the program.

  install -Dm755 x11docker              -t "$pkgdir/usr/bin"
  install -Dm644 README.md CHANGELOG.md -t "$pkgdir/usr/share/doc/$_name"
  install -Dm644 LICENSE.txt            -t "$pkgdir/usr/share/licenses/$_name"
}
