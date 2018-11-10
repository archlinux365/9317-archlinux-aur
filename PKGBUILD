##
# Maintainer: pyamsoft <pyam(dot)soft(at)gmail(dot)com>
##

_gitname=WattmanGTK
# shellcheck disable=SC2034
pkgname=wattman-gtk-git
# shellcheck disable=SC2034
pkgdesc="GTK GUI to view, monitor, and overclock a Radeon GPU on Linux"
# shellcheck disable=SC2034
pkgver=r91.d112ddc
# shellcheck disable=SC2034
pkgrel=1
# shellcheck disable=SC2034
arch=('any')
# shellcheck disable=SC2034
makedepends=('git' 'python-setuptools')
# shellcheck disable=SC2034
depends=('python-gobject' 'python-matplotlib' 'python')
# shellcheck disable=SC2034
optdepends=()
# shellcheck disable=SC2034
provides=('wattman-gtk')
# shellcheck disable=SC2034
conflicts=('wattman-gtk')
# shellcheck disable=SC2034
license=('GPLv2')
url="https://github.com/BoukeHaarsma23/WattmanGTK"

##
# The SHA256 is constantly changing since this is
# pulled from git so skip the verification check
##
# shellcheck disable=SC2034
source=("${_gitname}::git+${url}")
# shellcheck disable=SC2034
sha256sums=('SKIP')

pkgver() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${_gitname}" || {
        msg "Failed to cd into ${srcdir}/${_gitname}"
        return 1
  }

  # From
  # https://wiki.archlinux.org/index.php/VCS_package_guidelines#The_pkgver.28.29_function
  # If there are no tags then use number of revisions since beginning of the history:
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${_gitname}" || {
        msg "Failed to cd into ${srcdir}/${_gitname}"
        return 1
  }

  python setup.py build
}

package() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${_gitname}" || {
        msg "Failed to cd into ${srcdir}/${_gitname}"
        return 1
  }

  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

  # Copy license over
  mkdir -p "${pkgdir}/usr/share/wattman-gtk"
  cp LICENSE "${pkgdir}/usr/share/wattman-gtk"

  # Copy README over
  mkdir -p "${pkgdir}/usr/share/doc/wattman-gtk"
  cp README.md "${pkgdir}/usr/share/doc/wattman-gtk"
}
