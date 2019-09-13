# Maintainer: Alex J. Malozemoff <amaloz@galois.com>
pkgname=matterhorn-bin
pkgver=50200.5.0
pkgrel=1
pkgdesc="A terminal-based chat client for MatterMost"
arch=('x86_64')
url="https://github.com/matterhorn-chat/matterhorn"
license=('BSD')
provides=('matterhorn-bin')
conflicts=('matterhorn' 'matterhorn-git')
depends=('gmp' 'libffi' 'ncurses5-compat-libs' 'zlib')
source=("https://github.com/matterhorn-chat/matterhorn/releases/download/${pkgver}/matterhorn-${pkgver}-ubuntu-18.04-bionic-x86_64.tar.bz2"
        "LICENSE::https://github.com/matterhorn-chat/matterhorn/raw/master/LICENSE")
sha1sums=('e4e944725c131994ae408b42cdf8ca27e2d0ab0f'
          '42e13363365a1fed1318f9e7fadd8d1760e7ba95')

package() {
  install -m644 -D LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
  cd ${srcdir}/matterhorn-${pkgver}-ubuntu-18.04-bionic-${arch}
  install -m755 -D matterhorn ${pkgdir}/usr/bin/matterhorn

}
