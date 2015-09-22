pkgname=sslmate
pkgver=1.5.0
pkgrel=1
pkgdesc="Buy and manage SSL certs from the command line"
arch=('any')
url="https://sslmate.com/"
license=('MIT')
depends=(perl perl-uri perl-term-readkey perl-libwww perl-lwp-protocol-https)
optdepends=('python2-boto: Route 53 DNS approval support')
source=("https://packages.sslmate.com/other/sslmate-${pkgver}.tar.gz") 
sha1sums=('ac68c98bb13b6f0f9518f7c448acc39799779470')

package() {
	cd $srcdir/${pkgname}-${pkgver}
	make install PREFIX=/usr LIBEXECDIR=/usr/lib/sslmate DESTDIR=${pkgdir}
	install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
