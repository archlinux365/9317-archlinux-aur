# Maintainer: Edoardo Rosa <edoardo dot rosa 90 at gmail dot com>

pkgname=jiq
pkgver=r84.22d384a
pkgrel=1
pkgdesc='jid on jq'
url='https://github.com/fiatjaf/jiq'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
license=('MIT')
depends=('jq')
makedepends=('go' 'git')
options=('!strip' '!emptydirs')
_gourl=github.com/fiatjaf/jiq/cmd/jiq

build() {
  #github.com/fiatjaf/jiq (download)
  #github.com/nsf/termbox-go (download)
  #github.com/mattn/go-runewidth (download)
  #github.com/mattn/go-runewidth
  #github.com/nsf/termbox-go
  GOPATH="$srcdir" go get -fix -v ${_gourl}
}

package() {
  mkdir -p "$pkgdir/usr/bin"
  install -p -m755 "$srcdir/bin/"* "$pkgdir/usr/bin"

  # Package license (if available)
  for f in LICENSE COPYING LICENSE.* COPYING.*; do
    if [ -e "$srcdir/src/$_gourl/$f" ]; then
      install -Dm644 "$srcdir/src/$_gourl/$f" \
        "$pkgdir/usr/share/licenses/$pkgname/$f"
    fi
  done
}

# vim:set ts=2 sw=2 et:
