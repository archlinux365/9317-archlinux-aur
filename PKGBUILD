# Maintainer: timescam <rex.ky.ng at gmail dot com>

_pkgname=pfetch
pkgname=$_pkgname-git
pkgver=r142.6218551
pkgrel=1
pkgdesc="A pretty system information tool written in POSIX sh."
arch=(any)
url="https://github.com/dylanaraps/$_pkgname"
license=('GPL3')
makedepends=('git')
provides=("$_pkgname")

source=("$_pkgname::git+https://github.com/dylanaraps/$_pkgname.git")
md5sums=('SKIP')

pkgver() {
            cd "$srcdir/$_pkgname"
            echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package () {
            install -Dm755 "$srcdir/$_pkgname/pfetch" "$pkgdir/usr/bin/pfetch"
}
