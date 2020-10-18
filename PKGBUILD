# Maintainer: aig <aigmx@posteo.de>

pkgname=libnfc-nci-lpcusbsio
pkgver=2.4.1
pkgrel=3
pkgdesc="Linux NFC stack for NCI based NXP NFC Controllers (PN7150, PN7120). lpcusbsio USB tml."
arch=('x86_64')
url="https://github.com/NXPNFCLinux/linux_libnfc-nci/"
license=('APACHE')
depends=('glibc' 'gcc-libs' 'systemd-libs' 'openssl')
makedepends=('git')
provides=('libnfc-nci')
conflicts=('libnfc-nci-i2c' 'libnfc-nci-alt')
source=("git+https://github.com/NXPNFCLinux/linux_libnfc-nci#commit=2aff6448cf6a86897d3d1bacb0a0943a594aa9ce"
        "01-fix-tml-linker-errors.patch"
        "02-fix-llcp-linker-errors.patch"
        "03-udev-rules.patch")
sha256sums=('SKIP'
            'c9992a8449de8ece0324cbf180a24f8bcab82cb7f51832d3d80958c0968a7575'
            'c6ece172b50e1d1070a979fbafa2e9ee7f7f7b92d583fa38f8ea433123a9ef4d'
            '0a44a4a1c0e429b6415332ededfc36111d6832a98c0717a996c8f862ba623e77')

prepare() {
  cd "$srcdir/linux_libnfc-nci"
  patch -p1 -i "$srcdir/01-fix-tml-linker-errors.patch"
  patch -p1 -i "$srcdir/02-fix-llcp-linker-errors.patch"
  patch -p1 -i "$srcdir/03-udev-rules.patch"
}

build() {
  cd "$srcdir/linux_libnfc-nci"
  ./bootstrap
  export openssldir='/usr'
  ./configure --prefix=/usr --sysconfdir=/etc/libnfc-nci --enable-lpcusbsio --enable-llcp1_3
  make
}

package() {
  cd "$srcdir/linux_libnfc-nci"
  make DESTDIR="$pkgdir/" install
  rm -rf $pkgdir/usr/sbin
}
