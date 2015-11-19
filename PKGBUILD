# Maintainer: Alexandre Bique <bique.alexandre@gmail.com>
pkgname=scissy
pkgver=0.13.0
pkgrel=1
pkgdesc="Lightweight and standalone git repository server"
arch=('i686' 'x86_64')
url="https://githube.com/abique/scissy"
license=('MIT')
depends=(git sqlite3 libgit2 gnutls protobuf xz cracklib re2 mime-types)
source=(
  scissy::git://github.com/abique/scissy#tag=0.13.0
  scissy.install
  scissy.service
  scissy.tmpfiles
)
md5sums=('SKIP'
         '7184c02ab052a3f27ff0e7eaefae88d0'
         '98690f1002f7d80af6cb9b939209a4dd'
         '6c652e0203eb62fd67ed28bfa7fc9d0c')
install=scissy.install
backup=('etc/scissy/config.json')

build() {
  cd $startdir/src/$pkgname
  git submodule init
  git submodule update
  rm -rf build
  mkdir build
  cd build
  cmake -DCMAKE_BUILD_TYPE=release -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}

package() {
  cd $srcdir/$pkgname/build

  make DESTDIR=$pkgdir install
  install -D -m644 ${srcdir}/scissy.service ${pkgdir}/usr/lib/systemd/system/scissy.service
  install -D -m644 ${srcdir}/${pkgname}/LICENSE ${pkgdir}/usr/share/licenses/scissy/LICENSE
  install -d 755 $pkgdir/var/lib/scissy
  install -d 750 $pkgdir/etc/scissy
  install -Dm644 "${srcdir}"/scissy.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/scissy.conf
}

# vim:set ts=2 sw=2 et:
