# Maintainer: RealStickman <mrc+aur@frm01.net>

pkgname=kopia-ui-bin
pkgdesc='A cross-platform backup-tool with encryption, deduplication, compression and cloud support.'
pkgver=0.11.3
# Uncomment for releases with hyphens
# _pkgver=$(echo "$pkgver" | tr '~' -)
pkgrel=1
arch=('x86_64' 'aarch64' 'armv7h')
url='https://github.com/kopia/kopia/'
license=('APACHE')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=("app-update.yml")
source_x86_64=("https://github.com/kopia/kopia/releases/download/v$pkgver/${pkgname%-bin}_${pkgver}_amd64.deb")
source_aarch64=("https://github.com/kopia/kopia/releases/download/v$pkgver/${pkgname%-bin}_${pkgver}_arm64.deb")
source_armv7h=("https://github.com/kopia/kopia/releases/download/v$pkgver/${pkgname%-bin}_${pkgver}_armv7l.deb")
sha256sums=('6e04ed70f54a3d70c22240cd6e4f65df4ad2f3e8aa1608aca20dc91c594bd83b')
sha256sums_x86_64=('f44d89061599023f3eda2d5fb358028aadadebabf3c653e0554f224446d150e2')
sha256sums_aarch64=('5676923a1b91a838f20558e571641e6912efb30c7108eba9506598bb0417f1fb')
sha256sums_armv7h=('e17ab79166495ca1d67095f126f68b24ca7a3a7ca919e041daf70e7a2f826534')

package() {
    tar -xf data.tar.xz -C "$pkgdir"
    cp app-update.yml "$pkgdir/opt/KopiaUI/resources"
}
