# Maintainer: Randy Ramos <rramos1295@gmail.com>
# Contributor: Reventlov <contact+aur@volcanis.me>
# Contributor: sudokode <sudokode@gmail.com>
# Contributor: Bartłomiej Piotrowski <nospam@bpiotrowski.pl>
# Contributor: Zariel <c.bannister@gmail.com>

pkgname=irssi-git
pkgver=1.1.dev.r343.gb3b68a4a
pkgrel=2
pkgdesc="Modular text mode IRC client with Perl scripting"
arch=('i686' 'x86_64')
url="http://irssi.org/"
license=('GPL')
depends=('glib2' 'openssl')
makedepends=('git' 'elinks')
optdepends=('perl-libwww: For the scriptassist script')
conflicts=('irssi')
provides=('irssi')
backup=('etc/irssi.conf')
source=("$pkgname::git+https://github.com/irssi/irssi.git")
sha256sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd $pkgname

  ./autogen.sh \
        --prefix=/usr \
        --with-proxy \
        --sysconfdir=/etc \
        --with-perl-lib=vendor \
        --enable-true-color
  make -j
}

package() {
  cd $pkgname

  make DESTDIR="$pkgdir" install
}
