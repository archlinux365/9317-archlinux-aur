# Maintainer: Stewart Webb <stew@rtwebb.com>
pkgname=mediaconch-server
pkgver=18.03.2
pkgrel=1
pkgdesc="Implementation checker and policy checker for video and audio files (Server)"
arch=('i686' 'x86_64')
url="http://mediaarea.net"
license=('custom:MPL2' 'GPL3')
depends=('jansson' 'libxml2' 'libxslt' 'sqlite' 'libevent' 'libzen>=0.4.35' 'libmediainfo>=0.7.97')
makedepends=('libxml2' 'libxslt' 'sqlite' 'libevent' 'libzen>=0.4.35' 'libmediainfo>=0.7.97')
source=(https://mediaarea.net/download/source/mediaconch/$pkgver/mediaconch_$pkgver.tar.bz2)
sha256sums=('ba64630ff582f55c104834cefc15066027ffb51f743130fb0ac7f669536b1c5c')
backup=('etc/mediaconch/MediaConch.rc')

prepare() {
  cd "${srcdir}"/MediaConch/Project/GNU/Server
  chmod u+x autogen.sh
  ./autogen.sh
  ./configure --prefix=/usr
}

build() {
  cd "${srcdir}"/MediaConch/Project/GNU/Server
  make
}
package() {
  cd "${srcdir}"/MediaConch/Project/GNU/Server
  make DESTDIR="${pkgdir}" install-strip

  install -D -m 0644 MediaConch.rc "${pkgdir}"/etc/mediaconch/MediaConch.rc
  install -D -m 0644 mediaconchd.service "${pkgdir}"/usr/lib/systemd/system/mediaconchd.service

  cd "${srcdir}"/MediaConch
  install -D -m 0644 License.html "${pkgdir}"/usr/share/licenses/${pkgname}/License.html

  install -D -m 0644 Documentation/Daemon.md "${pkgdir}"/usr/share/docs/${pkgname}/Daemon.md
  install -D -m 0644 Documentation/Config.md "${pkgdir}"/usr/share/docs/${pkgname}/Config.md
  install -D -m 0644 Documentation/REST.md "${pkgdir}"/usr/share/docs/${pkgname}/REST.md
}

