# Maintainer: George Angelopoulos <george@usermod.net>
pkgname=vim-colorscheme-alduin
pkgver=1.8.1
pkgrel=1
pkgdesc="A dark low-contrast Vim colorscheme for Terminal Vim and GUI Vim."
arch=('any')
url="https://github.com/AlessandroYorba/Alduin"
license=('MIT')
source=("https://github.com/AlessandroYorba/Alduin/archive/1.8.1.tar.gz")
md5sums=('22599eaf36fdf2f43808fbe52b76a801')

_name=Alduin

package() {
  cd "$_name-$pkgver"
  install -Dm644 colors/alduin.vim "$pkgdir/usr/share/vim/vim74/colors/alduin.vim"
}

# vim:set ts=2 sw=2 et:
