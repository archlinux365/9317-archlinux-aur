# Maintainer: Daniel Souza <danisztls@gmail.com>

_gitbranch=main
_gitauthor=lbcnz
pkgname=fzfx-git
pkgver=r21.2eeaf41
pkgrel=2
pkgdesc="A wrapper to fzf that does specialized fuzzy searches"
arch=('any')
license=('MIT')
url="https://github.com/${_gitauthor}/${pkgname%-git}"
source=("git://github.com/${_gitauthor}/${pkgname%-git}#branch=${_gitbranch}")
sha512sums=('SKIP')
depends=('fzf' 'fd' 'ripgrep' 'bat')
optdepends=('evince: preview pdfs' 'mpv: preview videos' 'grc: colorize ps' 'tree: previews dir as tree' 'rga: fulltext search blobs')
makedepends=(git)
conflicts=("${pkgname%-git}")
provides=("${pkgname-git}")

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  # Use last tag
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/${pkgname%-git}"
  
  install -Dm755 fzfx "${pkgdir}/usr/bin/fzfx"
  install -vDm 644 ignore "${pkgdir}/usr/share/${pkgname%-git}/ignore"
  install -vDm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname%-git}/LICENSE"
  install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname%-git}"
}
