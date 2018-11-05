# Maintainer: Martin Fracker, Jr. <martin.frackerjr@gmail.com>

pkgname=nodejs-create-nuxt-app
_pkgname=create-nuxt-app
pkgver=2.1.1
pkgrel=2
pkgdesc="Create a Nuxt.js project in seconds"
arch=("any")
url="https://github.com/nuxt-community/create-nuxt-app"
license=("MIT")
depends=()
provides=("$_pkgname")
makedepends=("npm")
source=("https://registry.npmjs.org/create-nuxt-app/-/$_pkgname-$pkgver.tgz"
        "LICENSE::https://raw.githubusercontent.com/nuxt-community/create-nuxt-app/master/LICENSE"
        )
sha256sums=('64206d2117ee6a23e8459e919a0be1d70733fc6a26954f988f0022ea4359b30b'
            '62203251d328f41a3c67da864559761824bff3940fa3a46af3530e81d112fc8d')

package() {
  npm install -g --user root --cache "$srcdir/npm-cache" --prefix "$pkgdir"/usr $_pkgname-$pkgver.tgz

  find "${pkgdir}"/usr -type d -exec chmod 755 {} +
}
# vim:set ts=2 sw=2 et:
