# Maintainer: Anna Ivanova <kalterfx@gmail.com>

pkgname=withtool
pkgver=1.0
url="https://github.com/kalterfive/with"
pkgrel=1
pkgdesc="Program prefixing for continuous workflow using a single tool"
arch=(any)
license=('GPL3')

depends=(bash)

source=("with::git://github.com/kalterfive/with.git#tag=v$pkgver")
md5sums=('SKIP')

function package() {
	cd 'with'
	DEST_DIR="$pkgdir" ./install.sh
}

