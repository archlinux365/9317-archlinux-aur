# Maintainer: Bruce Zhang
pkgname=ykdl-git
pkgver=1.6.3.r122.53ace3d
pkgrel=1
pkgdesc="a video downloader focus on China mainland video sites."
arch=('any')
url="https://github.com/zhangn1985/ykdl"
license=('MIT')
depends=('python' 'python-m3u8' 'python-pycryptodome' 'python-urllib3' 'python-iso8601')
makedepends=('git' 'python-setuptools')
optdepends=(
	'nodejs: JavaScript runtime for DouyuTV'
	'gjs: JavaScript runtime for DouyuTV'
	'cjs: JavaScript runtime for DouyuTV'
)
provides=('ykdl')
conflicts=('ykdl')
source=("ykdl::git://github.com/zhangn1985/ykdl.git")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/ykdl"
	setVer=$(git describe --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')
	printf "%s" "${setVer#v}"
}

build() {
	cd "$srcdir/ykdl"
	python setup.py build
}

package() {
	cd "$srcdir/ykdl"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/ykdl/LICENSE.txt"
}
