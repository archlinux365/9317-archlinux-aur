# Maintainer: valere dot monseur at ymail dot com

pkgname=xcursor-neutral++-white
pkgver=1.1.1
pkgrel=1
pkgdesc="Icon set based on Neutral and jaguarx themes (white version)"
arch=('any')
url="http://gnome-look.org/content/show.php/Neutral%2B%2B+White?content=108143"
license=('Artistic2.0')
source=(https://dl.opendesktop.org/api/files/downloadfile/id/1460734982/s/904ddc5bf06f7fd6ab7d1e02e46940f8/t/1513036428/108143-Neutral++_White-1.1.1.tar.xz)
md5sums=('acf67334d7c6ea30e8a6008f07c4f94c')

package() {
  cd "${srcdir}"

  # install theme
  install -d "${pkgdir}"/usr/share/icons/Neutral++White
  cp -R "${srcdir}"/Neutral++_White/cursors "${pkgdir}"/usr/share/icons/Neutral++White

  # install license
  install -D "${srcdir}"/Neutral++_White/LICENSE "${pkgdir}"/usr/share/licenses/Neutral++White/LICENSE

  # force permission and ownership
  find "${pkgdir}"/ -type d -exec chmod 755 '{}' \;
  find "${pkgdir}"/ -type f -exec chmod 644 '{}' \;
  chown -R root.root "${pkgdir}"/*
}
