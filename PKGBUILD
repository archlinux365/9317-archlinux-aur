# Maintainer: Jerome Gravel-Niquet <jeromegn@gmail.com>

pkgname="flyctl-bin"
pkgver="0.0.427"
pkgrel="1"
pkgdesc="Command line tools for fly.io services"
arch=("x86_64")
url="https://fly.io"
license=("Apache")
depends=()
provides=("flyctl")
conflicts=("flyctl")
source=("$pkgname-0.0.427.tgz::https://github.com/superfly/flyctl/releases/download/v0.0.427/flyctl_0.0.427_Linux_x86_64.tar.gz")
sha256sums=('529988e73be0bbe633f4fd39ec63bfc7645420eb07462ee4fb5360fc113b7e12')

package() {
    mkdir -p "$pkgdir/usr/bin"
    ln -s flyctl "$pkgdir/usr/bin/fly"
    install -m755 flyctl "$pkgdir/usr/bin"
}
