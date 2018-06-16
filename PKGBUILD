# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=smoothuv
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=v1.1.g0671808
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('x86_64')
url="https://forum.doom9.org/showthread.php?t=175520"
license=('GPL')
depends=('vapoursynth')
makedepends=('git'
             'meson'
             )
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/dubhater/vapoursynth-${_plug}.git")
sha256sums=('SKIP')

_site_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build

  cd build
  arch-meson "../${_plug}" \
    --libdir /usr/lib/vapoursynth

}

build() {
  ninja -C build
}

package(){
  DESTDIR="${pkgdir}" ninja -C build install
  install -Dm644 "${_plug}/readme.rst" "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/readme.rst"

  install -Dm644 "${_plug}/RainbowSmooth.py" "${pkgdir}${_site_packages}/RainbowSmooth.py"
  python -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/RainbowSmooth.py"
  python -OO -m compileall -q -f -d "${_site_packages}" "${pkgdir}${_site_packages}/RainbowSmooth.py"
}
