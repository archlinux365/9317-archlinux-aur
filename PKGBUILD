# Previous Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Maintainer : Erik Dubois <erik.dubois@gmail.com>

pkgname=numix-circle-icon-theme-git
pkgver=0.r36.a673d9d
pkgrel=1
pkgdesc='Circle icon theme from the Numix project'
arch=('any')
url='http://numixproject.org/'
license=('GPL3')
depends=('numix-icon-theme-git')
makedepends=('git')
provides=('numix-circle-icon-theme' 'numix-circle-light-icon-theme')
conflicts=('numix-circle-icon-theme' 'numix-circle-light-icon-theme')
options=('!strip')
source=('numix-circle-icon-theme::git+https://github.com/numixproject/numix-icon-theme-circle.git')
sha256sums=('SKIP')

pkgver() {
  cd numix-circle-icon-theme
  echo "0.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
  cd numix-circle-icon-theme
  install -dm 755 "${pkgdir}"/usr/share/icons
  cp -dr --no-preserve='ownership' Numix-Circle{,-Light} "${pkgdir}"/usr/share/icons/
}