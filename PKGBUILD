# Maintainer: Maciej Dems <maciej.dems@p.lodz.pl>
pkgname=plask
pkgver=2020.04.10
pkgrel=1
pkgdesc="Photonic LAser Simulation Kit: a comprehensive tool for numerical
analysis of broad range of physical phenomena in photonic devices"
url="https://plask.app"
arch=('x86_64')
license=('custom')
depends=('boost-libs' 'expat' 'openmp' 'intel-mkl' 'lapack' 'qt5-declarative' 'qt5-tools'
         'python-numpy' 'python-matplotlib' 'python-lxml' 'python-yaml' 'pyside2')
optdepends=('python-h5py: for saving results to files'
            'python-scipy: for scientific tools'
            'python-jedi: for Python hints in GUI'
            'python-paramiko: for remote computation launching'
            'ipython: for interactive shell')
source=("plask-$pkgver.tar.xz::https://get.plask.app/packages/plask-$pkgver-1-x86_64.pkg.tar.xz")
sha256sums=('bef27a0f46f5825c400ccc9210172fa6aa5195e8ce49377c3a10e16aa052541b')
noextract=("plask-$pkgver.tar.xz")

package() {
    cd "$pkgdir"
    tar xJf "$srcdir/plask-$pkgver.tar.xz" --exclude='.*'
}
