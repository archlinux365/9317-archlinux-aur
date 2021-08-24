# Maintainer: solnce <echo c29sbmNlQHJhdGFqY3phay5vbmU= | base64 -d>
pkgname=pacdef
pkgver=0.6.0
pkgrel=1
pkgdesc='declarative manager of Arch packages'
url='https://github.com/steven-omaha/pacdef'
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/steven-omaha/${pkgname}/archive/refs/tags/v${pkgver}.tar.gz")
arch=('any')
license=('GPL3')
depends=('python')
checkdepends=('python-pytest' 'python-mock')
sha256sums=('51f838b8b41da87a0c28677491030146b0941f049afdcf57e1ad42e27c718cbf')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  sed -i -e "s/VERSION = \"unknown\"/VERSION = \"${pkgver}\"/" pacdef.py
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  pytest -v
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 pacdef.py "${pkgdir}/usr/bin/pacdef"
  install -Dm644 _completion.zsh "${pkgdir}/usr/share/zsh/site-functions/_pacdef"
}
