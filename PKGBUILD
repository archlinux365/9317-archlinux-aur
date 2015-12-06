# Maintainer: Nikola Milinković <nikmil@gmail.com>

pkgbase=python2-guessit-git
pkgname=('python2-guessit-git' 'python-guessit-git' 'python-guessit-git-docs')
pkgver=2.0.r191.bbf35e0
pkgrel=1
_gitname="guessit"
_gitroot="git+https://github.com/wackou/guessit"
pkgdesc="A library for guessing information from video files."
arch=(any)
url="https://github.com/wackou/guessit"
license=('LGPL3')
makedepends=('git' 'python2-setuptools' 'python-setuptools' 'python2-pytest-runner' 'python-pytest-runner' 'python-sphinx')
#checkdepends=('python-pytest' 'python2-pytest' 'python-pytest-benchmark' 'python2-pytest-benchmark' 'python-yaml' 'python2-yaml')
source=("${_gitname}::${_gitroot}")
md5sums=('SKIP')
options=(zipman)

pkgver () {
  cd ${_gitname}
  printf "2.0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

#check () {
#  cd "${srcdir}/${_gitname}"
#  python2 setup.py test
#  python setup.py test
#}

package_python2-guessit-git() {
  depends=(
    'python2-babelfish>=0.5.5' 'python2-rebulk>=0.6.4'
    'python2-regex' 'python2-dateutil>=2.1'
    'python2-argparse' 'python2-ordereddict'
  )
  conflicts=('python2-guessit')
  provides=('python2-guessit=${pkgver}')
  pkgdesc="A library for guessing information from video files. (python2 version)"
  optdepends=('python-guessit-git-docs: package manpages')
  
  cd "${srcdir}/${_gitname}"
  python2 setup.py install --root="$pkgdir/" --optimize=1
  mv "${pkgdir}/usr/bin/guessit" "${pkgdir}/usr/bin/guessit2"
}

package_python-guessit-git() {
  depends=(
    'python-babelfish>=0.5.5' 'python-rebulk>=0.6.4'
    'python-regex' 'python-dateutil'
  )
  conflicts=('python-guessit')
  provides=('python-guessit=${pkgver}')
  pkgdesc="A library for guessing information from video files. (python3 version)"
  optdepends=('python-guessit-git-docs: package manpages')
  
  cd "${srcdir}/${_gitname}"
  python3 setup.py install --root="$pkgdir/" --optimize=1
  mv "${pkgdir}/usr/bin/guessit" "${pkgdir}/usr/bin/guessit3"
  ln -s "${pkgdir}/usr/bin/guessit3" "${pkgdir}/usr/bin/guessit"
}

package_python-guessit-git-docs() {
  pkgdesc="Manpages for python-guessit-git."

  cd "${srcdir}/${_gitname}/docs"
  make man
  install -v -m755 -d "${pkgdir}/usr/share/man/man1"
  install -v -m644 ./_build/man/guessit.1 "${pkgdir}/usr/share/man/man1/"
}
