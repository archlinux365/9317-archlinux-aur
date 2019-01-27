# Maintainer: ravenstar <yexella at gmail dot com>

pkgname=gled-git
pkgver=r4.97dfdc8
pkgrel=1
pkgdesc="Logitech G102 and G203 Prodigy Mouse LED control"
arch=('x86_64')
url="https://github.com/karlovskiy/${pkgname%-git}"
license=('MIT')
makedepends=('git' 'go')
depends=('libusb')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "${srcdir}/${pkgname%-git}"
	export GOFLAGS="-buildmode=pie -gcflags=all=-trimpath=${PWD} -asmflags=all=-trimpath=${PWD} -ldflags=-extldflags=-zrelro -ldflags=-extldflags=-znow"
	go build -o ${pkgname%-git} .
}

package() {
    cd "${srcdir}/${pkgname%-git}"
    install -Dm755 "${pkgname%-git}" "${pkgdir}/usr/bin/${pkgname%-git}"
    install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

