# Maintainer: Robin Lange <robin dot langenc at gmail dot com>
# Contributor: Robin Lange <robin dot langenc at gmail dot com>
pkgname=optimus-manager
pkgver=1.3
pkgrel=1
pkgdesc="Management utility to handle GPU switching for Optimus laptops"
arch=('any')
url="https://github.com/Askannz/optimus-manager"
license=('MIT')
conflicts=("optimus-manager-git")
provides=("optimus-manager=$pkgver")
depends=('python3' 'python-setuptools' 'python-dbus' 'mesa-demos' 'xorg-xrandr')
optdepends=('bbswitch: alternative power switching method'
            'acpi_call: alternative power switching method'
            'xf86-video-intel: provides the Xorg intel driver')
makedepends=('python-setuptools' 'git')
backup=('etc/optimus-manager/xorg-intel.conf'
        'etc/optimus-manager/xorg-nvidia.conf'

        'etc/optimus-manager/xsetup-intel.sh'
        'etc/optimus-manager/xsetup-nvidia.sh'
        'etc/optimus-manager/xsetup-hybrid.sh'

        'etc/optimus-manager/nvidia-enable.sh'
        'etc/optimus-manager/nvidia-disable.sh'

        'var/lib/optimus-manager/persistent/startup_mode')
source=("git+https://github.com/Askannz/optimus-manager.git#branch=master")
sha256sums=('SKIP')
 
build() {
 
  cd "${srcdir}/optimus-manager/"
  python3 setup.py build
 
}
 
 
package() {

  install="optimus-manager.install"
 
  cd "${srcdir}/optimus-manager/"
 
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 modules/optimus-manager.conf "$pkgdir/usr/lib/modprobe.d/optimus-manager.conf"
  install -Dm644 systemd/optimus-manager.service "$pkgdir/usr/lib/systemd/system/optimus-manager.service"
  install -Dm644 optimus-manager.conf "$pkgdir/usr/share/optimus-manager.conf"
  
  install -Dm644 systemd/logind/10-optimus-manager.conf "$pkgdir/usr/lib/systemd/logind.conf.d/10-optimus-manager.conf"
  
  install -Dm644 login_managers/sddm/20-optimus-manager.conf "$pkgdir/etc/sddm.conf.d/20-optimus-manager.conf"
  install -Dm644 login_managers/lightdm/20-optimus-manager.conf  "$pkgdir/etc/lightdm/lightdm.conf.d/20-optimus-manager.conf"
  
  install -Dm644 config/xorg-intel.conf "$pkgdir/etc/optimus-manager/xorg-intel.conf"
  install -Dm644 config/xorg-nvidia.conf "$pkgdir/etc/optimus-manager/xorg-nvidia.conf"
  
  install -Dm755 config/xsetup-intel.sh "$pkgdir/etc/optimus-manager/xsetup-intel.sh"
  install -Dm755 config/xsetup-nvidia.sh "$pkgdir/etc/optimus-manager/xsetup-nvidia.sh"
  install -Dm755 config/xsetup-hybrid.sh "$pkgdir/etc/optimus-manager/xsetup-hybrid.sh"

  install -Dm755 config/nvidia-enable.sh "$pkgdir/etc/optimus-manager/nvidia-enable.sh"
  install -Dm755 config/nvidia-disable.sh "$pkgdir/etc/optimus-manager/nvidia-disable.sh"
 
  python3 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
 
} 
