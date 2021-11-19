# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Juliette Monsel <j_4321 at protonmail dot com>
pkgname=python-pynput
_name=${pkgname#python-}
pkgver=1.7.5
pkgrel=1
pkgdesc="Python library to monitor and control user input devices"
arch=('any')
url="https://github.com/moses-palmer/pynput"
license=('LGPL3')
depends=('python-xlib' 'python-six' 'python-evdev')
makedepends=('python-setuptools')
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz"
        'setup.patch')
sha256sums=('e6b7926dd162a883ff16f38e01720a930bbf2509146c9f1cdcecddd25288fb6e'
            'c519290a88baa3e15be4bb6cff4d665a020b9e0c8c1241749670d58a48b07e2c')

prepare() {
  cd "$_name-$pkgver"
  patch -Np1 -i $srcdir/setup.patch
}

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$_name-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  # Fix permissions
  find "$pkgdir" -type d -exec chmod -v 0755 {} \;
  find "$pkgdir" -type f -exec chmod -v 0644 {} \;
}
