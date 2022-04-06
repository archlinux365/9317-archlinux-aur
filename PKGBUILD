# Maintainer:  Marcell Meszaros < marcell.meszaros AT runbox.eu >
# Contributor: jyantis <yantis@yantis.net>

pkgname=python2-colorama-git
pkgver=0.4.5.pre.0.4.1.r101.gaff7fb2
pkgrel=1
pkgdesc='Simple cross-plaform colored terminal text in Python 2'
arch=('any')
url='https://github.com/tartley/colorama'
license=('BSD')
depends=('python2')
makedepends=('git' 'python2-setuptools')
source=('git+https://github.com/tartley/colorama.git')
sha256sums=('SKIP')
provides=('python2-colorama')
conflicts=('python2-colorama')

pkgver() {
  cd colorama
  set -o pipefail
  _gitversion=$( git describe --long | sed -r 's/([^-]*-g)/r\1/;s/-/./g' ||
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)" )

  if [ -f "colorama/__init__.py" ]; then
      printf "%s.%s" "$(grep -R "__version__ =" colorama/__init__.py | awk -F\' '{print $2}')" $_gitversion | sed 's/-/./g'
  else
    printf "%s" $_gitversion
  fi
}

build() {
  cd colorama

  # Patch any #!/usr/bin/python to #!/usr/bin/python2
  for file in $(find . -name '*.py' -print); do
    sed -r -i 's_^#!.*/usr/bin/python(\s|$)_#!/usr/bin/python2_' $file
    sed -r -i 's_^#!.*/usr/bin/env(\s)*python(\s|$)_#!/usr/bin/env python2_' $file
  done

  python2 setup.py build
}

check() {
  cd colorama
  python2 setup.py test --verbose
}

package() {
  cd colorama

  python2 setup.py install --root="${pkgdir}" --optimize=1

  # Install License
  install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Install Documentation
  install -D -m644 README.rst "${pkgdir}/usr/share/doc/${pkgname}/README.rst"
}
