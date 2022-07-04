# Maintainer: iTrooz_ <itrooz at protonmail dot com>
pkgname=imhex-bin
pkgver=1.18.2
pkgrel=1
pkgdesc="A Hex Editor for Reverse Engineers, Programmers and people who value their retinas when working at 3 AM. "
arch=("x86_64")
url="https://github.com/iTrooz/ImHex"
repo=$url
license=('GPL 2.0')
groups=()
depends=(glfw mbedtls python freetype2 libglvnd gtk3)
makedepends=(git)
checkdepends=()
optdepends=()
provides=(imhex)
conflicts=(imhex)
replaces=()
backup=()
options=()
source=($repo"/releases/download/v$pkgver/imhex-$pkgver-ArchLinux.pkg.tar.zst")
noextract=()
md5sums=(48a8be9177e61603970cd3ed1a4da96e)
validpgpkeys=()

package() {
    tar -xf imhex-$pkgver-ArchLinux.pkg.tar.zst

    install -DT $srcdir/usr/bin/imhex $pkgdir/usr/bin/imhex
    install -DT $srcdir/usr/lib/libimhex.so $pkgdir/usr/lib/libimhex.so

    for plugin in $srcdir/usr/share/imhex/plugins/*.hexplug;
    do
	    install -DT $plugin $pkgdir/usr/share/imhex/plugins/`basename $plugin`
    done

	cp -r $srcdir/usr/share/imhex/{constants,encodings,includes,magic,patterns} $pkgdir/usr/share/imhex
    install -d $pkgdir/usr/share/imhex
}
