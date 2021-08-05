# Maintainer  : Chris Billington <chrisjbillington@gmail.com>
# Contributor  : George Eleftheriou <eleftg>
# Contributor : Martin Wimpress <code@flexion.org>
# Contributor : Nick Pope
# Contributor : Bryce Nordgren <bnordgren at gmail dot com>
pkgname=hdfview-bin
_pkgname=HDFView
pkgver=3.1.3
pkgrel=1
pkgdesc="a GUI browser for reading hdf5 files - prebuilt binaries from the HDF group"
arch=('x86_64')
url="https://www.hdfgroup.org/downloads/hdfview/"
license=('custom')
provides=('hdfview')
replaces=('hdfview-beta')
conflicts=('hdfview-beta' 'hdfview')
source=("https://support.hdfgroup.org/ftp/HDF5/releases/HDF-JAVA/hdfview-${pkgver}/bin/${_pkgname}-${pkgver}-centos7_64.tar.gz"
        HDFView.svg)
sha512sums=('fece19188db9e3fba91f99d3478998ab1f9f2de3379ea9e8d33a2718d9984ec5affd8d4b75e5e5c202d908b3fe4c536247f4e05402700347b1ab83ed5aa72e0f'
            '649eb81f33a3b38a7ae2ee9a7f286ffa489d0bd7a9f37a0face64fe7956863dcab2131be3792c45dc03b1a6955fda2b37d168698922e938b73c90d24fee7a8c4')

package() {

  # Extract RPM
  bsdtar -xf "${srcdir}/hdfview-${pkgver}-1.x86_64.rpm" -C "${pkgdir}"

  # Add permissions for non-root users:
  chmod -R go+rX "${pkgdir}/opt/hdfview"

  # Launcher:
  mkdir -p "${pkgdir}/usr/bin"
  ln -s "/opt/hdfview/bin/HDFView" "${pkgdir}/usr/bin/hdfview"

  # Higher res icon:
  rm "${pkgdir}/opt/hdfview/lib/HDFView.png"
  install -D -m 644 "${srcdir}/HDFView.svg" "${pkgdir}/opt/hdfview/lib/HDFView.svg"
  sed -i 's/png/svg/g' "${pkgdir}/opt/hdfview/lib/hdfview-HDFView.desktop"

  # Desktop file:
  # Add missing %F to exec line:
  sed -i 's:bin/HDFView:bin/HDFView %F:g' "${pkgdir}/opt/hdfview/lib/hdfview-HDFView.desktop"
  mkdir -p "${pkgdir}/usr/share/applications"
  mv "${pkgdir}/opt/hdfview/lib/hdfview-HDFView.desktop" "${pkgdir}/usr/share/applications/"
  
  # Mimetypes:
  mkdir -p "${pkgdir}/usr/share/mime/application"
  mv "${pkgdir}/opt/hdfview/lib/hdfview-HDFView-MimeInfo.xml" "${pkgdir}/usr/share/mime/application/"

  # License:
  install -D -m 644 "${srcdir}/COPYING" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
