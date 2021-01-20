# $Id: PKGBUILD 57440 2011-10-27 20:16:15Z lcarlier $
# Contributor: Hector <hsearaDOTatDOTgmailDOTcom>


pkgname=('python-mdtraj')
pkgver=1.9.5
pkgrel=1
pkgdesc='A modern, open library for the analysis of molecular dynamics trajectories'
url='http://mdtraj.org/'
license=("LGPL")
arch=('x86_64')
depends=() 
makedepends=('python-setuptools' 'cython')
options=('!libtool')
source=("https://github.com/SimTk/mdtraj/archive/${pkgver}.tar.gz")
sha256sums=('ed2a72b85e765024f8d533da26dad026944d0e385b04af7b66572f676ef92040')

#Using gcc8 as compiler due to compilation problems
#export CC=gcc-8
#export CXX=g++-8


build() {
  msg2 "Building mdtraj"
  cd "${srcdir}/mdtraj-${pkgver}"
  python setup.py build
}

package_python-mdtraj() {
  depends=('python-numpy')
  optdepends=('python-scipy: For loading and saving AMBER netcdf formatted trajectories.'
              'python-pandas: Some functionality, including mol2 parsing, requires pandas.'
              'python-nose: To run tests.'
              'python-scripttest: To run some of the tests with nose "nosetest -v mdtraj".'
              'python-networkx: Required for some of the functions'
              'python-pytables: Working with HDF5 formatted trajectories requires the PyTables package.')
  msg2 "Installing mdtraj"
  cd "${srcdir}/mdtraj-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build

  # Remove left over directories from distribute utils.
  find ${pkgdir} -type d -name "__pycache__" -exec rm -r {} \; -prune
}

