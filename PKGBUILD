# Maintainer: Tom Zander

pkgname=bitcoin-classic-git
pkgver=v1.2.0.b1.r55.g95803467
pkgrel=1
pkgdesc='Bitcoin Classic versions of Bitcoind, bitcoin-cli, bitcoin-tx, and bitcoin-qt, most recent stable branch, w/GUI and wallet'
arch=('any')
url="https://bitcoinclassic.com/"
license=('MIT')
depends=('boost-libs' 'miniupnpc' 'desktop-file-utils' 'libevent' 'qt5-base' 'protobuf' 'qrencode' 'openssl')
makedepends=('boost' 'libevent' 'qt5-base' 'qt5-tools' 'qrencode' 'protobuf')
provides=('bitcoin-daemon' 'bitcoin-cli' 'bitcoin-qt' 'bitcoin-tx')
conflicts=('bitcoin-daemon' 'bitcoin-cli' 'bitcoin-qt' 'bitcoin-tx')
install=bitcoin-qt.install
source=("git+https://github.com/bitcoinclassic/bitcoinclassic.git#branch=develop"
    "bitcoin.logrotate")
sha256sums=('SKIP'
    "7bf4bdad419c1ee30b88c7e4190707c5ff250da8b23d68d5adf14043f8e2ac73")

pkgver() {
  cd "$srcdir/bitcoinclassic"
  git describe --long --tags | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/bitcoinclassic"

  msg2 'Building...'
  CXXFLAGS="$CXXFLAGS -DBOOST_VARIANT_USE_RELAXED_GET_BY_DEFAULT=1"
  ./autogen.sh
  ./configure --prefix=/usr --with-incompatible-bdb --with-gui=qt5 --enable-hardening \
        --enable-reduce-exports --disable-gui-tests --disable-maintainer-mode \
        --sbindir=/usr/bin \
        --libexecdir=/usr/lib/bitcoin \
        --sysconfdir=/etc \
        --sharedstatedir=/usr/share/bitcoin \
        --localstatedir=/var/lib/bitcoin
  make -j$(nproc)
}

package() {
  cd "$srcdir/bitcoinclassic"

  msg2 'Installing bitcoin-qt...'
  install -Dm755 "$srcdir/bitcoinclassic/src/qt/bitcoin-qt" "$pkgdir/usr/bin/bitcoin-qt"
  install -Dm644 "$srcdir/bitcoinclassic/share/pixmaps/bitcoin128.png"\
        "$pkgdir/usr/share/pixmaps/bitcoin128.png"
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  cp "$srcdir/bitcoinclassic/contrib/debian/bitcoin-qt.desktop" "$srcdir/bitcoinclassic/bitcoin.desktop"
  desktop-file-install -m 644 --dir="$pkgdir/usr/share/applications/" "bitcoin.desktop"

  msg2 'Installing bitcoin-daemon...'
  install -Dm755 "$srcdir/bitcoinclassic/src/bitcoind" "$pkgdir/usr/bin/bitcoind"
  install -Dm644 "$srcdir/bitcoinclassic/contrib/debian/examples/bitcoin.conf"\
        "$pkgdir/usr/share/doc/$pkgname/examples/bitcoin.conf"
  install -Dm644 "$srcdir/bitcoinclassic/contrib/debian/manpages/bitcoind.1"\
        "$pkgdir/usr/share/man/man1/bitcoind.1"
  install -Dm644 "$srcdir/bitcoinclassic/contrib/debian/manpages/bitcoin.conf.5"\
        "$pkgdir/usr/share/man/man5/bitcoin.conf.5"

  msg2 'Installing bitcoin.conf...'
  # Install bitcoin.conf is one does not already exist
  [[ ! -e "/etc/bitcoin/bitcoin.conf" ]] && install -Dm 600 \
  "$srcdir/bitcoinclassic/contrib/debian/examples/bitcoin.conf" -t "$pkgdir/etc/bitcoin"

  msg2 'Installing bitcoin.service...'
  install -Dm 644 "$srcdir/bitcoinclassic/contrib/init/bitcoind.service" \
               -t "$pkgdir/usr/lib/systemd/system"

  msg2 'Installing bitcoin.logrotate...'
  install -Dm 644 "$srcdir/bitcoin.logrotate" "$pkgdir/etc/logrotate.d/bitcoin"

  msg2 'Installing bash completion...'
  install -Dm 644 contrib/bitcoind.bash-completion \
    "$pkgdir/usr/share/bash-completion/completions/bitcoind"

  msg2 'Installing bitcoin-cli...'
  install -Dm755 "$srcdir/bitcoinclassic/src/bitcoin-cli" "$pkgdir/usr/bin/bitcoin-cli"

  msg2 'Installing bitcoin-tx...'
  install -Dm755 "$srcdir/bitcoinclassic/src/bitcoin-tx" "$pkgdir/usr/bin/bitcoin-tx"

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
}
