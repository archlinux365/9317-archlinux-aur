# Maintainer: DATSD <DAStudio *dot* 71e6fd52 *at* gmail *dot* com>
_basename=factorio-helper
pkgname=${_basename}-git
pkgver=r81
pkgrel=1
pkgdesc="A helper program of Factorio"
arch=('i686' 'x86_64')
url='https://github.com/745275633/Factorio-helper'
license=('GPL')
depends=('yaml-cpp' 'factorio-mod-info' 'zsh')
makedepends=('xmake>=2.1.4.r178' 'git')
optdepends=(
'steam: get factorio'
'factorio: factorio game'
)
provides=(${_basename}=${pkgver})
conflicts=(${_basename})
source=("${_basename}::git+https://github.com/745275633/Factorio-helper.git")
sha256sums=('SKIP')

pkgver()
{
  cd "${srcdir}/${_basename}"
  echo "r$(git rev-list --count HEAD)"
}

build()
{
  cd "${srcdir}/${_basename}"
  xmake clean
  xmake config -k release
  xmake build
}

package()
{
  cd "${srcdir}/${_basename}"
  export PREFIX="${pkgdir}/usr"
  export VERBOSE="-v"
  ./install.sh
}
