# Maintainer: Alfonso Saavedra "Son Link" <sonlink.dourden@gmail.com>
pkgname=pqmusic
_gitname=PQMusic
pkgver="1.1.1"
pkgrel=1
pkgdesc="A minimalistic and easy to use audio player for download and use"
arch=('any')
url="https://github.com/son-link/PQMusic"
license=('GPL3')
depends=('python' 'python-pyqt5' 'qt5-multimedia' 'python-mutagen' 'python-magic' 'dbus-python')
makedepends=('python-setuptools')
source=("${url}/archive/refs/tags/v.${pkgver}.tar.gz")
sha256sums=('edf1779e21732e11eb4937318c89d011085269303d04761618926e005dc28c8f')

build() {
	cd "${srcdir}/${_gitname}-v.${pkgver}"
    python setup.py build
}

package() {
	cd "${srcdir}/${_gitname}-v.${pkgver}"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
	install -Dm644 "bin/io.sonlink.pqmusic.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
	install -Dm644 "bin/io.sonlink.pqmusic.svg" "$pkgdir/usr/share/pixmaps/$pkgname.svg"
}
