# Maintainer: Abdur Rehman Imran <arehmanimran4@gmail.com>
pkgname=rconv
pkgver=1.0.4
pkgrel=1
pkgdesc="A Command Line Unit Converter written in Rust."
arch=('any')
url="https://github.com/abdurehman4/rconv"
license=('GPL')
makedepends=('rust' 'cargo')
provides=('rconv')
conflicts=('rconv')
source=(git+"https://github.com/abdurehman4/rconv.git#branch=1.0.4")
md5sums=('SKIP')

build() {
	cd "$pkgname"
    make
}


package() {
    mkdir "$pkgdir/usr"
    mkdir "$pkgdir/usr/bin/"
	install -D "$pkgname/build/bin/rconv" "$pkgdir/usr/bin/"
    install -Dm644 "$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
