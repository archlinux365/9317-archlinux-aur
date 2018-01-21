pkgname=oor
pkgver=1.2.0.r49.g3bcb115
pkgrel=1
pkgdesc="Open Overlay Router (formerly LISPmob) - Locator/ID Separation Protocol (LISP) and LISP Mobile Node implementation"
url="https://openoverlayrouter.org/"
arch=('x86_64' 'i686' 'armv6h')
license=('GPL2')
depends=('openssl' 'confuse' 'libcap' 'libxml2' 'zeromq')
makedepends=('git' 'gengetopt')
provides=('lispmob')
replaces=('lispmob')
backup=("etc/oor.conf")
_commit=3bcb115334c170d7406230461cbb91167042a1f3
source=("git+https://github.com/OpenOverlayRouter/oor#commit=$_commit"
        "oor.service")
sha256sums=('SKIP'
            'b952f567e6c506d09aab10b4fae49c9cee31affb89b7a18040c2fa7f1a8df153')

pkgver() {
  cd oor
  git describe | sed 's/^v//; s/-/.r/; s/-/./'
}

build() {
  cd oor
  make
}

package() {
  cd oor
  make PREFIX="/usr/bin/" DESTDIR="$pkgdir" install
  install -Dm600 oor/oor.conf.example "$pkgdir"/etc/oor.conf
  install -Dm644 "$srcdir"/oor.service "$pkgdir"/usr/lib/systemd/system/oor.service
}

# vim:set ts=2 sw=2 et:
