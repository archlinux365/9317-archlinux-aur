# Maintainer: johncena141 <johncena141@protonmail.com>
pkgname='chad_launcher-git'
_pkgname='chad_launcher'
pkgver='r68.03ef7b8'
pkgrel=1
pkgdesc='GNU/LINUX GAMING UNLEASHED!'
arch=('x86_64')
url='https://gitlab.com/Gnurur/chad_launcher'
license=('GPL3')
depends=(python python-gobject gtk3)
makedepends=(pkgconf git)
source=('chad_launcher.desktop'
    'git+https://gitlab.com/Gnurur/chad_launcher.git')
md5sums=('9eec2ab6826db351825ab1c8f1919b53'
    'SKIP')

pkgver() {
    cd "$srcdir/$_pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$srcdir/$_pkgname"
    python "setup.py" build
}

package() {
    cd "$srcdir/$_pkgname"
    python "setup.py" install --root="$pkgdir" --optimize=1 --skip-build
    install -Dm644 "$srcdir/chad_launcher.desktop" "$pkgdir/usr/share/applications/chad_launcher.desktop"
}
