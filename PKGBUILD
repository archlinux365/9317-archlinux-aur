# Maintainer: Nick Burrett <nick@sqrt.co.uk>
# lizardfs is a fork of moosefs and as such is a replacement for it.
pkgname=lizardfs
pkgver=3.10.2
pkgrel=1
pkgdesc='LizardFS is a highly reliable, scalable and efficient distributed file system. It spreads data over a number of physical servers, making it visible to an end user as a single file system.'
url='http://lizardfs.com'
conflics=('moosefs' 'mfs-master' 'mfs-chunkserver' 'mfs-client')
arch=('x86_64' 'i686')
license=('GPL3')
depends=('asciidoc' 'boost' 'zlib' 'fuse' 'python2' 'bash' 'cmake')
install="$pkgname.install"
source=("http://github.com/lizardfs/lizardfs/archive/v${pkgver}.tar.gz"
        "cmath.patch")
sha256sums=('972cc6c46629ebdf7b85f34c782583bb37be46de99dcf299fc92b355aa3a19cc'
            'fd9e8e3e0bfbb3d1befb3a6136d9257dcebb60cd49012051773e35b355ce0d5c')

prepare() {
  cd "lizardfs-${pkgver%_*}"
  patch -Np1 -i $srcdir/cmath.patch
}

build() {
  cd "lizardfs-${pkgver%_*}"
  ./configure
  cd build-pack
  make -j 2
}

package() {
  make DESTDIR="$pkgdir" -C "lizardfs-${pkgver%_*}/build-pack" install
  mkdir -p $pkgdir/usr/lib/systemd
  for fn in lizardfs-cgiserv.service lizardfs-chunkserver.service \
     lizardfs-master.service lizardfs-metalogger.service
  do
    install -m 0644 lizardfs-${pkgver%_*}/rpm/service-files/$fn $pkgdir/usr/lib/systemd/$fn 
  done
  mv "$pkgdir"/usr/sbin/* "$pkgdir/usr/bin/"
  rmdir "$pkgdir/usr/sbin"
}

# vim:set ts=2 sw=2 et:
