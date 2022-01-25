# Maintainer: Martin Piatka <(lastname) @ cesnet.cz>
pkgname='ultragrid-git'
pkgver=v1.7.r200.g4054756d
pkgrel=1
pkgdesc='Low-latency audio and video network transmission system (from git)'
arch=('x86_64')
url="https://www.ultragrid.cz/"
license=('BSD')

depends=(
	'curl'
	'speexdsp'
	'glib2'
)
makedepends=(
	'git'
)
optdepends=(
	'alsa-lib: ALSA sound support'
	'jack2: Jack sound support'
	'portaudio: Portaudio sound support'
	'ffmpeg: Video/Audio support'
	'v4l-utils: v4l device support (webcams, etc.)'
	'sdl2: SDL sw. display support'
	'glew: OpenGL sw. display support'
	'freeglut: OpenGL sw. display support'
	'glm: 360 video displays support'
	'openxr: 360 video hmd display support'
	'cuda: gpu accelerated FEC, DXT'
	'qt5-base: QT GUI support'
	'gpujpeg: gpu accelerated jpeg'
	'libx11: X11 screen recording'
)

provides=('ultragrid')
conflicts=('ultragrid')

source=("${pkgname}::git+https://github.com/CESNET/UltraGrid")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
  #printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${pkgname}"

  ./autogen.sh --prefix=/usr --enable-plugins \
	  --enable-qt=auto \
	  --disable-dvs \
	  --disable-decklink \
	  --disable-gpustitch \
	  --disable-bluefish444 \
	  --disable-aja \
	  --disable-deltacast \
	  --disable-ximea \
	  --disable-opencv \
	  --disable-sage \
	  --disable-text \
	  --disable-syphon \
	  --disable-spout \
	  --disable-bitflow \
	  --disable-cmpto-j2k \
	  --disable-ndi \
	  --disable-cineform \
	  --disable-pcp \
	  --disable-rtsp-server \
	  --disable-zfec

  make
}

package() {
  cd "${pkgname}"
  make DESTDIR="$pkgdir/" install

  rm "$pkgdir/usr/share/doc/ultragrid/ultragrid-bugreport-collect.sh"
  install -Dm644 COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
