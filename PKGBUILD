# Maintainer: Bruce Zhang <zttt183525594@gmail.com>
_pkgname=feeluown
pkgname=feeluown
pkgver=3.4b2
pkgrel=1
pkgdesc="FeelUOwn Music Player"
arch=('any')
url="https://github.com/cosven/FeelUOwn"
license=('GPL3')
depends=('python-qasync' 'python-pyqt5' 'mpv' 'python-beautifulsoup4' 'python-marshmallow' 'python-pycryptodome' 'python-requests' 'python-mutagen' 'python-fuzzywuzzy' 'python-opengl' 'python-janus')
makedepends=('python-setuptools' 'python-pip')
_name=${pkgname#python-}
source=(
	"https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
	"feeluown.desktop"
)
sha256sums=('3210fddeddf0016726b52e1012652fec07314b85ee858025b15645ac25f840f6'
            'f093cccd74e29115782b30fcda28fb0c3b935091673b50882b332c934ed56065')

build() {
	cd "$pkgname-$pkgver"
	LANG=en_US.UTF-8 python setup.py build
}

package() {
	cd "$pkgname-$pkgver"
	LANG=en_US.UTF-8 python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

	# Install battery packages
	PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps fuo-local
	PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps fuo-xiami
	PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps fuo-netease
	PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps fuo-qqmusic

	install -D -m644 "$srcdir/$pkgname-$pkgver/feeluown/feeluown.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/feeluown.png"
	install -D -m644 "$srcdir/feeluown.desktop" "$pkgdir/usr/share/applications/FeelUOwn.desktop"
}
