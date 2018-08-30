# Maintainer: Marco Pompili <aur AT emarcs DOT org>
# Contributor: Giorgio Gilestro crocowhile@gmail.com
# Contributor: Martchus <martchus@gmx.net>
# Contributor: Mladen Milinkovic <maxrd2@smoothware.net>

pkgname=sphinxbase
pkgver=5prealpha
pkgrel=10
pkgdesc='Common library for sphinx speech recognition.'
url='http://cmusphinx.sourceforge.net/'
arch=('i686' 'x86_64')
license=('BSD')
makedepends=('bison' 'swig')
depends=('python2' 'python' 'lapack' 'libpulse') # not sure if libsamplerate is needed 'libsamplerate'
source=("http://downloads.sourceforge.net/project/cmusphinx/${pkgname}/${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('f72bdb59e50b558bed47cc2105777200d2b246a0f328e913de16a9b22f9a246f')
options=('!libtool')

prepare() {
  cd "${pkgname}-${pkgver}"

  msg2 "Reconfiguring project for current version of Automake"
  autoreconf -ivf > /dev/null

  cd ..

  cp -R "${pkgname}-${pkgver}" "${pkgname}-${pkgver}-py2"
  cp -R "${pkgname}-${pkgver}" "${pkgname}-${pkgver}-py3"
}

build() {
  cd "${pkgname}-${pkgver}-py2"

  msg2 "Building Sphinxbase with Python 2 bindings..."
  ./configure --prefix=/usr
  make

  cd "../${pkgname}-${pkgver}-py3"
  msg2 "Building Sphinxbase with Python 3 bindings..."
  export PYTHON=/usr/bin/python2
  ./configure --prefix=/usr
  make
}

package() {
  cd "${pkgname}-${pkgver}-py2"

  msg2 "Installing Sphinxbase with Python 2 bindings"
  make DESTDIR="${pkgdir}/" install

  msg2 "Installing Python 3 bindings"
  cd "../${pkgname}-${pkgver}-py3/swig"
  make DESTDIR="${pkgdir}/" install

  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" \
                "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
