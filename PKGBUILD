# Maintainer: Fabien Dubosson <fabien.dubosson@gmail.com>
# Contributor: Francois Boulogne <fboulogne@april.org>

pkgname=paperwork
pkgver=1.0.2
pkgrel=1
pkgdesc='A tool to make papers searchable - scan & forget'
arch=('any')
url='https://github.com/jflesch/paperwork'
license=('GPL3')
depends=('pygobject2-devel' 'pygtk' 'python-pycountry'
         'python-poppler-qt5' 'python-pyinsane2' 'python-pyocr'
         'python-levenshtein' 'python-whoosh' 'python-pyenchant'
         'python-joblib' 'python-numpy' 'python-scipy' 'python-scikit-learn'
         'python-scikit-image' 'python-gobject' 'python-nltk' 'python-termcolor'
         'python-simplebayes' 'python-pypillowfight' 'python-cairo'
         'glade' 'gnome-icon-theme-symbolic' 'gnome-icon-theme')
makedepends=('python' 'python-setuptools' 'git')
optdeps=('cuneiform: alternativer OCR')
source=("paperwork-gui.tgz::https://github.com/jflesch/paperwork/archive/${pkgver}.tar.gz"
        "paperwork-backend.tgz::https://github.com/jflesch/paperwork-backend/archive/${pkgver}.tar.gz")
md5sums=('f150753ed7f97c02c32441a266956a76'
         '188b9befb1dcc85d91146eadc13fc4bd')
install=paperwork.install

build() {
  cd "${srcdir}/${pkgname}-backend-${pkgver}"
  python setup.py build

  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-backend-${pkgver}"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1

  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1
  install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
