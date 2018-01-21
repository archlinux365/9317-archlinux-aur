# Maintainer: TheGuardianWolf <lichking21st(at)windowslive.com>
pkgname=garliccoin-cli
_gitname=Garlicoin
pkgver=v0.15.0.1rc1.46.g44da89deb
pkgrel=1
arch=('i686' 'x86_64')
url="https://garlicoin.io/"
license=('MIT')
pkgdesc="Peer-to-peer digital meme godcoin"
depends=('gcc-libs' 'miniupnpc' 'openssl' 'db4.8')
makedepends=('pkg-config' 'git' 'boost-libs' 'boost' 'gcc' 'make' 'automake' 'autoconf' 'libtool')
provides=('garlicoin')
conflicts=('garlicoin')
source=('git://github.com/retosen/Garlicoin.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  git describe --tags| sed "s/-/./g"
}

build() {
  cd "$srcdir/$_gitname"
  ./autogen.sh
  ./configure
   make -j$(nproc)
}

package() {
	# install garlicoin-daemon
	msg2 'Installing garlicoin-daemon...'
	install -Dm755 "$srcdir/$_gitname/src/garlicoind" "$pkgdir/usr/bin/garlicoind"

	# install garlicoin-cli
	msg2 'Installing garlicoin-cli...'
	install -Dm755 "$srcdir/$_gitname/src/garlicoin-cli" "$pkgdir/usr/bin/garlicoin-cli"

	# install garlicoin-tx
	msg2 'Installing garlicoin-tx...'
	install -Dm755 "$srcdir/$_gitname/src/garlicoin-tx" "$pkgdir/usr/bin/garlicoin-tx"

	# install license
	install -D -m644 "$srcdir/$_gitname/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
