# Maintainer: ConfuZzled <theconfuzzleddude@gmail.com>
pkgname='lunar-magic'
pkgver=3.01
pkgrel=2
pkgdesc='Level editor for Super Mario World'
url='https://fusoya.eludevisibility.org/lm/index.html'
arch=(any)
depends=(wine)
makedepends=(unzip)
source=(https://fusoya.eludevisibility.org/lm/download/lm301.zip lunar-magic lunar-magic.desktop lunar-magic.png)
noextract=('lm301.zip')
md5sums=('d1b14e7dc71487ba39192411a767970e'
         'b962597de58d7341a7b5fbacc264f933'
         '21524585562254d81b837b13e2012e2e'
         '2d08cd1860ee8cc1bf82bcc0dca4ba70')
license=('custom')


package() {
  cd $srcdir
  install -d -m755 $pkgdir/usr/share/lunar-magic
  unzip lm301.zip -d $pkgdir/usr/share/lunar-magic
  sed -n '/The Lunar Magic Mario/,/ use or presence./p' $pkgdir/usr/share/lunar-magic/readme.txt >> LICENSE

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm755 lunar-magic $pkgdir/usr/bin/lunar-magic
  install -Dm644 lunar-magic.desktop $pkgdir/usr/share/applications/lunar-magic.desktop
  install -Dm644 lunar-magic.png $pkgdir/usr/share/pixmaps/lunar-magic.png
  
  
  find $pkgdir/usr/share/lunar-magic -type d -exec chmod 755 "{}" \;
  find $pkgdir/usr/share/lunar-magic -type f -exec chmod 644 "{}" \;
}
