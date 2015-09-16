# Maintainer: Gabriel Magno <gabrielmagno1@gmail.com>

_pkgname=wordcloud
pkgname=python2-word_cloud
pkgver=1.1.3
pkgrel=1
pkgdesc="A little word cloud generator in Python"
arch=('any')
url="https://github.com/amueller/word_cloud"
license=('Apache')
depends=('python2' 'python2-pillow' 'python2-numpy')
source=("https://pypi.python.org/packages/source/w/$_pkgname/$_pkgname-$pkgver.tar.gz")

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

sha256sums=('9926d6497035ef297b30c81ec45eb3babb40b46ba09834fe23c9a1e720ede4f1')

# vim:set ts=2 sw=2 et:
