# Maintainer: аббаЕбаЛаАаВ абаБаИаК
pkgname=zvvonlinetv
_pkgname=ZVVOnlineTV
pkgfix=fix
pkgver=3.2
pkgrel=3
pkgdesc="TV | IPTV | youtube player"
arch=('i386' 'x86_64')
url="https://zvvubuntu.blogspot.com"
license=('custom')
depends=('python-pyqt5' 'mpv' 'qt5-multimedia' 'ffmpeg' 'youtube-dl') 

source=("${pkgname}_${pkgver}.deb::https://docs.google.com/uc?id=1_FGSxInNkx2KmxVxNFf-ADAF7hANiYUB")
md5sums=('SKIP')

package() {
  cd "${srcdir}"
  bsdtar -xf data.tar.xz -C "$pkgdir"
  chmod -R 755 "${pkgdir}"/usr
  chmod -R 775 "${pkgdir}"/usr/share/ZVVOnlineTV
  chmod -R 775 "${pkgdir}"/usr/share/ZVVOnlineTV/modules/
  
  ######################################################
  #install -Dm755 $pkgname $pkgdir/usr/bin/$pkgname
  #install -Dm755 $_pkgname.desktop $pkgdir/usr/share/applications/$_pkgname.desktop
}
