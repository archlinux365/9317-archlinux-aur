# Maintainer: Jack Lupino <electricalmemory83720x0@protonmail.com>
pkgname=freezer-appimage
pkgver='1.1.11'
pkgrel=2
pkgdesc="An unofficial client for Deezer (AppImage version)"
arch=('x86_64')
url="https://files.freezer.life"
license=('GPL')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!strip)
install=
changelog=
source=("Freezer-$pkgver.AppImage::$url/0:/PC/$pkgver/Freezer-$pkgver.AppImage" "freezer.desktop")
noextract=("Freezer-$pkgver.AppImage")
md5sums=('47ed3f6333a924fc385177bd8793b250' '38c0866994d9a7cb94635cc7a38343ed')

package() {
    install -d -m755 "${pkgdir}/opt/${pkgname}"

    cp -L $srcdir/Freezer-$pkgver.AppImage ${pkgdir}/opt/${pkgname}
    chmod +x ${pkgdir}/opt/${pkgname}/Freezer.AppImage

    install -d -m755 $pkgdir/usr/share/applications/ 
    cp -L $srcdir/freezer.desktop $pkgdir/usr/share/applications/

    install -d -m755 "${pkgdir}/usr/bin/"
    ln -s "/opt/${pkgname}/Freezer.AppImage" "${pkgdir}/usr/bin/freezer"
}
