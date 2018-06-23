# Maintainer: fenuks

pkgname=skim
pkgver=0.5.0
pkgrel=1
pkgdesc="Fuzzy Finder in rust!"
arch=('i686' 'x86_64')
depends=('ncurses')
makedepends=('rust' 'cargo')
url="https://github.com/lotabout/skim"
license=('MIT')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/lotabout/$pkgname/tar.gz/v$pkgver)
sha256sums=('bc45edfd77323b010e19247ff74cb9eaf7a5b3457a765ba50ddcd0f5b9744eba')
provides=('skim')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  cargo build --release
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm 755 bin/sk-tmux -t "${pkgdir}/usr/bin/"
  install -Dm 644 plugin/skim.vim -t "${pkgdir}/usr/share/vim/vimfiles/plugin/"
  cargo install --root "${pkgdir}/usr"
  rm -f "${pkgdir}/usr/.crates.toml"
}
