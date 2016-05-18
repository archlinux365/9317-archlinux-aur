# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>

pkgname=vim-airline-themes-git
pkgver=r1181.97a042a
pkgrel=1
pkgdesc='A collection of themes for vim-airline.'
arch=('any')
url='https://github.com/vim-airline/vim-airline-themes'
license=('MIT')
depends=('vim' 'vim-airline')
makedepends=('git')
conflicts=('vim-airline-themes')
provides=('vim-airline-themes')
groups=('vim-plugins')
source=("git+https://github.com/vim-airline/${pkgname%-git}.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd ${pkgname%-git}
  _installpath="${pkgdir}/usr/share/vim/vimfiles"
  mkdir -p "${_installpath}"
  cp -r autoload plugin "${_installpath}"
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
