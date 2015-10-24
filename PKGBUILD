# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=bitcoin-qt-addrindex
pkgver=0.11.1
pkgrel=2
pkgdesc="Bitcoin Core GUI P2P wallet with addrindex"
arch=('i686' 'x86_64')
url="https://github.com/btcdrak/bitcoin"
makedepends=('autoconf'
             'automake'
             'binutils'
             'boost'
             'boost-libs'
             'gcc'
             'gettext'
             'libtool'
             'make'
             'miniupnpc'
             'openssl'
             'pkg-config'
             'protobuf'
             'qrencode'
             'qt4'
             'yasm')
license=('MIT')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/btcdrak/${pkgname%%-*}/tar.gz/v$pkgver-addrindex)
sha256sums=('790b32f073f979a252a413c4a2ea5d2d35454007fa8f41e90660b344a9241cf3')
provides=('bitcoin-cli' 'bitcoin-daemon' 'bitcoin-qt' 'bitcoin-tx')
conflicts=('bitcoin-cli' 'bitcoin-daemon' 'bitcoin-qt' 'bitcoin-tx')

build() {
  cd "$srcdir/${pkgname%%-*}-$pkgver-addrindex"

  msg 'Building...'
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib/bitcoin \
    --sysconfdir=/etc \
    --sharedstatedir=/usr/share/bitcoin \
    --localstatedir=/var/lib/bitcoin \
    --enable-hardening \
    --enable-wallet \
    --with-gui=qt4 \
    --with-incompatible-bdb \
    --with-gnu-ld
  make
}

package() {
  cd "$srcdir/${pkgname%%-*}-$pkgver-addrindex"

  msg 'Installing license...'
  install -Dm 644 COPYING "$pkgdir/usr/share/licenses/${pkgname%%-*}/COPYING"

  msg 'Installing man pages...'
  install -Dm 644 contrib/debian/manpages/bitcoind.1 \
    "$pkgdir/usr/share/man/man1/bitcoind.1"
  install -Dm 644 contrib/debian/manpages/bitcoin-qt.1 \
    "$pkgdir/usr/share/man/man1/bitcoin-qt.1"
  install -Dm 644 contrib/debian/manpages/bitcoin.conf.5 \
    "$pkgdir/usr/share/man/man5/bitcoin.conf.5"

  msg 'Installing documentation...'
  install -dm 755 "$pkgdir/usr/share/doc/bitcoin"
  for _doc in \
    `find doc -maxdepth 1 -type f -name "*.md" -printf '%f\n'` \
    release-notes; do
      cp -dpr --no-preserve=ownership doc/$_doc \
        "$pkgdir/usr/share/doc/bitcoin/$_doc"
  done

  msg 'Installing bitcoin...'
  make DESTDIR="$pkgdir" install

  msg 'Installing desktop files...'
  install -Dm 644 contrib/debian/bitcoin-qt.desktop \
    "$pkgdir/usr/share/applications/bitcoin.desktop"
  for _pixmap in bitcoin16.png \
                 bitcoin16.xpm \
                 bitcoin32.png \
                 bitcoin32.xpm \
                 bitcoin64.png \
                 bitcoin64.xpm \
                 bitcoin128.png \
                 bitcoin128.xpm \
                 bitcoin256.png \
                 bitcoin256.xpm; do
    install -Dm 644 "share/pixmaps/$_pixmap" \
      "$pkgdir/usr/share/pixmaps/$_pixmap"
  done

  msg 'Installing bash completion...'
  install -Dm 644 contrib/bitcoind.bash-completion \
    "$pkgdir/usr/share/bash-completion/completions/bitcoind"

  msg 'Cleaning up pkgdir...'
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
}
