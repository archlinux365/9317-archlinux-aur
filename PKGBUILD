# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>
# Contributor: Rose Kunkel <rose at rosekunkel dot me>

pkgname=guile3
pkgver=3.0.7
pkgrel=1
pkgdesc='Portable, embeddable Scheme implementation written in C'
arch=('x86_64' 'pentium4')
url='https://www.gnu.org/software/guile/'
license=('GPL3')
depends=('gmp' 'libltdl' 'ncurses' 'texinfo' 'libunistring' 'gc' 'libffi' 'readline')
source=("https://ftp.gnu.org/pub/gnu/guile/guile-$pkgver.tar.lz"{,.sig}
        'skip-testing-oom-conditions.patch')
sha256sums=('f02166205ced31651d27bd037f947e199a442545ca73f913907c69469ddd7b54'
            'SKIP'
            '2b053f0dafc5c68cc7f186c6252348e92e4b1e0f691e1e6eca7a5101c9b9f78a')
validpgpkeys=('4FD4D288D445934E0A14F9A5A8803732E4436885') # Andy Wingo

# Running strip can potentially mangle Guile bytecode (.go) files.
# See https://aur.archlinux.org/packages/guile3/#comment-769796
options=('!strip')

prepare() {
  # Disable a test that's known to fail. See
  # https://lists.gnu.org/archive/html/bug-guile/2021-01/msg00001.html
	if [[ "$CARCH" == 'pentium4' || "$CARCH" == 'i686' ]]; then
		patch -p1 -d "guile-$pkgver" < skip-testing-oom-conditions.patch
	fi
}

build() {
	cd "guile-$pkgver"

	# Install guile as guile3 and info files to /usr/share/info/guile3 so we don't
	# conflict with the official guile package.
	./configure \
		--prefix=/usr \
		--infodir=/usr/share/info/${pkgname} \
		--program-suffix=3
	make
}

check() {
	cd "guile-$pkgver"
	make -k check
}

package() {
	cd "guile-$pkgver"
	make DESTDIR="$pkgdir/" install

	# The official guile package already provides this file.
	rm "$pkgdir"/usr/share/aclocal/guile.m4
}
