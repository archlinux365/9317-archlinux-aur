# Maintainer: Poscat <poscat At mail Dot poscat Dot moe>

pkgname=caddy2
pkgver=beta.13
pkgrel=1
pkgdesc='Fast, cross-platform HTTP/2 web server with automatic HTTPS'
arch=('x86_64')
license=('Apache')
url='https://github.com/caddyserver/caddy'
depends=()
conflicts=('caddy')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://github.com/caddyserver/caddy/archive/v2.0.0-${pkgver}.tar.gz"
        "Caddyfile"
        "caddy.service")

sha256sums=('de1c25a42d2fa2345a9bef62942fb30bd8aec016caa4c9d8f3dbcf0a34d7f3a9'
            'adf24a575a20ae9f503fac2348f7cfd26256f167992a1938f1a53a6d77b9b1f4'
            'c3eb327ba564b167e508b2bfa76ef459cacef09fb2e67a7f09944cb8f92e3207')

build() {
  cd ${srcdir}/caddy-2.0.0-${pkgver}
  export GOPATH="$srcdir"
  go build -v -o caddy cmd/caddy/main.go
}

package() {
  mkdir -p "$pkgdir/var/lib/caddy2"
  install -D -m 0644 Caddyfile "$pkgdir/etc/caddy2/Caddyfile"
  install -D -m 0644 caddy.service "$pkgdir/usr/lib/systemd/system/caddy.service"
  cd ${srcdir}/caddy-2.0.0-${pkgver}
  install -D -m 0755 caddy "$pkgdir/usr/bin/caddy"
}

