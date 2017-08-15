# U-Boot: Inverse Path i.MX53 Quick Start Board
# Maintainer: Claudio Chimera <claudio.chimera@gmail.com>

buildarch=4

pkgname=uboot-imx53qsb
pkgver=2017.05
pkgrel=1
pkgdesc="U-Boot for i.MX53 Quick Start Board"
arch=('armv7h')
url="http://git.denx.de/u-boot.git/"
license=('GPL')
makedepends=('git')
install=${pkgname}.install
backup=('boot/boot.txt' 'boot/boot.scr')
source=("ftp://ftp.denx.de/pub/u-boot/u-boot-${pkgver}.tar.bz2"
        '0001-arch-linux-arm-modifications.patch'
        'boot.txt'
        'mkscr')
md5sums=('1b9ab3707ded74bbde9405987f816969'
         '9c6c988da8fd9e20e3c1a59da2691e27'
         '23a08cb6a356d5dc7ddaf124ebb5a5d7'
         '021623a04afd29ac3f368977140cfbfd')

prepare() {
  cd u-boot-${pkgver}

  git apply ../0001-arch-linux-arm-modifications.patch
}

build() {
  cd u-boot-${pkgver}

  unset CFLAGS CXXFLAGS LDFLAGS

  make distclean
  make mx53loco_defconfig
  make
}

package() {
  cd u-boot-${pkgver}

  install -d "${pkgdir}"/boot
  install -Dm644 u-boot.imx "${pkgdir}"/boot

  install -Dm644 ../boot.txt "${pkgdir}"/boot/boot.txt
  tools/mkimage -A arm -O linux -T script -C none -n "U-Boot boot script" -d ../boot.txt "${pkgdir}"/boot/boot.scr
  install -Dm755 ../mkscr "${pkgdir}"/boot/mkscr
}
