# Maintainer: Alexandre Petitjean <alpetitjean at gmail dot com>

pkgname=mopidy-scrobbler
pkgver=1.1.1
pkgrel=1
pkgdesc="Mopidy extension for scrobbling played tracks to Last.fm"
arch=('any')
url="http://www.mopidy.com"
license=('APACHE')
depends=(
	'mopidy>=0.18'
	'python2-pykka>=1.1'
	'python2-pylast>=0.5.7'
	'python2-setuptools')
makedepends=('python2')
provides=('mopidy-scrobbler')
source=("https://github.com/mopidy/${pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('940506ab279dfa432071584914ea9c9f')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
