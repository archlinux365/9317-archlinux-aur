# Maintainer: Woomy4680-exe <github@woomy.ovh>
pkgname=kelpdot-bin
pkgver=2.1.6
pkgrel=1
pkgdesc="Simple dotfiles manager"
url="https://woomy4680-exe.github.io/kelp-docs/"
license=("MIT")
arch=("x86_64")
provides=("kelpdot")
options=("strip")
source=("https://github.com/Woomy4680-exe/kelp/releases/download/$pkgver/kelpdot-aur.tar.gz")
sha256sums=("80654fe079eafca885d5c34b50672ce178904c83ada30a52a6ba46fd9957910f")

package() {
    install -Dm755 kelpdot -t "$pkgdir/usr/bin/"
}
