# Maintainer: Ashley Stewart <a.stewart.au@gmail.com>
pkgname=torrench
pkgver=1.0.1
pkgrel=1
pkgdesc="Command-line torrent search tool"
url="https://github.com/astewartau/torrench"
license=('GPL-3.0')
arch=('any')
depends=('python-requests' 'python-beautifulsoup4' 'python-lxml' 'python-tabulate' 'python-termcolor')
provides=("torrench")
conflicts=("torrench")
source=("${pkgname}-v${pkgver}.tar.gz::${url}/archive/v$pkgver.tar.gz")
md5sums=('32b63bcc1eb197e3f51b255c2bc96c69')

package() {
  mkdir -p "$pkgdir/opt"
  cp -r "torrench-$pkgver" "$pkgdir/opt/torrench"
  mkdir -p "$pkgdir/usr/bin"
  ln -s "/opt/torrench/data/torrench.py" "$pkgdir/usr/bin/torrench"
}
