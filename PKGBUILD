#Maintainer: Mirko Rovere
pkgname="extrattor"
pkgver="beta"
pkgrel="6"
pkgdesc="A simple Linux utility to extract one or more archives from the terminal"
arch=("x86_64")
depends=('unarj' 'unace' 'p7zip' 'tar' 'pax' 'gzip' 'unzip')
license=("GPL-3.0")
source=("https://raw.githubusercontent.com/Mirko-r/extrattor/main/extrattor/extrattor.sh")
sha512sums=("SKIP")

package(){
    install -Dm0755 "${srcdir}/extrattor.sh" "${pkgdir}/usr/bin/extrattor"
}
