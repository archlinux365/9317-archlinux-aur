# Maintainer: aksr <aksr at t-com dot me>
pkgname=rlcmp-git
pkgver=1.1.0.r8.g4fe2691
pkgrel=1
epoch=
pkgdesc="Recursive file compare tool"
arch=('i686' 'x86_64')
url="https://github.com/n-t-roff/rlcmp"
license=('BSD')
groups=()
depends=('libavlbst')
makedepends=('git')
optdepends=()
checkdepends=()
provides=('rlcmp')
conflicts=('rlcmp')
replaces=()
backup=()
options=()
changelog=
install=
source=("$pkgname::git+https://github.com/n-t-roff/rlcmp.git")
noextract=()
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --tags | sed -E 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$pkgname"
  ./configure
  make INCDIR=/usr/include LIBDIR=/usr/lib 
}

package() {
  cd "$srcdir/$pkgname"
  make PREFIX="$pkgdir/usr" install
  install -Dm644 LICENSE $pkgdir/usr/share/licenses/${pkgname%-*}/LICENSE
}

