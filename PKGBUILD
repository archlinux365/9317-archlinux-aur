# Maintainer: TingPing <tingping@tingping.se>

pkgname=plex-media-player
pkgver=1.0.5
_gitrev=210
_gitver=9c69e092
_fullname="$pkgname-$pkgver.$_gitrev-$_gitver"
_webclientver=518bc23 # Set in CMakeModules/WebClientVariables.cmake
_webclienthash=8b54929fd1de21375e45797de4112336734b9000
pkgrel=4
pkgdesc='Next generation Plex Desktop Client'
arch=('i686' 'x86_64')
license=('GPL')
url='https://github.com/plexinc/plex-media-player'
depends=('mpv' 'qt5-webengine>=5.6' 'libcec' 'sdl2')
makedepends=('cmake')
install='plex-media-player.install'
source=("$_fullname.tar.gz::https://github.com/plexinc/plex-media-player/archive/v${pkgver}.${_gitrev}-${_gitver}.tar.gz"
        "https://nightlies.plex.tv/directdl/plex-dependencies/plex-web-client-plexmediaplayer/latest/plex-web-client-konvergo-${_webclientver}.cpp.tbz2"
        'plex-media-player.desktop')
noextract=("plex-web-client-konvergo-$_webclientver.cpp.tbz2")
sha256sums=('4b62ffc9502a5938fcaaca8d4d6aa9767903995a90d2c022ff9562613422dfc5'
            '8124f0fb79da7e0bbd2da47d1f7bed6c030d61244d5c2fdad147efa83e98e53b'
            'b03845b761cc18a88252b72d0c83e439006224660444d9174f53cc577f9498b6')

prepare() {
	cd "$_fullname"

	# All this git version junk fails, just remove it we already have the version
	sed -i 's|include(GetGitRevisionDescription)||
	        s|get_git_head_revision(REFSPEC FULL_GIT_REVISION)||' \
	       CMakeModules/VersionConfiguration.cmake

	# This isn't necessary and fails
	sed -i 's|file(WRITE ${QTROOT}/bin/qt.conf ${QTCONFCONTENT})||' \
	       CMakeModules/QtConfiguration.cmake

	# Fix two errors: https://github.com/plexinc/plex-media-player/issues/256
	sed -i 's|list(REMOVE_DUPLICATES QT5_CFLAGS)|list(APPEND QT5_CFLAGS -fPIC)|' \
	       CMakeModules/QtConfiguration.cmake

	# Fix enabling SDL2 input
	sed -i 's|set(DL_FOUND)|set(DL_FOUND TRUE)|' \
	       CMakeModules/FindDL.cmake

	# They delete old versions from the mirror so we just use the latest
	sed -i "s|WEB_CLIENT_VERSION [^)]*|WEB_CLIENT_VERSION $_webclientver|
	        s|WEB_CLIENT_HASH [^)]*|WEB_CLIENT_HASH $_webclienthash|" \
	       CMakeModules/WebClientVariables.cmake

	# Use our downloaded copy of web-client
	mkdir -p build/src
	ln -sf {$srcdir,build/src}/plex-web-client-konvergo-${_webclientver}.cpp.tbz2
}

build() {
	cd "$_fullname/build"

	cmake -DCMAKE_INSTALL_PREFIX='/usr' -DCMAKE_BUILD_TYPE='Release' -DCMAKE_SKIP_RPATH=1 \
	      -DFULL_GIT_REVISION="$_gitver" -DQTROOT='/usr' ..
	make
}

package() {
	cd "$_fullname/build"

	DESTDIR="$pkgdir" make install

	install -Dm644 "$srcdir/plex-media-player.desktop" "$pkgdir/usr/share/applications/plex-media-player.desktop"
	install -Dm644 ../resources/images/icon.png "$pkgdir/usr/share/icons/hicolor/256x256/apps/plex-media-player.png"
}
