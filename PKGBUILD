# Maintainer: Johannes Lange (<firstname>DOT<lastname>ATcern.ch>)
pkgname=cernbox
pkgver=2.5.4.201906281229_2625.1
pkgrel=1
pkgdesc="Synchronization client for CERN's CERNBox cloud service (based on ownCloud). Note: CERN IT does not provide official support for Arch Linux. Use at your own risk."
arch=('x86_64')
url="http://cernbox.web.cern.ch/"
license=('GPL')
depends=('neon' 'qt5-webkit' 'qtkeychain')
optdepends=('cernbox-nemo: Nemo integration')
provides=('ocsync' 'cernboxsync')

_repo='https://cernbox.cern.ch/cernbox/doc/Linux/repo/Fedora_30/x86_64/'
source=(
    ${_repo}cernbox-client-${pkgver/_/-}.x86_64.rpm
    ${_repo}libcernboxsync0-${pkgver/_/-}.x86_64.rpm
)
md5sums=(
    '2e13cd072680e5235e5b9695087851dd'
    '70447c3b50ea491b2ad1e3b3bc7c1ae7'
)

package() {
    mkdir -p "${pkgdir}/usr"
    cp -dpr "${srcdir}/usr/share" "${pkgdir}/usr/"
    cp -r "${srcdir}/opt/ownCloud/cernbox/bin" "${pkgdir}/usr/"
    cp -r "${srcdir}/opt/ownCloud/cernbox/lib64" "${pkgdir}/usr/lib"
    mkdir -p "${pkgdir}/usr/share/pixmaps"
    cp "${pkgdir}/usr/share/icons/hicolor/128x128/apps/cernbox.png" "${pkgdir}/usr/share/pixmaps"

    cp -dpr "${srcdir}/etc" "${pkgdir}"
}
