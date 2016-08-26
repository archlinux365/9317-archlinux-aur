# Maintainer: Anna Ivanova <kalterfx@gmail.com>

pkgname=withtool-git
pkgver=16.f1c5ce9
url="https://github.com/kalterfive/with"
pkgrel=1
pkgdesc="Program prefixing for continuous workflow using a single tool"
arch=(any)
license=('GPL3')

depends=(bash)

source=('with::git://github.com/kalterfive/with')
md5sums=('SKIP')

conflicts=('with')
provides=('with')

function pkgver() {
	cd 'with'
	echo "$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

function package() {
	cd 'with'
	DEST_DIR="$pkgdir" ./install.sh
}

