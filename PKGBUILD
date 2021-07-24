# Contributor:  https://github.com/DirtBagXon @ github@pani.cx
# Maintainer:  Nick Bilbrey (beelzebud) <beelzebud@gmail.com>

_pkgname=hypseus-singe
pkgname=$_pkgname-git
pkgver=306.6695441
pkgrel=1
pkgdesc="A drop-in replacement for daphne."
arch=(x86_64)
url="https://github.com/DirtBagXon/hypseus-singe"
license=('GPL3')
depends=('zlib' 'sdl2' 'sdl2_image' 'sdl2_ttf' 'libvorbis')
makedepends=('gcc' 'git' 'cmake' 'autoconf' 'fakeroot')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+$url.git")
md5sums=('SKIP')

pkgver() 
{
	cd $_pkgname
	printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build()
{
	cd $_pkgname/src
	cmake ../src 
	make
}

package() {
	cd $srcdir
	install -Dm755 $_pkgname/scripts/run.sh "$pkgdir"/usr/local/bin/hypseus
	install -Dm755 $_pkgname/scripts/singe.sh "$pkgdir"/usr/local/bin/singe
	install -Dm755 $_pkgname/src/hypseus "$pkgdir"/usr/local/bin/hypseus.bin
	install -d "$pkgdir"/usr/local/$_pkgname/{pics,pics/obsolete,sound,fonts,roms/cputest,screenshots}
	install -m644 $_pkgname/pics/*.* "$pkgdir"/usr/local/$_pkgname/pics/
	install -m644 $_pkgname/pics/obsolete/*.* "$pkgdir"/usr/local/$_pkgname/pics/obsolete/
	install -m644 $_pkgname/roms/cputest/* "$pkgdir"/usr/local/$_pkgname/roms/cputest/
	install -m644 $_pkgname/sound/* "$pkgdir"/usr/local/$_pkgname/sound/
	install -m644 $_pkgname/fonts/* "$pkgdir"/usr/local/$_pkgname/fonts/
	install -Dm644 $_pkgname/LICENSE "$pkgdir"/usr/share/licenses/$_pkgname/LICENSE
	install -d "$pkgdir"/usr/share/doc/$_pkgname/
	install -m644 $_pkgname/doc/*.* "$pkgdir"/usr/share/doc/$_pkgname/
}
