# Maintainer: helix <stargr[at]gmail[dot]com>
pkgname=wps-office-extension-italian-dictionary
pkgver=20131121
pkgrel=4
pkgdesc='Italian dictionary for WPS Office'
arch=('any')
url='https://github.com/wps-community/wps_community_website/tree/master/root/download/dicts'
license=('custom')
depends=('wps-office')
groups=('wps-office-extensions')
makedepends=('unzip')
source=(https://github.com/wps-community/wps_community_website/raw/master/root/download/dicts/it_IT.zip)
sha512sums=('7b39c8069b45acef0deb7208f2b1c16b4abf0544b54e8c9600c3c066d1917f8a7a7bb5783730d05d21403b7956d76f5cfb7c335f4e529f34abd0deafe1385909')

package() {
  install -dm755 $pkgdir/usr/lib/office6/dicts/spellcheck
  unzip -q $srcdir/it_IT.zip -d $pkgdir/usr/lib/office6/dicts/spellcheck
}
