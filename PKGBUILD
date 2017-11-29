# Maintainer: Adrian Wheeldon <arandomowl at gmail dot com>
pkgname=workcraft
pkgver=3.1.7
pkgrel=1
pkgdesc="A framework for interpreted graph models including petri nets and STGs"
arch=('i686' 'x86_64')
url="http://www.workcraft.org/"
license=('GPL')
depends=('java-runtime')
optdepends=(
  'graphviz: Graph manipulation',
  'stack: Concepts support')
provides=('workcraft')
conflicts=('workcraft')
source=(http://www.workcraft.org/_media/download/workcraft-v${pkgver}-linux.tar.gz workcraft_start.sh)
package() {
  cd $srcdir
  mkdir -p "$pkgdir"/usr/bin
  mkdir -p "$pkgdir"/opt/workcraft
  cp -RP workcraft/* "$pkgdir"/opt/workcraft/
  cp workcraft_start.sh "$pkgdir"/usr/bin/workcraft
  chmod 755 "$pkgdir/usr/bin/workcraft"
}
md5sums=('b3326c927ac84e4f8e886840d6c86fd4' 'f32ee62da46bd5fa04ff8ed02f7f218f')
