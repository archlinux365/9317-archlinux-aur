pkgname=charliecloud
pkgver=0.14
pkgrel=1
pkgdesc="Lightweight user-defined software stacks for high-performance computing"
arch=('any')
license=('Apache-2.0')
depends=('python')
makedepends=(
	'bash>=4.1'
	'rsync'
	'python-sphinx'
	'python-sphinx_rtd_theme'
)
optdepends=(
	'docker>=17.03'
)
source=("https://github.com/hpc/charliecloud/releases/download/v${pkgver}/charliecloud-${pkgver}.tar.gz")
sha1sums=('f8a19ff388195d03c1b6971a9baf8c02be799f78')
url="https://hpc.github.io/charliecloud"
options+=('!emptydirs')

_distdir="charliecloud-${pkgver}"

build() {
	cd "$srcdir/$_distdir"
	./configure --prefix=/usr
	make
}

check() {
	cd "$srcdir/$_distdir/test"
#        make test-quick
}

package() {
        cd "$srcdir/$_distdir"
        make DESTDIR=${pkgdir} install
}
