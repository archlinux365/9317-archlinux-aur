# Maintainer: Ricardo Liang <ricardoliang at gmail dot com>
pkgname=nvim-pygtk3-git
pkgver=r22.957ad44
pkgrel=1
pkgdesc='PyGTK3 frontend to Neovim with some visual GUI elements.'
arch=('any')
url="https://github.com/rliang/nvim-pygtk3"
license=('MIT')
depends=('python-neovim' 'python-gobject' 'gtk3' 'vte3')
makedepends=('git')
optdepends=()
conflicts=('nvim-pygtk3')
source=("${pkgname}::git+${url}.git")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
  cd "${pkgname}"

  PREFIX="${pkgdir}/usr" make install

  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
