# Maintainer: Payet Guillaume <nvidiux@rungp.redirectme.net>
pkgname=nvidiux
pkgver=1.4.4
pkgrel=1
pkgdesc="(En)Python interface for overclock/underclock your nvidia gpu with proprietary driver - (FR)Interface en pyqt pour overclocker/underclocker les gpu nvidia avec le pilote proprio"
arch=(any)
url="https://github.com/RunGp/Nvidiux"
license=('GPL3')
depends=('gksu'
		 'python2-psutil'
		 'tk'
		 'libva-vdpau-driver'
		 'python2-pyqt4'
		 'python2-pyqtgraph'
)
package()
{
	cd "$srcdir/Nvidiux-1.4.4"
	cp -r usr $pkgdir
}
source=(https://github.com/RunGp/Nvidiux/archive/1.4.4.tar.gz)
md5sums=('307273c7a09499260fdaf6030fa6e65c')

