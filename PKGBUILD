# Maintainer: Bruce Zhang
# Maintainer: Jack Deng
pkgname=thief-book
_name=Thief-Book
pkgver=1.0.1
pkgrel=1
pkgdesc='一款真正的跨平台摸鱼神器'
arch=('x86_64' 'i686')
url='https://github.com/cteamx/Thief-Book'
license=('MIT')
provides=('thief-book')
depends=('electron2')
makedepends=('jq' 'moreutils' 'yarn')
source=("$pkgname-$pkgver.src.tar.gz::https://github.com/cteamx/Thief-Book/archive/$pkgver.tar.gz")
sha256sums=('c8c69c4ff933390269d0187628912f8d8f281fc1ced53c545be5051000739f5e')

prepare() {
	cd "$srcdir/$_name-$pkgver"
    electronDist="\/usr\/lib\/electron2"
    electronVersion=$(tail -1 /usr/lib/electron2/version)
    electronVersion=${electronVersion#v}
    sed -i "s|\"electron\": \".*|\"electron\": \"$electronVersion\",|" package.json
    jq ".build.electronVersion = \"$electronVersion\"" package.json | sponge package.json
    yarn
}

build() {
    cd "$srcdir/$_name-$pkgver"
    yarn build:dir
}

package() {
	cd "$srcdir/$_name-$pkgver/build/linux-unpacked/resources"
    install -Dm644 app.asar "$pkgdir/usr/share/thief-book/app.asar"

    # Install start script
    echo "#!/usr/bin/env sh
exec electron2 /usr/share/thief-book/app.asar
    " > "$srcdir/thief-book.sh"
    install -Dm755 "$srcdir/thief-book.sh" "$pkgdir/usr/bin/thief-book"

    # Install desktop file
    echo "[Desktop Entry]
Name=Thief Book
Comment=一款真正的跨平台摸鱼神器
Exec=/usr/bin/thief-book %U
Terminal=false
Type=Application
Icon=thief-book
StartupWMClass=Thief Book
Categories=Utility;
    " > "$srcdir/thief-book.desktop"
    install -Dm644 "$srcdir/thief-book.desktop" "$pkgdir/usr/share/applications/thief-book.desktop"

    # Install icons
    cd "$srcdir/$_name-$pkgver/build/icons"
    install -Dm644 256x256.png "$pkgdir/usr/share/icons/hicolor/256x256/apps/thief-book.png"
}
