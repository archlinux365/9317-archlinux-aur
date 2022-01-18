# Maintainer: Gabriel Rauter <rauter.gabriel@gmail.com>
_pkgbase=rtc-pcf85063
pkgname=$_pkgbase-dkms
pkgver=5.16
pkgrel=1
pkgdesc="PC85063 kernel module (DKMS)"
arch=("any")
url="https://kernel.org"
license=("GPL2")
makedepends=(dkms git)
provides=($_pkgbase)
conflicts=($_pkgbase)
source=("https://raw.githubusercontent.com/torvalds/linux/v$pkgver/drivers/rtc/$_pkgbase.c"
        "dkms.conf"
        "Makefile")
sha256sums=('d4137e3d2c10f0e5544126d3f3f07766b4db1f2fac5f147341e70998427d843b'
            '06612e69e2c592b9dd32d15a4eae118e7a717b3e89170ecc02a6f64dbaf3bf21'
            '4cd1a6449b1b74d11e103e25e43007c60ca646e96485e98fc359815a7c12a7fa')

package() {
  mkdir -p $pkgdir/usr/src/$_pkgbase-$pkgver/
  # Copy dkms.conf
  install -Dm644 dkms.conf $pkgdir/usr/src/$_pkgbase-$pkgver/

  # Set name and version
  sed -e "s/@_PKGBASE@/$_pkgbase/" \
      -e "s/@PKGVER@/$pkgver/" \
      -i $pkgdir/usr/src/$_pkgbase-$pkgver/dkms.conf

  # Copy sources (including Makefile)
  install -Dm644 $_pkgbase.c $pkgdir/usr/src/$_pkgbase-$pkgver/$_pkgbase.c
  install -Dm644 Makefile $pkgdir/usr/src/$_pkgbase-$pkgver/Makefile
}
