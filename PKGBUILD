# Maintainer: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Thomas Mudrunka <harvie@@email..cz>
# Maintainer: Thomas Mudrunka <harvie@@email..cz>
# Contributor: otaj <jasek.ota@gmail.com>

pkgname=mcelog
pkgver=180
pkgrel=1
pkgdesc="Print machine check event log from x86-64 kernel"
url="https://git.kernel.org/pub/scm/utils/cpu/mce/mcelog.git"
license=("GPL")
install=$pkgname.install
arch=('i686' 'x86_64')
makedepends=('git')
options=('docs')
backup=('etc/mcelog/mcelog.conf')
source=("$url/snapshot/$pkgname-$pkgver.tar.gz")
sha256sums=('e9c82b565da06673c2630f9e6bc668634ad7d2c7f13c70db1900cce110ae62dc')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  sed -i 's|sbin|bin|g' Makefile mcelog.cron mcelog.service
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir -p "$pkgdir"/usr/share/doc/mcelog
  make install DESTDIR="$pkgdir"
  install -Dm0755 mcelog.cron "${pkgdir}/usr/bin/mcelog.cron"
  install -Dm0644 mcelog.logrotate "${pkgdir}/etc/logrotate.d/mcelog.logrotate"
  install -Dm0644 README.md *.pdf "${pkgdir}/usr/share/doc/mcelog/"
  install -Dm0644 mcelog.service "$pkgdir"/usr/lib/systemd/system/$pkgname.service
}

