# Maintainer: Thomas Weißschuh <thomas t-8ch de>

pkgname=needrestart
url=https://github.com/liske/needrestart
pkgdesc='Restart daemons after library updates.'
pkgver=3.3
pkgrel=1
source=("needrestart-${pkgver}.tar.gz::https://github.com/liske/needrestart/archive/v${pkgver}.tar.gz")
arch=(any)
license=('GPL')
options=(!emptydirs)
depends=(perl-module-find
         perl-term-readkey
         perl-proc-processtable
         perl-sort-naturally
         perl-module-scandeps
         perl-libintl-perl
)
optdepends=(
  'iucode-tool: for outdated microcode detection'
)

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make
}

prepare() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	sed -i -e 's|/usr/sbin|/usr/bin|' Makefile
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install
}

sha256sums=('738b6809415c2840cc78225ae81171d5b69c4b6f0d3f9c1746fbee8d5337bfe8')
