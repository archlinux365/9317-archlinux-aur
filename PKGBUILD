# Maintainer: Jat <chat@jat.email>

_pkgname=magewell-pro-capture
pkgname=${_pkgname}-dkms
_pkgver=4236
pkgver=1.3.0.4236
pkgrel=1
pkgdesc='Driver for Magewell Pro Capture Family'
arch=('x86_64')
url='https://www.magewell.com/downloads/pro-capture#/driver/linux-x86'
license=('unknown')
conflicts=("${_pkgname}")
depends=('dkms' 'alsa-lib')
source=("https://www.magewell.com/files/drivers/ProCaptureForLinux_${_pkgver}.tar.gz")
sha256sums=('e4683c3868608869395eb7667adfbe987971f10ede36140bd6e6883a0992cfd5')

package() {
    cd ProCaptureForLinux_${_pkgver}

    install -Dm644 src/res/* -t ${pkgdir}/usr/share/ProCapture/res
    sed -i 's#/usr/local/share/ProCapture/src/res#/usr/share/ProCapture/res#g' scripts/ProCapture.conf
    install -Dm644 scripts/ProCapture.conf -t ${pkgdir}/usr/lib/modprobe.d
    install -Dm644 scripts/10-procatpure-event-dev.rules -t ${pkgdir}/usr/lib/udev/rules.d

    install -Dm755 bin/mwcap-control_64 ${pkgdir}/usr/bin/mwcap-control
    install -Dm755 bin/mwcap-info_64 ${pkgdir}/usr/bin/mwcap-info

    srcdir=${pkgdir}/usr/src/${_pkgname}-${_pkgver}
    install -Dm644 src/dkms.conf src/Makefile src/ProCaptureLib_64.lib -t ${srcdir}
    cp -r src/public src/sources ${srcdir}
}
