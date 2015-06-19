# Maintainer: Andrea Scarpino <andrea@archlinux.org>
# Contributor: E Nikulenkov <enikulenkov -- gmail>
# Contributor: Jerome Leclanche <jerome.leclanche+arch@gmail.com>
# Contributor: Markus Unterwaditzer <markus@unterwaditzer.net>
# Maintainer: Hexchain Tong <i@hexchain.org>

pkgname=coursera-dl-git
_gitname=coursera
pkgver=524.57fd3db
pkgrel=2
pkgdesc="Script for downloading Coursera.org videos and naming them"
arch=('any')
url="https://github.com/coursera-dl/coursera/"
license=('GPL')
depends=('python' 'python-beautifulsoup4' 'python-distribute' 'python-requests' 'python-six')
optdepends=('python-html5lib: recommended for parsing pages')
makedepends=('git')
source=("git://github.com/coursera-dl/$_gitname.git")
sha256sums=('SKIP')

pkgver() {
  cd $_gitname
  printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
package() {
  cd $_gitname
  install -Dm755 ${pkgname%-*} "$pkgdir/usr/bin/${pkgname%-*}"
  install -dm755 $_gitname "$pkgdir/usr/lib/python3.4/site-packages/$_gitname"
  install -cm644 $_gitname/*.py "$pkgdir/usr/lib/python3.4/site-packages/$_gitname/"
}

# vim: set ts=2 sw=2 et:
