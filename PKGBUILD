# Contributor: twa022 <twa022 at gmail dot com>

_pkgname=xfce4-dockbarx-plugin
pkgname=$_pkgname-gtk3-git
epoch=2
pkgver=r62+f7585b5
pkgrel=1
pkgdesc="Embed DockbarX in the xfce4-panel"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/m7s/xfce4-dockbarx-plugin"
license=('X11')
depends=('dockbarx-gtk3-git' 'xfce4-panel>=4.12')
makedepends=('git' 'vala')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
_branch='pygi-python3'
source=("${_pkgname}::git+https://github.com/m7s/${_pkgname}#branch=${_branch}")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s+%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/${_pkgname}"
  PREFIX=/usr python ./waf configure
}

build() {
  cd "${srcdir}/${_pkgname}"
  python ./waf build
}

package() {
  cd "${srcdir}/${_pkgname}"
  DESTDIR="${pkgdir}" python ./waf install
}

