# Maintainer: Stephan Springer <buzo+arch@Lini.de>
# Contributor: Oleg Shparber <trollixx+aur@gmail.com>
# Contributor: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: Vesa Kaihlavirta <vegai@iki.fi>

_pkgbase=quassel
pkgname=('quassel-core-small')
pkgver=0.13.1
pkgrel=8
pkgdesc="Next-generation distributed IRC client - core only, minimal dependencies"
arch=('x86_64')
url="https://quassel-irc.org/"
license=('GPL')
depends=('qt5-base-headless' 'qca' 'qt5-script')
optdepends=('postgresql: PostgreSQL database support')
makedepends=('qt5-base-headless' 'qt5-tools' 'qca' 'qt5-script'
             'cmake' 'extra-cmake-modules' 'ninja')
provides=('quassel-core')
conflicts=('quassel-core')
backup=(etc/conf.d/quassel)
source=("https://quassel-irc.org/pub/$_pkgbase-$pkgver.tar.bz2"
        ${_pkgbase}.service
        ${_pkgbase}.sysusers
        ${_pkgbase}.tmpfiles
        ${_pkgbase}.conf)
sha256sums=('48efee9778743b1db9f44efb91d1c913104db01190c57f2ff57483c39a97e855'
            '0f5adfcaf9a640a795255d6bb82d6242882a1106a7b53b86bcbee6cc1e704241'
            '3c72441a99e2668c6a8a751fa07beeb44f937576c8a1b5f615e4a55f841d93d9'
            '2afd4340c7713f6533e5d175a86b28fd118ecd907776c2b10925d1a4fb31cdca'
            'f3031ea8217e01ba42cea14606169e3e27affa5918968ffd5a03c21ae92fe2b8')

prepare() {
  cd "$_pkgbase-$pkgver"
}

build() (
  mkdir -p "build"
  cd "build"
  cmake -G Ninja ../"$_pkgbase-$pkgver" \
    -DCMAKE_INSTALL_PREFIX=/usr/ \
    -DCMAKE_BUILD_TYPE=Release \
    -DHAVE_SSL=ON \
    -DWITH_KDE=OFF \
    -DWITH_LDAP=OFF \
    -DWITH_WEBENGINE=OFF \
    -DWITH_WEBKIT=OFF \
    -DUSE_QT5=ON \
    -DWANT_CORE=ON \
    -DWANT_QTCLIENT=OFF \
    -DWANT_MONO=OFF \
    -DWITH_BUNDLED_ICONS=OFF \
    -Wno-dev
  cmake --build .
)

package() {
  DESTDIR="${pkgdir}" cmake --build "build" --target install

  # Remove unneeded pixmap icons
  rm -rfv "${pkgdir}"/usr/share

  install -Dm644 $_pkgbase.sysusers \
    "${pkgdir}"/usr/lib/sysusers.d/$_pkgbase.conf
  install -Dm644 $_pkgbase.tmpfiles \
    "${pkgdir}"/usr/lib/tmpfiles.d/$_pkgbase.conf
  install -Dm644 $_pkgbase.service \
    "${pkgdir}"/usr/lib/systemd/system/$_pkgbase.service
  install -Dm644 $_pkgbase.conf \
    "${pkgdir}"/etc/conf.d/$_pkgbase
}
