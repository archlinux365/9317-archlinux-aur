# Maintainer: roger <rogerduran at gmail>

pkgname=qtile-python2
pkgver=0.10.4
pkgrel=1
pkgdesc="A full-featured, pure-Python tiling window manager."
arch=('any')
url="http://www.qtile.org"
license=('MIT')
depends=('python2' 'python2-trollius' 'pango' 'python2-xcffib>=0.4.0' 'python2-cairocffi>=0.7')
makedepends=('python2-distribute')
optdepends=('python2-setproctitle: change the process name to qtile')
provides=('qtile')
conflicts=('qtile')
install=${pkgname}.install
source=("https://github.com/qtile/qtile/archive/v${pkgver}.tar.gz")
md5sums=('ead419b2f2a62fb923d947564b3b3cc9')

package() {
  cd "$srcdir/qtile-$pkgver/"
  # license
  msg "Copying license..."
  install -D -m 644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE

  msg "Copying default config..."
  install -D -m 644 libqtile/resources/default_config.py $pkgdir/usr/share/doc/$pkgname/default_config.py

  msg "Copying desktop file..."
  install -D -m 644 resources/qtile.desktop $pkgdir/usr/share/xsessions/qtile.desktop

  # install
  msg "Running setup.py"
  python2 setup.py install --root=${pkgdir} --prefix=/usr
}
