# Maintainer: dequis <dx@dxzone.com.ar>
# Previous maintainer: Joel Teichroeb <joel@teichroeb.net>

pkgname=rr
pkgver=4.5.0
pkgrel=2
pkgdesc='Record and Replay framework: lightweight recording and deterministic debugging'
arch=(i686 x86_64)
url='http://rr-project.org/'
license=('custom')
depends=('python2-pexpect' 'gdb')
makedepends=('git' 'cmake' 'gdb')
[ "$CARCH" = 'x86_64' ] && makedepends+=('gcc-multilib')
source=(https://github.com/mozilla/${pkgname}/archive/${pkgver}.tar.gz
        https://patch-diff.githubusercontent.com/raw/mozilla/rr/pull/2001.patch)
sha1sums=('70d3902c36fb1d0cd423cf1046df06f5153cba5b'
          '51dba5dbbe16c3631a101409a28247075668fe7b')

prepare() {
	cd $pkgname-$pkgver
	mkdir -p build

	# -Werror fixes
	patch -p1 -i ../2001.patch
}

build() {
	cd $pkgname-$pkgver/build
	cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX:PATH=/usr ..

	make
}

package() {
	cd $pkgname-$pkgver/build
	make DESTDIR="${pkgdir}" install
	cd ..
	install -D LICENSE "${pkgdir}/usr/share/licenses/rr/LICENSE"
}
