# Maintainer: Jack Chen <redchenjs@live.com>

pkgname=upd72020x-fw
pkgver=20200826
pkgrel=2
pkgdesc="Renesas uPD720201 / uPD720202 USB 3.0 chipsets firmware"
arch=('any')
url="https://github.com/denisandroid/uPD72020x-Firmware"
license=('custom')
depends=('bash')
source=(
    "https://raw.githubusercontent.com/denisandroid/uPD72020x-Firmware/master/UPDATE.mem"
    "https://raw.githubusercontent.com/denisandroid/uPD72020x-Firmware/master/License.rtf"
    "upd72020x-fw"
    "upd72020x-fw-remove.hook"
    "upd72020x-fw-install.hook"
)
sha512sums=(
    '1ea117f9a1a772013fb7509c76d731865e6c05ae3c55a304ff42b31ec8a474e9bf16dd1b05b2e5b666ec5fd301aefed54bfeb6bfd7c3f23dc23faf082cf2a9f7'
    'f5be9af49a6ec81f77275c6f4092e6675a707a95a33bf37eb9ba84a7226f3310eebffb7699f8b9b12110c9ca2af1a56f528a94f1e4891fd45f297affd8ebb577'
    '2733827c1c3d0fcef088b9bcb01101318b11c22bbae7b7787a2f020f0d0a6be327a0edebd0a159dd110bd044f3fb8c3139b66d80876be440ba4d3ba90779a372'
    'bdbd37974bdb0257de1b27f0cb5e40a58288a7f5d142cff0c1f32fe07737a212b7a9ca8c68e86c6f95471ff58ca3d0fd2941d99579b4a9833f86b66087493db3'
    '6f831395c23e3b17055745ea619e8031f9fdd9e56aab28e08258309f848bbaa194a9403d7ee98a1f2004580c8a289e18165f9be9d495f64ebffad0928d526d3c'
)

package() {
    install -Dm644 UPDATE.mem "$pkgdir/usr/lib/firmware/renesas_usb_fw.mem"
    install -Dm644 License.rtf "$pkgdir/usr/share/licenses/$pkgname/LICENSE.rtf"
    install -Dm755 upd72020x-fw "$pkgdir/usr/share/libalpm/scripts/upd72020x-fw"
    install -Dm644 upd72020x-fw-remove.hook "$pkgdir/usr/share/libalpm/hooks/upd72020x-fw-remove.hook"
    install -Dm644 upd72020x-fw-install.hook "$pkgdir/usr/share/libalpm/hooks/upd72020x-fw-install.hook"
}
