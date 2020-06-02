# Maintainer: Ronan Pigott <rpigott@berkeley.edu>

pkgname=qencoder
_name="${pkgname#python-}"
pkgver=1.2
pkgrel=1
pkgdesc='A Qt video encoder GUI for open codec formats'
url='https://github.com/natis1/qencoder'
arch=('any')
license=('GPL3')
source=(
	"https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
	"qencoder.desktop"
)
makedepends=('python-setuptools')
depends=(
	'python' 'python-pyqt5' 'python-psutil'
	'python-opencv-python' 'python-scenedetect' 'python-tqdm'
	'python-scipy' 'python-numpy'
	'libvpx' 'aom' 'ffmpeg' 
)
sha256sums=('5e49a41b531ce97257e10e3ab80a1faa54d5f922a296c5b56ac9912a50d73200'
            '3e9786a3fe1b7d6e3798fcf07cdd1e5db29e125cdc4c559dc095a8b1a143b1a5')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
	install -Dm644 qencoder.desktop "$pkgdir/usr/share/applications/qencoder.desktop"
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
