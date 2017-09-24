# Maintainer: albfan albertofanjul@gmail.com

pkgname=sysprof2-git
pkgver=3.26.0.r5.g00887d7
pkgrel=1
pkgdesc='CPU Profiler'
arch=('i686' 'x86_64' 'armv6h')
url='https://git.gnome.org/browse/sysprof'
license=('GPL3')
options=('!libtool')
depends=('gtk3' 'polkit')
makedepends=('intltool' 'git' 'autoconf-archive')
provides=('sysprof')
conflicts=('sysprof')
source=('git+https://git.gnome.org/browse/sysprof')
md5sums=('SKIP')
_gitname='sysprof'

pkgver() {
  cd "$_gitname"

  git describe --long | sed 's/^sysprof-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_gitname"
  rm -rf build
  mkdir build
  cd build
  meson --prefix /usr ..
  ninja
}

package() {
  cd "$_gitname"
  cd build
  DESTDIR="$pkgdir" ninja install
}
