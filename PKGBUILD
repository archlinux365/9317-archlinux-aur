# Maintainer: Mantas Mikulėnas <grawity@gmail.com>
pkgname=dublin-traceroute
pkgver=0.4.0
pkgrel=1
pkgdesc="NAT-aware multipath tracerouting tool"
arch=(i686 x86_64)
url="https://dublin-traceroute.net/"
license=(custom:BSD-2-clause)
depends=(jsoncpp libtins)
optdepends=(python2-pygraphviz)
_commit=7d062825bced684adbd4a8f6fe66871a4aa1505c # v0.4.0
source=("git+https://github.com/insomniacslk/dublin-traceroute#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --tags | sed 's/^v//; s/-/.r/; s/-/./'
}

build() {
  cd "$pkgname"
  sed -i '1s/\<python\>/&2/' scripts/*.py

  rm -rf build; mkdir build; cd build
  cmake .. -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "$pkgname/build"
  make DESTDIR="$pkgdir" install

  cd ..
  install -D -m 644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/COPYING
  install -D -m 755 scripts/to_graphviz.py "$pkgdir"/usr/bin/dublin-to-graphviz
}

# vim: ts=2:sw=2:et:ft=sh
