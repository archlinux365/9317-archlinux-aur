# Maintainer: Daniel Peukert <daniel@peukert.cc>
pkgname='salvador'
pkgver='2.0.3'
pkgrel='1'
pkgdesc='A simple bash script that will help you manage your AUR packages'
arch=('any')
url="https://gitlab.com/dpeukert/$pkgname"
license=('GPL3')
depends=('git' 'pacman-contrib' 'perl')
source=("$pkgname-$pkgver-$pkgrel.tar.gz::$url/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha512sums=('ec85c315dee4ac8da3a497675ebd77bc1b22eb49b0f67de0685a7a7f9dc204746eebc95f2371f9fe37d03cc2352b3ddbd3693324fd9fab8d16fb9b93d56709d0')

package() {
	cd "$srcdir/$pkgname-$pkgver/"
	make install DESTDIR="$pkgdir" PREFIX='/usr'
}
