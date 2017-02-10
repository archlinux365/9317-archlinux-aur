# Maintainer: twa022 <twa022 at gmail dot com>

_pkgname=xfce4-taskmanager
pkgname=${_pkgname}-git
pkgver=1.1.0.r147.g26fb709
_pkgver=1.1.0
pkgrel=1
pkgdesc="Easy to use task manager"
arch=('i686' 'x86_64')
url="http://goodies.xfce.org/projects/applications/xfce4-taskmanager"
license=('GPL2')
depends=('libwnck3')
makedepends=('intltool' 'git' 'xfce4-dev-tools')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
groups=('xfce4-goodies')
source=(git://git.xfce.org/apps/xfce4-taskmanager
        http://archive.xfce.org/src/apps/${_pkgname}/${_pkgver%.*}/${_pkgname}-${_pkgver}.tar.bz2)

sha256sums=('SKIP'
            '2e1eb161f966cbfbd68bd029fb59115bc5ab0c0704cb500d20e7d73967e59ecb')

pkgver() {
  cd "$srcdir/${_pkgname}"
  git describe --long --tags | sed -r "s/^${_pkgname}-//;s/([^-]*-g)/r\1/;s/-/./g"
}

prepare() {
  cd "$srcdir/${_pkgname}"
  # The git repo is missing some required headers
  cp ../${_pkgname}-${_pkgver}/src/*_ui.h ./src/
}

build() {
  cd "$srcdir/${_pkgname}"

  ./autogen.sh \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --enable-gtk3 \
    --enable-wnck3
  make
}

package() {
  cd "$srcdir/${_pkgname}"
  make DESTDIR="$pkgdir" install
}
