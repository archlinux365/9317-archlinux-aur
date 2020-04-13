# Maintainer: Zak Kohler <git@y2kbugger.com>

pkgname=dmenu-recent-aliases-git
pkgver="v1.0.0"
pkgrel=1
pkgdesc="Launch dmenu sorted based on a frequency of use"
arch=('any')
url="https://gitlab.com/y2kbugger-projects/scripts/dmenu-recent-aliases"
license=('MIT')
depends=('dmenu2')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+https://gitlab.com/y2kbugger-projects/scripts/dmenu-recent-aliases.git")
md5sums=('SKIP')

pkgver() {
    cd "${pkgname%-git}"
    git describe
}

package() {
    cd "${pkgname%-git}"
    make PREFIX="/usr" DESTDIR="$pkgdir/" install
    install -Dm644 -t "$pkgdir"/usr/share/licenses/$pkgname LICENSE
}
