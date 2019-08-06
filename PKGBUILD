# Maintainer: Gergely Imreh <imrehg@gmail.com>
# Contributor: Matthew McGinn <mamcgi@gmail.com>

pkgname=versionist
pkgdesc='Flexible CHANGELOG generation toolkit that adapts to your commit conventions'
pkgver=5.3.0
pkgrel=1
arch=('any')
url='https://github.com/balena-io/versionist'
license=('APACHE')
depends=('nodejs>=4.0.0')
makedepends=('npm')
source=(http://registry.npmjs.org/$pkgname/-/${pkgname}-${pkgver}.tgz)
noextract=(${pkgname}-${pkgver}.tgz)
sha256sums=('158220417b5b14835670746fb165eb62b79f5b5554524895134252cfed3ab360')

package() {
  npm install --global --only=production --user root --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tgz"
}
