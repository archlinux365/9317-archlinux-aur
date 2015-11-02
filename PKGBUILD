# Maintainer: karronoli <karo+arch at karonori.com>
pkgname=redpen
pkgver=1.4.1
pkgrel=1
pkgdesc="A document checker. RedPen is a proofreading tool to help writers or programmers."
url="http://redpen.cc/"
arch=('any')
license=('Apache')
depends=('java-runtime>=8')
source=(https://github.com/redpen-cc/redpen/releases/download/v${pkgver}/redpen-${pkgver}.tar.gz)
sha256sums=('431fd0771facc77c353309d981c774c0099b4529f51ca414edb399d936a96f08')

package() {
  mkdir -p "${pkgdir}/opt"
  mv "${srcdir}/${pkgname}-distribution-${pkgver}" "${srcdir}/${pkgname}"
  mv "${srcdir}/${pkgname}" "${pkgdir}/opt/"
  install -d "${pkgdir}/usr/bin"
  cat <<EOF > "${pkgdir}/usr/bin/redpen"
#!/bin/sh
exec '/opt/${pkgname}/bin/redpen' "\$@"
EOF
  chmod a+x "${pkgdir}/usr/bin/redpen"

  cat <<EOF > "${pkgdir}/usr/bin/redpen-server"
#!/bin/sh
exec '/opt/${pkgname}/bin/redpen-server' "\$@"
EOF
  chmod a+x "${pkgdir}/usr/bin/redpen-server"
}

