# Maintainer: lilydjwg <lilydjwg@gmail.com>

_pkgname=cld2
_reponame=chromium-compact-language-detector
pkgname=python-${_pkgname}-git
pkgver=20141111
pkgrel=6
pkgdesc='C++ library and Python bindings for detecting language from UTF8 text, extracted from the Chromium browser'
arch=('i686' 'x86_64')
url='https://github.com/mikemccand/chromium-compact-language-detector'
license=('BSD3')
depends=('cld2-git' 'python')
makedepends=('git')
provides=("python-${_pkgname}=0.2")
replaces=('python-cld2-hg')
source=('git+https://github.com/mikemccand/chromium-compact-language-detector')
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_reponame"
  git log -1 --pretty='%cd' --date=short | tr -d '-'
}

build() {
  cd "$srcdir/$_reponame"
  sed -i 's,^CLD2_PATH.*,CLD2_PATH = "/usr/include/cld2",' setup.py setup_full.py
  python setup.py build
  python setup_full.py build
}

package() {
  cd "$srcdir/$_reponame"
  python setup.py install --root=$pkgdir --optimize=1
  python setup_full.py install --root=$pkgdir --optimize=1
}

