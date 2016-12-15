# Maintainer: Michael DeGuzis <mdeguzis@gmail.com>

pkgname=doctoc-git
pkgver=r130.a376096
pkgrel=1
pkgdesc="Generates table of contents for markdown files inside local git repository., installed through npm"
arch=('any')
url="www.imaginary.tech/teleprompter"
license=('GPLv3')
depends=('git' 'nodejs')
makedepends=('npm')
options=(!emptydirs)
source=('doctoc-git::git+https://github.com/thlorenz/doctoc')
sha256sums=('SKIP')

pkgver() {

  cd "$srcdir/$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

package() {

  cd "$pkgname"
  mkdir -p $pkgdir/usr
  npm install --user root -g --prefix="$pkgdir/usr"
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  find "${pkgdir}" -name "package.json" -exec sed -e "s|${pkgdir}||" -i {} \;
  find "${pkgdir}" -name "package.json" -exec sed -e "s|${srcdir}||" -i {} \;

}
