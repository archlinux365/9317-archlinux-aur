# Maintainer: James P. Harvey <jamespharvey20 at gmail dot com>

pkgname=infiniband-diags
pkgver=2.1.0
pkgrel=3
pkgdesc='OpenFabrics Alliance diagnostic programs and scripts for InfiniBand subnets'
arch=('x86_64' 'i686')
url='https://www.openfabrics.org/index.php/overview.html'
license=('GPL2' 'custom:"OpenIB.org BSD"')
provides=('libibmad')
conflicts=('libibmad')
replaces=('libibmad')
depends=('opensm' 'glib2' 'perl')
makedepends=('python-docutils')
source=("https://github.com/linux-rdma/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('c9e43ccf633f65ee7b0b1dc709c97ffef6c6d2da260e2f488e592c7da52fabc4')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./autogen.sh
  ./configure --prefix=/usr \
              --sbindir=/usr/bin \
              --libexecdir=/usr/lib \
              --sysconfdir=/etc \
              --localstatedir=/var \
              --mandir=/usr/share/man
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
  install -Dm644 README "${pkgdir}/usr/share/docs/${pkgname}/README"
  chmod 644 "${pkgdir}/etc/infiniband-diags/ibdiag.conf"

  # Remove init.d script.  (rdma-ndd and its .service were moved upstream ito rdma-core.)
  rm -rf "${pkgdir}/etc/init.d"

  # 1.6.7 - 2.1.0 erroneously makes an empty /var/run directory
  rmdir "${pkgdir}/var/run"
  rmdir "${pkgdir}/var"
}
