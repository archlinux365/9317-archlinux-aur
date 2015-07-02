# Maintainer: Konstantin Shalygin (k0ste@opentech.ru)

pkgname='thunderbird-shrunked'
pkgver='4.1'
pkgrel='0'
pkgdesc="Shrunked makes a smaller copy of your photos for emailing or upload. When it detects a JPEG image (such as a photo), you'll be asked if you want to resize it."
arch=('any')
url='https://addons.mozilla.org/en-US/thunderbird/addon/shrunked-image-resizer'
license=('MPL')
depends=('thunderbird')
source=("shrunked.xpi::https://addons.mozilla.org/thunderbird/downloads/file/319282/shrunked_image_resizer-4.1-sm+tb+fx.xpi")
sha256sums=("efb72c4ca3f11f5f6ad2f7a47ddc02395ef7cfaebc5bde1c53895c97ed9f899f")

package() {
  pushd "$srcdir"
  install -Dm644 "shrunked.xpi" "$pkgdir/usr/lib/thunderbird/extentions/shrunked.xpi"
  popd
}
