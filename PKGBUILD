# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com

set -u
pkgname='oki-b512'
pkgver='1.1.3'
pkgrel='1'
pkgdesc='CUPS printer driver for the Okidata B512 B432 MB562 MB492'
arch=('any')
url='http://www.okidata.com/'
license=('GPL')
depends=('cups')
source=('http://www.oki.com/eu/printing/download/B512_B432_MB562_MB492_PS_Linux_010103_66002.zip')
sha256sums=('f1f53d01a40652b8ecd8e8b0aa0931ea6e0504feec500c6b2f6c6eee8ba69b44')

package() {
  set -u
  install -Dpm644 *.ppd* -t "${pkgdir}/usr/share/cups/model"
  set +u
}
set +u
