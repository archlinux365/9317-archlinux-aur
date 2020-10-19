# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=busybox-git
pkgver=1.32.0.r51.g085f19cdf
pkgrel=1
pkgdesc="Tiny versions of many common UNIX utilities"
arch=('i686' 'x86_64')
url="https://www.busybox.net/"
license=('GPL')
makedepends=('git' 'kernel-headers-musl' 'musl' 'ncurses')
provides=('busybox')
conflicts=('busybox')
source=("git+https://git.busybox.net/busybox"
        "config::https://git.archlinux.org/svntogit/community.git/plain/trunk/config?h=packages/busybox")
sha256sums=('SKIP'
            'SKIP')


pkgver() {
  cd "busybox"

  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/[_-]/./g'
}

build() {
  cd "busybox"

  cp "$srcdir/config" ".config"
  yes "" | make oldconfig

  export KCONFIG_NOTIMESTAMP=1  # reproducible build
  make CC=musl-gcc
}

check() {
  cd "busybox"

  #make check
}

package() {
  cd "busybox"

  install -Dm755 "busybox" -t "$pkgdir/usr/bin"

  install -Dm644 "docs/busybox.1" -t "$pkgdir/usr/share/man/man1"
  install -Dm644 "docs"/BusyBox.{html,txt} -t "$pkgdir/usr/share/doc/busybox"
}
