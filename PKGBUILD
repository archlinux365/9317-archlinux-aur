# Maintainer: Sourav Goswami <souravgoswami@protonmail.com>
pkgname=cowspeak
pkgver=3.0
pkgrel=1
pkgdesc="Display an animal with a random quote or your own text"
arch=('any')
url="https://github.com/Souravgoswami/cowspeak-root"
license=('MIT')
depends=('ruby>=2.5')
provides=('cowspeak')
source=("https://github.com/Souravgoswami/cowspeak-root/raw/master/tarballs/cowspeak-v${pkgver}.tar.xz")

package() {
	local usr="${srcdir}/latest-src/usr"

	# install the ruby script and mark executable
	install -D -m 755 "${usr}/bin/cowspeak" "${pkgdir}/usr/bin/cowspeak"

	# move the shared files
	cp -dpr --no-preserve=ownership "${usr}/share/" "${pkgdir}/usr/"
}

md5sums=('9cd2c4b7095486553d22c8c47f324cf6')
