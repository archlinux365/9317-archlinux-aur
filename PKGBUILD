# Maintainer: xsmile <sascha_r gmx de>

pkgname=myetherwallet
_pkgname=etherwallet
pkgver=3.21.0
pkgrel=1
pkgdesc='Free, open-source, client-side tool for easily & securely interacting with the Ethereum network'
arch=('any')
depends=('xdg-utils')
url='https://github.com/kvhnuke/etherwallet'
license=('MIT')
source=("$url/releases/download/v$pkgver/$_pkgname-v$pkgver.zip"{,.sig}
        'myetherwallet.desktop'
        'myetherwallet'
        'LICENSE')
sha256sums=('b8cb3e55602f73db55435eac68ba546c7cc24fa475fcab2c2a07db560c93e3c3'
            'SKIP'
            '9fb1e89ff5a138b8e2577e3d82b0c1b9f938c38f846c01d8cadd357c6eb4ee23'
            'a723f0ba81f225d7a7bd083db89c50673e1fd11bb608d11c72efe5b9283a2524'
            'c834d53db7382f39e38e49e72ca27c79353e3be00e47e40705c2e5b9be964b57')
validpgpkeys=('2FCA4A1E3AF4278F7AD3B7637F059C0F7B9A12F0')

package() {
  cd "$srcdir/$_pkgname-v$pkgver"

  # Lib directory
  install -d "$pkgdir/opt/$pkgname"
  cp -a css fonts images js *.html "$pkgdir/opt/$pkgname"
  # Executable
  install -Dm755 "$srcdir/$pkgname" -t "$pkgdir/usr/bin"

  # License
  install -Dm644 "$srcdir/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
  # Menu entry
  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications"
  install -Dm644 "images/fav/android-chrome-192x192.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
}
