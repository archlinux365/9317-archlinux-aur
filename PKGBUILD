# Maintainer: Andy Weidenbaum <archbaum@gmail.com>
# Contributor: Dave Reisner <d@falconindy.com>
# Contributor: William Giokas (KaiSforza) <1007380@gmail.com>

pkgname=libbitcoin-system
pkgver=3.2.0
pkgrel=1
pkgdesc="Bitcoin Cross-Platform C++ Development Toolkit"
arch=('i686' 'x86_64')
depends=('boost'
         'boost-libs'
         'icu'
         'libpng'
         'libsecp256k1'
         'qrencode')
makedepends=('autoconf'
             'automake'
             'gcc'
             'git'
             'libtool'
             'm4'
             'make'
             'pkg-config')
groups=('libbitcoin')
url="https://github.com/libbitcoin/libbitcoin"
license=('AGPL3')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/libbitcoin/$pkgname/tar.gz/v$pkgver
        git+https://github.com/libbitcoin/libbitcoin.wiki)
sha256sums=('f10cea6b505ec0eb6b64382ce26c95c2437982fa751a1b7d5c3c7989f9ad5ea6'
            'SKIP')
provides=('libbitcoin' 'libbitcoin-system')
conflicts=('libbitcoin')

build() {
  cd "$srcdir/libbitcoin-$pkgver"

  msg2 'Building...'
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib/libbitcoin \
    --sysconfdir=/etc \
    --sharedstatedir=/usr/share/libbitcoin \
    --localstatedir=/var/lib/libbitcoin \
    --with-icu \
    --with-png \
    --with-qrencode \
    --with-gnu-ld \
    --without-examples
  make -j$(($(nproc)/2))
}

check() {
  cd "$srcdir/libbitcoin-$pkgver"

  msg2 'Testing...'
  make -j$(($(nproc)/2)) check
}

package() {
  cd "$srcdir/libbitcoin-$pkgver"

  msg2 'Installing license...'
  install -Dm 644 COPYING -t "$pkgdir/usr/share/licenses/libbitcoin"

  msg2 'Installing...'
  make DESTDIR="$pkgdir" install

  msg2 'Installing documentation...'
  cp -dpr --no-preserve=ownership "$srcdir/libbitcoin.wiki" \
    "$pkgdir/usr/share/doc/libbitcoin/wiki"

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
}
