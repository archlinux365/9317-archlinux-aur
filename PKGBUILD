# Maintainer: brent s. <bts[at]square-r00t[dot]net>
validpgpkeys=('7482 31EB CBD8 08A1 4F5E  85D2 8C00 4C2F 9348 1F6B')
# Past maintainer: Max Roder <maxroder@web.de>
# Contributor: ice-man <icemanf@gmail.com>

pkgname=mdcrack
pkgver=1.2
pkgrel=4
pkgdesc="MD4/MD5/NTLM1 hash cracker"
url="http://c3rb3r.openwall.net/mdcrack/"
arch=('i686' 'x86_64')
license=('unknown')
source=("http://c3rb3r.openwall.net/mdcrack/download/${pkgname}-${pkgver}.tar.gz"
	"mdcrack.patch")
sha512sums=('1a0ec91e19c65ea5c94b988a3a40226e2996adde26970e847ee3756263e65201751c449e6a29595b67314480be10460fdb2ebb31b5e734039d777e58b42c2965'
            '9c808c882f7558b3e08bac37de01a6e15eb453cb14b03d7e9022f001f498f4394c872b94cb78b02b20b12a34fd359d43604ebfb818cef51a67d3aa191fd363f0')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	patch -Np1 < ../mdcrack.patch || return 1
	make little
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	install -Dm755 bin/mdcrack ${pkgdir}/usr/bin/mdcrack
}
