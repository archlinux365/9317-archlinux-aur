# Maintainer: Yauheni Kirylau <actionless dot loveless AT gmail.com>
# shellcheck disable=SC2034,SC2154

pkgname=pikaur
pkgver=0.11.3
pkgrel=1
pkgdesc="AUR helper with minimal dependencies. Review PKGBUILDs all in once, next build them all without user interaction."
arch=('any')
url="https://github.com/actionless/pikaur"
license=('GPLv3')
source=(
	"$pkgname-$pkgver.tar.gz"::https://github.com/actionless/pikaur/archive/"$pkgver".tar.gz
)
md5sums=('12cd34592af1567f4669fa54a2a0f9a3')
depends=(
	'pacman>=5.1'
	'pyalpm'
	'git'
)
conflicts=('pikaur-git')

build() {
	cd "${srcdir}/${pkgname}-${pkgver}" || exit 2
	sed -i -e "s/VERSION.*=.*/VERSION = '${pkgver}'/g" pikaur/config.py
	make
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}" || exit 2
	python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1
	for langmo in $(cd ./locale && ls ./*.mo); do
		lang=$(sed -e 's/.mo$//' <<< "${langmo}")
		install -Dm644 "locale/${langmo}" "$pkgdir/usr/share/locale/${lang}/LC_MESSAGES/pikaur.mo"
	done
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	cp -r ./packaging/* "${pkgdir}"
}
