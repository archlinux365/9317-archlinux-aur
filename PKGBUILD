# Maintainer: Que Quotion <quequotion@bugmenot.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>

pkgname=switchboard-plug-elementary-tweaks-git
pkgver=0.0.1.r1.g211e2a9
pkgrel=1
pkgdesc='Elementary Tweaks plug for Switchboard'
arch=('i686' 'x86_64')
url='https://launchpad.net/elementary-tweaks'
license=('GPL3')
groups=('pantheon-unstable')
depends=('gconf' 'glib2' 'glibc' 'gtk3' 'libgee'
         'libgranite.so' 'libswitchboard-2.0.so')
makedepends=('bzr' 'cmake' 'vala')
provides=(switchboard-plug-elementary-tweaks{,-bzr})
conflicts=('switchboard-plug-elementary-tweaks')
source=('switchboard-plug-elementary-tweaks::git+https://github.com/elementary-tweaks/elementary-tweaks.git')
sha256sums=('SKIP')

pkgver() {
  cd switchboard-plug-elementary-tweaks
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}


build() {
  cd switchboard-plug-elementary-tweaks

  if [[ -d build ]]; then
    rm -rf build
  fi
  mkdir build && cd build

  cmake .. \
    -DCMAKE_BUILD_TYPE='Release' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -DCMAKE_INSTALL_LIBDIR='/usr/lib'
  make
}

package() {
  cd switchboard-plug-elementary-tweaks/build

  make DESTDIR="${pkgdir}" install
}

# vim: ts=2 sw=2 et:
