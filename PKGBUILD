# Maintainer: Cassandra Watergate (saltedcoffii) <cassandrajwatergate@gmail.com>

pkgname=gnome-shell-extension-duckduckgo-search-provider-git
pkgver=r9.1e87ab1
pkgrel=1
pkgdesc="KDE Connect implementation with GNOME Shell integration"
arch=('any')
url="https://github.com/keithamus/gnome-shell-duckduckgo-search-provider"
license=('GPL-2')
depends=('gnome-shell')
makedepends=('typescript')
optdepends=(
  'firefox: opening DuckDuckGo in Firefox'
  'chromium: opening DuckDuckGo in Chromium'
  'epiphany: opening DuckDuckGo in Epiphany'
)
source=(git+https://github.com/keithamus/gnome-shell-duckduckgo-search-provider)
sha256sums=('SKIP')

build() {
  make
}

package() {
  make DESTDIR="$pkgdir" install
}
