# Maintainer: mark.blakeney at bullet-systems dot net
# Original Maintainer: Jameson Pugh <imntreal@gmail.com>

_pkgname=skypeforlinux
pkgname=$_pkgname-stable-bin
pkgver=8.83.0.408
pkgrel=1
pkgdesc="Skype for Linux - Stable/Release Version"
arch=("x86_64")
url="http://www.skype.com"
license=("custom")
depends=("gtk3" "libxss" "alsa-lib" "libxtst" "libsecret" "nss"
         "glibc>=2.28-4")
optdepends=("org.freedesktop.secrets: keyring/password support"
            "libappindicator-gtk3: systray icon support")
conflicts=("$_pkgname" "$_pkgname-bin" "$_pkgname-preview-bin"
           "$_pkgname-beta-bin" "skype")
provides=("$_pkgname" "skype")
install=install.sh
source=(
"https://repo.skype.com/rpm/stable/${_pkgname}_${pkgver}-1.x86_64.rpm"
)
sha256sums=('f6dc153980f74b3b75241b2c4d0c1c866391963778af5d96fa0aa28b24a693c2')

package() {
  cd $pkgdir
  bsdtar -xf $srcdir/${_pkgname}_${pkgver}-1.x86_64.rpm
  rm -rf "$pkgdir/usr/lib/.build-id"
  install -d "$pkgdir/usr/share/licenses/$pkgname"
  mv "$pkgdir/usr/share/$_pkgname/LICENSES.chromium.html" \
     "$pkgdir/usr/share/licenses/$pkgname/"
}

# vim:set ts=2 sw=2 et:
