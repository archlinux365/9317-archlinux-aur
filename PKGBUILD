# Maintainer: Andy Weidenbaum <archbaum@gmail.com>
# Contributor: Dave Reisner <d@falconindy.com>
# Contributor: William Giokas (KaiSforza) <1007380@gmail.com>

pkgname=libbitcoin-network
pkgver=3.0.0
pkgrel=1
pkgdesc="Bitcoin P2P Network Library"
arch=('i686' 'x86_64')
depends=('boost'
         'boost-libs'
         'icu'
         'libbitcoin-system'
         'libsecp256k1')
makedepends=('autoconf'
             'automake'
             'gcc'
             'libtool'
             'm4'
             'make'
             'pkg-config')
groups=('libbitcoin')
url="https://github.com/libbitcoin/libbitcoin-network"
license=('AGPL3')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/libbitcoin/$pkgname/tar.gz/v$pkgver)
sha256sums=('859d49f17eecb13a891b16654cb8ee6bf4cfbf08f7e5f7ce56cb9ed9b99d4d10')
provides=('libbitcoin-network')
conflicts=('libbitcoin-network')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Building...'
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib/libbitcoin-network \
    --sysconfdir=/etc \
    --sharedstatedir=/usr/share/libbitcoin-network \
    --localstatedir=/var/lib/libbitcoin-network \
    --without-tests \
    --with-gnu-ld
  make -j$(($(nproc)/2))
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing license...'
  install -Dm 644 COPYING -t "$pkgdir/usr/share/licenses/libbitcoin-network"

  msg2 'Installing documentation...'
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/libbitcoin-network"

  msg2 'Installing...'
  make DESTDIR="$pkgdir" install
}
