# Maintainer: Kyle Shiue <shiue.kyle@gmail.com>
# Maintainer: Ilesh Thiada <ileshkt@gmail.com>
# Contributor: Imperator Storm <ImperatorStorm11@protonmail.com>
pkgname=ferium-git
_pkgname=ferium
pkgver=4.1.1.r2.gce2934f
pkgrel=1
pkgdesc="Fast and multi-source CLI program for managing Minecraft mods and modpacks from Modrinth, CurseForge, and Github Releases"
arch=("x86_64")
depends=("gcc-libs" "bzip2")
makedepends=("cargo" "git")
provides=("ferium")
conflicts=("ferium-gui-bin" "ferium-bin" "ferium-gui-git" "ferium")
url="https://github.com/gorilla-devs/ferium"
license=('MPL2')
source=('git+https://github.com/gorilla-devs/ferium')
sha256sums=('SKIP')
pkgver() {
    cd "$_pkgname"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare(){
    cd "$srcdir/ferium"
    cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}
build(){
    cd "$srcdir/ferium"
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo build --frozen --release --no-default-features
}

check() {
    cd "$srcdir/ferium"
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo test --frozen --no-default-features
}

package() {
    cd "$srcdir/ferium"
    install -Dm0755 -t "$pkgdir/usr/bin/" "target/release/ferium"
    chmod +x "target/release/ferium"
    "target/release/ferium" complete bash | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/bash-completion/completions/ferium
    "target/release/ferium" complete zsh | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/zsh/site-functions/_ferium
    "target/release/ferium" complete fish | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/fish/vendor_completions.d/ferium.fish
}
