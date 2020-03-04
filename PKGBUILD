_pkgname=Shell
pkgname=desq-shell-git
pkgver=r42.1d4014d
pkgrel=1
pkgdesc="The Desktop Shell for Desq"
arch=('any')
url="https://gitlab.com/DesQ"
license=('none')
depends=('libdesq-git' 'pam' 'qt5-svg')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
groups=('desq-git')
source=("git+https://gitlab.com/Desq/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${_pkgname}"
# Git, no tags available
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/${_pkgname}"
	qmake
	make
}

package() {
	cd "$srcdir/${_pkgname}"
	make INSTALL_ROOT=${pkgdir} install
}
