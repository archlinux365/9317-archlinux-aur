# Maintainer: eolianoe <eolianoe [at] googlemail [dot] com>
# Co-Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>
# Contributor: Thomas Weißschuh <thomas t-8ch de>
# Contributor: Étienne Deparis <etienne [at] depar [dot] is>

pkgname=khal
pkgver=0.9.4
pkgrel=1
pkgdesc='CLI calendar application build around CalDAV'
arch=('any')
url='http://lostpackets.de/khal/'
license=('MIT')
makedepends=('python-setuptools-scm' 'python-sphinxcontrib-newsfeed')
depends=('python-urwid' "python-tzlocal>=1.0"
         "python-click>=3.2" 'python-configobj' "python-icalendar>=3.9.2" 'python-xdg'
         'python-pkginfo')
optdepends=('python-setproctitle' 'vdirsyncer')
checkdepends=('python-pytest' 'python-freezegun' 'vdirsyncer')
source=("https://lostpackets.de/khal/downloads/khal-${pkgver}.tar.gz")
sha256sums=('21aa1ac464383a515be9f18d6b06413d17116ef9353d5349211c540c4bd7996e')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py build

  cd "$srcdir/$pkgname-$pkgver/doc"
  make man PYTHONPATH="$srcdir/$pkgname-$pkgver"
}

check() {
  cd "$srcdir/$pkgname-$pkgver"

  # When using a clean chroot,
  # one has to choose a proper locale to run the tests
  if [ "${LANG}" == "C" ]; then
    LANG=$(locale -a | grep utf8 | head -n1) py.test
  else
    py.test
  fi
}

package() {
  cd "$srcdir/${pkgname}-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1

  install -D -m644 khal.conf.sample "${pkgdir}/usr/share/doc/${pkgname}/examples/khal.conf"
  install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  install -D -m644 doc/build/man/khal.1 "${pkgdir}/usr/share/man/man1/khal.1"

  # You can comment the following to disable zsh completion (if you do
  # not plan to use zsh for example)
  install -D -m644 misc/__khal "${pkgdir}/usr/share/zsh/site-functions/_khal"
}
