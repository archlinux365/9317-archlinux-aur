# Maintainer: lod <aur@cyber-anlage.de>
pkgname=amdvlk-bin
pkgver=2019.Q3.2
pkgrel=1
pkgdesc='Open-source Vulkan driver for AMD Radeon™ graphics adapters (Stable DEB Release)'
arch=('x86_64')
url='https://github.com/GPUOpen-Drivers/AMDVLK'
license=('MIT')
depends=('vulkan-icd-loader')
conflicts=('amdvlk' 'amdvlk-deb' 'amdvlk-git')
provides=('amdvlk' 'vulkan-driver')
source=(https://github.com/GPUOpen-Drivers/AMDVLK/releases/download/v-${pkgver}/amdvlk_${pkgver}_amd64.deb)
sha256sums=('918ed344d50817d924415db8bbba7c21a282ac10410a2e249f8b2b63b6335d7b')

build() {
  ar -x ${srcdir}/amdvlk_${pkgver}_amd64.deb
  tar -xJf ${srcdir}/data.tar.xz
}

package() {
  install -m755 -d ${pkgdir}/usr/lib
  install -m755 -d ${pkgdir}/usr/share/vulkan/icd.d
  install -m755 -d ${pkgdir}/usr/share/licenses/${pkgname}/

  install usr/lib/x86_64-linux-gnu/amdvlk64.so ${pkgdir}/usr/lib/
  install usr/lib/x86_64-linux-gnu/spvgen.so ${pkgdir}/usr/lib/
  install etc/vulkan/icd.d/amd_icd64.json ${pkgdir}/usr/share/vulkan/icd.d/
  install usr/share/doc/amdvlk/copyright ${pkgdir}/usr/share/licenses/${pkgname}/

  sed -i "s/\/x86_64-linux-gnu\//\//g" ${pkgdir}/usr/share/vulkan/icd.d/amd_icd64.json
}
