pkgname=youtube-bin
_pkgname=Youtube-bin
pkgver=1.0.6
pkgrel=1
_pkgrel_x86_64=1
_pkgrel_armv7h=1
_pkgrel_aarch64=1
pkgdesc="Unnofficial Youtube desktop application"
arch=('x86_64' 'arm7h' 'aarch64')
url="https://gitlab.com/youtube/application"
license=('GPL')
depends=('nss' 'gtk3' 'libxss')
makedepends=('unzip')
conflicts=("youtube-git")
sha256sums_x86_64=('147cc3752c57539d9348af6ece25d738db6838e64c67aba6163fa7a32f78a973')
sha256sums_aarch64=('d9d2881489b63f5c1ab03bcaa78f40741a042bb743867e6505f0d20de947934b')
sha256sums_armv7h=('SKIP')
source_x86_64=("https://gitlab.com/youtube-desktop/binaries/"$pkgver"-"$pkgrel"/-/raw/main/Youtube-linux-x64.tar.gz")
source_armv7h=("https://gitlab.com/youtube-desktop/binaries/"$pkgver"-"$pkgrel"/-/raw/main/Youtube-linux-armv7l.tar.gz")
source_aarch64=("https://gitlab.com/youtube-desktop/binaries/"$pkgver"-"$pkgrel"/-/raw/main/Youtube-linux-arm64.tar.gz")


package() {
    for dir in Youtube-linux-*/ ; do mv "${dir}" "$_pkgname" ;done
    cd $_pkgname
    install -dm755 "$pkgdir/opt/Youtube"
    cp -r ./ "$pkgdir/opt/Youtube"


    # Link to binary
    install -dm755 "$pkgdir/usr/bin"
    ln -s "/opt/Youtube" "$pkgdir/usr/bin/Youtube"

    # Desktop Entry
    install -Dm644 "$srcdir/$_pkgname/resources/app/Youtube.desktop" \
        "$pkgdir/usr/share/applications/Youtube.desktop"
    sed -i s%/usr/share%/opt% "$pkgdir/usr/share/applications/Youtube.desktop"
}
