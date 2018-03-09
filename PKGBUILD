# Maintainer: Andreas Baumann <mail@andreasbaumann.cc>

pkgname=shmux
pkgver=1.0.2
pkgrel=1
pkgdesc="shmux - executing the same command on many hosts in parallel."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/shmux/shmux"
license=('custom:3-clause BSD')
source=("https://github.com/shmux/shmux/archive/v1.0.2.tar.gz")
sha512sums=('8ef0c586d9fc5523877aa062d928a1cbd50dfe75967f7bd5347d6671274c82e427af1447948f175efdb8c7b57e07f7a3ea4dc301c36bb3ca42e1f7c241fb4e2c')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	./configure --prefix=/usr
	
	make
}

package(){
	cd "${srcdir}/${pkgname}-${pkgver}"

	make DESTDIR="${pkgdir}" install

	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
