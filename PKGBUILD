# Maintainer: Dct Mei <dctxmei@gmail.com>

pkgname=grub-theme-tela-git
_pkgname="${pkgname%-*}"
pkgver=20191003
pkgrel=1
pkgdesc="Tela grub theme"
arch=(any)
url="https://github.com/vinceliuice/grub2-themes"
license=('GPL3')
depends=(grub)
makedepends=(git)
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+https://github.com/vinceliuice/grub2-themes.git")
md5sums=(SKIP)

pkgver() {
    cd "$srcdir/$_pkgname"
    git log -1 --format='%cd' --date=short | tr -d -- '-'
}

package() {
    name="${pkgdesc%% *}"
    resolution="4k"
    cd "$srcdir/$_pkgname"
    install -d "$pkgdir/usr/share/grub/themes/$name"
    install -d "$pkgdir/usr/share/grub/themes/$name/icons"
    install -Dm 644 common/* "$pkgdir/usr/share/grub/themes/$name"
    install -Dm 644 "backgrounds/$resolution/background-${_pkgname##*-}.jpg" "$pkgdir/usr/share/grub/themes/$name/background.jpg"
    install -Dm 644 "assets/assets-tela/icons-$resolution"/* "$pkgdir/usr/share/grub/themes/$name/icons"
    install -Dm 644 "assets/assets-tela/select-$resolution"/* "$pkgdir/usr/share/grub/themes/$name"
    install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
