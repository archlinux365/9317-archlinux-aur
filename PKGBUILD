# Maintainer: Bernhard Landauer <oberon@manjaro.org>
# Contributor: Dennis E. Mungai <dmngaie@gmail.com>

pkgname=nvidia-prime
pkgver=0.8.4
pkgrel=1
pkgdesc="Tools to enable NVIDIA's Prime."
url="https://launchpad.net/ubuntu/+source/nvidia-prime"
arch=('x86_64' 'i686')
license=('GPLv3')
depends=('bash' 'bbswitch' 'dpkg' 'lightdm' 'nvidia' 'python')
source=("https://launchpad.net/ubuntu/+archive/primary/+files/${pkgname}_${pkgver}.tar.gz"
    'https://launchpad.net/ubuntu/+archive/primary/+files/ubuntu-drivers-common_0.4.17.3.tar.xz')
md5sums=('8241ef91d6065b79c58277e3c2bfaf95'
         'a248cbca962dfb5e03a993de68a9b8cf')

build() {
  # build gpu-manager
  cd ubuntu-drivers-common/share/hybrid
  make PREFIX=/usr
}

package() {
  cd $pkgname

  #Install PRIME
  install -Dm755 get-quirk-options $pkgdir/usr/bin/get-quirk-options
  install -m755 prime-offload $pkgdir/usr/bin/prime-offload
  install -m755 prime-select $pkgdir/usr/bin/prime-select
  install -m755 prime-supported $pkgdir/usr/bin/prime-supported
  install -m755 prime-switch $pkgdir/usr/bin/prime-switch

  #Add nvidia-prime-quirks
  install -Dm755 prime-quirks $pkgdir/usr/share/nvidia-prime/prime-quirks

  #Add systemD service
  install -Dm644 debian/nvidia-prime.service $pkgdir/usr/lib/systemd/system/nvidia-prime.service

  #Add LightDM
  install -Dm644 90-nvidia.conf $pkgdir/usr/share/lightdm/lightdm.conf.d/90-nvidia.conf

  #Other Information
  install -Dm644 debian/changelog $pkgdir/usr/share/doc/nvidia-prime/changelog.gz
  install -m644 debian/copyright $pkgdir/usr/share/doc/nvidia-prime/copyright

  #gpu-manager / u-d-c-gpu-detection
  cd $srcdir/ubuntu-drivers-common/share/hybrid
  install -m755 gpu-manager $pkgdir/usr/bin/gpu-manager
  install -m755 u-d-c-print-pci-ids $pkgdir/usr/bin/u-d-c-print-pci-ids
  install -Dm644 71-u-d-c-gpu-detection.rules $pkgdir/usr/lib/udev/rules.d/71-u-d-c-gpu-detection.rules
  install -m644 gpu-manager.service $pkgdir/usr/lib/systemd/system/gpu-manager.service
}
