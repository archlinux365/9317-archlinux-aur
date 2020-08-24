# Maintainer: Milk Brewster (milkii on freenode irc)
# Contributor: Christopher Arndt <aur -at- chrisarndt -dot- de>

_name="BChoppr"
_pkgname="${_name,,}"
_plugin_uri="https://www.jahnichen.de/plugins/lv2/${_name}"
pkgname="${_pkgname}-git"
pkgver=1.8.0.r0.g7fb0af3
pkgrel=1
pkgdesc="An audio stream chopping LV2 plugin (git version)"
arch=('x86_64')
url="https://github.com/sjaehn/${_name}"
license=('GPL3')
groups=('lv2-plugins' 'pro-audio')
depends=('cairo' 'gcc-libs' 'glibc' 'libx11')
makedepends=('git' 'lv2')
checkdepends=('lv2lint')
provides=("${_pkgname}" "${_pkgname}=${pkgver//.r*/}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/sjaehn/${_name}")
md5sums=('SKIP')


pkgver() {
  cd "${srcdir}/$_pkgname"
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cd "${srcdir}/$_pkgname"
  make
}

check() {
  cd "${srcdir}/${_pkgname}"
  lv2lint -Mpack -I "${_name}.lv2/" "${_plugin_uri}"
}

package() {
  cd "$_pkgname"
  make PREFIX="/usr" DESTDIR="$pkgdir/" install
  install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
  # Remove useless license file
  find "${pkgdir}/usr/lib/" -type f -iname "*LICENSE*" -delete
}
