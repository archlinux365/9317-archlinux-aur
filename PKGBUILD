# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Your Name <youremail@domain.com>
pkgname=binserve-git
_pkgname=binserve
pkgver=0.1.0.r28.g4bee064
pkgrel=1
epoch=
pkgdesc="A blazingly fast static web server with routing, templating, and security in a single binary you can set up with zero code - written in Rust."
arch=("any")
url="https://github.com/mufeedvh/binserve"
license=('GPL')
groups=()
depends=()
makedepends=("cargo")
checkdepends=()
optdepends=()
provides=()
conflicts=("binserve")
replaces=()
backup=()
options=()
install=
changelog=
source=("git+https://github.com/mufeedvh/binserve")
noextract=()
md5sums=("SKIP")
validpgpkeys=()

pkgver() {
    cd "$_pkgname"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$_pkgname"
    cargo build --release
}

package() {
    cd "$_pkgname"
    mkdir -p "$pkgdir/usr/bin"
    cp "target/release/binserve" "$pkgdir/usr/bin"
}
