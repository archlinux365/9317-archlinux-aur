# vim:set ts=2 sw=2 et:
# Maintainer:  Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Maintainer graysky <graysky AT archlinux DOT us>
# Contributor: BlackIkeEagle < ike DOT devolder AT gmail DOT com >
# Contributor: DonVla <donvla@users.sourceforge.net>
# Contributor: Ulf Winkelvos <ulf [at] winkelvos [dot] de>
# Contributor: Ralf Barth <archlinux dot org at haggy dot org>
# Contributor: B & monty - Thanks for your hints :)
# Contributor: marzoul
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Brad Fanella <bradfanella@archlinux.us>
# Contributor: [vEX] <niechift.dot.vex.at.gmail.dot.com>
# Contributor: Zeqadious <zeqadious.at.gmail.dot.com>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Maxime Gauduin <alucryd@gmail.com>
#
# Original credits go to Edgar Hucek <gimli at dark-green dot com>
# for his xbmc-vdpau-vdr PKGBUILD at https://archvdr.svn.sourceforge.net/svnroot/archvdr/trunk/archvdr/xbmc-vdpau-vdr/PKGBUILD

pkgbase=kodi-devel
pkgname=(
  "$pkgbase" kodi-x11-devel kodi-wayland-devel kodi-gbm-devel
  kodi-eventclients-devel kodi-tools-texturepacker-devel kodi-dev-devel
)
pkgver=18.8pre18
_major=18.7.1
pkgrel=1
arch=('x86_64')
url="https://kodi.tv"
license=('GPL2')
makedepends=(
  'afpfs-ng' 'bluez-libs' 'cmake' 'curl' 'dav1d' 'doxygen' 'git' 'glew'
  'gperf' 'hicolor-icon-theme' 'java-runtime' 'libaacs' 'libass'
  'libbluray' 'libcdio' 'libcec' 'libgl' 'mariadb-libs' 'libmicrohttpd'
  'libmodplug' 'libmpeg2' 'libnfs' 'libplist' 'libpulse' 'libva'
  'libvdpau' 'libxrandr' 'libxslt' 'lirc' 'lzo' 'mesa' 'nasm'
  'python2-pycryptodomex' 'python2-pillow6' 'python2-pybluez'
  'python2-simplejson' 'shairplay' 'smbclient' 'taglib' 'tinyxml' 'swig'
  'upower' 'giflib' 'rapidjson' 'ghostscript' 'meson' 'gtest' 'graphviz'
  # wayland
  'wayland-protocols' 'waylandpp' 'libxkbcommon'
  # gbm
  'libinput'
)

_codename=Leia
#_tag="$pkgver-$_codename"
_tag="$_major-$_codename"

# Found on their respective github release pages. One can check them against
# what is pulled down when not specifying them in the cmake step.
# $CHROOT/build/kodi-devel/src/kodi-build/build/download
#
# https://github.com/xbmc/FFmpeg/tags
# https://github.com/xbmc/libdvdcss/tags
# https://github.com/xbmc/libdvdnav/tags
# https://github.com/xbmc/libdvdread/tags
#
# fmt and crossguid can be found http://mirrors.kodi.tv/build-deps/sources/
#
_libdvdcss_version="1.4.2-$_codename-Beta-5"
_libdvdnav_version="6.0.0-$_codename-Alpha-3"
_libdvdread_version="6.0.0-$_codename-Alpha-3"
_ffmpeg_version="4.3.1-Matrix-Alpha1-1"
_fmt_version="5.1.0"
_crossguid_version="8f399e8bd4"
_fstrcmp_version="0.7.D001"
_flatbuffers_version="1.9.0"

source=(
  "${pkgbase%%-*}-$_tag.tar.gz::https://github.com/xbmc/xbmc/archive/$_tag.tar.gz"
  "libdvdcss-$_libdvdcss_version.tar.gz::https://github.com/xbmc/libdvdcss/archive/$_libdvdcss_version.tar.gz"
  "libdvdnav-$_libdvdnav_version.tar.gz::https://github.com/xbmc/libdvdnav/archive/$_libdvdnav_version.tar.gz"
  "libdvdread-$_libdvdread_version.tar.gz::https://github.com/xbmc/libdvdread/archive/$_libdvdread_version.tar.gz"
  "ffmpeg-$_ffmpeg_version.tar.gz::https://github.com/xbmc/FFmpeg/archive/$_ffmpeg_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/fmt-$_fmt_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/crossguid-$_crossguid_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/fstrcmp-$_fstrcmp_version.tar.gz"
  "http://mirrors.kodi.tv/build-deps/sources/flatbuffers-$_flatbuffers_version.tar.gz"
  cpuinfo
  
  # use newer ffmpeg
  000-PR17300.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17300.patch
  18071-mod_for_linux_only.patch
  
  # fix for kodi-standalone run without which
  000-PR17804.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17804.patch
  
  # start milestone patches
  # 18029 does not apply
  001-PR17972.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17972.patch
  002-PR17988.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17988.patch
  003-PR17996.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/17996.patch
  004-PR18008.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18008.patch
  005-PR18019.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18019.patch
  006-PR18024.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18024.patch
  #007-PR18029.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18029.patch
  008-PR18045.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18045.patch
  009-PR18047.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18047.patch
  010-PR18053.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18053.patch
  011-PR18056.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18056.patch
  012-PR18073.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18073.patch
  013-PR18094.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18094.patch
  014-PR18134.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18134.patch
  015-PR18151.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18151.patch
  016-PR18171.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18171.patch
  017-PR18193.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18193.patch
  018-PR18202.patch::https://patch-diff.githubusercontent.com/raw/xbmc/xbmc/pull/18202.patch
)
noextract=(
  "libdvdcss-$_libdvdcss_version.tar.gz"
  "libdvdnav-$_libdvdnav_version.tar.gz"
  "libdvdread-$_libdvdread_version.tar.gz"
  "ffmpeg-$_ffmpeg_version.tar.gz"
  "fmt-$_fmt_version.tar.gz"
  "crossguid-$_crossguid_version.tar.gz"
  "fstrcmp-$_fstrcmp_version.tar.gz"
  "flatbuffers-$_flatbuffers_version.tar.gz"
)
sha256sums=('5cfec391bcd168bbd4f9d38a6c8ec93e42e040cf82cf6ebf23db5e86753816fb'
            '38816f8373e243bc5950449b4f3b18938c4e1c59348e3411e23f31db4072e40d'
            '071e414e61b795f2ff9015b21a85fc009dde967f27780d23092643916538a57a'
            'a30b6aa0aad0f2c505bc77948af2d5531a80b6e68112addb4c123fca24d5d3bf'
            'a7d956dbbe3c2036a8a78976efaf43792e1c7c152a04182024f231f4ee2e7d7e'
            '73d4cab4fa8a3482643d8703de4d9522d7a56981c938eca42d929106ff474b44'
            '3d77d09a5df0de510aeeb940df4cb534787ddff3bb1828779753f5dfa1229d10'
            'e4018e850f80700acee8da296e56e15b1eef711ab15157e542e7d7e1237c3476'
            '5ca5491e4260cacae30f1a5786d109230db3f3a6e5a0eb45d0d0608293d247e3'
            '27387e49043127f09c5ef0a931fffb864f5730e79629100a6e210b68a1b9f2c1'
            '3aaca3630689b76e7a7f35656a4ada3fb18ecd7e3fe199634264ccf76b96c0f0'
            '4d9eb12db337a89b5e17815bd422015f3017c735bd0c5b522f5a5b0c7f81a607'
            'f11af738b2be8f390a7b515cfb74276a0ccb64ac061b8f5a7b3772e19eb0d203'
            '15255c5b928b278b15a90468ead80ad75b9331dc7dac91e5da296a66f7b1a6a1'
            '89ac4b3feac908075ddbcdc4f9f1d1703c25e2fdb1661e776c162eb779437bd8'
            'f56503139927f0bc8f220c4b4e31266fc938a6612a4c1d2bdd75be3f54eb3a12'
            '995c61de460e0afdc135ba33f9f393a825cb4a0c7954da104d23269fe48ec118'
            '8531da4ce924d80f5b8c8fbcf547e0738e48ffce335f73a4da6466f499ab1bfe'
            '4c2775722998fd0f6111ff841b29e8813c58b7905be1e8a01bf8a768622cb30c'
            'ff34d94f4ff7f1d9638c948b05da1802638bf66037dda53ce44b9afb501ec1dc'
            'f4ac91dbad4014a6707e8bb6f57cac0ec68a852a3e81815a210304a886a665a1'
            '2d31bf616362001a75c590c0ea9ef22f321ffabf1d95f781d558f92e69cdc8c9'
            '4b009d1acced4912f981d1454ff2add556b79188c003bc837d60224605364353'
            'b766ce6bbae0d41abe323866c7ff9dd8ef89fdf214cc6104125c4115cb2bc221'
            '5b19f4f74136f91986e3d3eed93102b06a700dd4b3a561926eabc7997434f22a'
            'e4963bdeb1de7c147a364cd3ee2186fb1d0b2fc8f3ea7636054cf2adac040468'
            '7b8a6510bc286d58b4a3d57322362335cbf2a56d1b2bd16bfcdf06d5eef8644d'
            '336df43ee417d50ffa3e025697960828d78a75f4c5b943190103baface402ac8'
            '73024d5c6462a360bb527da2d408343ba6206d513f760a94c97b18e6937c649f'
            'dc7fc1ce45f43e7a18af59c157307a350971a16c2ffad2cf371880fcf1610013')
prepare() {
  # force python 'binary' as python2
  [[ -d "$srcdir/path" ]] && rm -rf "$srcdir/path"
  mkdir "$srcdir/path"
  ln -s /usr/bin/python2 "$srcdir/path/python"

  [[ -d kodi-build-x11 ]] && rm -rf kodi-build-x11
  mkdir kodi-build-x11
  [[ -d kodi-build-wayland ]] && rm -rf kodi-build-wayland
  mkdir kodi-build-wayland
  [[ -d kodi-build-gbm ]] && rm -rf kodi-build-gbm
  mkdir kodi-build-gbm

  cd "xbmc-$_tag"

  # detect if building in arch chroot using $pkgname rather than hard coding it into a patch
  if [[ "$srcdir" =~ ^\/build.* ]]; then
    local _find="exec_program(cat ARGS \"/proc/cpuinfo\" OUTPUT_VARIABLE CPUINFO)"
    local _replace="exec_program(cat ARGS \"/build/$pkgname/src/cpuinfo\" OUTPUT_VARIABLE CPUINFO)"
    sed -i s"|$_find|$_replace|" cmake/modules/FindSSE.cmake
  fi

  # needed for `git apply` ... if you know how to avoid this let me know
  git init

  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    # only patch subset of patches that begin with 0-9
    [[ $src == [0-9]*.patch ]] || continue
    msg2 "Applying patch $src..."
    # patch will fail if binary diffs are present so use git apply first and only
    # if it fails try patch
    if ! git apply --verbose -p1 < "../$src"; then
      patch -Np1 < "../$src"
    fi
  done

  rm -rf .git
}

build() {
  export PATH="$srcdir/path:$PATH"

  ### Optionally uncomment and setup to your liking
  # export CFLAGS+=" -march=native"
  # export CXXFLAGS="${CFLAGS}"

  msg2 "building kodi-x11"
  cd "$srcdir/kodi-build-x11"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DENABLE_EVENTCLIENTS=ON \
    -DENABLE_INTERNAL_FFMPEG=ON \
    -DENABLE_INTERNAL_FMT=ON \
    -DENABLE_INTERNAL_CROSSGUID=ON \
    -DENABLE_INTERNAL_FSTRCMP=ON \
    -DENABLE_INTERNAL_FLATBUFFERS=ON \
    -Dlibdvdcss_URL="$srcdir/libdvdcss-$_libdvdcss_version.tar.gz" \
    -Dlibdvdnav_URL="$srcdir/libdvdnav-$_libdvdnav_version.tar.gz" \
    -Dlibdvdread_URL="$srcdir/libdvdread-$_libdvdread_version.tar.gz" \
    -DFFMPEG_URL="$srcdir/ffmpeg-$_ffmpeg_version.tar.gz" \
    -DFMT_URL="$srcdir/fmt-$_fmt_version.tar.gz" \
    -DCROSSGUID_URL="$srcdir/crossguid-$_crossguid_version.tar.gz" \
    -DFSTRCMP_URL="$srcdir/fstrcmp-$_fstrcmp_version.tar.gz" \
    -DFLATBUFFERS_URL="$srcdir/flatbuffers-$_flatbuffers_version.tar.gz" \
    -DX11_RENDER_SYSTEM=gl \
    ../"xbmc-$_tag"
  make
  make preinstall

  msg2 "building kodi-wayland"
  cd "$srcdir/kodi-build-wayland"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DENABLE_EVENTCLIENTS=ON \
    -DENABLE_INTERNAL_FFMPEG=ON \
    -DENABLE_INTERNAL_FMT=ON \
    -DENABLE_INTERNAL_CROSSGUID=ON \
    -DENABLE_INTERNAL_FSTRCMP=ON \
    -DENABLE_INTERNAL_FLATBUFFERS=ON \
    -Dlibdvdcss_URL="$srcdir/libdvdcss-$_libdvdcss_version.tar.gz" \
    -Dlibdvdnav_URL="$srcdir/libdvdnav-$_libdvdnav_version.tar.gz" \
    -Dlibdvdread_URL="$srcdir/libdvdread-$_libdvdread_version.tar.gz" \
    -DFFMPEG_URL="$srcdir/ffmpeg-$_ffmpeg_version.tar.gz" \
    -DFMT_URL="$srcdir/fmt-$_fmt_version.tar.gz" \
    -DCROSSGUID_URL="$srcdir/crossguid-$_crossguid_version.tar.gz" \
    -DFSTRCMP_URL="$srcdir/fstrcmp-$_fstrcmp_version.tar.gz" \
    -DFLATBUFFERS_URL="$srcdir/flatbuffers-$_flatbuffers_version.tar.gz" \
    -DCORE_PLATFORM_NAME=wayland \
    -DWAYLAND_RENDER_SYSTEM=gl \
    ../"xbmc-$_tag"
  make
  make preinstall

  msg2 "building kodi-gbm"
  cd "$srcdir/kodi-build-gbm"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DENABLE_EVENTCLIENTS=ON \
    -DENABLE_INTERNAL_FFMPEG=ON \
    -DENABLE_INTERNAL_FMT=ON \
    -DENABLE_INTERNAL_CROSSGUID=ON \
    -DENABLE_INTERNAL_FSTRCMP=ON \
    -DENABLE_INTERNAL_FLATBUFFERS=ON \
    -Dlibdvdcss_URL="$srcdir/libdvdcss-$_libdvdcss_version.tar.gz" \
    -Dlibdvdnav_URL="$srcdir/libdvdnav-$_libdvdnav_version.tar.gz" \
    -Dlibdvdread_URL="$srcdir/libdvdread-$_libdvdread_version.tar.gz" \
    -DFFMPEG_URL="$srcdir/ffmpeg-$_ffmpeg_version.tar.gz" \
    -DFMT_URL="$srcdir/fmt-$_fmt_version.tar.gz" \
    -DCROSSGUID_URL="$srcdir/crossguid-$_crossguid_version.tar.gz" \
    -DFSTRCMP_URL="$srcdir/fstrcmp-$_fstrcmp_version.tar.gz" \
    -DFLATBUFFERS_URL="$srcdir/flatbuffers-$_flatbuffers_version.tar.gz" \
    -DCORE_PLATFORM_NAME=gbm \
    -DGBM_RENDER_SYSTEM=gles \
    ../"xbmc-$_tag"
  make
  make preinstall
}

# kodi
# components: kodi

package_kodi-devel() {
  pkgdesc="Alpha, Beta, or RC versions of the software media player and entertainment hub for digital media"
  depends=(
    'desktop-file-utils' 'hicolor-icon-theme' 'mesa' 'python2-pycryptodomex'
    'python2-pillow6' 'python2-simplejson' 'xorg-xdpyinfo'
    'KODI-BIN'
  )
  optdepends=(
    'afpfs-ng: Apple shares support'
    'bluez: Blutooth support'
    'python2-pybluez: Bluetooth support'
    'libplist: AirPlay support'
    'pulseaudio: PulseAudio support'
    'shairplay: AirPlay support'
    'upower: Display battery level'
  )
  provides=('xbmc' "kodi=${pkgver}")
  conflicts=('xbmc')
  replaces=('xbmc')

  _components=(
    'kodi'
    'kodi-bin'
  )

  export PATH="$srcdir/path:$PATH"

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
  DESTDIR="$pkgdir" /usr/bin/cmake \
    -DCMAKE_INSTALL_COMPONENT="$_cmp" \
     -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | \
    while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done

  # remove x11 binaries
  rm "$pkgdir/usr/lib/kodi/"{kodi-x11,kodi-xrandr}
}

# kodi-x11
# components: kodi-bin

package_kodi-x11-devel() {
  pkgdesc="x11 kodi binary"
  provides=('KODI-BIN' "kodi-x11=${pkgver}")
  replaces=('kodi-bin')
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libvdpau' 'libxrandr'
    'libxslt' 'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib'
    'tinyxml' "$pkgbase"
  )

  cd kodi-build-x11
  install -Dm755 kodi-x11 "$pkgdir/usr/lib/kodi/kodi-x11"
  install -Dm755 kodi-xrandr "$pkgdir/usr/lib/kodi/kodi-xrandr"
}

# kodi-wayland
# components: kodi-bin

package_kodi-wayland-devel() {
  pkgdesc="wayland kodi binary"
  provides=('KODI-BIN' "kodi-wayland=${pkgver}")
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libxkbcommon' 'libxslt'
    'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib' 'tinyxml'
    'waylandpp' "$pkgbase"
  )

  cd kodi-build-wayland
  install -Dm755 kodi-wayland "$pkgdir/usr/lib/kodi/kodi-wayland"
}

# kodi-gbm
# components: kodi-bin

package_kodi-gbm-devel() {
  pkgdesc="gbm kodi binary"
  provides=('KODI-BIN' "kodi-gbm=${pkgver}")
  depends=(
    'bluez-libs' 'curl' 'lcms2' 'libass' 'libbluray' 'libcdio' 'libcec'
    'libinput' 'libmicrohttpd' 'libnfs' 'libpulse' 'libva' 'libxkbcommon'
    'libxslt' 'lirc' 'mariadb-libs' 'python2' 'smbclient' 'taglib'
    'tinyxml' "$pkgbase"
  )

  cd kodi-build-gbm
  install -Dm755 kodi-gbm "$pkgdir/usr/lib/kodi/kodi-gbm"
}

# kodi-eventclients
# components: kodi-eventclients-common kodi-eventclients-ps3 kodi-eventclients-wiiremote kodi-eventclients-kodi-send

package_kodi-eventclients-devel() {
  pkgdesc="Kodi Event Clients"
  provides=("kodi-eventclients=${pkgver}")
  conflicts=('kodi-eventclients')
  optdepends=('python2: most eventclients are implemented in python2')

  _components=(
    'kodi-eventclients-common'
    'kodi-eventclients-ps3'
    'kodi-eventclients-kodi-send'
  )

  export PATH="$srcdir/path:$PATH"

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | \
    while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done
}

# kodi-tools-texturepacker
# components: kodi-tools-texturepacker

package_kodi-tools-texturepacker-devel() {
  pkgdesc="Kodi Texturepacker tool"
  provides=("kodi-tools-texturepacker=${pkgver}")
  conflicts=('kodi-tools-texturepacker')
  depends=('libpng' 'giflib' 'libjpeg-turbo' 'lzo')

  _components=(
    'kodi-tools-texturepacker'
  )

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done
}

# kodi-dev
# components: kodi-addon-dev kodi-audio-dev kodi-eventclients-dev kodi-game-dev
#             kodi-inputstream-dev kodi-peripheral-dev kodi-pvr-dev
#             kodi-screensaver-dev kodi-visualization-dev

package_kodi-dev-devel() {
  pkgdesc="Kodi dev files"
  depends=("$pkgbase")
  provides=("kodi-dev=${pkgver}")
  conflicts=('kodi-dev')

  _components=(
    'kodi-addon-dev'
    'kodi-audio-dev'
    'kodi-eventclients-dev'
    'kodi-game-dev'
    'kodi-inputstream-dev'
    'kodi-peripheral-dev'
    'kodi-pvr-dev'
    'kodi-screensaver-dev'
    'kodi-visualization-dev'
  )

  export PATH="$srcdir/path:$PATH"

  cd kodi-build-x11
  # install eventclients
  for _cmp in ${_components[@]}; do
    DESTDIR="$pkgdir" /usr/bin/cmake \
      -DCMAKE_INSTALL_COMPONENT="$_cmp" \
      -P cmake_install.cmake
  done

  # python2 is being used
  cd "$pkgdir"
  grep -lR '#!.*python' * | \
    while read file; do sed -s 's/\(#!.*python\)/\12/g' -i "$file"; done
}
