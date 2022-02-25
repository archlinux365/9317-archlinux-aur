# Maintainer: Jah Way <jahway603 at protonmail dot com>

pkgname=ansiwave-bin
_pkg=ansiwave
pkgver=1.5.0
pkgrel=1
pkgdesc="Client for ANSIWAVE BBS"
url="https://github.com/ansiwave/ansiwave"
arch=('x86_64')
license=('unlicense')
source=("$_pkg-$pkgver::$url/releases/download/$pkgver-linux/ansiwave"
        "https://raw.githubusercontent.com/ansiwave/ansiwave/master/UNLICENSE")
sha512sums=('3c959bc5caa61136f17f6179f70a125b162645c1296f2a0a1969d8dade0ef13eeb9d40d6ecde015c14ca761797cf0f92a6742b79e85eca9bd285f1778a97fed6'
            'aa647966e7fb62ffcd7bfc1e56a8ebe38e8384a36c14e07fec4ccf3be91ffa1b3bbd9798901fa7956056c26d124f067582366bdb9581db1f742291c86e64e39d')

package() {
  install -Dm755 "${srcdir}/$_pkg-$pkgver" "$pkgdir/opt/${_pkg}/ansiwave"
  install -Dm644 "${srcdir}/UNLICENSE" "$pkgdir/usr/share/licenses/${_pkg}/UNLICENSE"
 
  install -d "${pkgdir}/usr/bin"
  ln -s /opt/${_pkg}/ansiwave "${pkgdir}/usr/bin"
}
