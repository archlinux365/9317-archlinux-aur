pkgname=i2c-ch341-dkms
pkgver=20210501
pkgrel=1
pkgdesc="CH341 USB-I2C adapter driver"
license=('GPL')
arch=('i686' 'x86_64')
depends=('dkms')
makedepends=('git')
optdepends=('linux-headers: build the module against Arch kernel'
            'linux-ck-headers: build the module against Linux-ck kernel'
            'linux-lts-headers: build the module against LTS Arch kernel')
url='https://github.com/gmarco/i2c-ch341'
source=("git://github.com/gmarco/i2c-ch341.git"
        'dkms.conf.in')
md5sums=('SKIP'
         '4d3cb44f5d9d97cb4b72a9e2470789e2')

package() {
  cd ${srcdir}/i2c-ch341
  install -dm755 "${pkgdir}/usr/src/i2c-ch341-${pkgver}/"
  for i in "${srcdir}/i2c-ch341/"{Makefile,*.c}; do
    install -D -m644 "${i}" "${pkgdir}/usr/src/i2c-ch341-${pkgver}/"
  done
  sed "s/#MODULE_VERSION#/${pkgver}/" "${srcdir}/dkms.conf.in" > "${pkgdir}/usr/src/i2c-ch341-${pkgver}/dkms.conf"
}
