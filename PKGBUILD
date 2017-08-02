# Maintainer: Frank Siegert <frank.siegert@googlemail.com>
# Contributor: JP-Ellis <josh@jpellis.me>
pkgname=lhapdf
pkgver=6.2.0
pkgrel=3
pkgdesc="A particle physics tool for evaluating PDFs from discretised data files."
arch=('x86_64' 'i686')
url="http://lhapdf.hepforge.org/"
license=('GPL3')
depends=('python')
optdepends=('python2')
makedepends=()
install=lhapdf.install
source=("http://www.hepforge.org/archive/lhapdf/LHAPDF-$pkgver.tar.gz")
noextract=()
md5sums=('a7c695803b01a31e19b81b73a824f021')

build() {
	cd "$srcdir/LHAPDF-$pkgver"
	./configure --prefix=/usr
	make
}

check() {
	cd "$srcdir/LHAPDF-$pkgver"
	make -k check
}

package() {
	cd "$srcdir/LHAPDF-$pkgver"
	make DESTDIR="$pkgdir/" install

	# If python2 is present, also build a library for it
	if [ -x /usr/bin/python2 ]; then
	  PYTHON=/usr/bin/python2 ./configure --prefix=/usr
	  make DESTDIR="$pkgdir/" install
	fi

	# make /usr/share/LHAPDF world writable, so lhapdf get works as an ordinary user
	chmod -R uog+rwX $pkgdir/usr/share/LHAPDF
}
