# Maintainer: Twann <tw4nn at disroot.org>

pkgname=tblock
pkgver=2.5.0
pkgrel=1
provides=("$pkgname")
pkgdesc="An anti-capitalist ad-blocker that uses the hosts file"
url="https://tblock.codeberg.page"
arch=("any")
license=("GPL3")
makedepends=(
        "make"
        "gzip"
        "python>=3"
        "python-build"
        "python-installer"
        "python-setuptools"
        "python-wheel"
)
depends=(
        "python-urllib3"
        "python-requests"
        "python-colorama"
)
source=(
        "${pkgname}-${pkgver}.tar.gz::https://codeberg.org/tblock/tblock/archive/${pkgver}.tar.gz"
)
sha512sums=(
	"f9cf2089c3ce2be08b250cbe451171ab21bd96315d21fd4a748776c22695cbd5328f3efa1d3c90641f15f8008ee6bdb8c89a113b4727aa44147cbec9370ccf44"
)
backup=("etc/tblock.conf")

build()
{
        cd "$srcdir/$pkgname"
        make
}

package()
{
        cd "$srcdir/$pkgname"
        # Install the package
        make install ROOT="$pkgdir"
        # Install the configuration file
        make install-config ROOT="$pkgdir"
}
