# Maintainer: Lex Black <autumn-wind@web.de>
# Contributor: Thomas Berryhill (oats) <tb01110100 at gmail dot com>
# Contributor: Felix Yan <felixonmars at archlinux dot org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski at archlinux dot org>
# Contributor: Thomas Dziedzic <gostrc at gmail dot com>
# Contributor: Angel Velasquez <angvp at archlinux dot org>
# Contributor: Alexander Fehr <pizzapunk gmail com>
# Contributor: Daniel J Griffiths <ghost1227 at archlinux dot us>

pkgname=aria2-git
pkgver=1.34.0.r21.g37368130
pkgrel=1
pkgdesc='Download utility that supports HTTP(S), FTP, BitTorrent, and Metalink'
arch=('i686' 'x86_64')
url='http://aria2.sourceforge.net/'
license=('GPL')
depends=('gnutls' 'libxml2' 'sqlite' 'c-ares' 'ca-certificates' 'libssh2')
makedepends=('git' 'python2-sphinx')
checkdepends=('cppunit')
conflicts=('aria2')
provides=("aria2=${pkgver%.*}")
source=("$pkgname::git+https://github.com/tatsuhiro-t/aria2.git")
sha256sums=('SKIP')


pkgver() {
  cd "$pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/release.//'
}

prepare() {
  cd "$pkgname"
  autoreconf -i
}

build() {
  cd "$pkgname"

  ./configure \
    --prefix=/usr \
    --with-ca-bundle=/etc/ssl/certs/ca-certificates.crt
  make
}

check() {
  cd "$pkgname"
  make check
}

package() {
  cd "$pkgname"
  make DESTDIR="$pkgdir" install

  # add bash completion
  install -d "$pkgdir"/usr/share/bash-completion/completions
  install -m644 "$pkgdir"/usr/share/doc/aria2/bash_completion/aria2c \
    "$pkgdir"/usr/share/bash-completion/completions
  rm -rf "$pkgdir"/usr/share/doc/aria2/bash_completion
}
