# Maintainer: loupzeur <loup@loupzeur.net>
pkgname=speedify-bin
_pkgver=11.8.0-10224
pkgver=${_pkgver/-/.}
pkgrel=3
pkgdesc="Use multiple internet connections in parallel"
arch=('x86_64' 'aarch64' 'armv7h')
url="https://speedify.com/"
license=(unknown)
groups=()
depends=( lsof net-tools )
makedepends=()
provides=(speedify)
conflicts=(speedify)
replaces=()
backup=()
options=()
install=
source=()
source_x86_64=(http://apt.connectify.me/pool/main/${pkgname:0:1}/${pkgname%-bin}/${pkgname%-bin}_${_pkgver}_amd64.deb)
source_aarch64=(http://apt.connectify.me/pool/main/${pkgname:0:1}/${pkgname%-bin}/${pkgname%-bin}_${_pkgver}_arm64.deb)
source_armv7h=(http://apt.connectify.me/pool/main/${pkgname:0:1}/${pkgname%-bin}/${pkgname%-bin}_${_pkgver}_armhf.deb)
# TODO: i386 is also supported
md5sums_x86_64=('SKIP')
md5sums_aarch64=('SKIP')
md5sums_armv7h=('SKIP')

prepare() {
	cd "$srcdir"
	tar -xf "${srcdir}/data.tar.gz"
}

package() {
	cd "${srcdir}"
	cp -rp usr "${pkgdir}/usr"
	cp -rp lib "${pkgdir}/usr/lib"

	mkdir -p "${pkgdir}/etc/speedify"
	install -Dm644 usr/share/speedify/default.conf "${pkgdir}/etc/speedify/speedify.conf"
	mkdir -p "${pkgdir}/usr/bin"
	ln -fs /usr/share/speedify/speedify_cli "${pkgdir}/usr/bin/"
	ln -fs /usr/share/speedify/SpeedifyCLI.pdf "${pkgdir}/usr/share/doc/speedify/"
}
