# Maintainer: ProfessorKaos64 <mdeguzis@gmail.com>
# Mod: http://www.moddb.com/mods/brutal-doom
pkgname=brutal-doom
pkgver=20
pkgrel=6
pkgdesc="Brutal Doom via the GzDoom engine."
arch=(any)
url="http://www.moddb.com/mods/brutal-doom"
license=('GPL3')
depends=('gzdoom')
optdepends=('doomseeker')
makedepends=('git')
source=('http://www.libregeek.org/Linux/game-files/brutal-doom/brutalv20b.pk3'
        'http://www.libregeek.org/Linux/game-files/brutal-doom/DoomMetalVol4.wad'
	'gzdoom.ini'
	'README.md'
	'brutal-doom')
sha512sums=('bbfdf854e248fcb4b21b1efd86130a501511313a68b50c8a3b9d4d6260d30bb8d4f91e3156a165878cb03b0544b30a27ef548538ee39675327c1c7be20285179'
            '8919ee9f38836b0e4793bc1dc028e39b3de670fc4a1960e280bd92847a5b5da8149bcf391a593f6d50162316ada0ef6372d7bd1eb8776046d8d746fe46b293ab'
            'dca96917524cf7ea8c3e40ca493977d82b534dfd734b6b8b5a1e12b36a3e59a5c56766ba33049c906aaa513545a205c91ec6ceb33cb3ac80f80f5165a8d35a06'
	    '3d3be93f3f65b205da5854459704e0b8ad037a38108dd42414c4c78010e5659056f56d6f4403b50f5b06ef70abc7fcf6dbb717e228298d9883461b156076800f'
	    '31a64315f2106654382f1a6b61ea05d455ed8911e4d053be0634316b6072e1cbd799294809303dba61347943a8252c3e52ff2803f5d36a82cdd922ad3fe1d3cc')

package() {

	install -d "$pkgdir/usr/bin"
	install -d "$pkgdir/usr/share/games/$pkgname"

	msg2 "Installing launcher"
	install -m755 "brutal-doom" "$pkgdir/usr/bin/brutal-doom"

	msg2 "Installing brutalv20b.pk3  and DoomMetalVol4.wad..."
	install -m644 "$srcdir/brutalv20b.pk3" "$pkgdir/usr/share/games/$pkgname/brutalv20b.pk3"
	install -m644 "$srcdir/DoomMetalVol4.wad" "$pkgdir/usr/share/games/$pkgname/DoomMetalVol4.wad"
	install -m644 "$srcdir/manual.rtf" "$pkgdir/usr/share/games/$pkgname/manual.rtf"
	install -m644 "README.md" "$pkgdir/usr/share/games/$pkgname/README.md"

	msg2 "Installing configuration files..."
	install -Dm644 "gzdoom.ini" "$pkgdir/usr/share/games/$pkgname/gzdoom.ini"
}
