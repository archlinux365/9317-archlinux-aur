# Maintainer: Raymond W. Ko <r   a y     m  o nd DOT  w DOT k  o AT g  m ai l DOT COM>

pkgname=tewisay-git
_gitname='tewisay'
pkgver=0.66.caa5b01
pkgrel=1
pkgdesc='Cowsay replacement with unicode and partial ansi escape support.'
url='https://github.com/raymond-w-ko/tewisay'
license=('custom:CC0')
depends=('glibc')
optdepends=('cowsay: default cowfiles')
makedepends=('go' 'git' 'asciidoc')
arch=('i686' 'x86_64' 'ARM')
options=('!strip')
source=('git+https://github.com/raymond-w-ko/tewisay.git')
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/$_gitname"
	go get -d ./...
}

build() {
	cd "$srcdir/$_gitname"
	go build
}

package() {
	cd "$srcdir/$_gitname"
	install -Dm755 -T tewisay "$pkgdir/usr/bin/tewisay"
	install -Dm644 -T zsh/_tewisay "$pkgdir/usr/share/zsh/site-functions/_tewisay"
	install -Dm644 -T COPYING  "$pkgdir/usr/share/licenses/$pkgname/COPYING"
	install -Dm644 -T cows/COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING.tewis"
	install -Dm755 -d "$pkgdir/usr/share/cows"
	install -Dm644 -t "$pkgdir/usr/share/cows" cows/*.cow 
	ln -s "tewisay" "$pkgdir/usr/bin/tewithink"
}
