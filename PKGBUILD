# Victory Icon Theme
# By Darin (newhoa)
#
# AUR Package Contributor: Christopher Bero <bigbero@gmail.com>
#
# Additional Credits: Credits file
# License: GPLv3

pkgname=victory-icon-theme
pkgver=1.0
pkgrel=3
pkgdesc="An icon project by Darin"
arch=('any')
url="https://www.reddit.com/r/linux/comments/41jbjc/an_icon_theme_im_working_on_anyone_willing_to/"
license=('GPL3')
depends=('bash')
source=("https://drive.google.com/uc?export=download&id=0B4tmeufpN98QeUdab01IRzVaQkU")
md5sums=('229600b74a43cabd3a395bfa8f6b3697')

package() {
  echo
  echo "============================================================================="
  echo "Victory Icon Theme is currently in alpha, be aware of this before installing."
  echo "============================================================================="
  echo
  cd "${srcdir}/Victory Icon Theme"
  install -d "${pkgdir}/usr/share/icons/${pkgname}"
  cp -rf * "${pkgdir}/usr/share/icons/${pkgname}"
}
