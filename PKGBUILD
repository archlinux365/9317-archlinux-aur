# Maintainer: Arkadiusz Dzięgielewski <arek.dzski@gmail.com>
pkgname=picomc
pkgver=0.4.4
pkgrel=1
pkgdesc="A tiny CLI Minecraft launcher"
arch=('any')
url="https://github.com/sammko/picomc"
license=('MIT')
depends=("python>=3.9"
         "python-click>=7.0.0"
         "python-requests"
         "python-urllib3"
         "python-certifi"
         "python-tqdm"
         "python-coloredlogs")
makedepends=("python-setuptools")
optdepends=("java-runtime: Launching Minecraft")
source=("https://github.com/sammko/picomc/releases/download/v$pkgver/picomc-$pkgver.tar.gz"{,.asc})
md5sums=('c4ba10607b25b89cfa76dfac03a9a307'
         'SKIP')
validpgpkeys=('5CC6046D1F113312CF996854E1A7EE6F87DBE672') # Samuel Čavoj <samuel@cavoj.net>

build() {
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build

	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
