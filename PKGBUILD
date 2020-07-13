# Maintainer: Michael Gisbers <michael@gisbers.de>
pkgname=flashprint
pkgver=4.3.1
pkgrel=1
pkgdesc="Slicer for the FlashForge 3D printers."
arch=('x86_64')
url="http://www.ff3dp.com/"
depends=('qt5-base' 'qt5-base-595')
license=('custom')
source=("${pkgname}-${pkgver}_amd64.deb::http://www.ishare3d.com/3dapp/public/FlashPrint-ii/FlashPrint/flashprint_${pkgver}_amd64.deb" "${pkgname}")


package() {
    cd ${pkgdir}
    tar -Jxvf ${srcdir}/data.tar.xz
    install -d ${pkgdir}/usr/bin
#    ln -s ../share/FlashPrint/FlashPrint ${pkgdir}/usr/bin/flashprint
    # workaround for render issues
    install ${srcdir}/flashprint ${pkgdir}/usr/bin/flashprint
    # patch desktop file, workaround for render issues
    sed -i "/^Exec=/ c Exec=/usr/bin/flashprint" ${pkgdir}/usr/share/applications/FlashPrint.desktop
}




md5sums=('4c8ff14c40977bf970d751d5b596231c'
         '13f4219e9727314e9646f0230e736242')
sha256sums=('755bd109afdb2feed9e7d45c0c0fc5f1c49c8a2c789a2075fabbc142bd2beef2'
            '8d37f047b9e72f7eee1e7c21dd3eef6fb8b9d7fba94ef3b7c430fa7f6f5e89b3')
sha512sums=('f26515b9b244336a8dc803017b2b781ad711d844b312e54b85735d2936b95787d324ce8a3daa03b68ba902d23342a3c5f614f3c112b6bfd1e741779c2a5fa6e8'
            '1c44983c5761fe89970beb971783c8beb118ad744570cf6a1f3b7e12184b976011eccfd7539977006181ecd09a10a571ac810f4b8920be48453d8d2847f94c36')
