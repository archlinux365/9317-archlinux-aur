# Maintainer: John-Michael Mulesa <jmulesa@gmail.com>
pkgname=quake2rtx-bin
_pkgname=quake2rtx
pkgver=1.6.0
pkgrel=1
pkgdesc="Ray-traced version of Quake II."
arch=(x86_64)
url="https://github.com/NVIDIA/Q2RTX"
license=('GPL')
groups=()
depends=(zlib curl sdl2 vulkan-headers vulkan-driver)
makedepends=()
checkdepends=()
optdepends=()
provides=('quake2rtx')
conflicts=('quake2rtx')
replaces=()
source=("https://github.com/NVIDIA/Q2RTX/releases/download/v${pkgver}/q2rtx-${pkgver}-linux.tar.gz")
sha256sums=('d2c8218b8d0e232a23f05b4b4a83097d28d53291584ef850bb79de8b888aa3b4')

package() {
  mkdir -p "${pkgdir}/usr/share/${_pkgname}/bin"
  cp "${srcdir}/q2rtx"/{changelog.md,license.txt,notice.txt,readme.md} "${pkgdir}/usr/share/${_pkgname}/"
  cp "${srcdir}/q2rtx"/find-retail-paks.sh "${pkgdir}/usr/share/${_pkgname}/bin/"
  cp "${srcdir}/q2rtx"/q2rtx{,ded} "${pkgdir}/usr/share/${_pkgname}/bin/"
  cp -r "${srcdir}/q2rtx/baseq2" "${pkgdir}/usr/share/${_pkgname}/"
  install -Dm755 "${srcdir}/q2rtx/q2rtx.sh" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm755 "${srcdir}/q2rtx/q2rtx.sh" "${pkgdir}/usr/bin/q2rtx"
  install -Dm755 "${srcdir}/q2rtx/find-retail-paks.sh" "${pkgdir}/usr/bin/${_pkgname}-find-retail-paks"
  install -Dm644 \
    "${srcdir}/q2rtx/q2rtx.png" \
    "${pkgdir}/usr/share/pixmaps/q2rtx.png"
  install -Dm644 \
    "${srcdir}/q2rtx/q2rtx.desktop" \
    "${pkgdir}/usr/share/applications/q2rtx.desktop"
}
