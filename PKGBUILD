# Maintainer: Alynx Zhou <alynx.zhou@gmail.com>

pkgname=hikarujs
pkgver=1.7.1
pkgrel=1
pkgdesc='A static site generator that generates routes based on directories naturally.'
arch=('any')
url='https://hikaru.alynx.one/'
license=('Apache')
depends=('nodejs>=10.13.0')
makedepends=('npm' 'jq')
source=("https://registry.npmjs.org/${pkgname}/-/${pkgname}-${pkgver}.tgz")
noextract=("${pkgname}-${pkgver}.tgz")
sha512sums=('84a8d9d67cafe85177aec82e683f83d9b4021614df4c7aef2ebd970d0f95f4b14f47d975806364b9141a852f8ba1de590b075077bf91acfc062a97a7ff2fa118')

package() {
  # Use `--cache="${srcdir}/.npm"` to prevent npm from generating cache in home.
  # Use `--loglevel=error` to remove fsevents warning.
  npm install \
    --global \
    --user=root \
    --loglevel=error \
    --prefix="${pkgdir}/usr" \
    --cache="${srcdir}/.npm" \
    "${srcdir}/${pkgname}-${pkgver}.tgz"

  # Remove all src dir reference in dependencies' package.json with sed.
  find "${pkgdir}" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'
  # Remove src dir reference in package.json with jq.
  local tmpjson="$(mktemp)"
  local pkgjson="${pkgdir}/usr/lib/node_modules/${pkgname}/package.json"
  jq '.|=with_entries(select(.key|test("_.+")|not))' "${pkgjson}" > "${tmpjson}"
  mv "${tmpjson}" "${pkgjson}"
  chmod 0644 "${pkgjson}"

  # npm sometimes gives dirs 777, fix it.
  find "${pkgdir}" -type d -exec chmod 0755 {} +
  # npm sets all owner to build user, which results in a lot of error which package checking.
  chown -R root:root "${pkgdir}"

  # Install LICENSE.
  install -Dm0644 \
    "${pkgdir}/usr/lib/node_modules/${pkgname}/LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
