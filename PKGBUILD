# Maintainer: John Jenkins <twodopeshaggy@gmail.com>


_pkgname=google-cli
pkgname=google-cli-git
pkgver=r74.5bd5816
pkgrel=1
pkgdesc="Google Search from command line"
arch=('any')
url="https://github.com/jarun/google-cli"
license=('GPL3')
depends=('python')
makedepends=('git')
conflicts=('google-cli')
source=('git://github.com/jarun/google-cli.git')
md5sums=('SKIP')

pkgver() {
  cd $srcdir/$_pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/$_pkgname"
  install -Dm755 googler "${pkgdir}/usr/bin/googler"
  install -Dm644 googler.1 "${pkgdir}/usr/share/man/man1/googler.1"
}
