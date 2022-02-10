# Maintainer: jose <jose1711 [at] gmail (dot) com>

pkgname=outfox_bin
pkgver=5.3.0_20220209_4.13.0_alpha
read main date sub codename <<< $(echo "${pkgver}" | sed 's/_/ /g')
pkgrel=1
pkgdesc="fork of open source rhythm game engine StepMania"
arch=('i686' 'x86_64')
url="https://projectmoon.dance/index.php"
license=('Apache')
depends=('libusb-compat' 'ffmpeg' 'lua')
makedepends=(gendesk)
source=("https://github.com/TeamRizu/OutFox/releases/download/OF${sub}/OutFox-${main}-${codename}-${sub}-amd64-Linux-date-${date}.tar.gz"
        "outfox.sh"
        "outfox.png")

prepare() {
  cd $srcdir
  gendesk -f -n --pkgname outfox --pkgdesc "${pkgdesc}" --exec "outfox" --categories "Game;AudioVideo;ArcadeGame"
}


package() {
  install -dm755 $pkgdir/usr/share/outfox $pkgdir/usr/share/doc/outfox
  cd $srcdir/OutFox-${main}-${codename}-${sub}-amd64-date-${date}
  cp -R . $pkgdir/usr/share/outfox
  mv $pkgdir/usr/share/outfox/Docs/* $pkgdir/usr/share/doc/outfox
  rmdir $pkgdir/usr/share/outfox/Docs
  install -Dm755 $srcdir/outfox.sh $pkgdir/usr/bin/outfox
  install -Dm755 $srcdir/outfox.desktop $pkgdir/usr/share/applications/outfox.desktop
  install -Dm755 $srcdir/outfox.png $pkgdir/usr/share/pixmaps/outfox.png
}
md5sums=('b6aa503b2d95bc9622c161b672fce7ad'
         '3948603b54b512544490928f7acd07c9'
         '2b26841e2f3580e5bf2f63218834ec41')
