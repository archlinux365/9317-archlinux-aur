# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Michal Hybner <dta081@gmail.com>

pkgname=libosip2
epoch=1
pkgver=5.0.0
pkgrel=1
pkgdesc="oSIP is an implementation of SIP"
arch=('x86_64' 'i686')
url="http://www.gnu.org/software/osip/"
license=('LGPL')
depends=(glibc)
options=(!emptydirs)
validpgpkeys=('34C3985D068879312FE23C8BB5902A3AD90A5421')
source=(https://ftp.gnu.org/gnu/osip/libosip2-${pkgver/_/-}.tar.gz)
sha256sums=('18a13c954f7297978e7bf1a0cdadde7c531e519d61a045dae304e054f3b2df03')

build() {
  cd "$srcdir"/libosip2-${pkgver/_/-}/

  patch -p1 <<EOF
diff -wbBur libosip2-3.1.0/src/osip2/port_sema.c libosip2-3.1.0.my/src/osip2/port_sema.c
--- libosip2-3.1.0/src/osip2/port_sema.c	2007-06-05 14:17:50.000000000 +0400
+++ libosip2-3.1.0.my/src/osip2/port_sema.c	2008-10-22 17:47:37.000000000 +0400
@@ -22,6 +22,14 @@
 #include <stdlib.h>
 #include <stdio.h>

+union semun
+{
+     int val;
+     struct semid_ds *buf;
+     unsigned short int *array;
+     struct seminfo *__buf;
+};
+
 #include <osip2/internal.h>

 #include <osip2/internal.h>
EOF

  ./configure --prefix=/usr --disable-semaphore --enable-sysv
  make
}

package() {
  cd "$srcdir"/libosip2-${pkgver/_/-}/
  make DESTDIR="$pkgdir" install
}
