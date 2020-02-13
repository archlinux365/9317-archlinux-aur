# Maintainer: Will Handley <wh260@cam.ac.uk> (aur.archlinux.org/account/wjhandley)
pkgname=polychord
pkgver='1.16'
pkgrel=1
pkgdesc="Next generation nested sampling"
arch=(any)
url="https://github.com/PolyChord/PolyChordLite"
groups=()
depends=('gcc-fortran' 'openmpi')
license=('custom')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=(
    "https://github.com/PolyChord/PolyChordLite/archive/40022f52d37b3bd74e2f99c0e59d014899d24fb4.tar.gz"
    
)

sha256sums=('6c5f9e66b53a419523e0e576af376fa71f82c54cc8b46fa9bba9e4869a383821')

package() {
    cd "${srcdir}/PolyChordLite-40022f52d37b3bd74e2f99c0e59d014899d24fb4"
    install -Dm644 LICENCE "$pkgdir/usr/share/licenses/$pkgname/LICENCE"
    make pypolychord
    CC=mpicc CXX=mpicxx python setup.py install --root="$pkgdir/" --optimize=1 
}

