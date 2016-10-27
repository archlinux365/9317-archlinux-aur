pkgname=libsolv
pkgver=0.6.23
pkgrel=2
pkgdesc="Library for solving packages and reading repositories"
arch=('i686' 'x86_64')
url="https://github.com/openSUSE/$pkgname"
license=('BSD')
depends=('expat' 'xz' 'zlib')
makedepends=('cmake' 'perl' 'python' 'rpm-org' 'ruby' 'swig')
optdepends=('perl: for perl bindings'
            'python: for python bindings'
            'ruby: for ruby bindings')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
md5sums=('80098e081712368d38ade6affb39dd65')

prepare() {
	cd "$pkgname-$pkgver"
	rm -rf build
	mkdir build
}

build() {
	cd "$pkgname-$pkgver"/build
	cmake -DCMAKE_BUILD_TYPE=Release     \
	      -DCMAKE_INSTALL_PREFIX=/usr    \
	      -DLIB=/lib                     \
	      -DUSE_VENDORDIRS=ON            \
	      -DFEDORA=1                     \
	      -DENABLE_APPDATA=ON            \
	      -DENABLE_ARCHREPO=ON           \
	      -DENABLE_BZIP2_COMPRESSION=ON  \
	      -DENABLE_COMPLEX_DEPS=1        \
	      -DENABLE_COMPS=ON              \
	      -DENABLE_CUDFREPO=OFF          \
	      -DENABLE_DEBIAN=ON             \
	      -DENABLE_HAIKU=OFF             \
	      -DENABLE_HELIXREPO=ON          \
	      -DENABLE_LZMA_COMPRESSION=ON   \
	      -DENABLE_MDKREPO=ON            \
	      -DENABLE_PERL=ON               \
	      -DENABLE_PUBKEY=OFF            \
	      -DENABLE_PYTHON=ON             \
	      -DENABLE_RPMDB=ON              \
	      -DENABLE_RPMDB_BYRPMHEADER=ON  \
	      -DENABLE_RPMMD=ON              \
	      -DENABLE_RUBY=ON               \
	      -DENABLE_SUSEREPO=ON           \
	      -DMULTI_SEMANTICS=ON           \
	      ..
	make
}

check() {
	cd "$pkgname-$pkgver"/build
	make ARGS="-V" test
}

package() {
	cd "$pkgname-$pkgver"/build
	make DESTDIR="$pkgdir/" install

	install -D -m644 ../LICENSE.BSD "$pkgdir/usr/share/licenses/$pkgname/LICENSE.BSD"
	install -D -m644 ../README      "$pkgdir/usr/share/doc/$pkgname/README"
	install -D -m644 ../BUGS        "$pkgdir/usr/share/doc/$pkgname/BUGS"
}

# vim: set ft=sh ts=4 sw=4 noet:
