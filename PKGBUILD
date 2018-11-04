# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=pkgcloud-git
pkgver=r58.4f67f66
pkgrel=1
pkgdesc="Talk to the packagecloud API, in Go"
arch=(x86_64)
url='https://github.com/tonylambiris/pkgcloud'
license=(Apache)
makedepends=(git go)
source=("${pkgname}::git+https://github.com/tonylambiris/pkgcloud.git")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${srcdir}/${pkgname}"

	mkdir -p "${srcdir}/go/src/github.com/tonylambiris"
	ln -sf "${srcdir}/${pkgname}" "${srcdir}/go/src/github.com/tonylambiris/pkgcloud"
}

build() {
	cd "${srcdir}/go/src/github.com/tonylambiris/pkgcloud"

	make
}

package() {
	cd "${srcdir}/go/src/github.com/tonylambiris/pkgcloud"

	install -Dm755 "bin/pkgcloud-push" "${pkgdir}/usr/bin/pkgcloud-push"
	install -Dm755 "bin/pkgcloud-yank" "${pkgdir}/usr/bin/pkgcloud-yank"
}
