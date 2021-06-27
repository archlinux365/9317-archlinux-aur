# Maintainer: Roman Perepelitsa <roman.perepelitsa@gmail.com>

pkgname=zsh-theme-powerlevel10k-git
pkgver=r3884.c003c25
pkgrel=1
pkgdesc='Powerlevel10k is a theme for Zsh. It emphasizes speed, flexibility and out-of-the-box experience.'
arch=('aarch64' 'armv6l' 'armv7l' 'i686' 'ppc64le' 'x86_64')
url="https://github.com/romkatv/powerlevel10k"
license=('MIT')
depends=('zsh')
makedepends=('git' 'cmake' 'file' 'make' 'gawk' 'gcc' 'zsh' 'wget')
optdepends=(
  'ttf-meslo-nerd-font-powerlevel10k: terminal font recommended by powerlevel10k'
  'powerline-fonts: patched fonts for powerline'
  'awesome-terminal-fonts: icon package')
install=zsh-theme-powerlevel10k.install
provides=("zsh-theme-powerlevel10k")
conflicts=("zsh-theme-powerlevel10k")
source=('powerlevel10k::git+https://github.com/romkatv/powerlevel10k.git')
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/powerlevel10k"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/powerlevel10k/gitstatus"
  ./build -w
  rm ./deps/libgit2-*.tar.gz
  for file in *.zsh install; do
    zsh -fc "emulate zsh -o no_aliases && zcompile -R -- $file.zwc $file"
  done
}

package() {
  cd "$srcdir"
  find powerlevel10k -path powerlevel10k/.git -prune \
    -o '(' -type f -exec install -D '{}' "$pkgdir/usr/share/zsh-theme-{}" ';' ')'
}
