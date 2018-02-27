# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-geoip2
pkgver=2.0
pkgrel=10

_modname="ngx_http_geoip2_module"
_nginxver=1.13.9

pkgdesc="GeoIP2 module for mainline nginx"
arch=('i686' 'x86_64')
depends=('nginx-mainline' 'libmaxminddb')
url="https://github.com/leev/ngx_http_geoip2_module"
license=('BSD')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz
	https://github.com/leev/ngx_http_geoip2_module/archive/$pkgver/$_modname-$pkgver.tar.gz
)

sha256sums=('5faea18857516fe68d30be39c3032bd22ed9cf85e1a6fdf32e3721d96ff7fa42'
            'ebb4652c4f9a2e1ee31fddefc4c93ff78e651a4b2727d3453d026bccbd708d99')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname-$pkgver
	make modules
}

package() {
	install -Dm644 "$srcdir"/$_modname-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in ngx_*.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
