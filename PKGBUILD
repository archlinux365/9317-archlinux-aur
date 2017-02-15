# Maintainer: kitsunyan <kitsunyan@inbox.ru>

pkgname=systemd-boot-password
pkgver=0.9.3.232
pkgrel=1
_commit=6280a386f70d1b21fdbcba1a57e2d6a654c7f46d
pkgdesc='systemd-boot with password-protected editor'
arch=('i686' 'x86_64')
url="https://github.com/kitsunyan/systemd-boot-password"
license=('LGPL2.1')
depends=('systemd')
makedepends=('gnu-efi-libs' 'docbook-xsl')
optdepends=('sbsigntools: signing support')
source=("git://github.com/kitsunyan/systemd-boot-password.git#commit=$_commit")
sha256sums=('SKIP')

prepare() {
  cd "$srcdir/$pkgname"
  ./autogen.sh
}

build() {
  cd "$srcdir/$pkgname"
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$pkgname"
  make DESTDIR="$pkgdir" install
}
