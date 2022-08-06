# Maintainer: Relwi <theofficialdork@hotmail.com>
pkgname=dinit
pkgver=0.15.1
pkgrel=7
pkgdesc='Service monitoring / "init" system'
url='https://github.com/davmac314/dinit'
source=("$pkgname-$pkgver.tar.gz::https://github.com/davmac314/dinit/archive/v$pkgver.tar.gz")
arch=(x86_64 arm aarch64)
license=(Apache)
makedepends=(make git pacman)
sha256sums=('b6cc489079a6600ae5f89cbc52b6046bd522e8e91da60c6a3006c4224cba83b4')

build () {
  cd "$pkgname-$pkgver"

  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  
  make DESTDIR="$pkgname-$pkgver" install
  
  install -Dm755 src/$pkgname-$pkgver/sbin/dinit "${pkgdir}/usr/bin/dinit"
  install -Dm755 src/$pkgname-$pkgver/sbin/dinit-monitor "${pkgdir}/usr/bin/dinit-monitor"
  install -Dm755 src/$pkgname-$pkgver/sbin/dinitcheck "${pkgdir}/usr/bin/dinitcheck"
  install -Dm755 src/$pkgname-$pkgver/sbin/dinitctl "${pkgdir}/usr/bin/dinitctl"
  
  install -Dm644 doc/manpages/$pkgname-$pkgver/usr/share/man/man5/dinit-service.5 "${pkgdir}/usr/share/man/man5/dinit-service.5.gz"
  install -Dm644 doc/manpages/$pkgname-$pkgver/usr/share/man/man8/dinit-monitor.8 "${pkgdir}/usr/share/man/man8/dinit-monitor.8.gz"
  install -Dm644 doc/manpages/$pkgname-$pkgver/usr/share/man/man8/dinit.8 "${pkgdir}/usr/share/man/man8/dinit.8.gz"
  install -Dm644 doc/manpages/$pkgname-$pkgver/usr/share/man/man8/dinitcheck.8 "${pkgdir}/usr/share/man/man8/dinitcheck.8.gz"
  install -Dm644 doc/manpages/$pkgname-$pkgver/usr/share/man/man8/dinitctl.8 "${pkgdir}/usr/share/man/man8/dinitctl.8.gz"
}
