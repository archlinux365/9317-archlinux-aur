# Maintainer: Simon Legner <Simon.Legner@gmail.com>
pkgname=linkinator
pkgver=2.5.1
pkgrel=1
pkgdesc="Find broken links, missing images, etc in your HTML"
arch=(any)
url="https://github.com/JustinBeckwith/linkinator#readme"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
source=(https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz)
noextract=($pkgname-$pkgver.tgz)
options=(!strip)

package() {
  npm install -g --user root --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tgz"

  # Non-deterministic race in npm gives 777 permissions to random directories.
  # See https://github.com/npm/npm/issues/9359 for details.
  find "${pkgdir}/usr" -type d -exec chmod 755 {} +

  # npm gives ownership of ALL FILES to build user
  # https://bugs.archlinux.org/task/63396
  chown -R root:root "${pkgdir}"
}

sha256sums=('03a5189dd36795bcc2c63702bbb31188662fe62457d65ca325dcabcf845de5f7')
