# Maintainer: Devin Christensen <quixoten at gmail dot com>
pkgname=ttf-roboto-mono-powerline-git
pkgver=r100.a44abd0
pkgrel=1
pkgdesc="RobotoMono for Powerline"
arch=('any')
url=('https://github.com/powerline/fonts')
license=('Apache')
depends=(fontconfig xorg-font-utils )
makedepends=('git')
conflicts=(powerline-fonts powerline-fonts-git)
install=$pkgname.install
source=('git+https://github.com/powerline/fonts.git')
md5sums=('SKIP')

pkgver() {
  cd fonts
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd $srcdir/fonts/RobotoMono
  find . -iname '*.ttf' -execdir install -Dm644 {} $pkgdir/usr/share/fonts/TTF/{} \;
  install -Dm644 LICENSE.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
