# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=pacana-git
_pkgname=pacana
pkgver=0.11.r1.g7c89e6b
pkgrel=1
pkgdesc="Pacman repository analysis tool"
arch=('i686' 'x86_64')
url="https://github.com/bbidulock/pacana"
license=('GPL')
provides=("${_pkgname}=${pkgver%%.r*}-${pkgrel}")
conflicts=("${_pkgname}")
depends=('pacman')
makedepends=('git')
source=("$pkgname::git+https://github.com/bbidulock/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  cd $pkgname
  ./autogen.sh
}

build() {
  cd $pkgname
  ./configure
  # Fight unused direct deps
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0 /g' -e 's/    if test "$export_dynamic" = yes && test -n "$export_dynamic_flag_spec"; then/      func_append compile_command " -Wl,-O1,--as-needed"\n      func_append finalize_command " -Wl,-O1,--as-needed"\n\0/' libtool
  make
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
}
