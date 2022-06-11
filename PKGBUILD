# Maintainer: robertfoster

pkgname=distrobox-git
pkgver=1.3.1.r2.0f08186
pkgrel=1
pkgdesc="Use any linux distribution inside your terminal."
arch=('any')
url="https://github.com/89luca89/distrobox"
license=('GPL3')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
optdepends=(
  'docker: enable docker usage'
  'podman: enable podman usage'
)
source=("${pkgname%-git}::git+${url}")

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "%s" "$(git describe --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

package() {
  cd "${srcdir}/${pkgname%-git}"
  ./install -P "${pkgdir}/usr"
}

sha256sums=('SKIP')
