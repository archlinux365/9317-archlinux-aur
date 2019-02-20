# Maintainer: Daniel Playfair Cal <daniel.playfair.cal@gmail.com>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Pierre Schmitz <pierre@archlinux.de>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=chromium-ozone
pkgver=72.0.3626.81
pkgrel=1
_launcher_ver=6
_release_sha=36f8ce7e1dc05b379a1de75320ebd5d50bdc2fab
_igalia_sha=da646d2b8e02640cc488bf470b0a9177cd262422
pkgdesc="Chromium built with patches for wayland support via Ozone"
arch=('x86_64')
url="https://www.chromium.org/Home"
license=('BSD')
depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-font' 'systemd' 'dbus' 'libpulse' 'pciutils' 'json-glib' 'libva'
         'desktop-file-utils' 'hicolor-icon-theme')
provides=('chromium')
conflicts=('chromium')
makedepends=('python' 'python2' 'gperf' 'yasm' 'mesa' 'ninja' 'nodejs' 'git'
             'clang' 'lld' 'gn' 'java-runtime-headless')
optdepends=('pepper-flash: support for Flash content'
            'kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet')
replaces=('chromium-vaapi' 'chromium-vaapi-bin')
install=chromium.install
source=(https://commondatastorage.googleapis.com/chromium-browser-official/chromium-$pkgver.tar.xz
        chromium-launcher-$_launcher_ver.tar.gz::https://github.com/foutrelis/chromium-launcher/archive/v$_launcher_ver.tar.gz
        chromium-drirc-disable-10bpc-color-configs.conf
        chromium-system-icu.patch
        chromium-webrtc-missing-header.patch
        chromium-vaapi.patch
        chromium-vaapi-relax-the-version-check-for-VA-API.patch
        chromium-enable-mojo-video-decoders-by-default.patch
        chromium-vaapi-fix-the-VA_CHECK_VERSION.patch
        chromium-widevine.patch
        chromium-skia-harmony.patch
        chromium-ozone-wayland.patch::https://github.com/mirror/chromium/compare/${_release_sha}...Igalia:${_igalia_sha}.patch
        chromium-algorithm-header.patch::https://github.com/chromium/chromium/commit/6c0254a78043e32441dbc2e6d4893590dd0d1953.patch
        chromium-vaapi-build.patch::https://github.com/Igalia/chromium/commit/cdb2e638d4488936c80a2c1b506eecf95ffbee02.patch)
sha256sums=('dfe89fe389008e6d2098099948d10774989d2f3e8dca6ace78ea4ec636dd8006'
            '04917e3cd4307d8e31bfb0027a5dce6d086edb10ff8a716024fbb8bb0c7dccf1'
            'babda4f5c1179825797496898d77334ac067149cac03d797ab27ac69671a7feb'
            'e2d284311f49c529ea45083438a768db390bde52949995534034d2a814beab89'
            '63cbed7d7af327c17878a2066c303f106ff08636372721845131f7ff13d87b44'
            'e87ede45edf39ac19e56ac1ae49c9d1f5f5130e5838bcbb4c3d4fb16e55575c0'
            '07fcf5d25114c7335582f117090b5e0bd148aca69044d4fe25c66b4c52dcd2a6'
            '669a9ad4773d182a06ee729008a60aeadddae92f1a0077b3811e11f292c8d4ff'
            '0bd750255163bfb1bedaf97c1cdb313f42bd9e6e52243c6e68494b6e0ffb84bf'
            'd081f2ef8793544685aad35dea75a7e6264a2cb987ff3541e6377f4a3650a28b'
            '5887f78b55c4ecbbcba5930f3f0bb7bc0117c2a41c2f761805fcf7f46f1ca2b3'
            '9e3c841e325b473301e7024eafa121cbb00421eb1192b3673bbb9037909a74bc'
            '5662e88f7bd1a36848d3ecf166e9a282b7fa3858bd1261d582c97654af0c1348'
            '4ed0ac74fef8b63fa5dfd0de02a02cc4a7667898a90ec5365651645777934c14')

# Possible replacements are listed in build/linux/unbundle/replace_gn_files.py
# Keys are the names in the above script; values are the dependencies in Arch
declare -gA _system_libs=(
  [ffmpeg]=ffmpeg
  [flac]=flac
  [fontconfig]=fontconfig
  [freetype]=freetype2
  [harfbuzz-ng]=harfbuzz
  [icu]=icu
  [libdrm]=
  [libjpeg]=libjpeg
  #[libpng]=libpng            # https://crbug.com/752403#c10
  #[libvpx]=libvpx            # needs unreleased libvpx
  [libwebp]=libwebp
  [libxml]=libxml2
  [libxslt]=libxslt
  [opus]=opus
  [re2]=re2
  [snappy]=snappy
  [yasm]=
  [zlib]=minizip
)
_unwanted_bundled_libs=(
  ${!_system_libs[@]}
  ${_system_libs[libjpeg]+libjpeg_turbo}
)
depends+=(${_system_libs[@]})

# Google API keys (see https://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys.
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM
_google_default_client_id=413772536636.apps.googleusercontent.com
_google_default_client_secret=0ZChLK6AxeA3Isu96MkwqDR4

prepare() {
  cd "$srcdir/chromium-$pkgver"

  # Allow building against system libraries in official builds
  sed -i 's/OFFICIAL_BUILD/GOOGLE_CHROME_BUILD/' \
    tools/generate_shim_headers/generate_shim_headers.py

  # https://crbug.com/893950
  sed -i -e 's/\<xmlMalloc\>/malloc/' -e 's/\<xmlFree\>/free/' \
    third_party/blink/renderer/core/xml/*.cc \
    third_party/blink/renderer/core/xml/parser/xml_document_parser.cc \
    third_party/libxml/chromium/libxml_utils.cc

  # Enable VAAPI on Linux
  patch -Np1 -i ../chromium-vaapi.patch
  patch -Np1 -i ../chromium-vaapi-relax-the-version-check-for-VA-API.patch
  patch -Np1 -i ../chromium-enable-mojo-video-decoders-by-default.patch
  patch -Np1 -i ../chromium-vaapi-fix-the-VA_CHECK_VERSION.patch

  # Load Widevine CDM if available
  patch -Np1 -i ../chromium-widevine.patch

  # https://crbug.com/skia/6663#c10
  patch -Np0 -i ../chromium-skia-harmony.patch

  # https://webrtc.googlesource.com/src.git/+/3e70781361ed
  patch -Np0 -i ../chromium-webrtc-missing-header.patch

  # https://bugs.gentoo.org/661880#c21
  patch -Np1 -i ../chromium-system-icu.patch

  # https://github.com/mirror/chromium/compare/36f8ce7e1dc05b379a1de75320ebd5d50bdc2fab...Igalia:ozone-wayland-stable/72.0.3626.81.patch
  patch -Np1 -i ../chromium-ozone-wayland.patch

  # https://chromium-review.googlesource.com/c/chromium/src/+/1454356
  patch -Np1 -i ../chromium-algorithm-header.patch

  # https://github.com/Igalia/chromium/issues/511
  patch -Np1 -i ../chromium-vaapi-build.patch

  # Remove compiler flags not supported by our system clang
  sed -i \
    -e '/"-Wno-defaulted-function-deleted"/d' \
    build/config/compiler/BUILD.gn

  # Force script incompatible with Python 3 to use /usr/bin/python2
  sed -i '1s|python$|&2|' third_party/dom_distiller_js/protoc_plugins/*.py

  mkdir -p third_party/node/linux/node-linux-x64/bin
  ln -s /usr/bin/node third_party/node/linux/node-linux-x64/bin/

  # Remove bundled libraries for which we will use the system copies; this
  # *should* do what the remove_bundled_libraries.py script does, with the
  # added benefit of not having to list all the remaining libraries
  local _lib
  for _lib in ${_unwanted_bundled_libs[@]}; do
    find "third_party/$_lib" -type f \
      \! -path "third_party/$_lib/chromium/*" \
      \! -path "third_party/$_lib/google/*" \
      \! -path 'third_party/yasm/run_yasm.py' \
      \! -regex '.*\.\(gn\|gni\|isolate\)' \
      -delete
  done

  python2 build/linux/unbundle/replace_gn_files.py \
    --system-libraries "${!_system_libs[@]}"
}

build() {
  make -C chromium-launcher-$_launcher_ver

  cd "$srcdir/chromium-$pkgver"

  export CC=clang
  export CXX=clang++
  export AR=ar
  export NM=nm

  if check_buildoption ccache y; then
    # Avoid falling back to preprocessor mode when sources contain time macros
    export CCACHE_SLOPPINESS=time_macros
    export CC="ccache $CC"
    export CXX="ccache $CXX"
  fi

  local _flags=(
    'custom_toolchain="//build/toolchain/linux/unbundle:default"'
    'host_toolchain="//build/toolchain/linux/unbundle:default"'
    'clang_use_chrome_plugins=false'
    'is_official_build=true' # implies is_cfi=true on x86_64
    'treat_warnings_as_errors=false'
    'fieldtrial_testing_like_official_build=true'
    'ffmpeg_branding="Chrome"'
    'proprietary_codecs=true'
    'link_pulseaudio=true'
    'use_gnome_keyring=false'
    'use_sysroot=false'
    'linux_use_bundled_binutils=false'
    'use_custom_libcxx=false'
    'enable_hangout_services_extension=true'
    'enable_widevine=true'
    'use_ozone=true'
    'use_xkbcommon=true'
    'use_system_minigbm=true'
    'use_vaapi=false'
    'use_jumbo_build=true'
    'enable_nacl=false'
    'enable_swiftshader=false'
    "google_api_key=\"${_google_api_key}\""
    "google_default_client_id=\"${_google_default_client_id}\""
    "google_default_client_secret=\"${_google_default_client_secret}\""
  )

  # Facilitate deterministic builds (taken from build/config/compiler/BUILD.gn)
  CFLAGS+='   -Wno-builtin-macro-redefined'
  CXXFLAGS+=' -Wno-builtin-macro-redefined'
  CPPFLAGS+=' -D__DATE__=  -D__TIME__=  -D__TIMESTAMP__='

  if check_option strip y; then
    _flags+=('symbol_level=0')

    # Mimic exclude_unwind_tables=true
    CFLAGS+='   -fno-unwind-tables -fno-asynchronous-unwind-tables'
    CXXFLAGS+=' -fno-unwind-tables -fno-asynchronous-unwind-tables'
    CPPFLAGS+=' -DNO_UNWIND_TABLES'
  fi

  gn gen out/Release --args="${_flags[*]}" --script-executable=/usr/bin/python2
  ninja -C out/Release chrome chrome_sandbox chromedriver
}

package() {
  cd chromium-launcher-$_launcher_ver
  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 LICENSE \
    "$pkgdir/usr/share/licenses/chromium/LICENSE.launcher"

  cd "$srcdir/chromium-$pkgver"

  install -D out/Release/chrome "$pkgdir/usr/lib/chromium/chromium"
  install -Dm4755 out/Release/chrome_sandbox "$pkgdir/usr/lib/chromium/chrome-sandbox"
  ln -s /usr/lib/chromium/chromedriver "$pkgdir/usr/bin/chromedriver"

  install -Dm644 ../chromium-drirc-disable-10bpc-color-configs.conf \
    "$pkgdir/usr/share/drirc.d/10-chromium.conf"

  install -Dm644 chrome/installer/linux/common/desktop.template \
    "$pkgdir/usr/share/applications/chromium.desktop"
  install -Dm644 chrome/app/resources/manpage.1.in \
    "$pkgdir/usr/share/man/man1/chromium.1"
  sed -i \
    -e "s/@@MENUNAME@@/Chromium/g" \
    -e "s/@@PACKAGE@@/chromium/g" \
    -e "s/@@USR_BIN_SYMLINK_NAME@@/chromium/g" \
    "$pkgdir/usr/share/applications/chromium.desktop" \
    "$pkgdir/usr/share/man/man1/chromium.1"

  cp \
    out/Release/{chrome_{100,200}_percent,resources}.pak \
    out/Release/{*.bin,chromedriver} \
    "$pkgdir/usr/lib/chromium/"
  install -Dm644 -t "$pkgdir/usr/lib/chromium/locales" out/Release/locales/*.pak

  if [[ -z ${_system_libs[icu]+set} ]]; then
    cp out/Release/icudtl.dat "$pkgdir/usr/lib/chromium/"
  fi

  for size in 22 24 48 64 128 256; do
    install -Dm644 "chrome/app/theme/chromium/product_logo_$size.png" \
      "$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/chromium.png"
  done

  for size in 16 32; do
    install -Dm644 "chrome/app/theme/default_100_percent/chromium/product_logo_$size.png" \
      "$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/chromium.png"
  done

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/chromium/LICENSE"
}

# vim:set ts=2 sw=2 et:
