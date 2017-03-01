# $Id$
# Maintainer: PhotonX <photon89@googlemail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>

pkgname=gnome-vfs-perl
pkgver=1.082
pkgrel=6
pkgdesc="Gnome2-VFS perl bindings for gnome-vfs"
arch=(i686 x86_64)
license=('LGPL')
url="http://gtk2-perl.sourceforge.net/"
makedepends=('perl-extutils-pkgconfig' 'perl-extutils-depends')
depends=('gtk2-perl' 'gnome-vfs-nosmb' 'perl')
options=('!emptydirs')
source=(http://downloads.sourceforge.net/sourceforge/gtk2-perl/Gnome2-VFS-${pkgver}.tar.gz)
md5sums=('374e7d611d080d893bb3da9d40c64733')

build() {
  cd Gnome2-VFS-$pkgver
  perl Makefile.PL INSTALLDIRS=vendor
  make
}

package() {
  cd Gnome2-VFS-$pkgver
  make DESTDIR="${pkgdir}" install
}
