# Maintainer: Oliver Jaksch <arch-aur@com-in.de>

pkgname=anydesk
pkgver=2.5.0
pkgrel=1
pkgdesc="'AnyDesk Free' is an All-In-One Software for Remote Support"
arch=('i686' 'x86_64')
url="http://anydesk.de/"
license=('custom:Freeware')
depends=('gtkglext')
optdepends=('libpulse')

source_i686=(http://download.anydesk.com/linux/${pkgname}_${pkgver}-1_i386.deb)
source_x86_64=(http://download.anydesk.com/linux/${pkgname}_${pkgver}-1_amd64.deb)

sha256sums_i686=('c978aafbc9d7203b805052dd2aa3a673211da76786c769a8bfdd322dc85446f5')
sha256sums_x86_64=('c5ad3ea227e875db1ef0e78474b1039ac8fefe0965c306196dec6b8e1a8917b7')

package() {
    cd "${pkgdir}"
    tar xf "${srcdir}/data.tar.gz"
    # If you want to keep the autostart mode, comment next line
    rm -rf etc/
}
