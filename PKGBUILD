# Maintainer: Simon Brulhart <simon@brulhart.me>

pkgname=python-taxi-zebra
pkgver=2.0.1
pkgrel=1
pkgdesc="Zebra backend for Taxi"
arch=('any')
license=('custom')
url="https://github.com/sephii/taxi-zebra"
depends=('python-requests' 'python-six')
makedepends=('python' 'python-setuptools')
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/sephii/taxi-zebra/archive/$pkgver.tar.gz"
  "https://raw.githubusercontent.com/sephii/taxi/master/LICENSE"
)
sha512sums=('8ed30413984e94ce2c716c9e778736f770ab50145d18a0c6a883b11f3a8fb3cd1ac1a795530603e728d4626d36ba607e72dd95e0e2c5f779b1aebdab7e030cd2'
            '87e4e0e9f65b92db1a3f84823427b0870ae01675fa6e631a8c2e2d89eb12ee19d6011b4f4e74f6d4ca30868010206ef0ddd0b24a814c24b84bc41a5e68864dd4')

build() {
  cd "$srcdir/taxi-zebra-$pkgver"
  python setup.py build
}

package() {
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

  cd "$srcdir/taxi-zebra-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1
}
