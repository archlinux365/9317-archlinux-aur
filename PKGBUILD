# Author: Robert Tari <robert at tari dot in>
# Maintainer: Robert Tari <robert at tari dot in>

pkgname="lampswitch"
pkgver="20.10.27"
pkgrel=1
pkgdesc="Indicator and control applet for web services"
arch=("any")
url="https://tari.in/www/software/lampswitch"
license=("GPL3")
depends=("gobject-introspection" "gtk3" "python-gobject" "libayatana-appindicator" "desktop-file-utils")
makedepends=("python-setuptools" "python-polib")
install="${pkgname}.install"
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/tari01/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("01433ed4e68cab02464daf2d87256f03")

build()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    python setup.py build
}

package()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    python setup.py install --root="${pkgdir}" --optimize=1

}
