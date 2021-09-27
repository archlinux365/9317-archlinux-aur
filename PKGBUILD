# Maintainer: Nicola Squartini <tensor5@gmail.com>

_use_suffix=1
pkgver=14.0.1
_major_ver=${pkgver%%.*}
if [[ ${_use_suffix} != 0 ]]; then
  pkgname="electron${_major_ver}"
else
  pkgname=electron
fi
_commit=735a01edce5be78d43a5a106a02d4398bbe78273
_chromiumver=93.0.4577.63
_gcc_patchset=6
# shellcheck disable=SC2034
pkgrel=1
# shellcheck disable=SC2034
pkgdesc='Build cross platform desktop apps with web technologies'
# shellcheck disable=SC2034
arch=('x86_64')
# shellcheck disable=SC2034
url='https://electronjs.org/'
# shellcheck disable=SC2034
license=('MIT' 'custom')
# shellcheck disable=SC2034
depends=('c-ares' 'ffmpeg' 'gtk3' 'libevent' 'libnghttp2' 'libxslt' 'minizip'
         'nss' 're2' 'snappy')
# shellcheck disable=SC2034
makedepends=('clang' 'git' 'gn' 'gperf' 'harfbuzz-icu' 'http-parser'
             'java-runtime-headless' 'jsoncpp' 'libnotify' 'lld' 'llvm' 'ninja'
             'npm' 'pciutils' 'pipewire' 'python2' 'wget' 'yarn')
# shellcheck disable=SC2034
optdepends=('kde-cli-tools: file deletion support (kioclient5)'
            'libappindicator-gtk3: StatusNotifierItem support'
            'pipewire: WebRTC desktop sharing under Wayland'
            'trash-cli: file deletion support (trash-put)'
            "xdg-utils: open URLs with desktop's default (xdg-email, xdg-open)")
# shellcheck disable=SC2034
source=('git+https://github.com/electron/electron.git'
        'git+https://chromium.googlesource.com/chromium/tools/depot_tools.git#branch=main'
        "https://github.com/stha09/chromium-patches/releases/download/chromium-${_chromiumver%%.*}-patchset-${_gcc_patchset}/chromium-${_chromiumver%%.*}-patchset-${_gcc_patchset}.tar.xz"
        "electron-launcher.sh"
        "electron.desktop"
        'default_app-icon.patch'
        'use-system-libraries-in-node.patch'
        'linux-sandbox-syscall-broker-use-struct-kernel_stat.patch'
        'linux-sandbox-fix-fstatat-crash.patch'
        'replace-blacklist-with-ignorelist.patch'
        'sql-make-VirtualCursor-standard-layout-type.patch'
        'chromium-93-ffmpeg-4.4.patch'
        'chromium-harfbuzz-3.0.0.patch'
        'skia-harfbuzz-3.0.0.patch'
       )
# shellcheck disable=SC2034
sha256sums=('SKIP'
            'SKIP'
            'a44ffd9e25fcbd8b3cc778871890e4da6fe12600ad549c807e1d03f61f0cdf73'
            '3953f532a3ea5fce19ee33600c6ead89dcd066df6a01d3c3ab4c24f96e46fca2'
            '4484200d90b76830b69eea3a471c103999a3ce86bb2c29e6c14c945bf4102bae'
            '75bac9c4ad32ff9329399b8587f9772e208c009fd822cdfce61b2bd1ee9ac828'
            'f16103daf05713dea632b5f01e45db20ff12d1770a6539b4e8d3957a0242dd54'
            '268e18ad56e5970157b51ec9fc8eb58ba93e313ea1e49c842a1ed0820d9c1fa3'
            '253348550d54b8ae317fd250f772f506d2bae49fb5dc75fe15d872ea3d0e04a5'
            'd3344ba39b8c6ed202334ba7f441c70d81ddf8cdb15af1aa8c16e9a3a75fbb35'
            'dd317f85e5abfdcfc89c6f23f4c8edbcdebdd5e083dcec770e5da49ee647d150'
            '1a9e074f417f8ffd78bcd6874d8e2e74a239905bf662f76a7755fa40dc476b57'
            '7ce947944a139e66774dfc7249bf7c3069f07f83a0f1b2c1a1b14287a7e15928'
            'dae11dec5088eb1b14045d8c9862801a342609c15701d7c371e1caccf46e1ffd'
           )

_system_libs=('ffmpeg'
              'flac'
              'fontconfig'
              'freetype'
              'harfbuzz-ng'
              'icu'
              'libdrm'
              'libevent'
              'libjpeg'
              'libpng'
#              'libvpx'
              'libwebp'
              'libxml'
              'libxslt'
#              'openh264'
              'opus'
              're2'
              'snappy'
              'zlib'
             )

prepare() {
  sed -i "s|@ELECTRON@|${pkgname}|" electron-launcher.sh
  sed -i "s|@ELECTRON@|${pkgname}|" electron.desktop
  if [[ ${_use_suffix} != 0 ]]; then
    sed -i "s|@ELECTRON_NAME@|Electron ${_major_ver}|" electron.desktop
  else
    sed -i "s|@ELECTRON_NAME@|Electron|" electron.desktop
  fi

  mkdir -p "${srcdir:?}/python2-path"
  ln -sf /usr/bin/python2 "${srcdir}/python2-path/python"
  export PATH="${srcdir}/python2-path:${PATH}:${srcdir}/depot_tools"

  echo "Fetching chromium..."
  git clone --branch=${_chromiumver} --depth=1 \
      https://chromium.googlesource.com/chromium/src.git

  echo "solutions = [
  {
    \"name\": \"src/electron\",
    \"url\": \"file://${srcdir}/electron@${_commit}\",
    \"deps_file\": \"DEPS\",
    \"managed\": False,
    \"custom_deps\": {
      \"src\": None,
    },
    \"custom_vars\": {},
  },
]" > .gclient

  python2 "${srcdir}/depot_tools/gclient.py" sync \
      --with_branch_heads \
      --with_tags \
      --nohooks

  echo "Running hooks..."
  # python2 "${srcdir}/depot_tools/gclient.py" runhooks
  src/build/landmines.py
  src/build/util/lastchange.py -o src/build/util/LASTCHANGE
  src/build/util/lastchange.py -m GPU_LISTS_VERSION \
    --revision-id-only --header src/gpu/config/gpu_lists_version.h
  src/build/util/lastchange.py -m SKIA_COMMIT_HASH \
    -s src/third_party/skia --header src/skia/ext/skia_commit_hash.h
  # Create sysmlink to system clang-format
  ln -s /usr/bin/clang-format src/buildtools/linux64
  # Create sysmlink to system Node.js
  mkdir -p src/third_party/node/linux/node-linux-x64/bin
  ln -sf /usr/bin/node src/third_party/node/linux/node-linux-x64/bin
  src/third_party/depot_tools/download_from_google_storage.py \
    --no_resume --extract --no_auth --bucket chromium-nodejs \
    -s src/third_party/node/node_modules.tar.gz.sha1
  vpython src/tools/download_optimization_profile.py \
    --newest_state=src/chrome/android/profiles/newest.txt \
    --local_state=src/chrome/android/profiles/local.txt \
    --output_name=src/chrome/android/profiles/afdo.prof \
    --gs_url_base=chromeos-prebuilt/afdo-job/llvm
  #vpython src/tools/update_pgo_profiles.py \
  #  --target=linux \
  #  update \
  #  --gs-url-base=chromium-optimization-profiles/pgo_profiles
  src/electron/script/apply_all_patches.py \
      src/electron/patches/config.json
  cd src/electron || exit
  yarn install --frozen-lockfile
  cd ..

  echo "Applying local patches..."
  # Fixes for building with libstdc++ instead of libc++
  patch -Np1 -i ../patches/chromium-93-pdfium-include.patch
  patch -Np1 -i ../patches/chromium-90-ruy-include.patch
  patch -Np1 -i ../patches/chromium-93-HashPasswordManager-include.patch
  patch -Np1 -i ../patches/chromium-93-BluetoothLowEnergyScanFilter-include.patch
  patch -Np1 -i ../patches/chromium-93-ClassProperty-include.patch
  patch -Np1 -i ../patches/chromium-93-DevToolsEmbedderMessageDispatcher-include.patch
  patch -Np1 -i ../patches/chromium-93-ScopedTestDialogAutoConfirm-include.patch

  patch -Np1 -i ../chromium-93-ffmpeg-4.4.patch
  patch -Np1 -i ../chromium-harfbuzz-3.0.0.patch
  patch -Np1 -d third_party/skia <../skia-harfbuzz-3.0.0.patch
  patch -Np1 -i ../linux-sandbox-syscall-broker-use-struct-kernel_stat.patch
  patch -Np1 -i ../linux-sandbox-fix-fstatat-crash.patch
  patch -Rp1 -i ../replace-blacklist-with-ignorelist.patch
  patch -Np1 -i ../sql-make-VirtualCursor-standard-layout-type.patch
  patch -Np1 -i ../use-system-libraries-in-node.patch
  patch -Np1 -i ../default_app-icon.patch  # Icon from .desktop file

  echo "Patching Chromium for using system libraries..."
  sed -i 's/OFFICIAL_BUILD/GOOGLE_CHROME_BUILD/' \
      tools/generate_shim_headers/generate_shim_headers.py
  for lib in $(printf "%s\n" "${_system_libs[@]}" | sed 's/^libjpeg$/&_turbo/'); do
      third_party_dir="third_party/${lib}"
      if [ ! -d "${third_party_dir}" ]; then
        third_party_dir="base/${third_party_dir}"
      fi
      find "${third_party_dir}" -type f \
          \! -path "${third_party_dir}/chromium/*" \
          \! -path "${third_party_dir}/google/*" \
          \! -path 'third_party/harfbuzz-ng/utils/hb_scoped.h' \
          \! -regex '.*\.\(gn\|gni\|isolate\)' \
          -delete
  done
  build/linux/unbundle/replace_gn_files.py \
      --system-libraries \
      "${_system_libs[@]}"
}

build() {
  export CC=clang
  export CXX=clang++
  export AR=ar
  export NM=nm

  # Do not warn about unknown warning options
  CFLAGS+='   -Wno-unknown-warning-option'
  CXXFLAGS+=' -Wno-unknown-warning-option'

  cd src || exit
  export CHROMIUM_BUILDTOOLS_PATH="${PWD}/buildtools"
  GN_EXTRA_ARGS='
    blink_symbol_level = 0
    chrome_pgo_phase = 0
    clang_use_chrome_plugins = false
    custom_toolchain = "//build/toolchain/linux/unbundle:default"
    host_toolchain = "//build/toolchain/linux/unbundle:default"
    icu_use_data_file = false
    is_component_ffmpeg = false
    link_pulseaudio = true
    rtc_use_pipewire = true
    treat_warnings_as_errors = false
    use_custom_libcxx = false
    use_gnome_keyring = false
    use_sysroot = false
  '
  gn gen out/Release \
      --args="import(\"//electron/build/args/release.gn\") ${GN_EXTRA_ARGS}"
  ninja -C out/Release electron
  # Strip before zip to avoid
  # zipfile.LargeZipFile: Filesize would require ZIP64 extensions
  strip -s out/Release/electron
  ninja -C out/Release electron_dist_zip
  # ninja -C out/Release third_party/electron_node:headers
}

package() {
  install -dm755 "${pkgdir:?}/usr/lib/${pkgname}"
  bsdtar -xf src/out/Release/dist.zip -C "${pkgdir}/usr/lib/${pkgname}"

  chmod u+s "${pkgdir}/usr/lib/${pkgname}/chrome-sandbox"

  install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
  for l in "${pkgdir}/usr/lib/${pkgname}"/{LICENSE,LICENSES.chromium.html}; do
    ln -s  \
      "$(realpath --relative-to="${pkgdir}/usr/share/licenses/${pkgname}" "${l}")" \
      "${pkgdir}/usr/share/licenses/${pkgname}"
  done

  install -Dm755 "${srcdir}/electron-launcher.sh" \
    "${pkgdir}/usr/bin/${pkgname}"
  if [[ "${_use_suffix}" == 0 ]]; then
    ln "${pkgdir}/usr/bin/${pkgname}" \
      "${pkgdir}/usr/bin/${pkgname}${_major_ver}"
  fi

  # Install .desktop and icon file (see default_app-icon.patch)
  install -Dm644 electron.desktop \
    "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 src/electron/default_app/icon.png \
          "${pkgdir}/usr/share/pixmaps/${pkgname}.png"  # hicolor has no 1024x1024
}
