# Maintainer: Simon Hanna <simon dot hanna AT serve-me DOT info>

pkgname=('python-nose2' 'python2-nose2')
pkgver=0.6.4
pkgrel=1
pkgdesc="The next generation of nicer testing for python"
arch=(any)
url="https://github.com/nose-devs/nose2"
license=('BSD')
options=(!emptydirs)
source=("https://github.com/nose-devs/nose2/archive/${pkgver}.tar.gz")
sha256sums=('56831c4caa47e2939f555b33e2c44170c1fab4d13526af838d9d80bef9e091b6')
makedepends=('python-setuptools' 'python2-setuptools')

package_python-nose2() {
  depends=('python' 'python-six')
  cd "$srcdir/nose2-$pkgver"
  install -D -m644 license.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  python setup.py install --root="$pkgdir/" --optimize=1
}

package_python2-nose2() {
  depends=('python2' 'python2-six')
  cd "$srcdir/nose2-$pkgver"
  install -D -m644 license.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  python2 setup.py install --root="$pkgdir/" --optimize=1
  rm "$pkgdir/usr/bin/nose2"
}

# vim:set ts=2 sw=2 et:
