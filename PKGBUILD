# Maintainer: Robin Candau <robincandau[at]protonmail[dot]com>

pkgname=ame-git
_pkgname=amethyst
_shortname="${pkgname%-git}"
pkgver=4.0.2.r576.5315b76
pkgrel=1
pkgdesc='A fast and efficient AUR helper (git version)'
arch=('x86_64' 'aarch64')
url="https://github.com/crystal-linux/${_pkgname}"
license=('GPL3')
provides=("${_shortname}")
conflicts=("${_shortname}")
depends=(
    'git'
    'pacman-contrib'
    'vim'
    'expac'
    'less'
)
makedepends=('cargo')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd "${_pkgname}"
    printf "%s.r%s.%s" "$(git tag | tail -1 | sed 's/^v//')" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "${srcdir}/${_pkgname}"
    cargo fetch --locked --target "${CARCH}-unknown-linux-gnu"
}

build() {
    cd "${srcdir}/${_pkgname}"
    export RUSTUP_TOOLCHAIN=nightly
    export CARGO_TARGET_DIR=target
    cargo build --frozen --release
}

package() {
    cd "${srcdir}/${_pkgname}"
    install -Dm 755 "target/release/${_shortname}" "${pkgdir}/usr/bin/${_shortname}"
    install -Dm 644 README.md "${pkgdir}/usr/share/doc/${_shortname}/README.md"
}
