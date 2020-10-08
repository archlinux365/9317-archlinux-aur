# Maintainer: Cyril <cyrwae[at]hotmail[dot]com>
pkgname=python-fake-bpy-module-2.90
_name=${pkgname#python-}
pkgver=20200907
pkgrel=1
pkgdesc="Collection of the fake Blender Python API module for the code completion."
arch=('x86_64')
url="https://github.com/nutti/fake-bpy-module"
license=('MIT')
groups=()
depends=()
makedepends=('python-setuptools')
optdepends=()
provides=('python-fake-bpy-module-2.90')
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
_py=cp37
source=(https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz)
noextract=()
md5sums=('72ef906ed6422fb8b31e59986b99fc13')

build() {
	cd "${_name}-${pkgver}"
    python setup.py build
}

package() {
	cd "${_name}-${pkgver}"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
    install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}" 'README.rst'
}
