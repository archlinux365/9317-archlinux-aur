# Maintainer: zaps166 <spaz16@wp.pl>

pkgname=qmplay2
pkgver=18.04.01
pkgrel=3
pkgdesc='QMPlay2 is a video and audio player which can play most formats and codecs'
arch=('i686' 'x86_64' 'armv7h' 'armv6h')
url='http://zaps166.sourceforge.net/?app=QMPlay2'
license=('LGPL')
depends=('qt5-base' 'qt5-svg' 'qt5-x11extras' 'ffmpeg' 'libass' 'libgl' 'libva' 'libxv' 'alsa-lib' 'libcdio' 'taglib' 'libcddb' 'libpulse' 'libgme' 'libsidplayfp')
optdepends=('pulseaudio: PulseAudio support'
            'game_music_emu-kode54-git: Better chiptune support (less bugs in sound, AUR package)')
makedepends=('make' 'gcc' 'pkg-config' 'qt5-tools' 'cmake')
source=("https://github.com/zaps166/QMPlay2/releases/download/${pkgver}/QMPlay2-src-${pkgver}.tar.xz" "ffmpeg4-fix.diff" "fix-ffmpeg-pixel-formats.diff")
sha1sums=(923fb924a594181fd5bcf4d5328b867cb28cdf07 d15f53585b9d4f763a93178572b5fc5cdcfbc291 07387477489b377882f7632110b7d4c535a5d882)

prepare()
{
	cd $srcdir/QMPlay2-src-$pkgver
	patch -p1 < ../ffmpeg4-fix.diff
	patch -p1 < ../fix-ffmpeg-pixel-formats.diff
}

build()
{
	# Uncomment below line if you don't want to have 'libsidplayfp' dependency and remove it from 'depends' list
	#USE_SIDPLAYFP='-DUSE_CHIPTUNE_SID=OFF'

	# Uncomment below line if you want to use 'jemalloc' and add it to 'depends' list
	#USE_JEMALLOC='-DUSE_JEMALLOC=ON'

	cd $srcdir
	mkdir -p QMPlay2-build
	cd QMPlay2-build
	cmake ../QMPlay2-src-$pkgver -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib -DUSE_QT5=ON -DUSE_LINK_TIME_OPTIMIZATION=ON $USE_JEMALLOC $USE_SIDPLAYFP
	time make
}

package()
{
	cd $srcdir/QMPlay2-build
	make DESTDIR=$pkgdir install
}
