#Automatically generated by pip2arch on 2014-11-26
# Maintainer Simon Legner <Simon.Legner@gmail.com>

pkgname=python-pydub
pkgver=0.9.5
pkgrel=1
pkgdesc="Manipulate audio with an simple and easy high level interface"
url="http://pydub.com"
depends=('python' )
license=('MIT')
arch=('any')
source=('https://pypi.python.org/packages/source/p/pydub/pydub-0.9.5.tar.gz')
md5sums=('8cba7c87ad0e5b053eee0b8eb18421ea')

build() {
    cd $srcdir/pydub-0.9.5
    python setup.py build
}

package() {
    cd $srcdir/pydub-0.9.5
    python setup.py install --root="$pkgdir" --optimize=1 
}
