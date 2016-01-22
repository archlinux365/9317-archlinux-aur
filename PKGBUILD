# Contributor: Artem Alabin <kirpicheff@yandex.ru>
# Contributor: K0n24d <konrad AT knauber DOT net>
pkgname=urbackup-server
pkgver=1.4.12
pkgrel=1
pkgdesc="Client Server backup system"
arch=('i686' 'x86_64')
url="http://www.urbackup.org/"
license=('GPL')
makedepends=('gcc-libs' 'gcc' 'make')
depends=('crypto++' 'fuse')
source=("https://hndl.urbackup.org/Server/${pkgver}/urbackup-server-${pkgver}.tar.gz")
install=('urbackup.install')
md5sums=('c27d1da5a37db2ecfc7bced20e2d995e')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	./configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc --localstatedir=/var --enable-packaging --with-mountvhd
	make
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"	

	make DESTDIR=$pkgdir install

	install -Dm755 "${srcdir}/${pkgname}-${pkgver}"/urbackup-server.service \
		"${pkgdir}"/usr/lib/systemd/system/urbackup-server.service
	install -Dm755 "${srcdir}/${pkgname}-${pkgver}"/urbackup-server-firewalld.xml \
		"${pkgdir}"/usr/lib/firewalld/services/urbackup-server-firewalld.xml
	install -Dm755 "${srcdir}/${pkgname}-${pkgver}"/logrotate_urbackup_srv \
		"${pkgdir}"/etc/logrotate.d/urbackup_srv
	install -D "${srcdir}/${pkgname}-${pkgver}"/docs/start_urbackup_server.1 \
		"${pkgdir}"/usr/share/man/man1/start_urbackup_server.1
	install -D "${srcdir}/${pkgname}-${pkgver}"/docs/urbackup_srv.1 \
		"${pkgdir}"/usr/share/man/man1/urbackup_srv.1
}
# vim: ts=2
