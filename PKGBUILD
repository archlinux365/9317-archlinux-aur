# Maintainer: Christian Hesse <mail@eworm.de>
# Contributor: Jason A. Donenfeld <Jason@zx2c4.com>

pkgname=wireguard-dkms
pkgver=1.0.20210606
pkgrel=1
pkgdesc='next generation secure network tunnel - module sources'
arch=('x86_64')
url='https://www.wireguard.com/'
license=('GPL')
depends=('dkms')
provides=('WIREGUARD-MODULE')
validpgpkeys=('AB9942E6D4A4CFC3412620A749FC7012A5DE03AE') # Jason A. Donenfeld <Jason@zx2c4.com>
source=("https://git.zx2c4.com/wireguard-linux-compat/snapshot/wireguard-linux-compat-${pkgver}.tar"{.xz,.asc})
sha256sums=('3f5d990006e6eabfd692d925ec314fff2c5ee7dcdb869a6510d579acfdd84ec0'
            'SKIP')

package() {
	cd wireguard-linux-compat-${pkgver}/

	make -C src/ \
		DESTDIR="${pkgdir}/" \
		DKMSDIR="/usr/src/wireguard-${pkgver}/" \
		dkms-install
}
