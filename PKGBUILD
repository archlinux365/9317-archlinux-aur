# Maintainer: Avimitin <avimitin at gmail dot com>
# Credit: Copy from https://aur.archlinux.org/packages/nvui and made some fixes

pkgname=nvui-git
pkgver=v0.1.4.v2.r6.g87f61c0
pkgrel=1
pkgdesc='A modern frontend for Neovim'
arch=('x86_64')
url='https://github.com/rohit-px2/nvui'
license=('MIT')
depends=(
    'boost'
    'fmt'
    'msgpack-cxx'
    'qt5-base'
    'qt5-svg'
    'hicolor-icon-theme'
)
makedepends=(
    'git'
    'cmake'
    'ninja'
    'catch2'
)
source=(
    "$pkgname::git+$url.git"
    nvui.desktop
    nvui.sh
)
sha256sums=(
	'SKIP'
	'529e087f9ea5d212c05e1cfd7da51f5e5718acc186a1925f937707c641ebd509'
	'987f46b07c32efbb5f1ef4783204d15b6d8be32833cb7732d4752eb4fb5b9a08'
)

pkgver() {
  cd "$pkgname"
  git describe --long --tag | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$pkgname"
    cmake -B build -S . -DCMAKE_BUILD_TYPE=Release -G Ninja
    cmake --build build --target nvui --config Release
}

package() {
    # https://github.com/rohit-px2/nvui/blob/main/BUILDING.md#packaging-executable
    install -Dm755 nvui.sh "$pkgdir/usr/bin/$pkgname"
    install -Dm644 nvui.desktop -t "$pkgdir/usr/share/applications"
    cd "$pkgname"
    find assets vim -type f -exec install -Dm 644 "{}" "${pkgdir}/opt/$pkgname/{}" \;
    install -Dm755 build/nvui -t "$pkgdir/opt/$pkgname/bin"
    install -Dm644 assets/appicon.png "$pkgdir/usr/share/icons/hicolor/128x128/apps/$pkgname.png"
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
