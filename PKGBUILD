# Maintainer: Huki <gk7huki@gmail.com>
# Contributor: Svitozar Cherepii <razotivs@gmail.com>

pkgname=rvgl-io-clockworks
pkgver=18.0415
pkgrel=1
pkgdesc="Additional classic clockwork cars for RVGL."
url='https://rvgl.re-volt.io'
arch=('any')
license=('custom')
depends=('rvgl-bin')
makedepends=('git')
groups=('rvgl-community')
source=("rvgl_io_clockworks"::git+https://gitlab.com/re-volt/rvio/clockworks_classic.git#tag=${pkgver})
sha256sums=('SKIP')

package() {
    cd "$srcdir/rvgl_io_clockworks"
    find * -type f -exec install -Dm644 {} "$pkgdir/opt/rvgl/{}" \;
}
