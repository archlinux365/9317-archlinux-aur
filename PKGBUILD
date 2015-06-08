# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=scoll
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=r1
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('any')
url="https://gist.github.com/4re"
license=('GPL')
depends=('vapoursynth' 'vapoursynth-plugin-havsfunc' 'vapoursynth-plugin-vshelpers-git')
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://gist.github.com/3acdb8d90abf78643d4e.git")
sha1sums=('SKIP')
_sites_packages="$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")"

pkgver() {
  cd "${_plug}"
  printf "r%s" "$(git rev-list --count HEAD)"
}

package() {
  install -Dm644 "${_plug}/${_plug}.py" "${pkgdir}${_sites_packages}/${_plug}.py"
}
