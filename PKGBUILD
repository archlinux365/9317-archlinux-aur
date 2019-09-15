# Maintainer: Luca Weiss <luca (at) z3ntu (dot) xyz>
# Contributor: Gabriele Musco <emaildigabry@gmail.com>

pkgbase=openrazer-blade-pro-2019
_pkgbase=openrazer
pkgname=('python-openrazer-blade-pro-2019' 'openrazer-daemon-blade-pro-2019' 'openrazer-driver-dkms-blade-pro-2019' 'openrazer-meta-blade-pro-2019')
pkgver=2.5.0.r0.gf0e422f
pkgrel=1
pkgdesc="An entirely open source driver and user-space daemon that allows you to manage your Razer peripherals on GNU/Linux. (Modified for Razer Blade Pro 2019)"
arch=('any')
url="https://github.com/cawilliamson/openrazer"
license=('GPL2')
makedepends=('git' 'python-setuptools')
source=("git+https://github.com/openrazer/openrazer.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgbase"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package_python-openrazer-blade-pro-2019() {
  pkgdesc="Python library for accessing the Razer daemon from Python."
  depends=('openrazer-daemon' 'python-numpy')
  provides=('python-openrazer')
  conflicts=('python-openrazer')

  cd "$_pkgbase"
  make DESTDIR="$pkgdir" python_library_install
}

package_openrazer-daemon-blade-pro-2019() {
  pkgdesc="Userspace daemon that abstracts access to the kernel driver. Provides a DBus service for applications to use."
  depends=('openrazer-driver-dkms' 'gtk3' 'python-dbus' 'python-gobject' 'python-setproctitle' 'python-daemonize' 'python-notify2' 'python-pyudev')
  provides=('openrazer-daemon')
  conflicts=('openrazer-daemon')
  install=openrazer-daemon-blade-pro-2019.install

  cd "$_pkgbase"
  make DESTDIR="$pkgdir" daemon_install
}

package_openrazer-driver-dkms-blade-pro-2019() {
  pkgdesc="Kernel driver for Razer devices (DKMS-variant)"
  depends=('dkms' 'udev')
  provides=('openrazer-driver-dkms')
  conflicts=('openrazer-driver-dkms')
  install=openrazer-driver-dkms-blade-pro-2019.install

  cd "$_pkgbase"
  make DESTDIR="$pkgdir" setup_dkms udev_install
}

package_openrazer-meta-blade-pro-2019() {
  pkgdesc="Meta package for installing all required openrazer packages."
  depends=('openrazer-driver-dkms' 'openrazer-daemon' 'python-openrazer')
  optdepends=('polychromatic: frontend'
              'razergenie: qt frontend'
              'razercommander: gtk frontend')
  provides=('openrazer-meta')
  conflicts=('openrazer-meta')
}
