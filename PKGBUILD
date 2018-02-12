# Maintainer: Florian Jacob <projects+arch AT florianjacob )DOT( de>
pkgname=earlyoom
pkgver=1.0
pkgrel=2
pkgdesc="Early OOM Daemon for Linux"
arch=('any')
url="https://github.com/rfjakob/earlyoom"
license=('MIT')
backup=("etc/default/earlyoom")
source=(
	"https://github.com/rfjakob/$pkgname/archive/v$pkgver.tar.gz"
)
sha256sums=('0bc278a3744f454f3a29835a4ef939498d7044b78d490aff7f5a6ab6596bb0cb')

build() {
	cd "$pkgname-$pkgver"
	# earlyoom tries to get the version number from the git repo, but we're packaging tarballs here, so that would fail.
	make VERSION=$pkgver
}

package() {
	cd "$pkgname-$pkgver"
	DESTDIR="${pkgdir}"
	PREFIX="/usr"
	SYSTEMDDIR="${PREFIX}/lib/systemd"
	export DESTDIR
	export PREFIX
	export SYSTEMDDIR

	make install
	# make install doesn't install the manpage for some reason
	install -Dm644 earlyoom.1.gz "${DESTDIR}${PREFIX}/share/man/man1/earlyoom.1.gz"
}
