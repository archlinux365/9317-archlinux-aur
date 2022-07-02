# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: z3oxs <z3ox1s@protonmail.com>
pkgname=ghost-git
pkgver=1.1.2.1
pkgrel=1
pkgdesc="Simple tool to take screenshots using your terminal"
arch=(x86_64 i686)
url="https://github.com/z3oxs/ghost.git"
license=('MIT')
depends=(cairo libxi libxinerama libxrandr libxcursor libglvnd)
makedepends=(git go)
provides=(ghost)
conflicts=(ghost)
source=("git+$url")
md5sums=('SKIP')
sha256sums=('SKIP')

build() {
    cd "$srcdir/ghost"
    go build .
}

package() {
    cd "$srcdir/ghost"
    install -Dm755 ghost "${pkgdir}/usr/bin/ghost"
    install -D LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
