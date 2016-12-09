# Maintainer: Bernhard Landauer <oberon@manjaro.org>

_pkgname=toxcore
pkgname=c-$_pkgname
pkgver=0.0.5
pkgrel=1
pkgdesc='official fork of toxcore. P2P Skype replacement backend'
arch=('i686' 'x86_64')
url='https://tox.chat'
license=('GPL3')
depends=('systemd' 'libconfig' 'libsodium' 'libvpx' 'opus')
conflicts=('tox' "$_pkgname")
provides=('tox' "$_pkgname")
backup=('etc/tox-bootstrapd.conf')
install="$_pkgname.install"
source=("https://github.com/TokTok/$pkgname/archive/v$pkgver.tar.gz"
        "$_pkgname.conf")
sha256sums=('6c479aa553d70c17438f851d0610151ddb80b19b3f506a0611550a9fe4ccc59b'
            'd76356ee1501cb59a5be5936d8002b22318599d3e83ea89bef1fb3b2d791a0bf')

prepare() {
  cd $pkgname-$pkgver
  sed -i "s|/usr/local|/usr|" other/bootstrap_daemon/tox-bootstrapd.service
}

build() {
  cd $pkgname-$pkgver
  cmake -DCMAKE_INSTALL_PREFIX=/usr .
  make
}

package() {
  cd $pkgname-$pkgver
  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 "$srcdir/$_pkgname.conf" "$pkgdir/usr/lib/sysusers.d/$_pkgname.conf"
  install -Dm644 ./other/bootstrap_daemon/tox-bootstrapd.service "$pkgdir/usr/lib/systemd/system/tox-bootstrapd.service"
  install -Dm644 ./other/bootstrap_daemon/tox-bootstrapd.conf "$pkgdir/etc/tox-bootstrapd.conf"
}
