# Maintainer: mutantmonkey <aur@mutantmonkey.in>
pkgname=dracut-antievilmaid-git
_gitname=qubes-antievilmaid
pkgver=316.9716fa5
pkgrel=1
pkgdesc="Dracut module and conf file to enable Anti Evil Maid support."
arch=('i686' 'x86_64')
url="http://www.qubes-os.org"
license=('GPL')
depends=('dracut' 'trousers')
makedepends=('git')
optdepends=("antievilmaid: Anti Evil Maid installation script")
provides=('dracut-antievilmaid')
conflicts=('dracut-antievilmaid')
source=('git+https://github.com/QubesOS/qubes-antievilmaid.git')
sha256sums=('SKIP')

pkgver() {
  cd $_gitname
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

package() {
  cd $_gitname

  install -D -m0644 etc/dracut.conf.d/anti-evil-maid.conf \
    "$pkgdir/etc/dracut.conf.d/anti-evil-maid.conf"

  install -d -m0755 "$pkgdir/usr/lib/dracut/modules.d"
  cp -r 90anti-evil-maid \
    "$pkgdir/usr/lib/dracut/modules.d/"
}

# vim:set ts=2 sw=2 et:
