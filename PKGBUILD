# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=cl-local-time
_pkgname="${pkgname#cl-}"
pkgver=1.0.6.r76.ga177eb9
pkgrel=1
pkgdesc='Time manipulation library for Common Lisp'
arch=('any')
url='https://local-time.common-lisp.dev/'
license=('BSD')
depends=('common-lisp' 'cl-asdf' 'cl-fad')
makedepends=('git')
#checkdepends=('cl-hu-dwim-stefil')
_commit='a177eb911c0e8116e2bfceb79049265a884b701b'
source=(
  "$pkgname::git+https://github.com/dlowe-net/local-time#commit=$_commit"
  'use-system-zoneinfo.patch'
)
b2sums=('SKIP'
        '216aa11cfd4e2ecb072d37f7d23aa5f369e376606ac5fd3846924902946ff3726893e87b26a339037b638673d2e15059956c4a71de84e86585e8569c4817a05a')

pkgver() {
  cd "$pkgname"

  git describe --tags | sed -e 's/^v//' -e 's/-/.r/' -e 's/-/./g'
}

prepare() {
  cd "$pkgname"

  patch -p1 -i ../use-system-zoneinfo.patch
}

# TODO cl-postgres & hu.dwim.stefil
# TODO documentation
package() {
  cd "$pkgname"

  # create directories
  install -vd \
    "$pkgdir/usr/share/common-lisp/source/$_pkgname" \
    "$pkgdir/usr/share/common-lisp/systems"

  # library
  cp -vr \
    src test \
    "$_pkgname.asd" \
    "$pkgdir/usr/share/common-lisp/source/$_pkgname"

  pushd "$pkgdir/usr/share/common-lisp/systems"
  ln -s "../source/$_pkgname/$_pkgname.asd" .
  popd

  # documentation
  install -vDm644 -t "$pkgdir/usr/share/doc/$pkgname" README

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" COPYING
}
