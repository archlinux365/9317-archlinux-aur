# Maintainer: getzze <getzze at gmail dot com>

pkgname='python-django-versatile-imagefield'
_name='django-versatileimagefield'
pkgver=2.2
pkgrel=1
pkgdesc="Drop-in replacement for django's ImageField, provides a flexible, intuitive and easily-extensible interface"
arch=(any)
url="https://github.com/respondcreate/django-versatileimagefield"
license=('MIT')
options=(!emptydirs)
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('6569d5c3e13c69ab8912ba5100084aa5abcdcffb8d1f5abc085b226e7bbd65b3')
depends=('python-django' 'python-pillow' 'python-django-rest-framework')
makedepends=('python-setuptools')

prepare() {
  cd "$srcdir/${_name}-${pkgver}"
  rm -rf tests
}

package() {
  cd "$srcdir/${_name}-${pkgver}"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  python setup.py install --root="$pkgdir/" --optimize=1
}
