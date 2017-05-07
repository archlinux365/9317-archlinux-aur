# Maintainer:  max.bra <max dot bra at alice dot it>

pkgname=pi-hole-ftl
_pkgname=FTL
pkgver=2.6.2
pkgrel=1
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h')
pkgdesc="The Pi-hole FTL engine"
url="https://github.com/pi-hole/FTL"
license=('EUPL-1.1')
depends=()
makedepends=('git')
install=$pkgname.install
source=("git+https://github.com/pi-hole/FTL.git"
	"$pkgname.tmpfile"
	"$pkgname.service"
	"$pkgname.sysuser")
md5sums=('SKIP'
         '4618b78f9d52c9101636735c064acce1'
         'b1cffd783b0301656355f3c0987b45d3'
         '68e78907dc2a0c89421d02377e76d353')

prepare() {
  _ssc="/tmp/sedcontrol"

  # setting up logs paths
  sed -i "s|/var/log/pihole-FTL.log|/run/log/pihole-ftl/pihole-FTL.log|w $_ssc" "$srcdir"/$_pkgname/structs.c
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up logs paths 1" && return 1 ; fi
  sed -i "s|/var/run/pihole-FTL|/run/log/pihole-ftl/pihole-FTL|w $_ssc" "$srcdir"/$_pkgname/structs.c
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up logs paths 2" && return 1 ; fi
  sed -i "s|/var/log/pihole.log|/run/log/pihole/pihole.log|w $_ssc" "$srcdir"/$_pkgname/structs.c
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up logs paths 3" && return 1 ; fi
}

build() {
  cd $_pkgname
  make
}

package() {
  cd "$srcdir"
  install -Dm755 "$_pkgname"/pihole-FTL "${pkgdir}"/usr/bin/pihole-FTL || return 1
  
  install -Dm644 "$pkgname.tmpfile" "$pkgdir"/etc/tmpfiles.d/$pkgname.conf || return 1

  install -Dm644 "$pkgname.sysuser" "$pkgdir"/usr/lib/sysusers.d/$pkgname.conf

  install -Dm644 "$pkgname.service" "$pkgdir"/usr/lib/systemd/system/$pkgname.service || return 1
  install -dm755 "$pkgdir/usr/lib/systemd/system/multi-user.target.wants"
  ln -s ../$pkgname.service "$pkgdir/usr/lib/systemd/system/multi-user.target.wants/$pkgname.service"
}
