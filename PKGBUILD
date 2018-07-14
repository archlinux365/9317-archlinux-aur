# Maintainer: Mikuro Kagamine <mikurok@forgecrushing.com>

pkgname=trisquel-icewm-theme
pkgver=1.3
pkgrel=1
pkgdesc='This IceWM theme is inspired by the default theme of Trisquel GNU/Linux.'
arch=('any')
url='https://www.box-look.org/p/1018259'
license=('GPL3')
depends=('icewm')
source=('164600-Trisquel_1.3.tar.gz::https://my.mixtape.moe/ybaecl.tar.gz')
sha512sums=('29fa44e2e95c70ec7cd38c26f2dc9957dc14902a757e368a107e12d0c78cad6d9eaddb3cce62f751d0fc0fac85846bacb62e4885719ed9cc4906927b829a1bc1')

prepare() {
	echo Removing redundant GPL3 license file...
	rm ${srcdir}/Trisquel/IceWM/Trisquel/COPYING
}

package() {
	install -d ${pkgdir}/usr/share/icewm/themes
	cp -a ${srcdir}/Trisquel/IceWM/Trisquel ${pkgdir}/usr/share/icewm/themes/
}
