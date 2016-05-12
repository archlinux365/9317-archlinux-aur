# Maintainer: Benoit Pierre <benoit.pierre@gmail.com>

pkgname=plover-git
pkgdesc="Free and open source real-time stenography engine."
pkgver=3.0.0
pkgrel=1
arch=('any')
license=('GPL2')
depends=(
  'python2'
  'python2-appdirs'
  'python2-hidapi'
  'python2-notify'
  'python2-pyserial'
  'python2-setuptools'
  'python2-simplejson'
  'python2-xlib'
  'wmctrl'
  'wxpython'
)
makedepends=(
  'python2-mock'
  'python2-pytest'
  'python2-pytest-runner'
)
provides=('plover')
conflicts=('plover-git')
url="http://www.openstenoproject.org/plover/"
source=($pkgname::git+https://github.com/openstenoproject/plover.git)
sha1sums=(SKIP)

pkgver() {
  cd "$pkgname"
  python2 setup.py patch_version | sed -n '/^patching version to /{s///;s/+/./;p;Q0};${Q1}'
}

check() {
  cd "$pkgname"
  python2 setup.py test
}

package() {
  cd "$pkgname"
  python2 setup.py install --root="$pkgdir"
  chmod og+rX -R "$pkgdir"
}

# vim:set sw=2 sts=2 et:
