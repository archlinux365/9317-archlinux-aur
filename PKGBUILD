# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>
# Maintainer since 18.11.2021:  Aleksey Nikiforov <a at nikif dot net>

pkgname=toxiproxy-server-bin
pkgver=2.2.0
pkgrel=2
pkgdesc='A TCP proxy to simulate network and system conditions for chaos and resiliency testing'
arch=('x86_64')
url="http://toxiproxy.io"
license=('MIT')
provides=('toxiproxy-server')
source=("${pkgname}-${pkgver}::https://github.com/Shopify/toxiproxy/releases/download/v${pkgver}/toxiproxy-server-linux-amd64"
        'LICENSE::https://github.com/Shopify/toxiproxy/raw/master/LICENSE')
sha256sums=('18bbc72c3f5296a27b70a725f21bdc1d5afc5659f763f488dbb401c9b0141a3b'
            'c305a1ef46fe6a38b357a943945191184df3cdef9ed833e171c5d811d560ad8f')

package() {
  install -Dm755 "${srcdir}"/toxiproxy-server* "${pkgdir}/usr/bin/toxiproxy-server"
  install -Dm644 "${srcdir}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et: