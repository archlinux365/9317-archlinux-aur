# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Vyacheslav Konovalov <🦀vk@protonmail.com>

pkgname=swarm-bee-clef-bin
pkgver=0.12.0
pkgrel=1
pkgdesc="Go Ethereum's external signer"
arch=('x86_64' 'armv7h' 'aarch64')
url='https://github.com/ethersphere/bee-clef'
license=('GPL3')
depends=('bash')
provides=('swarm-bee-clef')
conflicts=('swarm-bee-clef' 'go-ethereum')
replaces=('bee-clef-bin')
backup=('etc/bee-clef/4byte.json'
        'etc/bee-clef/rules.js')
install=bee-clef.install
source=('bee-clef.sysusers' 'bee-clef.tmpfiles')
source_x86_64=("$pkgname-$pkgver-x86_64.deb::$url/releases/download/v$pkgver/bee-clef_${pkgver}_amd64.deb")
source_armv7h=("$pkgname-$pkgver-armv7h.deb::$url/releases/download/v$pkgver/bee-clef_${pkgver}_armv7.deb")
source_aarch64=("$pkgname-$pkgver-aarch64.deb::$url/releases/download/v$pkgver/bee-clef_${pkgver}_arm64.deb")
sha256sums=('7314d2aa0ce149621a5d59b881ada3ea37231743b5875389b3041bb845233491'
            'c5dbcb978de5b7c31482f4fd1cff3101a738df85e27758ec2b4e469a1762384c')
sha256sums_x86_64=('3525e085b63df50eaa4db5f503920dd6d81dd4eb413502a59849ef86ee7aaed5')
sha256sums_armv7h=('bff61ff6a67156550ed36177d491538ea48107544dc8b4d8cf1b3d42efba659c')
sha256sums_aarch64=('690e1ef5e08b251866ba540596b02a224dd322934164be85fae5d31d54fcac5e')

prepare() {
	bsdtar -xf data.tar.gz
}

package() {
	install -D usr/bin/bee-clef{,-keys,-service} -t "$pkgdir/usr/bin"
	find etc \
		-type f \
		-exec install -Dm644 '{}' "$pkgdir/{}" \;
	install -Dm644 lib/systemd/system/bee-clef.service -t "$pkgdir/usr/lib/systemd/system"
	install -Dm644 bee-clef.sysusers "$pkgdir/usr/lib/sysusers.d/bee-clef.conf"
	install -Dm644 bee-clef.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/bee-clef.conf"
}
