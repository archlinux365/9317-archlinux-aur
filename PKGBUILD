# Maintainer: Alad Wenter <https://github.com/AladW>
pkgname=aurutils-git
pkgver=2.2.0.r16.gecdb75b
pkgrel=1
pkgdesc='helper tools for the arch user repository'
url='https://github.com/AladW/aurutils'
arch=('any')
license=('custom:ISC')
source=('git+https://github.com/AladW/aurutils')
sha256sums=('SKIP')
conflicts=('aurutils')
provides=("aurutils=${pkgver%%.r*}")
depends=('git' 'jq' 'expac' 'diffstat' 'pacutils' 'parallel' 'wget')
makedepends=('git')
optdepends=('bash-completion: bash completion'
            'devtools: aur-chroot'
            'vifm: build file interaction'
            'xdelta3: generate delta files')

pkgver() {
    cd aurutils
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/; s/-/./g'
}

build() {
    cd aurutils
    make DESTDIR="$pkgdir"
}

package() {
    cd aurutils
    make DESTDIR="$pkgdir" install
}
