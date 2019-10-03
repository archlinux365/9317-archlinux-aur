# Maintainer: marcs <aur (at) mg.odd.red>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

_npmname=ungit
_npmver=1.4.47
pkgname=nodejs-ungit
pkgver=1.4.47
pkgrel=1
pkgdesc="Git made easy"
arch=('i686' 'x86_64')
depends=('nodejs')
makedepends=('npm')
url="https://www.npmjs.com/package/ungit"
license=('MIT')
provides=('nodejs-ungit' 'ungit')
conflicts=('ungit')
options=('!emptydirs' '!strip')
source=("${pkgname}-${pkgver}.tgz::https://registry.npmjs.org/ungit/-/ungit-${pkgver}.tgz")
sha512sums=('693907da383abc27286dd49e125276c6a448eb31cbf18f933cb12013ef3a0667522cfc9182f61ba93cef89e4d717ee14f72ebddcdb5fc802dcbcac6a1e172624')

package() {
  cd ${srcdir}
  local _npmdir="${pkgdir}/usr/lib/node_modules/"
  mkdir -p ${_npmdir}
  cd ${_npmdir}
  npm install -g --prefix "${pkgdir}/usr" ${_npmname}@${_npmver}

  msg2 'Renaming binary from 0ungit-credentials-helper to ungit-credentials-helper'
  mv "${pkgdir}/usr/bin/0ungit-credentials-helper" "${pkgdir}/usr/bin/ungit-credentials-helper"

  # fixing perms
  chmod 755 ${pkgdir}/usr/bin/
  chmod -R 755 ${pkgdir}/usr/lib/node_modules/
}
