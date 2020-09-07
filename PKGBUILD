# Maintainer: Sven Lechner <sven[dot]lechner[at]rwth-aachen[dot]de>
# Maintainer: Oleg Shparber <trollixx+aur@gmail.com>

pkgname="act-git"
_pkgname="act"
pkgver=0.2.5
pkgrel=1
pkgdesc='Run your GitHub Actions locally'
arch=('x86_64')
url='https://github.com/nektos/act'
license=('MIT')
provides=('act')
conflicts=('act')
depends=('docker')
makedepends=('go' 'git')
source=("act::git+https://github.com/nektos/act.git")
sha256sums=('SKIP')

build() {
    export GOPATH="$srcdir"/gopath
    cd "$srcdir/$_pkgname"
    make build
}

package() {
    # Install binary.
    install -Dm755 "$srcdir/$_pkgname/dist/local/act" "$pkgdir/usr/bin/act"

    # Install license.
    install -Dm644 "$srcdir/$_pkgname/LICENSE" "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
