# Maintainer: Shayne Hartford <shayneehartford@gmail.com>

pkgname=protondb-to-steam-library-git
_pkgname=ProtonDB-to-Steam-Library
pkgver=0.0.0
pkgrel=1
pkgdesc="Pull ratings from ProtonDB and import them into your Steam library as tags."
arch=('any')
url="https://github.com/CorruptComputer/ProtonDB-to-Steam-Library"
license=('MIT')
depends=(
    'python'
    'python-vdf'
)
source=(git+https://github.com/CorruptComputer/$_pkgname.git)
md5sums=('SKIP')

package() {
  cd "$srcdir/$_pkgname"
  
  install -Dm755 ${_pkgname}.py "${pkgdir}"/usr/bin/${_pkgname}
}
