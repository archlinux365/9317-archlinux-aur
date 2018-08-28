# Maintainer: robertfoster

pkgname=g4l
pkgver=0.54
pkgrel=1
pkgdesc="Ghost 4 Linux is a hard disk and partition imaging and cloning tool."
arch=('any')
url="http://freecode.com/projects/g4l/"
license=('GPL')
depends=('ddrescue' 'partimage' 'dd_rhelp' 'dialog' 'lzop' 'gzip' 'bzip2' 'ncurses' 'fsarchiver')
source=(http://fossies.org/linux/misc/${pkgname}-v${pkgver}.devel.tar.gz)
noextract=(${pkgname}-v${pkgver}.devel.tar.gz)
makedepends=(wget)

package() {
  cd $srcdir
  tar -zxvf ${pkgname}-v${pkgver}.devel.tar.gz -C $srcdir bootcd/rootfs
  tar -zxvf ${pkgname}-v${pkgver}.devel.tar.gz -C $srcdir resources/jetcat
  mkdir -p $pkgdir/usr/bin/
  mv $srcdir/bootcd/rootfs/{*g4l,g4l3*} $pkgdir/usr/bin/
  mkdir -p $pkgdir/mnt/local
  cd resources/jetcat
  make clean
  make all 
  install -c -s -m 755 jetcat-mod $pkgdir/usr/bin
}

md5sums=('ba472043a9b3d796faed9ec58fa175f4')
