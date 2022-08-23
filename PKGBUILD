# Maintainer: Aditya Mishra <https://github.com/pegvin/csprite/issues>
pkgname=csprite-git
pkgver=0.1.0.r148.g57d60d2
pkgrel=1 # Update if you changed something but that is so minor change you don't want to change the version
pkgdesc="a tiny pixel art editor"
arch=('i686' 'x86_64')
url="https://github.com/pegvin/csprite"
license=('MIT')
depends=(sdl2)
makedepends=(git make scons pkg-config python python-pillow python-numpy)
optdepends=()
provides=('csprite-git')
conflicts=('csprite' 'csprite-git' 'csprite-bin')
source=(git+https://github.com/pegvin/csprite.git)
sha512sums=(SKIP)

pkgver() {
	cd csprite
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd csprite
    git submodule update --init --recursive
	make generate
	make release
}

package() {
    cd csprite
	install -Dm644 data/csprite.desktop "$pkgdir/usr/share/applications/csprite.desktop"
	install -Dm644 data/icon-512.png "$pkgdir/usr/share/icons/csprite.png"
	install -Dm755 csprite "$pkgdir/usr/bin/csprite"
}
