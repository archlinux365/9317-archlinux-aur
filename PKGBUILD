# Contributor: Francois Boulogne <fboulogne at april dot org>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=arxiv2bib
pkgver=1.0.8
pkgrel=2
pkgdesc="Get a BibTeX entry from an arXiv id number"
arch=('any')
url="http://nathangrigg.github.io/arxiv2bib/"
license=('BSD')
depends=('python')
makedepends=('python-setuptools')
checkdepends=('python-nose' 'python-mock')
source=($pkgname-$pkgver.tar.gz::https://github.com/nathangrigg/arxiv2bib/archive/$pkgver.tar.gz)
sha256sums=('82cbf2283249dcce1f9c1e9f8ddcd7222f472c28699eab9320f2ff0c00e53126')

build() {
  cd arxiv2bib-$pkgver
  python setup.py build
}

check() {
  cd arxiv2bib-$pkgver
  nosetests3
}

package(){
  cd arxiv2bib-$pkgver
  python setup.py install --root="${pkgdir}"
}
