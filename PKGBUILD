# Maintainer: Hans-Nikolai Viessmann <hv15 AT hw.ac.uk>

pkgname=oilshell
pkgver=0.6.0
pkgrel=1
pkgdesc='Oil, a new unix shell'
arch=('x86_64')
url='http://www.oilshell.org/'
depends=('readline')
license=('APACHE')
options=(!strip)
source=("https://www.oilshell.org/download/oil-${pkgver}.tar.xz")
sha256sums=('141e3a5c1997a696d65747966978aaa38921d77e303aad9e77b4ab4aedab84b7')

build() {
	cd "oil-$pkgver"
	./configure --prefix=/usr --with-readline
	make
}

package() {
	cd "oil-$pkgver"

    # the install script doesn't support DESTDIR
    install -Dm755 _bin/oil.ovm "$pkgdir/usr/bin/oil.ovm"
    ln -s /usr/bin/oil.ovm "$pkgdir/usr/bin/osh"
    ln -s /usr/bin/oil.ovm "$pkgdir/usr/bin/oshc"
}
