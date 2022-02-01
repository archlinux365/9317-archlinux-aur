# Maintainer: mehalter <micah at mehalter.com>
# Contributor: xsmile <>

pkgname=myetherwallet
_pkgname=MyEtherWallet
pkgver=6.4.5
_pkgversuffix=
pkgrel=1
pkgdesc='Client-side interface for interacting with the Ethereum blockchain'
arch=(any)
depends=(xdg-utils)
url=https://github.com/MyEtherWallet/MyEtherWallet
license=(MIT)
source=($url/releases/download/v$pkgver$_pkgversuffix/$_pkgname-v$pkgver$_pkgversuffix.zip{,.sig}
        myetherwallet.desktop
        myetherwallet
        LICENSE)
sha256sums=('7afadec54bd0a5c706088a16f31be0db04ce21ce39b17de66805c51a6a52a309'
            '93f3a7cb4066a45705b92fa5b4cbb64b646a67760494ab4bf6460996e0862b26'
            'b49e3bb0cded23c40820281a110d2baed5d1f7aa036635108323d0133e0e30e9'
            '814f489e4e6e0ce172513febf58d6821e7b77cd2e644152aec4888228fe41da5'
            '42039cf560b0b2b35463f33656d9639c8f9b98e9a4f57723dbab0a90a4ad8ad6')
validpgpkeys=('2FCA4A1E3AF4278F7AD3B7637F059C0F7B9A12F0')

prepare() {
  # Remove JS source maps
  find . -name "*.map" -delete
  # Remove development versions of JS files
  find . -name "*.dev.js" -delete
}

package() {
  # Lib directory
  install -d "$pkgdir"/opt/$pkgname
  cp -a css fonts img js workbox-* *.css *.html *.js *.png "$pkgdir"/opt/$pkgname
  # Executable
  install -Dm755 "$srcdir"/$pkgname -t "$pkgdir"/usr/bin
  # License
  install -Dm644 "$srcdir"/LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
  # Menu entry and icon
  install -Dm644 "$srcdir"/$pkgname.desktop -t "$pkgdir"/usr/share/applications
  install -Dm644 favicon.png "$pkgdir"/usr/share/pixmaps/$pkgname.png
}
