# Maintainer: Giusy Margarita <kurmikon at libero dot it>

pkgname=mpv-acestream
pkgver=0.1
pkgrel=2
pkgdesc="Lua script that adds AceStream protocol handler to mpv player"
arch=("any")
url="https://github.com/Digitalone1/mpv-acestream"
license=("GPL3")
#depends=()
#makedepends=()
optdepends=("acestream-engine: AceStream engine")
source=(
    "https://github.com/Digitalone1/mpv-acestream/archive/v$pkgver.tar.gz"
    "acestream.protocol")
install="$pkgname.install"
md5sums=(
    "14defb5825819786c86bf25a1a054cdc"
    "b3c9666c4e0aecd92f6fc208a2b3429e")

package() {
    cd $pkgname-$pkgver

    install -Dm755 "scripts/$pkgname.lua" "$pkgdir/usr/lib/mpv/$pkgname.lua"
    
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 "README.md" "$pkgdir//usr/share/doc//$pkgname/README.md"
    
    # Plasma 5 protocol file
    install -Dm644 "$srcdir/acestream.protocol" "$pkgdir/usr/share/kservices5/acestream.protocol"
} 
