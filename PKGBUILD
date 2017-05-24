# $Id$
# Maintainer:  Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Robert Knauer <robert@privatdemail.net>
# Contributor: xav <xav at ethertricks dot net>

_pkgname=umurmur
pkgname=umurmur-openssl
pkgver=0.2.16_a
pkgrel=7
pkgdesc='Minimalistic Mumble server - built with openssl'
arch=('i686' 'x86_64')
url='https://github.com/umurmur/umurmur'
license=('custom')
depends=('openssl' 'libconfig' 'protobuf-c')
makedepends=('cmake')
install=$_pkgname.install
backup=('etc/umurmur/umurmur.conf')
source=($_pkgname-$pkgver.tar.gz::$url/archive/${pkgver/_/}.tar.gz
        umurmur.service)
md5sums=('061aa71eb059eb00d2b123ec9200b405'
         'd9d556e4ffa77e193fb40ce508804720')

prepare() {
  cd $_pkgname-${pkgver/_/}
}

build() {
  cd $_pkgname-${pkgver/_/}
  cmake . -DCMAKE_INSTALL_PREFIX=/usr -DSSL=openssl
  make
}

package() {
  cd $_pkgname-${pkgver/_/}
  make DESTDIR="$pkgdir" install
  install -dm0755 $pkgdir/etc/umurmur/
  mv $pkgdir/usr/etc/umurmur.conf $pkgdir/etc/umurmur/
  rmdir $pkgdir/usr/etc
  install -Dm644 ../umurmur.service "$pkgdir"/usr/lib/systemd/system/umurmur.service
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$_pkgname/LICENSE
}
