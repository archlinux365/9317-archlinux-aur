# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>
# Contributor: Ariel Popper <a@arielp.com>

pkgname=vim-airline-git
pkgver=0.7.r219.gdbb4d32
pkgrel=3
epoch=1
pkgdesc="A lean & mean statusline for vim that's light as air."
arch=('any')
url='https://github.com/vim-airline/vim-airline'
license=('MIT')
depends=('vim')
makedepends=('git')
conflicts=('vim-airline')
provides=('vim-airline')
groups=('vim-plugins')
source=("git+https://github.com/vim-airline/${pkgname%-git}.git")
optdepends=('otf-powerline-symbols-git: use the Powerline symbols'
            'vim-airline-themes-git: alternative themes')
install='vimdoc.install'
md5sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "${pkgname%-git}"
  _installpath="${pkgdir}/usr/share/vim/vimfiles"
  mkdir -p "${_installpath}"
  cp -r autoload doc plugin t "${_installpath}"
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
