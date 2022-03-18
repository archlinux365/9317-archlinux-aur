# Maintainer: ebiadsu <ebiadsu at posteo dot de>
# Contributor: Icaro Perseo <icaroperseo[at]protonmail[dot]com>

pkgname=nodejs-browser-sync
pkgver=2.27.9
pkgrel=1
pkgdesc="Live CSS Reload & Browser Syncing"
arch=('any')
url="https://www.browsersync.io/"
license=('Apache')
depends=('nodejs')
makedepends=('npm>=7.4.0' 'jq')
source=("${pkgname}-${pkgver}.tgz::http://registry.npmjs.org/${pkgname#nodejs-}/-/${pkgname#nodejs-}-${pkgver}.tgz")
sha256sums=('be4674cb87decca29773646d9ca11fa81e06b9fb1b7dc1fd005cf00a33ff1348')
noextract=("${pkgname}-${pkgver}.tgz")

package() {
  # install using npm with separate cache directory
  npm install -s -g \
	  --cache "${srcdir}/npm-cache" \
	  --prefix "${pkgdir}/usr" \
	  "${srcdir}/${pkgname}-${pkgver}.tgz"

  # fix ownership, see https://bugs.archlinux.org/task/63396
  chown -R root:root "${pkgdir}"

  # Removing references to pkgdir
  find "${pkgdir}" -type f -name "package.json" -print0 | xargs -0 sed -i "/_where/d"

  # Removing references to srcdir
  local tmppackage="$(mktemp)"
  local pkgjson="${pkgdir}/usr/lib/node_modules/${pkgname#nodejs-}/package.json"
  jq '.|=with_entries(select(.key|test("_.+")|not))' "${pkgjson}" > "${tmppackage}"
  mv "${tmppackage}" "${pkgjson}"
  chmod 644 "${pkgjson}"
}

# vim:set ts=2 sw=2 cc=80 et:
