# Maintainer: mark.blakeney at bullet-systems dot net
# Original Maintainer: Jameson Pugh <imntreal@gmail.com>

_pkgname=skypeforlinux
pkgname=$_pkgname-stable-bin
pkgver=8.50.0.38
pkgrel=1
pkgdesc="Skype for Linux - Stable/Release Version"
arch=("x86_64")
url="http://www.skype.com"
license=("custom")
depends=("gtk3" "libxss" "gconf" "alsa-lib" "libxtst" "libsecret" "nss" "glibc>=2.28-4")
optdepends=("gnome-keyring")
makedepends=("asar")
conflicts=("$_pkgname" "$_pkgname-bin" "$_pkgname-preview-bin" "$_pkgname-beta-bin" "skype")
provides=("$_pkgname" "skype")
source=(
"https://repo.skype.com/deb/pool/main/s/$_pkgname/${_pkgname}_${pkgver}_amd64.deb"
)
sha256sums=('c64e27057a91cc006476d174f101a758eb917d4146078e0218f73f4c2e530abc')

package() {
  tar -xJC "$pkgdir" -f data.tar.xz
  install -d "$pkgdir/usr/share/licenses/$pkgname"
  mv "$pkgdir/usr/share/$_pkgname/LICENSES.chromium.html" \
    "$pkgdir/usr/share/licenses/$pkgname/"
  rm -rf "$pkgdir/opt"

  # Replace all 16px tray icons with 32px.
  _p="/usr/share/skypeforlinux/resources"
  cd "$pkgdir/$_p"
  asar extract app.asar _tmp
  cd _tmp/images/tray
  find . -iname '*@2x.png' | while read f; do
    cp $f ${f//@2x/}
  done
  cd "$pkgdir/$_p"
  asar pack _tmp app.asar
  rm -rf _tmp
}

# vim:set ts=2 sw=2 et:
