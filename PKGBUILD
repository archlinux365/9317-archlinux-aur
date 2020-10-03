# Maintainer: thegala <thegala at disroot.org>

_pkgname=kibom
pkgname=kibom-git
pkgver=572.51244bb
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="Helps you to generate the fabrication and documentation files for your KiCad projects."
url="https://github.com/INTI-CMNB/kibom"
license=('Apache2.0')
depends=('python')
makedepends=('git' 'python')
source=("${_pkgname}::git+https://github.com/INTI-CMNB/KiBom")
md5sums=('SKIP')
provides=('kibom')
conflicts=('kibom')

pkgver()
{
  cd "$_pkgname"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}


package() {
  cd $_pkgname
  python setup.py install --root="$pkgdir"
}
