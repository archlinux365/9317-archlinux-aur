# Author: Robert Tari <robert at tari dot in>
# Maintainer: Robert Tari <robert at tari dot in>

pkgname="odio"
pkgver="21.1.31"
pkgrel=1
pkgdesc="Audio compression tool for FLAC and Nero AAC"
arch=("any")
url="https://tari.in/www/software/${pkgname}"
license=("GPL3")
depends=("gst-plugins-good" "gst-plugins-bad" "gst-plugins-ugly" "gst-libav" "python-beautifulsoup4" "python-psutil" "python-mutagen" "odio-edit" "neroaacenc-bin" "libodiosacd" "lsdvd")
makedepends=("python-setuptools" "python-polib")
source=("https://github.com/tari01/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("9d7f05d6965b956defb1543193e90dc0")
options=("!emptydirs")

build()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    python setup.py build
}

package()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    chmod +x data/usr/bin/odio
    python setup.py install --root="${pkgdir}" --optimize=1

}
