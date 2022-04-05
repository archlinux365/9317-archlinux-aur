# Maintainer : Guillaume Horel <guillaume dot horel at gmail dot com>
# Contributor :  Kr1ss  $(tr +- .@ <<<'<kr1ss+x-yandex+com>')
# Contributor : Giovanni Scafora <giovanni@archlinux.org>
# Contributor : Simon Sapin <simon dot sapin at exyr dot org>
# Contributor : Michal Marek <reqamst at gmail dot com>
# Contributor : Rick W. Chena <stuffcorpse@archlinux.us>
# Contributor : Andrea Fagiani <andfagiani _at_ gmail dot com>


pkgname=python-cssutils
_name="${pkgname#python-}"

pkgver=2.4.0
pkgrel=1

pkgdesc='CSS Cascading Style Sheets library for Python'
arch=('any')
url="https://github.com/jaraco/$_name"
license=('LGPL3' 'GPL3')

makedepends=('python-build' 'python-installer' 'python-setuptools')
depends=('python')

changelog=CHANGES.rst
source=("https://files.pythonhosted.org/packages/source/c/$_name/$_name-$pkgver.tar.gz")
sha256sums=('2d97210a83b0a3fe1e4469f5ff9a6420b078572035188b1bab7103c3a36dc89b')


build() {
  cd "$_name-$pkgver"
  python -m build --wheel --no-isolation
}

package() {
  cd "$_name-$pkgver"
  python -m installer --destdir="$pkgdir" dist/*.whl
  install -Dm644 README.rst -t "$pkgdir/usr/share/doc/$pkgname/"
  install -Dm644 examples/* -t "$pkgdir/usr/share/doc/$pkgname/examples/"
}

check(){
  cd "$_name-$pkgver"
  pytest cssutils/tests 
}

# vim: ts=2 sw=2 et ft=PKGBUILD:
