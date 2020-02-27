# Maintainer: RubenKelevra

_pkgname=htmllistparse
pkgname=python-htmllistparse
pkgver=0.5.2
pkgrel=2
pkgdesc="Python parser for Apache/nginx-style HTML directory listing"
url="https://github.com/gumblex/htmllisting-parser"
depends=('python'
         'python-beautifulsoup4'
	 'python-html5lib'
         'python-requests'
         'python-fusepy')
license=('MIT')
arch=('any')
source=('htmllistparse-0.5.2.zip::https://github.com/gumblex/htmllisting-parser/archive/4e70b5ab7be69e33fc0b5d0bf14bfc67f3611780.zip')
b2sums=('db0ce06f73da9d0bad01807b39180417402863e21054da50cf9d0373494e82d54f0000a746011c0695a7c46114867e177c39b50e1284925c97be20224439aeef')

build() {
    mv $srcdir/htmllisting-parser-4e70b5ab7be69e33fc0b5d0bf14bfc67f3611780 $srcdir/${_pkgname}-${pkgver}
    cd $srcdir/${_pkgname}-${pkgver}
    python setup.py build
}

package() {
    cd $srcdir/${_pkgname}-${pkgver}
    python setup.py install --root="$pkgdir" --optimize=1 
}
