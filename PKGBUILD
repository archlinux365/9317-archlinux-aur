# Maintainer: Ranieri Althoff <ranisalt+aur at gmail dot com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=('mangohud-x11' 'lib32-mangohud-x11' 'mangohud-common-x11')
pkgbase=mangohud
_pkgver=0.6.7-1
pkgver=${_pkgver//-/.}
pkgrel=2
_imgui_ver=1.81
_spdlog_ver=1.8.5
pkgdesc="A Vulkan overlay layer for monitoring FPS, temperatures, CPU/GPU load and more."
arch=('x86_64')
url="https://github.com/flightlessmango/MangoHud"
license=('MIT')
makedepends=('dbus' 'git' 'glew' 'glfw-x11' 'glslang' 'lib32-dbus' 'lib32-libglvnd'
             'lib32-vulkan-icd-loader' 'libglvnd' 'libxnvctrl' 'meson' 'nlohmann-json'
             'python-mako' 'spdlog' 'vulkan-headers')
source=("git+https://github.com/flightlessmango/MangoHud.git#tag=v$_pkgver"
        'git+https://github.com/flightlessmango/minhook.git'
        "https://github.com/ocornut/imgui/archive/v${_imgui_ver}/imgui-${_imgui_ver}.tar.gz"
        "https://wrapdb.mesonbuild.com/v2/imgui_${_imgui_ver}-1/get_patch#/imgui-${_imgui_ver}-1-wrap.zip"
        "spdlog-${_spdlog_ver}.tar.gz::https://github.com/gabime/spdlog/archive/v${_spdlog_ver}.tar.gz"
        "spdlog-${_spdlog_ver}-1-wrap.zip::https://wrapdb.mesonbuild.com/v1/projects/spdlog/${_spdlog_ver}/1/get_zip")
sha256sums=('SKIP'
            'SKIP'
            'f7c619e03a06c0f25e8f47262dbc32d61fd033d2c91796812bf0f8c94fca78fb'
            '6d00b442690b6a5c5d8f898311daafbce16d370cf64f53294c3b8c5c661e435f'
            '944d0bd7c763ac721398dca2bb0f3b5ed16f67cef36810ede5061f35a543b4b8'
            '3c38f275d5792b1286391102594329e98b17737924b344f98312ab09929b74be')

prepare() {
  cd "$srcdir/MangoHud"
  git submodule init modules/minhook
  git config submodule.minhook.url "$srcdir/minhook"
  git submodule update

  mkdir -p "$srcdir/common"

  ln -sfv "$srcdir/imgui-${_imgui_ver}" subprojects
  ln -sfv "$srcdir/spdlog-${_spdlog_ver}" subprojects

  # Use system nlohmann-json package instead of subproject
  sed -i "s/  json_sp = subproject('nlohmann_json')//g" meson.build
  sed -i "s/json_dep = json_sp.get_variable('nlohmann_json_dep')/json_dep = dependency('nlohmann_json')/g" meson.build
}

build() {
local meson_options=(
    -Duse_system_vulkan=enabled
    -Dappend_libdir_mangohud=false
    -Dwith_x11=enabled
    -Dwith_wayland=disabled
    -Dmangoapp=true
    -Dmangohudctl=true
    -Dmangoapp_layer=true
  )

  arch-meson MangoHud build "${meson_options[@]}" \
    -Duse_system_spdlog=enabled
  meson compile -C build

  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
  export LLVM_CONFIG="/usr/bin/llvm-config32"

  arch-meson MangoHud build32 "${meson_options[@]}" \
    --libdir lib32 \
    -Dinclude_doc=false
  meson compile -C build32
}

package_mangohud-x11() {
  depends=('mangohud-common-x11' 'dbus' 'gcc-libs' 'glew' 'glfw-x11' 'libx11'
           'spdlog' 'vulkan-icd-loader')
  optdepends=('libxnvctrl: NVIDIA GPU stats by XNVCtrl')
  provides=("${pkgname%-x11}")
  conflicts=("${pkgname%-x11}")

  meson install -C build --destdir "$pkgdir"

  mv -f "$pkgdir"/usr/share/{doc,man} "$srcdir/common"
}

package_lib32-mangohud-x11() {
  depends=('mangohud-common-x11' 'lib32-dbus' 'lib32-gcc-libs' 'lib32-libx11'
           'lib32-vulkan-icd-loader')
  optdepends=('lib32-libxnvctrl: NVIDIA GPU stats by XNVCtrl')
  provides=("${pkgname%-x11}")
  conflicts=("${pkgname%-x11}")

  meson install -C build32 --destdir "$pkgdir"

  rm -rf "$pkgdir"/usr/{bin,share}
}

package_mangohud-common-x11() {
  pkgdesc="Common files for MangoHud"
  provides=("${pkgname%-x11}")
  conflicts=("${pkgname%-x11}")

  install -d "$pkgdir"/usr/share/
  cp -r common/* "$pkgdir/usr/share/"

  cd "$srcdir/MangoHud"
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgbase"
}
