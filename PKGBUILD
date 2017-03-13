# Maintainer: philanecros <philanecros@gmail.com>

pkgname=autoupdate
pkgver=2
pkgrel=1
pkgdesc="Download packages to update automatically."
arch=('any')
url="https://aur.archlinux.org/packages/autoupdate/"
license=('GPL')
install=autoupdate.install
source=(autoupdate.service
        autoupdate.timer)
md5sums=('315777ea88d1ca6be7a934844a48c399'
         '129db06fab0fd9478ef3a4cf6a5baa96')

package() {
  targetdir="$pkgdir/usr/lib/systemd/system/"
  install -m 755 -d $targetdir

  install -D -m644 autoupdate.{service,timer} $targetdir
}

# vim:set ts=2 sw=2 et:
