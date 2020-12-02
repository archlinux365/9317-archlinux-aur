# Contributor: Jonas Lähnemann <jonas at pdi-berlin dot de>
# Maintainer: Jonas Lähnemann <jonas at pdi-berlin dot de>
# Maintainer: Joshua Taillon <jat255 AT gmail DOT com>
#
pkgname=python-hyperspy-gui-ipywidgets
pkginst=hyperspy_gui_ipywidgets
pkgver=1.3.0
pkgrel=2
pkgdesc="ipywidgets (jupyter) GUI elements for HyperSpy" 
arch=('any')
url="https://github.com/hyperspy/hyperspy_gui_ipywidgets"
license=('GPLv3')

depends=('python-hyperspy'
         'python-ipywidgets'
         'python-link-traits')

#optdepends=()

makedepends=('python-setuptools')

replaces=('hyperspy-gui-ipywidgets')
conflicts=('hyperspy-gui-ipywidgets')
provides=('hyperspy-gui-ipywidgets')

source=(https://github.com/hyperspy/hyperspy_gui_ipywidgets/archive/v$pkgver.tar.gz>
#source=(https://github.com/hyperspy/hyperspy_gui_ipywidgets/archive/master.zip)
sha256sums=('e09b4d01070b20dec7ff9328cdd9c961cd64fdc86d726e891eb066166bcc9257')
#sha512sums=("SKIP")

#pkgver() {
#  cd "${srcdir}/${pkginst}-master/"
#  rel_ver=$(grep -E "^__version__" ${pkginst}-master/version.py | awk '{print $3}' | tr -d \")
#  commit=$(git rev-parse --short HEAD)
#  echo "${rel_ver}.${commit}"
#}

package() {
  cd "$srcdir/$pkginst-$pkgver"
#  cd "$srcdir/${pkginst}-master"
  python setup.py install --root="$pkgdir/" --optimize=1
}
