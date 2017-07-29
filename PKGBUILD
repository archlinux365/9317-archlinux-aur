# Maintainer: Tobias Bauer <archlinux@tobias-bauer.de>
pkgname=ucx
pkgver=17.0.0.4
pkgrel=4
pkgdesc="UltraCompare is a powerful compare tool for files and folders."
arch=('i686' 'x86_64')
url="https://www.ultraedit.com/products/ultracompare/"
license=('custom')
depends=('desktop-file-utils' 'gtk2' 'libjpeg6' 'libpng12' 'libsm')
install=ucx.install
if [ "${CARCH}" = 'i686' ]; then
  source=(
    "https://downloads.ultraedit.com/main/uc/linux/tar/ucx-${pkgver}_i386.tar.gz"
    "https://www.ultraedit.com/assets/images/icons/uc.png"
  )
  md5sums=(
    '7e73b70a3240b8dcd805e61fc9ecb4b5'
    '8d3fc8b36460656eb1636abbace1996b'
  )
else
  source=(
    "https://downloads.ultraedit.com/main/uc/linux/tar/ucx-${pkgver}_amd64.tar.gz"
    "https://www.ultraedit.com/assets/images/icons/uc.png"
  )
  md5sums=(
    '7e7d57b07e408f43886a0b74dfaa3f08'
    '8d3fc8b36460656eb1636abbace1996b'
  )
fi
DLAGENTS=('https::/usr/bin/curl -fLC - --user-agent Lynx --retry 3 --retry-delay 3 -o %o %u')

package() {
  install -d "${pkgdir}/opt" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/pixmaps" "${pkgdir}/usr/share/applications" "${pkgdir}/usr/share/licenses/${pkgname}"

  cp -R "${srcdir}/ucx" "${pkgdir}/opt"
  ln -s "/opt/ucx/bin/ucx" "${pkgdir}/usr/bin/ucx"
  mkdir -p "${pkgdir}/usr/share/ucx"
  mv "${srcdir}/uc.png" "${pkgdir}/usr/share/ucx"
  ln -s "/opt/ucx/share/ucx/ucx.png" "${pkgdir}/usr/share/pixmaps/ucx.png"
  ln -s "/opt/ucx/share/ucx/ucx.desktop" "${pkgdir}/usr/share/applications/ucx.desktop"
  ln -s "/opt/ucx/share/doc/uex/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
