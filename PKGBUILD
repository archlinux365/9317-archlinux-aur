# Contributor: Tomas Ostasevicius <t dot ostasevicius at gmail dot com>
# Maintainer: Jonas Lähnemann <jonas at pdi-berlin dot de>
# Maintainer: Joshua Taillon <jat255 AT gmail DOT com>
pkgname=python-hyperspy
pkgshort=hyperspy
pkgver=1.6.5
pkgrel=1
pkgdesc="Hyperspectral data analysis"
arch=('any')
url="http://hyperspy.org"
license=('GPL3')

depends=('python'
         'python-scipy>=1.1'
         'python-matplotlib>=3.1.0,<3.5'
         'python-numpy>=1.17.1'
         'python-traits>=4.5.0'
         'python-natsort'
         'python-requests'
         'python-tqdm>=4.9.0'
         'python-sympy'
         'python-h5py>=2.3'
         'python-dateutil>=2.5.0'
         'python-dask>2.1.0'
         'python-pint>=0.10'
         'python-numexpr'
         'python-pyaml'
         'python-prettytable'
         'python-dill'  # AUR
         'python-ipyparallel'  # AUR
         'python-scikit-image>=0.15'  # AUR
         'python-sparse'  # AUR
       # 'python-imageio'  # AUR (from scikit-image)
       # 'python-pywavelets' # AUR (from scikit-image)
       # 'python-tifffile>=2019.12.3'  # AUR (from scikit-image)        
       # 'python-numba'  # AUR (from python-sparse)
       # 'python-llvmlite' # AUR (from python-numba)
       # 'python-llvmlite-bin' # AUR (from python-numba, but require bin package to avoid version mismatches)
         )

optdepends=('python-scikit-learn: machine learning features'
            'python-hyperspy-gui-ipywidgets: GUI components for Jupyter' # AUR
            'python-hyperspy-gui-traitsui: GUI components for desktop'  # AUR
	    'python-blosc: mrcz file support'
            'cython: enables acceleration of certain operations (must be installed at package build time)' )

makedepends=('python-setuptools' )

replaces=('hyperspy')
conflicts=('hyperspy')
provides=('hyperspy')

source=(https://github.com/hyperspy/hyperspy/archive/v$pkgver.tar.gz)

package() {
  cd "$srcdir/$pkgshort-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

md5sums=('67aebe07b41f1bd945b0edaae0e8f976')
