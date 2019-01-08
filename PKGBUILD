# Maintainer: Jake <aur@ja-ke.tech>
# Contributor: Spike29 <leguen.yannick@gmail.com>
# Contributor: Samir Faci <csgeek@archlinux.us>
# Contributor: TimothÃ©e Ravier <tim@siosm.fr>

pkgname='qxmpp'
pkgver='1.0.0'
pkgrel=1
pkgdesc='Cross-platform C++ XMPP client and server library'
arch=('i686' 'x86_64')
url='https://github.com/qxmpp-project/qxmpp'
license=('LGPL2.1')
depends=('qt5-base')
optdepends=('doxygen: required to build the HTML documentation'
	    'opus: required to enable opus audio codec'
	    'speex: required to enable speex audio codec'
            'libvpx: required to enable vpx video codec'
	    'libtheora: required to enable theora video codec') 
conflicts=('qxmpp-qt5')
source=("${url}/archive/v${pkgver}.tar.gz")
sha1sums=('4b68d569494e7daf3035c383bbafbd312986b63d')
 
build() {
	cd "$srcdir/$pkgname-$pkgver/"
	[ -d build ] || mkdir build && cd build
	
	# In order to build the HTML documentation (requires doxygen)
	# add BUILD_DOCUMENTATION to CMake arguments
	
	# In order to enable opus & speex audio codecs, and vpx & theora video codecs,
	# add WITH_OPUS, WITH_SPEEX, WITH_THEORA, WITH_VPX to CMake arguments
	
	cmake ..
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver/build"
	make DESTDIR="$pkgdir" install
}
