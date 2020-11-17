# Maintainer: Andreas Tennert <mail at andreas-tennert dot de>
pkgname='lcarsde-logout'
pkgver=20.1
pkgrel=1
pkgdesc="lcarsde app for logout, shutdown, restart, ..."
arch=('any')
url="https://lcarsde.github.io"
license=('MIT')
groups=('lcarsde')
depends=('python>=3.8' 'python-gobject' 'gtk3' 'python-psutil')
source=("$pkgname-$pkgver.tar.gz::https://github.com/lcarsde/logout/archive/$pkgver.tar.gz")
md5sums=('7c8d1f5016620da141f9dbaf3aa9c3f4')

package() {
  cd "logout-$pkgver"

  mkdir -p "$pkgdir/usr/bin/"
  cp src/lcarsde-logout.py "$pkgdir/usr/bin/"
  cp -r resources/* "$pkgdir/"
}
