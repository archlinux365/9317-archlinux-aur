# Maintainer: Johan Brandhorst <johan.brandhorst at gmail dot com>
pkgname=tinygo-bin
pkgver=0.18.0
pkgrel=1
epoch=
pkgdesc='TinyGo - Go for small spaces'
arch=('x86_64')
url='https://tinygo.org'
license=('custom: BSD 3-clause')
depends=('gcc-libs'
         'go>=1.11.0'
)
optdepends=('avr-gcc: Arduino Uno support'
            'avrdude: Arduino Uno support'
            'openocd: BBC Micro:bit support'
            'arm-none-eabi-gdb: tinygo gdb support'
)
provides=('tinygo')
conflicts=('tinygo')
source=("https://github.com/tinygo-org/tinygo/releases/download/v${pkgver}/tinygo${pkgver}.linux-amd64.tar.gz"
        "https://raw.githubusercontent.com/tinygo-org/tinygo/v${pkgver}/LICENSE"
)
sha256sums=('59c348174041cf1fa4a7742bc1b4ee91f9ad0935644172b458200deff5689da5'
            '67e83ab613270ebd48737ce12a40daa3ae4f573fd64268fa85ae63dcd5f2bd9a')

package() {
  install -d "${pkgdir}/usr/lib" "${pkgdir}/usr/bin"
  cp -r tinygo "${pkgdir}/usr/lib/"

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"

  ln -sf /usr/lib/tinygo/bin/tinygo "${pkgdir}/usr/bin/tinygo"
}
