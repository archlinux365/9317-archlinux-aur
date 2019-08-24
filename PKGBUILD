# Maintainer: Balazs Mezei <mezei92@gmail.com>
pkgname=zmninja
pkgver=1.3.078
_customver=1.3.78
pkgrel=1
pkgdesc="High performance, cross platform ionic app for Home/Commerical Security Surveillance using ZoneMinder or other NVRs"
arch=(x86_64)
options=(!strip)
url="https://github.com/pliablepixels/zmNinja"
license=('custom:cc-by-nc-sa-4.0' 'custom')
depends=('gconf')
_zmninja_file="zmninjapro-$_customver-linux-$arch.AppImage"
source=("https://github.com/pliablepixels/zmNinja/releases/download/v$pkgver/$_zmninja_file" "zmninja.desktop" "cc-by-nc-sa-4.0.txt" "LICENSE" "zmninja.png")
sha256sums=('11dabdc9edcbca502a6e443df3798e23aa060b50dc7c65d96aa00fcb247b6525'
            '9f3663299da4be200b56e0d244ed4a9949435362906c607ac84083cb825a4102'
            'cd9832c492786274823efa8d026ba57f45b51fabf37fc67b85069e1ed0c062b7'
            '02382b431a1885512de0b340a98077483c11e3432cd3997607b5d526f5b8f3f7'
            '4e3490ae6e86aeb78893839727be5c145207ff1a083e3a3f2bc0163c057def4d')

build() {
	:
}


package() {
	cd $pkgdir
	install -d usr/lib/
	install -d usr/bin/
	ln -s  /usr/lib/$pkgname/$_zmninja_file usr/bin/$pkgname

	install -D -m755 $srcdir/$_zmninja_file usr/lib/$pkgname/$_zmninja_file
	install -D -m644 $srcdir/$pkgname.desktop usr/share/applications/$pkgname.desktop
	install -D -m644 $srcdir/LICENSE usr/share/licenses/$pkgname/LICENSE
	install -D -m644 $srcdir/cc-by-nc-sa-4.0.txt usr/share/licenses/$pkgname/cc-by-nc-sa-4.0.txt
	install -D -m644 $srcdir/zmninja.png usr/share/pixmaps/$pkgname.png
}
