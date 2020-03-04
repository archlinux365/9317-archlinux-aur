#Submiter: Hector Mtz-Seara (hseara#at#gmail#com)
pkgname=python-mdanalysis
pkgver=0.20.1
pkgrel=1
pkgdesc="An object-oriented python toolkit to analyze molecular dynamics trajectories generated by CHARMM, Gromacs, NAMD, LAMMPS, or Amber."
url="http://www.mdanalysis.org/"
license=("GPL")
arch=('x86_64')
depends=('python-numpy' 'cython')
optdepends=('python-biopython: to use all MDAnalysis functions'
            'python-matplotlib: to use all MDAnalysis functions'
            'python-joblib: to use all MDAnalysis functions'
            'python-griddataformats: to use all MDAnalysis functions'
            'python-scipy: to use all MDAnalysis functions'
	    'python-netcdf4: to operate on AMBER binary trajectories'
            'python-networkx: for analysis of lipid leaflets via MDAnalysis.analysis.leaflet'
            'python-mmtf: to add support for The macromolecular transmission format (MMTF)')

source=(https://github.com/MDAnalysis/mdanalysis/archive/release-$pkgver.tar.gz)
sha256sums=('9f4c20332d7b575ba8cda22922cf1105da155fe4b7a9c3eba0cda01fb0a1d5b6')

build() {
  cd $srcdir/mdanalysis-release-$pkgver/package
  python setup.py build
}

package(){
  cd $srcdir/mdanalysis-release-$pkgver/package
  python setup.py install --root=$pkgdir --optimize=1
}
