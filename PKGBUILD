# Maintainer: Imperator Storm <ImperatorStorm11@protonmail.com>
# Maintainer: Eldred Habert <me@eldred.fr>
# Contributor: Fredrick Brennan <copypaste@kittens.ph>
# Contributor: Andrew Bueide <abueide@protonmail.com>
# Contributor: rouhannb <rouhannb@protonmail.com>
# Contributor: Wilson E. Alvarez <wilson.e.alvarez1@gmail.com>
# Contributor: Benoit Favre <benoit.favre@gmail.com>
# Contributor: Alexander Rødseth <rodseth@gmail.com>
# Contributor: Kamil Biduś <kamil.bidus@gmail.com>

pkgname=aseprite
pkgver=1.2.39
_skiaver=m102
_skiahash=861e4743af
pkgrel=2
pkgdesc='Create animated sprites and pixel art'
arch=('x86_64')
url="https://www.aseprite.org/"
license=('custom')
depends=(# ~ Aseprite's direct dependencies ~
         # pixman is not linked to because we use Skia instead
         # harfbuzz is linked statically because Aseprite expects an older version
         cmark libcurl.so libgif.so libjpeg.so zlib libpng tinyxml libfreetype.so libarchive.so libfmt.so
         libwebp.so libwebpmux.so libwebpdemux.so
         hicolor-icon-theme # For installing Aseprite's icons
         # ~ Skia deps ~
         # (Skia links dynamically to HarfBuzz, only Aseprite itself doesn't. >_<)
         libexpat.so=1-64 libharfbuzz.so=0-64 libgl
         # Already required by Aseprite: libjpeg-turbo libpng zlib freetype2
         # These two are only reported by Namcap, but don't seem to be direct dependencies?
         libfontconfig.so libxcursor)
makedepends=(# "Meta" dependencies
             cmake ninja git python
             # Aseprite (including e.g. LAF)
             libxi
             # Skia
             gn harfbuzz-icu
             # TODO: Benchmark clang v gcc
             # clang
             )
source=("https://github.com/aseprite/aseprite/releases/download/v$pkgver/Aseprite-v$pkgver-Source.zip"
        # Which branch a given build of Aseprite requires is noted in its `INSTALL.md`
        "skia-$_skiaver.tar.gz::https://github.com/aseprite/skia/archive/refs/tags/$_skiaver-$_skiahash.tar.gz"
        desktop.patch
        shared-fmt.patch
        # Based on https://patch-diff.githubusercontent.com/raw/aseprite/aseprite/pull/2535.patch
        shared-libarchive.patch
        # Based on https://patch-diff.githubusercontent.com/raw/aseprite/aseprite/pull/2523.patch
        shared-libwebp.patch
        shared-skia-deps.patch
        optional-pixman.patch)
noextract=("Aseprite-v$pkgver-Source.zip"
           "skia-$_skiaver.tar.gz") # Don't extract Aseprite or skia sources at the root
sha256sums=('b84e67061a9600c6c508af26944851ce277f4e912bf73d8e9e83a2eba5510c21'
            '8d76c1ad3693e1fc019eb14d806082148eb4ed7d601474aeeaae601b05a9b3ad'
            '8b14e36939e930de581e95abf0591645aa0fcfd47161cf88b062917dbaaef7f9'
            '821f1354dbbc0bb3fa700e63037ed3c89b0d32bd2ab253450f91eeacd7d47c06'
            'd7f2f8c43d24382453273ed17b1c0e05928980a36ad0b7c988da3aa0fe32de53'
            '320ed456512fb26f30aa682d7d34529d6fc3372d76daba3812cecb8fc21d5f1d'
            'eb9f544e68b41b5cb1a9ab7a6648db51587e67e94f1a452cb5a84f3d224bf5d0'
            'c2d14f9738a96a9db3695c00ac3d14b1312b6a595b151bd56e19422c86517654')

prepare() {
	# Extract Aseprite's sources
	mkdir -p aseprite
	bsdtar -xf "${noextract[0]}" -C aseprite
	# Extract Skia's sources
	mkdir -p skia
	bsdtar xf skia-$_skiaver.tar.gz  --strip-components=1 -C skia
	# Fix up Aseprite's desktop integration
	echo desktop
	env -C aseprite patch -tp1 <desktop.patch
	# Allow using more shared libs
	echo fmt
	env -C aseprite patch -tp1 <shared-fmt.patch
	echo libarchive
	env -C aseprite patch -tp1 <shared-libarchive.patch
	echo libwebp
	env -C aseprite patch -tp1 <shared-libwebp.patch
	echo pixman
	env -C aseprite patch -tp1 <optional-pixman.patch
	# Their "FindSkia" module forcefully tries to use Skia's FreeType and HarfBuzz,
	# but we don't clone those because we use the shared ones. Avoid overwriting the settings instead.
	echo skiadeps
	env -C aseprite patch -tp1 <shared-skia-deps.patch
}

build() {
	echo Building Skia...
	local _skiadir="$PWD/skia/obj"
	# Flags can typically be found in `src/skia/gn/skia.gni`... but you're kind of on your own
	env -C skia gn gen "$_skiadir" --args="`printf '%s ' \
is_debug=false is_official_build=true skia_build_fuzzers=false \
skia_enable_{pdf,skottie,skrive,sksl}=false \
skia_use_{libjpeg_turbo,libwebp}_{encode,decode}=false \
skia_use_{expat,xps,zlib,libgifcodec,sfntly}=false`"
	ninja -C "$_skiadir" skia modules

	echo Building Aseprite...
	# Suppress install messages since we install to a temporary area; `install -v` will do the job
	cmake -S aseprite -B build -G Ninja -Wno-dev -DCMAKE_INSTALL_MESSAGE=NEVER -DCMAKE_BUILD_TYPE=None \
-DENABLE_{UPDATER,WEBSOCKET}=OFF -DENABLE_SCRIPTING=ON -DLAF_WITH_EXAMPLES=OFF -DLAF_WITH_TESTS=OFF -DLAF_BACKEND=skia \
-DSKIA_DIR="$PWD/skia" -DSKIA_LIBRARY_DIR="$_skiadir" -DSKIA_LIBRARY="$_skiadir/libskia.a" \
-DUSE_SHARED_{CMARK,CURL,FMT,GIFLIB,JPEGLIB,ZLIB,LIBPNG,TINYXML,PIXMAN,FREETYPE,HARFBUZZ,LIBARCHIVE,WEBP}=YES
	ninja -C build
}

check() {
	env -C build ctest --output-on-failure
}

package() {
	# Now the fun part: components of e.g. `libwebp` get installed as well,
	# since we've had to compile it. But we don't want them.
	# So, install normally, and then cherry-pick Aseprite's files out of that.
	# Use a whitelist to prefer installing not enough (breakage goes noticed),
	# instead of too much (cruft rarely goes noticed). Also hope that it doesn't break :)
	cmake --install build --prefix=staging --strip

	# Install the binary and its `.desktop` file
	install -vDm 755 staging/bin/aseprite "$pkgdir/usr/bin/aseprite"
	install -vDm 644 aseprite/src/desktop/linux/aseprite.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
	install -vDm 644 aseprite/src/desktop/linux/mime/aseprite.xml "${pkgdir}/usr/share/mime/packages/${_pkgname}.xml"
	# Install the icons in the correct directory (which is not the default)
	local _size
	for _size in 16 32 48 64 128 256; do
		# The installed icon's name is taken from the `.desktop` file
		install -vDm 644 staging/share/aseprite/data/icons/ase$_size.png "$pkgdir/usr/share/icons/hicolor/${_size}x$_size/apps/aseprite.png"
	done
	# Delete the icons to avoid copying them in two places (they aren't used by Aseprite itself)
	rm -rf staging/share/aseprite/data/icons
	# Install all of the program's data
	cp -vrt "$pkgdir/usr/share" staging/share/aseprite
	# Also install the licenses
	install -vDm 644 -t "$pkgdir/usr/share/licenses/$pkgname" aseprite/{EULA.txt,docs/LICENSES.md}
	# Copy the font's license, but leave it in the font directory as well (probably doesn't hurt)
	install -vm 644 aseprite/data/fonts/LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/font.txt"
}
