# Maintainer: TheCynicalTeam <TheCynicalTeam@github.com>
# Contributor: TheCynicalTeam <TheCynicalTeam@github.com>
pkgname=i3session
pkgver=2020.6.27
pkgrel=1
pkgdesc="Remembers what's running in your i3 workspaces by saving a session file"
arch=('any')
url="https://github.com/TheCynicalTeam/$pkgname"
license=('GNU General Public License v3.0')
depends=(python2-xdg python-i3-py i3-wm xorg-xprop)
makedepends=('git')
source=("https://github.com/TheCynicalTeam/$pkgname/archive/$pkgver-$pkgrel.tar.gz")
sha256sums=('SKIP')

package() {
  cd "$srcdir/$pkgname-$pkgver-$pkgrel"
  sed -i '1 s:/python:/env python2:' "$pkgname"
  install -Dm755 $pkgname "$pkgdir/usr/bin/$pkgname"
}
