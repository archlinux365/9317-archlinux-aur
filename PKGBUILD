# Maintainer: Jan Neumann <neum DOT ja AT gmail DOT com>

pkgname=mcmojave-kde-theme-git
_gitname=McMojave-kde
pkgver=r28.ed26d62
pkgrel=1
pkgdesc="MacOSX Mojave like theme for KDE Plasma "
arch=('any')
url="https://github.com/vinceliuice/McMojave-kde"
license=('GPL3')
depends=('plasma-desktop')
optdepends=('kvantum-qt5' 'mcmojave-circle-icon-theme-git' 'mojave-gtk-theme-git' 'sddm') 
makedepends=('git')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
   cd ${_gitname}
    
   printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

package() {
   mkdir -p ${pkgdir}/usr/share/aurorae
   cp -r  ${srcdir}/${_gitname}/aurorae ${pkgdir}/usr/share
   
   mkdir -p ${pkgdir}/usr/share/color-schemes
   cp -r ${srcdir}/${_gitname}/color-schemes ${pkgdir}/usr/share
   
   mkdir -p ${pkgdir}/usr/share/plasma/desktoptheme/{McMojave-light,McMojave}
   cp -r ${srcdir}/${_gitname}/plasma/desktoptheme ${pkgdir}/usr/share/plasma

   mkdir -p ${pkgdir}/usr/share/plasma/look-and-feel/{com.github.vinceliuice.McMojave-light,com.github.vinceliuice.McMojave}
   cp -r ${srcdir}/${_gitname}/plasma/look-and-feel/ ${pkgdir}/usr/share/plasma
    
   mkdir -p ${pkgdir}/usr/share/sddm/themes/McMojave
   cp -r ${srcdir}/${_gitname}/sddm/McMojave ${pkgdir}/usr/share/sddm/themes

   mkdir -p ${pkgdir}/usr/share/Kvantum/{McMojave-light,McMojave}
   cp -r ${srcdir}/${_gitname}/Kvantum ${pkgdir}/usr/share
}
