# Maintainer: ValdikSS <tfeayush@gmail.com>

pkgname=shotpy
pkgver=0.1
pkgrel=1
pkgdesc="Python script to upload pictures or screenshots to Imgur."
arch=('any')
url="https://github.com/AyushBhat/shotpy"
license=('GPL')
depends=('curl' 'grep' 'scrot' 'python>=3.6' 'libnotify' 'xclip')
optdepends=('libnotify: for desktop notifications'
            'scrot: for making screenshots'
            'xclip: for copying screenshot URLs to clipboard')
install='shotpy.install'
source=('git+https://github.com/AyushBhat/shotpy.git'
        'shotpy.desktop'
        'shotpy.png')
md5sums=('SKIP'
         '459431a977061e56894315ce151d9bef'
         '3780c9f2183f7d4705ab86ab077e3885')

prepare() {
  cd "$srcdir/$_pkgname"

  sed -i 's~$HOME/Pictures/imgur.png~/usr/share/pixmaps/shotpy.png~' shotpy.py
}

package() {
  cd "$srcdir/$_pkgname"
  install -Dm644 "$srcdir/shotpy.png" "$pkgdir/usr/share/pixmaps/shotpy.png"
  install -Dm644 "$srcdir/shotpy.desktop" "$pkgdir/usr/share/applications/shotpy.desktop"
  install -Dm755 shotpy.py "$pkgdir/usr/bin/shotpy"
}
