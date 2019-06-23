# Maintainer: Luis Aranguren <pizzaman@hotmail.com>
# Contributor: Jonathan Knapp <jaknapp8+aur@gmail.com>
# Contributor: Roasbeef
# URL: https://github.com/lightningnetwork/lnd
# Upstream: https://github.com/lightningnetwork/lnd

pkgname=('lnd-git')
pkgver=v0.7.0.beta.rc2.r0.g0e28ecd6
pkgrel=1
pkgdesc='The Lightning Network Daemon, for secure off-chain bitcoin transactions.'
arch=('x86_64')
url='https://github.com/lightningnetwork/lnd'
license=('MIT')
depends=('glibc')
makedepends=('git' 'go-pie' 'fakeroot')
provides=('lnd' 'lnd-cli')
conflicts=('lnd')
source=("$pkgname::git+https://github.com/lightningnetwork/lnd.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
   cd $pkgname
   cd cmd/lnd
   go build -buildmode=pie -ldflags -extldflags=-Wl,-z,now,-z,relro .
   cd ../lncli
   go build -buildmode=pie -ldflags -extldflags=-Wl,-z,now,-z,relro .
}

package() {
  cd $pkgname
  install -Dm 755 "cmd/lnd/lnd" -t "$pkgdir/usr/bin";
  install -Dm 755 "cmd/lncli/lncli" -t "$pkgdir/usr/bin";
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
