# Maintainer: Mark Cohen <m@markpcohen.com>

_pkgname=admiral
pkgname=${_pkgname}-git
pkgver=35
pkgrel=1
pkgdesc='Executes multiple programs concurrently to generate output for bars'
arch=('i686' 'x86_64')
url="https://github.com/sector-f/admiral"
license=('custom:BSD')
makedepends=('git' 'cargo')
optdepends=('lemonbar: for displaying information generated by admiral')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("git://github.com/sector-f/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	git rev-list --count HEAD
}

build() {
	cd "$srcdir/$_pkgname"
	cargo build --release
}

package() {
	cd "$srcdir/$_pkgname"
	install -D target/release/${_pkgname} "${pkgdir}/usr/bin/${_pkgname}"
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
