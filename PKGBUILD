# Maintainer: HRKo <ootaharuki99 at gmail.com> 

pkgname=ricoh-sp-c260series-ppd
pkgver=1.00
pkgrel=1
pkgdesc='CUPS driver for Ricoh SP C261/C260L/C261SF/C260SFL'
arch=('x86_64')
url='http://support.ricoh.com/bbv2/html/dr_ut_d/ipsio/history/w/bb/pub_j/dr_ut_d/4101035/4101035832/V100/5205252/sp-c260series-printer-1.00-amd64/history.htm'
license=('unknown')
depends=('cups')
source=('http://support.ricoh.com/w/bb/pub_j/dr_ut_d/4101035/4101035832/V100/5205252/sp-c260series-printer-1.00-amd64.deb')
md5sums=('1070fdd0bb8f8fe51e6039499914380e')

package() {
  msg2 'Extracting the data.tar.gz...'
  bsdtar -xf data.tar.gz -C "$pkgdir/"
}

