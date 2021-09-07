# Maintainer: Oystein Sture <oysstu a.t gmail.com>
# Contributor: 

pkgname=python-imageio-ffmpeg
pkgver=0.4.5
pkgrel=1
pkgdesc="FFMPEG wrapper for Python"
arch=("any")
license=("BSD")
url="https://github.com/imageio/imageio-ffmpeg"
depends=('python' 'ffmpeg')
makedepends=('python-setuptools')
source=("https://github.com/imageio/imageio-ffmpeg/archive/v${pkgver}.tar.gz"
	"pip_requirement.patch")
sha256sums=('28ce2c625bbf71476a6e0840de98850a3696697809e18952befca7dc1c9cb10a'
            '596d2c8a2cdbe157fd9da8f440075c8827c68f3595ac6106af74d802730b83d1')

prepare() {
    cd "imageio-ffmpeg-${pkgver}"
    patch --forward --strip=1 --input="${srcdir}/pip_requirement.patch"
}

build() {
    cd "imageio-ffmpeg-${pkgver}"
    python setup.py build
}

package() {
    cd "imageio-ffmpeg-${pkgver}"
    python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/python-imageio-ffmpeg/LICENSE"
}
