# Maintainer: Serene-Arc <https://aur.archlinux.org/account/serene-arc>

_pkgname="bulk-downloader-for-reddit"
pkgname=python-bdfr-git
pkgver=v2.1.0.r9.g739f97e
pkgrel=1
pkgdesc="Bulk downloader for Reddit from development branch"
conflicts=('python-bdfr')
provides=('python-bdfr')
arch=('any')
url="https://github.com/aliparlakci/bulk-downloader-for-reddit"
depends=('python' 'python-setuptools')
makedepends=('git')
license=('GPL3')
source=("$_pkgname::git+https://github.com/aliparlakci/bulk-downloader-for-reddit.git#branch=development")
md5sums=('SKIP')

pkgver() {
	cd "$_pkgname"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
    cd "$_pkgname"
    python setup.py install --root="$pkgdir" --optimize=1 
}
