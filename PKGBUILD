##
# Maintainer: pyamsoft <developer(dot)pyamsoft(at)gmail(dot)com>
##

_gitname=amd-disable-c6
# shellcheck disable=SC2034
pkgname=amd-disable-c6-git
# shellcheck disable=SC2034
pkgdesc="Automatically disable the C6 power saving state on AMD Zen (Ryzen / Epyc) processors"
# shellcheck disable=SC2034
pkgver=r13.4eb03b5
# shellcheck disable=SC2034
pkgrel=1
# shellcheck disable=SC2034
arch=('i686' 'x86_64')
# shellcheck disable=SC2034
makedepends=('git')
# shellcheck disable=SC2034
depends=()
# shellcheck disable=SC2034
optdepends=()
# shellcheck disable=SC2034
provides=('amd-disable-c6' 'disable-c6-systemd')
# shellcheck disable=SC2034
conflicts=('amd-disable-c6' 'disable-c6-systemd')
# shellcheck disable=SC2034
license=('MIT')
url="https://github.com/joakimkistowski/amd-disable-c6.git"

##
# The SHA256 is constantly changing since this is
# pulled from git so skip the verification check
##
# shellcheck disable=SC2034
source=("${_gitname}::git+${url}#branch=master" "00-fix-sbin.patch" "01-fix-sbin.patch")
# shellcheck disable=SC2034
sha256sums=('SKIP'
            'c1bb428d02994f872e4be2f282ffd5c453f4ebc714a79fc8337032d9d02c1a4a'
            'bfb1e396caf7b4a84a2e2987b884fe1e2dd4bad626f1f813d0b39f9539cddef0')

pkgver() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${_gitname}" || {
        msg "Failed to cd into ${srcdir}/${_gitname}"
        return 1
  }

  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${_gitname}" || {
        msg "Failed to cd into ${srcdir}/${_gitname}"
        return 1
  }

  # Apply patches
  patch -p1 -i "${srcdir}/00-fix-sbin.patch"
  patch -p1 -i "${srcdir}/01-fix-sbin.patch"
}

package() {
  # shellcheck disable=SC2154
  cd "${srcdir}/${_gitname}" || {
        msg "Failed to cd into ${srcdir}/${_gitname}"
        return 1
  }

  # shellcheck disable=SC2154
  make DESTDIR="${pkgdir}" install
}
