# Maintainer: aksr <aksr at t-com dot me>
pkgname=extrace-git
pkgver=0.1.r0.gf977c0f
pkgrel=1
epoch=
pkgdesc="Trace exec() calls system-wide."
arch=('i686' 'x86_64')
url="https://github.com/chneukirchen/extrace"
license=('custom')
groups=()
depends=('')
makedepends=('git')
optdepends=()
checkdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
changelog=
install=
source=("$pkgname::git+https://github.com/chneukirchen/extrace")
noextract=()
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --long | sed -E 's/^v//g;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$pkgname"
  make
}

package() {
  cd "$srcdir/$pkgname"
  install -Dm755 extrace $pkgdir/usr/bin/extrace
  install -m755 pwait $pkgdir/usr/bin/pwait
  mkdir -p $pkgdir/usr/share/licenses/$pkgname/
  sed '16,49!d' extrace.c > $pkgdir/usr/share/licenses/$pkgname/LICENSE.extrace
  sed '10,46!d' pwait.c > $pkgdir/usr/share/licenses/$pkgname/LICENSE.pwait
}

