# $Id: PKGBUILD 142583 2015-10-01 16:09:32Z fyan $
# Maintainer: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Maintainer: Jakub Klinkovský <j.l.k@gmx.com>
# Maintainer: Thomas Schneider <maxmusterm@gmail.com>

pkgname=python2-simplemediawiki
pkgdesc="Extremely low-level wrapper to the MediaWiki API"
pkgver=1.2.0_b2
pkgrel=3
arch=('any')
url="https://github.com/ianweller/python-simplemediawiki"
license=('LGPL')
depends=('python')
source=("$pkgname-$pkgver.tar.gz::https://github.com/ianweller/python-simplemediawiki/archive/${pkgver/_/}.tar.gz")
md5sums=('7c10122a1a884a902ac7fda5f01f4986')

package() {
  cd "python-simplemediawiki-${pkgver/_/}"
  python2 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
