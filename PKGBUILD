# Maintainer: Will Handley <wh260@cam.ac.uk> (aur.archlinux.org/account/wjhandley)
_modulename=py2nb
pkgname=python-$_modulename
pkgver=0.0.3
pkgrel=1
pkgdesc="Convert python scripts to jupyter notebooks"
arch=(any)
url="https://github.com/williamjameshandley/${_modulename}"
license=('GPL')
groups=()
depends=('jupyter-notebook')
makedepends=('python-setuptools')
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=("${url}/archive/${pkgver}.tar.gz")
sha256sums=('c05f44738a9a85568e3ef5e9742d2ccd8bfc7e8ae238f82596b3ebf30862bcf0')
package() {
  cd "$srcdir/$_modulename-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}
