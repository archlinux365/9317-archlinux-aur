# Maintainer: Emily3403 <seebeckemily3403@gmail.com>
# Attention: Currently it is not possible to install!

pkgname=isisdl
pkgver=1.3.6
pkgrel=1
pkgdesc='A downloading utility for ISIS of TU-Berlin. Download all your files and videos from ISIS.'
url='https://github.com/Emily3403/isisdl'
arch=('x86_64')
license=('GPL3')
provides=('isisdl')
depends=('zlib')
source=("https://github.com/Emily3403/isisdl/releases/download/V1.3/isisdl-linux.bin")
sha256sums=('4fb5fe614e0b7f49cd4f40de829f08fe765504ad165df3cb570b75839082e2e9')

OPTIONS=(!strip)

package() {
    install -Dm755 "isisdl-linux.bin" "$pkgdir/usr/bin/isisdl"
}