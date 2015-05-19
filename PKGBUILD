# Maintainer: Jan Cholasta <grubber at grubber cz>

pkgname=zdbsp
pkgver=1.18.1
pkgrel=1
pkgdesc="A node builder optimized for ZDoom WADs"
arch=('i686' 'x86_64')
url="http://www.zdoom.org/"
license=('GPL2')
depends=('gcc-libs' 'zlib')
makedepends=('cmake')
source=(http://zdoom.org/files/utils/zdbsp/${pkgname}-${pkgver}-src.zip)
noextract=(${pkgname}-${pkgver}-src.zip)
sha256sums=('f04ae1c1ee7cda6efc0ac341fcde9bfa48b929becf0057d4deb0ede09f133cd4')

prepare() {
  cd "$srcdir"

  unzip -d ${pkgname}-${pkgver} -o -q ${pkgname}-${pkgver}-src.zip || return 1
}

build() {
  cd ${pkgname}-${pkgver}

  cmake -DCMAKE_BUILD_TYPE=Release . || return 1
  make || return 1
}

package() {
  cd "$srcdir"/${pkgname}-${pkgver}

  install -m755 -D zdbsp "$pkgdir"/usr/bin/zdbsp
}
