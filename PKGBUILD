# Maintainer : Ashwin Vishnu <y4d71nsar@relay.firefox.com>
_name=micromamba
pkgname=micromamba-bin
pkgver=0.9.2
pkgrel=1
pkgdesc="Tiny version of mamba, the fast conda package installer."
arch=("x86_64")
url="https://github.com/mamba-org/mamba"
license=("BSD")
source=("${_name}-${pkgver}.tar.bz2::https://micromamba.snakepit.net/api/micromamba/linux-64/${pkgver}")
options=(strip)
depends=("glibc")
provides=("${_name}")
sha256sums=('8494f871a83ed3224aac36a243f0c1b3daf22fa6ca157dce5b586cec3a091d0a')

check() {
	export PREFIX="${srcdir}"
	export PATH="$PREFIX/bin:$PATH"
	msg2 "Testing with ${PREFIX}/bin/${_name}"
	bash info/test/run_test.sh
}

package() {
	install -Dm775 bin/${_name} "${pkgdir}/usr/bin/${_name}"

	msg2 "Installing license"
	install -Dm644 info/licenses/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
