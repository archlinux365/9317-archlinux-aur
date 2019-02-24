# Maintainer: Cebtenzzre <cebtenzzre (at) gmail (dot) com>
# Contributor: Fabio 'Lolix' Loli <lolix@disroot.org>
# Contributor: Lubosz Sarnecki <lubosz@gmail.com>
# Contributor: Vítor Ferreira <vitor.dominor@gmail.com>

_pkgname=xboxdrv
pkgname=${_pkgname}-cebtenzzre-git
pkgver=0.8.8.r40.gc887ab9
pkgrel=1
pkgdesc="An XBox/XBox 360 gamepad driver - as alternative to the xpad-kernel module - with more configurability, runs in userspace and supports a multitude of controllers (Centenzzre's fork)"
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url="https://xboxdrv.gitlab.io/"
license=(GPL3)
depends=(libx11 dbus-glib libusb python2)
makedepends=(git cmake boost)
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${pkgname}::git+https://gitlab.com/cebtenzzre/xboxdrv.git#branch=stable"
         'xboxdrv.service'
         'xboxdrv.conf')
sha256sums=('SKIP'
            'd631a8c3af7e2b4ef22f1494ded5d7a8029a8dd9756ef8907f909ef6aa0afc2b'
            '68a286300d28bbfc97eb694c6cc413776f0bc16e35de6d1969f13ef1e7d1cac5')

NoUpgrade=etc/conf.d/xboxdrv

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$pkgname"
  sed 's|python|python2|g' -i examples/*.py
}

build() {
  cd "$pkgname"
  scons \
    LINKFLAGS="${LDFLAGS}" \
    CXXFLAGS="${CPPFLAGS} ${CXXFLAGS}" \
    "${MAKEFLAGS}"
}

package() {
  cd "$pkgname"
  make PREFIX=/usr DESTDIR="$pkgdir" install

  cd "${srcdir}/${pkgname}"
  install -Dm644 "${srcdir}/${_pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
  install -Dm644 "${srcdir}/${_pkgname}.conf" "${pkgdir}/etc/conf.d/${_pkgname}"
  install -Dm644 README.md NEWS PROTOCOL -t "${pkgdir}/usr/share/doc/${_pkgname}"
  install -Dm644 examples/* -t "${pkgdir}/usr/share/doc/${_pkgname}/examples"
  install -Dm644 data/org.seul.Xboxdrv.conf -t "${pkgdir}/etc/dbus-1/system.d"
}
