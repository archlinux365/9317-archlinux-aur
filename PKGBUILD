# Maintainer: Alejandro Baez <code at baez dot nyc>

pkgname='ta-rust-hg'
pkgver=r133.8273cacd1ff8
pkgrel=1
pkgdesc="A Rust module and lexer for Textadept"
arch=('any')
url="https://bitbucket.org/a_baez/ta-rust"
license=('MIT')
depends=('textadept')
optdepends=('rust' 'rustfmt')
makedepends=('mercurial') # 'bzr', 'git', 'mercurial' or 'subversion'
source=('rust::hg+https://bitbucket.org/a_baez/ta-rust')
sha256sums=('SKIP')

pkgver() {
	cd "rust"
	printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

package() {
  rm "rust/.hg" -rf
	cd "rust"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  mkdir -p "${pkgdir}/opt/textadept/modules/rust"
	cp -r "." "${pkgdir}/opt/textadept/modules/rust"
}
