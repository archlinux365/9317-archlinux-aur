# Maintainer: Robert Tari <robert at tari dot in>

pkgname="odio"
pkgver=19.3.7.226
pkgrel=1
pkgdesc="Audio compression tool for FLAC and Nero AAC"
arch=("any")
url="https://tari.in/www/software/${pkgname}"
license=("GPL3")
depends=("gst-python" "gst-plugins-base" "gst-plugins-good" "gst-plugins-bad" "gst-plugins-ugly" "gst-libav" "python-html5lib" "python-beautifulsoup4" "python-lxml" "python-psutil" "flac" "cuetools" "shntool" "atomicparsley" "mac" "lsdvd" "mplayer" "mhwaveedit" "aacgain-cvs" "neroaac" "sacd-decoder-bzr")
makedepends=("bzr" "python-setuptools" "python-polib")
source=("bzr+lp:/${pkgname}/trunk")
md5sums=("SKIP")
options=("!emptydirs")

pkgver()
{
    cd $srcdir/trunk
    echo "$(cat ${pkgname}/appdata.py | grep APPVERSION | sed 's| ||g' | sed "s|'||g" | cut -f '2' -d '=').$(bzr revno)"
}

build()
{
    cd ${srcdir}/trunk
    python setup.py build
}

package()
{
    cd ${srcdir}/trunk
	python setup.py install --root="${pkgdir}" --optimize=1

}
