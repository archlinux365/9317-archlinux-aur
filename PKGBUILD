# Maintainer: Bleuzen <supgesu at gmail dot com>

pkgname=blizcord
pkgver=0.3.3
pkgrel=1
pkgdesc="A simple Discord bot which can play music from YouTube or local files"
arch=('any')
url="https://github.com/Bleuzen/Blizcord/"
license=('mit')
depends=('jre8-openjdk')
install=$pkgname.install
source=("blizcord-${pkgver}.deb::https://github.com/Bleuzen/Blizcord/releases/download/${pkgver}/blizcord-${pkgver}.deb")
md5sums=('2e67360e85306c6fe1fd1f9a883953f9')

package() {
  msg2 "Extracting the data.tar.xz..."
  bsdtar -xf data.tar.xz -C "$pkgdir/"
  chmod o+rwx "$pkgdir"/opt/Blizcord/
}
