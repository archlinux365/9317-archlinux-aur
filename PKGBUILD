# Maintainer: Albert Berger < nbdspcl at gmail dot com>
pkgname=regd
pkgver=0.5.0
pkgrel=1
pkgdesc="Registry daemon, information cache and secure credential storage."
arch=('any')
url="https://github.com/nbdsp/regd"
license=('GPL')
groups=()
depends=('python3')
optdepends=()
makedepends=()
provides=("${pkgname}")
conflicts=("${pkgname}")
replaces=()
backup=()
options=()
install=
source=("${pkgname}::https://github.com/nbdsp/regd/archive/v0.5.0.tar.gz")
noextract=()
md5sums=('SKIP')


package() {
	username="$(id | sed -e 's/[^(]*(\([^)]*\)).*/\1/')"
	confdir="$pkgdir/${HOME}/.config/${pkgname}"
	datadir="$pkgdir/${HOME}/.config/${pkgname}/data"
	cd "${pkgname}-${pkgver}"
	python setup.py install --root="$pkgdir/" --optimize=1
	mkdir "${confdir}" 
	mkdir "${datadir}"
	chown $username "${confdir}"
	chown $username "${datadir}"
	install -Dm644 -o $username "data/conf.${pkgname}" "$pkgdir/etc/${pkgname}/conf.${pkgname}"
	install -Dm644 -o $username "data/${pkgname}.1" "$pkgdir/usr/share/man/man1/${pkgname}.1"
	install -Dm600 -o $username "data/${pkgname}.data" "$pkgdir/${HOME}/.config/${pkgname}/data/${pkgname}.data"
}
