# Maintainer: Alex Tharp <alex at toastercup dot io>
pkgname=firestorm-git
pkgver=6.6.4.67818
pkgrel=2
pkgdesc="A third-party viewer for Second Life (TM) and OpenSim grids (git version)"
arch=('x86_64')
url=https://www.firestormviewer.org
license=('LGPL')
install='firestorm.install'
depends=(
  'apr-util'
  'dbus-glib'
  'gconf'
  'glu'
  'gtk2'
  'lib32-libidn'
  'lib32-libsndfile'
  'lib32-util-linux'
  'lib32-zlib'
  'libgl'
  'libidn'
  'libjpeg-turbo'
  'libpng'
  'libxcrypt-compat'
  'libxml2'
  'libxss'
  'mesa'
  'nss'
  'openal'
  'sdl'
  'vlc'
  'zlib'
)
optdepends=(
  'alsa-lib: for ALSA support'
  'pepper-flash: for inworld Flash support'
  'freealut: for OpenAL support'
  'lib32-gst-plugins-good: for voice support'
  'lib32-libidn11: for voice support'
  'libpulse: for PulseAudio support'
  'mesa-libgl: For Intel, Radeon, Nouveau support'
  'nvidia-libgl: for NVIDIA support'
  'nvidia-utils: for NVIDIA support'
)
makedepends=('cmake' 'gcc' 'make' 'python-pip' 'git' 'boost' 'xz')
conflicts=('firestorm' 'firestorm-bin' 'firestorm-beta-bin')
provides=('firestorm')
source=(
  "$pkgname"::"git+https://vcs.firestormviewer.org/phoenix-firestorm#branch=master"
  "fs-build-variables"::'git+https://vcs.firestormviewer.org/fs-build-variables#branch=master'
  'firestorm.desktop'
  'firestorm.launcher'
)
md5sums=(
  'SKIP'
  'SKIP'
  'c4376d30bf136941cb6ff0f70c3473de'
  '095e7d289510e36131d1074d79d5e152'
)

pkgver() {
  cd "$pkgname"
  buildVer=`git rev-list --count HEAD`
  majorVer=`cat indra/newview/VIEWER_VERSION.txt | cut -d "." -f 1`
  minorVer=`cat indra/newview/VIEWER_VERSION.txt | cut -d "." -f 2`
  patchVer=`cat indra/newview/VIEWER_VERSION.txt | cut -d "." -f 3`

  echo "${majorVer}.${minorVer}.${patchVer}.${buildVer}"
}

prepare() {
  export AUTOBUILD_VARIABLES_FILE="$srcdir/fs-build-variables/variables"

  cd "$pkgname"
  python3 -mvenv ".venv"
  source .venv/bin/activate
  pip3 install git+https://vcs.firestormviewer.org/autobuild-3.0
  pip3 install llbase
  export CXXFLAGS="$CXXFLAGS -Wno-error"
  export CFLAGS="$CFLAGS -Wno-error"
  # We need to specifically ask for OpenAL, otherwise we get nothing.
  # No automated downloading of FMOD without a license!
  autobuild configure -A 64 -c ReleaseFS_open -- -DLL_TESTS:BOOL=FALSE -DOPENAL=on --chan="AUR-git"
}

build() {
  cd "$srcdir/$pkgname"
  source .venv/bin/activate
  cd "$srcdir/$pkgname/build-linux-x86_64"
  export CXXFLAGS="$CXXFLAGS -Wno-error"
  export CFLAGS="$CFLAGS -Wno-error"
  make
}

package() {
  mkdir -p "$pkgdir/opt"
  mkdir -p "$pkgdir/usr/share/applications"

  mv "$pkgname/build-linux-x86_64/newview/packaged" "$pkgdir/opt/firestorm"

  install -Dm644 "firestorm.desktop" "$pkgdir/usr/share/applications/firestorm.desktop"
  install -Dm755 "firestorm.launcher" "$pkgdir/usr/bin/firestorm"
}
