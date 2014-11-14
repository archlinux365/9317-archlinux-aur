# Contributor: Tom Newsom <Jeepster@gmx.co.uk> with contributions from Andreas Schweitzer <sig11@gmx.net>
# Contributor: dorphell <dorphell@archlinux.org>

pkgname=qstat
pkgver=2.11
pkgrel=2
pkgdesc="Qstat is a command line utility that displays the status of internet game servers including Quake"
arch=(i686 x86_64)
url="http://www.qstat.org/"
license=('custom:Artistic')
depends=('glibc')
backup=('etc/qstat.cfg')
source=(http://downloads.sourceforge.net/sourceforge/qstat/$pkgname-$pkgver.tar.gz)
md5sums=('26c09831660ef9049fe74b786b80d091')

build() {
  cd $srcdir/$pkgname-$pkgver
  ./configure --prefix=/usr --sysconfdir=/etc || return 1
  make || return 1
  make DESTDIR=$pkgdir install || return 1
  install -D -m644 LICENSE.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE.txt
}
