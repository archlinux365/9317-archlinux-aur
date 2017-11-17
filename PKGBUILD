# Maintainer:  Andrew O'Neill <andrew at meanjollies dot com>

pkgname=crate
pkgver=2.2.3
pkgrel=1
pkgdesc="Shared nothing, fully searchable, document oriented cluster datastore."
arch=('x86_64')
url='http://crate.io'
license=('custom:APACHE')
depends=('java-runtime=8' 'python')
install='crate.install'
source=(https://cdn.crate.io/downloads/releases/$pkgname-$pkgver.tar.gz
        crate.service
        crate.env)
sha256sums=('f645f894a180ffe85a6af4d68357313d30432b99ad82a207d7188d9e2d26be31'
	          '04b36b561498332b1b569e49b42d0bedf04141de07b7b16ff1b06072673cfd21'
            '6182b8d527d52de4fc80023827518b2e8d873afdda873ef6bd2ed92b91982f75')

backup=('etc/crate/crate.yml'
        'etc/crate/logging.yml')

package() {
  cd "$srcdir/$pkgname-$pkgver"

  # Create dirs
  install -dm755 "$pkgdir/etc/$pkgname/"
  install -dm755 "$pkgdir/var/log/$pkgname/"
  install -dm755 "$pkgdir/usr/share/$pkgname/"
  cp -R bin lib plugins "$pkgdir/usr/share/$pkgname/"

  cp config/* $pkgdir/etc/$pkgname

  # Documentation
  install -dm755 $pkgdir/usr/share/doc/$pkgname/
  cp LICENSE.txt $pkgdir/usr/share/doc/$pkgname/LICENSE
  cp NOTICE $pkgdir/usr/share/doc/$pkgname/NOTICE
  cp CHANGES.txt $pkgdir/usr/share/doc/$pkgname/CHANGES

  install -Dm644 "$srcdir/crate.env" "$pkgdir/etc/$pkgname/crate.env"
  install -Dm644 "$srcdir/crate.service" "$pkgdir/usr/lib/systemd/system/crate.service"
}
