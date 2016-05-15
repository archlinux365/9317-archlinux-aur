# Maintainer: Patrice Peterson <runiq at archlinux dot us>
# Contributor: Vivien Didelot <vivien+aur@didelot.org>
pkgname=i3blocks-git
_pkgname=i3blocks
pkgver=1.4.r21.g017395f
pkgrel=1
pkgdesc='Define blocks for your i3bar status line'
arch=('i686' 'x86_64')
url="https://github.com/vivien/$_pkgname"
license=('GPL3')
makedepends=('git' 'ruby-ronn')
optdepends=('acpi: For example battery script'
            'sysstat: For example cpu_usage script'
            'alsa-utils: For default volume script'
            'playerctl: For mediaplayer contrib script'
            'openvpn: For openvpn contrib script')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/vivien/$_pkgname")
sha256sums=('SKIP')

pkgver () {
  cd "$srcdir/$_pkgname"
  git describe --long | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

build () {
  make -C "$srcdir/$_pkgname" PREFIX=/usr
}

package () {
  make -C "$srcdir/$_pkgname" DESTDIR="$pkgdir" PREFIX=/usr install
}

# vim: et ts=2 sw=2
