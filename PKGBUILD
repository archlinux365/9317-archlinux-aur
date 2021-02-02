# Maintainer: Dustin Childers <dchilders@gmail.com>
# Contributor: Skye Viau <skye.viau@outlook.com>

pkgname=simtoolkitpro-appimage
pkgver=0.6.65
pkgrel=1
pkgdesc="The all-in-one flight simulation EFB"
license=('custom')
provides=('simtoolkitpro')
conflicts=('simtoolkitpro')
arch=('x86_64')
url="https://simtoolkitpro.co.uk/"
options=(!strip)
_desktop_name=SimToolkitPro.desktop
_filename=SimToolkitPro-${pkgver}-${arch}.Setup.AppImage
source=(
  https://cdn.simtoolkitpro.co.uk/automated-builds/${_filename}
  SimToolkitPro.desktop
  simtoolkitpro.png
)
sha512sums=('05bc6b660f2bded3e8cf6d6e69218c896e8323e5290b099bc3fa74187d6c37f9e9204d064db023af24848fe155d104a33cb173f7377dbf3f0f2c298cfd4db013'
            '82b6be8bdb19ec1973cae124068240ade1ca4b282465e410d47bf2dfceaf0f7854c8de5cf709e6ba27dfcbf43c5ad11e50617c44cfea161d6870ac86f56d6704'
            'fcbbecca8c3719aa59ac22de057fd6775282b4600d6d2a505fd24e1346e1ab92cdd456dfb28b028e880039623ac2e1aa81756b64a87b208a98e6dcbbbf38260d')

prepare() {
  cd "$srcdir"
  chmod +x $_filename
}

package() {
  install -Dm755 $_filename "$pkgdir"/usr/bin/SimToolkitPro.AppImage
  install -Dm0644 "simtoolkitpro.png" "$pkgdir"/usr/share/pixmaps/simtoolkitpro.png
  install -Dm755 ${srcdir}/${_desktop_name} "$pkgdir"/usr/share/applications/${_desktop_name}
}
