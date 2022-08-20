# Maintainer: Karim Vergnes <me@thesola.io>

pkgname=intel-ivsc-firmware
_pkgname=ivsc-firmware
pkgver=r2.764bd6e
pkgrel=1
pkgdesc="Intel Vision Sensing Controller firmware"
arch=('any')
url="https://github.com/intel/ivsc-firmware"
license=('custom')
depends=()
makedepends=('git')
provides=('intel-ivsc-firmware')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd $_pkgname
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "$srcdir/$_pkgname"
    install -dm755 "$pkgdir/usr/lib"
    cp -rT "firmware" "$pkgdir/usr/lib/firmware"
}
