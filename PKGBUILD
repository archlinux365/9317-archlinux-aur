# Maintainer: Cedric Meury <cedric@meury.com>

pkgname=my-agile-pomodoro
pkgver=4.1.1
pkgrel=1
pkgdesc='myAgilePomodoro - Time management software that brings you the best of Agile practices and the Pomodoro Technique, written in Java'
arch=('any')
url="http://sourceforge.net/projects/mypomodoro/"
license=('GPL3')
depends=('java-runtime')
source=('my-agile-pomodoro'
    'my-agile-pomodoro.desktop'
    'http://downloads.sourceforge.net/project/mypomodoro/myAgilePomodoro%20'$pkgver'/myAgilePomodoro-'$pkgver'.jar'
    'https://a.fsdn.com/allura/p/mypomodoro/icon')
md5sums=('72971e5f5c4d8e6b88a9ea5eb16dc220'
         '88bf0240b89e66d20af837bca4cb96d4'
         '91c6afbf892b4ad585225dd96cbe2c00'
         'a3a2b89f4d03c31f261f01ac1c8e3d3c')

package() {
  install -Dm 644 $srcdir/icon $pkgdir/usr/share/pixmaps/$pkgname.png
  install -Dm 644 $srcdir/myAgilePomodoro-$pkgver.jar $pkgdir/usr/share/java/$pkgname/$pkgname.jar
  install -Dm 644 $pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  install -Dm 755 $pkgname $pkgdir/usr/bin/$pkgname
}

