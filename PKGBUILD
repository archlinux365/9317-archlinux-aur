# Maintainer: <dave.f.kleinschmidt@gmail.com>

pkgname=pandoc-xnos
pkgver=2.3.0
pkgrel=1
pkgdesc="Library code for the pandoc-fignos/eqnos/tablenos filters."
url="https://github.com/tomduck/pandoc-xnos"
depends=('python-pandocfilters' 'pandoc-attributes' 'python-psutil')
license=('GPL')
arch=('any')
source=("https://github.com/tomduck/pandoc-xnos/archive/${pkgver}.tar.gz")
md5sums=('401f922e0708dc9db8de076b48387c8b')

build() {
    cd "$srcdir/pandoc-xnos-${pkgver}"
    python setup.py build
}

package() {
    cd "$srcdir/pandoc-xnos-${pkgver}"
    python setup.py install --root="$pkgdir" --optimize=1 
}
