# Maintainer: graysky <graysky AT archlinux DOT us>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Pierre Schmitz <pierre@archlinux.de>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=chromium-no-extras
pkgver=89.0.4389.72
pkgrel=2
_pkgname=chromium
_launcher_ver=7
_gcc_patchset=6
pkgdesc="Chromium without hangout services, widevine, pipewire, or chromedriver"
arch=('x86_64')
url="https://www.chromium.org/Home"
license=('BSD')
provides=(chromium=$pkgver)
conflicts=(chromium)
depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-liberation' 'systemd' 'dbus' 'libpulse' 'pciutils'
         'desktop-file-utils' 'hicolor-icon-theme')
makedepends=('python' 'gn' 'ninja' 'clang' 'lld' 'gperf' 'nodejs'
             'java-runtime-headless' 'python2' 'python2-setuptools')
optdepends=(
            'kdialog: needed for file dialogs in KDE'
            'org.freedesktop.secrets: password storage backend on GNOME / Xfce'
            'kwallet: for storing passwords in KWallet on KDE desktops')
source=(https://commondatastorage.googleapis.com/chromium-browser-official/$_pkgname-$pkgver.tar.xz
        https://github.com/foutrelis/chromium-launcher/archive/v$_launcher_ver/chromium-launcher-$_launcher_ver.tar.gz
        https://github.com/stha09/chromium-patches/releases/download/chromium-${pkgver%%.*}-patchset-$_gcc_patchset/chromium-${pkgver%%.*}-patchset-$_gcc_patchset.tar.xz
        add-dependency-on-opus-in-webcodecs.patch
        don-t-crash-on-reentrant-RunMoveLoop-call.patch
        add-ctime-for-std-time.patch
        chromium-glibc-2.33.patch
        use-oauth2-client-switches-as-default.patch)
sha256sums=('946a0b65aad10e0f77a539103892099b7238310c733f25b41d58b76f6ac0bc4f'
            '86859c11cfc8ba106a3826479c0bc759324a62150b271dd35d1a0f96e890f52f'
            '359d2847e775d8cf6f4e0b12c94c8f2718f0fd562427859c596ce1c3711dbd8e'
            'b86b11de8db438c47f0a84c7956740f648d21035f4ee46bfbd50c3348d369121'
            '615f5fefc94da605957edb34b6c000f32953fb5ff6ffb321f062dab8e0fef9d3'
            '102e0c976c0d7fd1fbe2f2978ec621499a97b62457b3fde4daf84f026d1a53a7'
            '2fccecdcd4509d4c36af873988ca9dbcba7fdb95122894a9fdf502c33a1d7a4b'
            'e393174d7695d0bafed69e868c5fbfecf07aa6969f3b64596d0bae8b067e1711')

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
  [libpng]=libpng
  #[libvpx]=libvpx
  [libwebp]=libwebp
  [libxml]=libxml2
  [libxslt]=libxslt
  [opus]=opus
  [re2]=re2
  [snappy]=snappy
  [zlib]=minizip
)
_unwanted_bundled_libs=(
  $(printf "%s\n" ${!_system_libs[@]} | sed 's/^libjpeg$/&_turbo/')
)
depends+=(${_system_libs[@]})

# Google API keys (see https://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys.
#
# Starting with Chromium 89 (2021-03-02) the OAuth2 credentials have been left
# out: https://archlinux.org/news/chromium-losing-sync-support-in-early-march/
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM

prepare() {
  cd "$srcdir/$_pkgname-$pkgver"

  # Allow building against system libraries in official builds
  sed -i 's/OFFICIAL_BUILD/GOOGLE_CHROME_BUILD/' \
    tools/generate_shim_headers/generate_shim_headers.py

  # https://crbug.com/893950
  sed -i -e 's/\<xmlMalloc\>/malloc/' -e 's/\<xmlFree\>/free/' \
    third_party/blink/renderer/core/xml/*.cc \
    third_party/blink/renderer/core/xml/parser/xml_document_parser.cc \
    third_party/libxml/chromium/*.cc

  # Use the --oauth2-client-id= and --oauth2-client-secret= switches for
  # setting GOOGLE_DEFAULT_CLIENT_ID and GOOGLE_DEFAULT_CLIENT_SECRET at
  # runtime -- this allows signing into Chromium without baked-in values
  patch -Np1 -i ../use-oauth2-client-switches-as-default.patch

  # https://crbug.com/1164975
  patch -Np1 -i ../chromium-glibc-2.33.patch

  # Upstream fixes
  patch -Np1 -i ../add-dependency-on-opus-in-webcodecs.patch
  patch -Np1 -i ../don-t-crash-on-reentrant-RunMoveLoop-call.patch
  patch -Np1 -i ../add-ctime-for-std-time.patch

  # Fixes for building with libstdc++ instead of libc++
  patch -Np1 -i ../patches/chromium-89-quiche-dcheck.patch

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
      \! -path "third_party/harfbuzz-ng/utils/hb_scoped.h" \
      \! -regex '.*\.\(gn\|gni\|isolate\)' \
      -delete
  done

  ./build/linux/unbundle/replace_gn_files.py \
    --system-libraries "${!_system_libs[@]}"
}

build() {
  make -C chromium-launcher-$_launcher_ver

  cd "$srcdir/$_pkgname-$pkgver"

  if check_buildoption ccache y; then
    # Avoid falling back to preprocessor mode when sources contain time macros
    export CCACHE_SLOPPINESS=time_macros
  fi

  export CC=clang
  export CXX=clang++
  export AR=ar
  export NM=nm

  local _flags=(
    'custom_toolchain="//build/toolchain/linux/unbundle:default"'
    'host_toolchain="//build/toolchain/linux/unbundle:default"'
    'clang_use_chrome_plugins=false'
    'is_official_build=true' # implies is_cfi=true on x86_64
    'chrome_pgo_phase=0' # unsupported instrumentation profile format version
    'treat_warnings_as_errors=false'
    'fieldtrial_testing_like_official_build=true'
    'ffmpeg_branding="Chrome"'
    'proprietary_codecs=true'
    'rtc_use_pipewire=false'
    'rtc_link_pipewire=false'
    'link_pulseaudio=true'
    'use_gnome_keyring=false'
    'use_sysroot=false'
    'use_custom_libcxx=false'
    'enable_hangout_services_extension=false'
    'enable_widevine=false'
    'enable_nacl=false'
    "google_api_key=\"$_google_api_key\""
    # from ArchARM to build with distcc, uncomment if you build with distcc
    #'is_cfi=false'
    #'use_gold=false'
    #'clang_use_default_sample_profile=false'
    #'chrome_pgo_phase=0'
  )

  if [[ -n ${_system_libs[icu]+set} ]]; then
    _flags+=('icu_use_data_file=false')
  fi

  if check_option strip y; then
    _flags+=('symbol_level=0')
  fi

  # Facilitate deterministic builds (taken from build/config/compiler/BUILD.gn)
  CFLAGS+='   -Wno-builtin-macro-redefined'
  CXXFLAGS+=' -Wno-builtin-macro-redefined'
  CPPFLAGS+=' -D__DATE__=  -D__TIME__=  -D__TIMESTAMP__='

  # Do not warn about unknown warning options
  CFLAGS+='   -Wno-unknown-warning-option'
  CXXFLAGS+=' -Wno-unknown-warning-option'

  gn gen out/Release --args="${_flags[*]}"
  ninja -C out/Release chrome chrome_sandbox
}

package() {
  cd chromium-launcher-$_launcher_ver
  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 LICENSE \
    "$pkgdir/usr/share/licenses/chromium/LICENSE.launcher"

  cd "$srcdir/$_pkgname-$pkgver"

  install -D out/Release/chrome "$pkgdir/usr/lib/chromium/chromium"
  install -Dm4755 out/Release/chrome_sandbox "$pkgdir/usr/lib/chromium/chrome-sandbox"
  #ln -s /usr/lib/chromium/chromedriver "$pkgdir/usr/bin/chromedriver"

  install -Dm644 chrome/installer/linux/common/desktop.template \
    "$pkgdir/usr/share/applications/chromium.desktop"
  install -Dm644 chrome/app/resources/manpage.1.in \
    "$pkgdir/usr/share/man/man1/chromium.1"
  sed -i \
    -e 's/@@MENUNAME@@/Chromium/g' \
    -e 's/@@PACKAGE@@/chromium/g' \
    -e 's/@@USR_BIN_SYMLINK_NAME@@/chromium/g' \
    "$pkgdir/usr/share/applications/chromium.desktop" \
    "$pkgdir/usr/share/man/man1/chromium.1"

  install -Dm644 chrome/installer/linux/common/chromium-browser/chromium-browser.appdata.xml \
    "$pkgdir/usr/share/metainfo/chromium.appdata.xml"
  sed -ni \
    -e 's/chromium-browser\.desktop/chromium.desktop/' \
    -e '/<update_contact>/d' \
    -e '/<p>/N;/<p>\n.*\(We invite\|Chromium supports Vorbis\)/,/<\/p>/d' \
    -e '/^<?xml/,$p' \
    "$pkgdir/usr/share/metainfo/chromium.appdata.xml"

  local toplevel_files=(
    chrome_100_percent.pak
    chrome_200_percent.pak
    resources.pak
    v8_context_snapshot.bin

    # ANGLE
    libEGL.so
    libGLESv2.so

    #chromedriver
  )

  if [[ -z ${_system_libs[icu]+set} ]]; then
    toplevel_files+=(icudtl.dat)
  fi

  cp "${toplevel_files[@]/#/out/Release/}" "$pkgdir/usr/lib/chromium/"
  install -Dm644 -t "$pkgdir/usr/lib/chromium/locales" out/Release/locales/*.pak
  install -Dm755 -t "$pkgdir/usr/lib/chromium/swiftshader" out/Release/swiftshader/*.so

  for size in 24 48 64 128 256; do
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
