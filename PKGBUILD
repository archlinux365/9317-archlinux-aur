# Maintainer: Ashely Roll <ash at digitalnemesis dot com>


pkgname=astrodmx-capture
pkgver=1.3.14.0
pkgrel=2
pkgdesc="AstroDMx Capture Astronomical Imaging"
arch=('x86_64')
url="https://www.astrodmx-capture.org.uk/"
# No licence file available in package, see https://www.linux-astro-imaging.uk/linux/astronomy/linux-downloads
# for details.
license=(custom)
options=(!strip)
install=$pkgname.install

# The Author, Nicola, is now copying new releases into both the `current` and `old` folders so that we
# can maintain a constant path the file. Hopefully this will allow us to continue installing older versions
# without breakage after a new version is released. Thanks Nicola!
source=("https://www.astrodmx-capture.org.uk/sites/downloads/astrodmx/old/x86-64/astrodmx-capture_${pkgver}_x86-64-manual.tar.gz")
sha256sums=("8f5c2803eff1434d1b55aaf6faa18360234fd1d785d8e0c5c2499b2c3003da5f")

_instdir="/usr/local/AstroDMx_Capture"
_prefix="AstroDMx-${pkgver}-manual"

package() {
    # create the desitination folder
    mkdir -p "${pkgdir}${_instdir}"

    # copy over the linux 64 bit files
    cp --recursive ${_prefix}/usr/local/AstroDMx_Capture/* "${pkgdir}${_instdir}"

    # copy over the udev rules
    mkdir -p "${pkgdir}/etc/udev/rules.d"
    cp ${_prefix}/etc/udev/rules.d/* "${pkgdir}/etc/udev/rules.d"

    # create a profile file to add an alias for astrodmx
    mkdir -p "${pkgdir}/etc/profile.d"
    echo "alias astrodmx=\"${_instdir}/bin/AstroDMx-Capture\"" > "${pkgdir}/etc/profile.d/${pkgname}.sh"
}
