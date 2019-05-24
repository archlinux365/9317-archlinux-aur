# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-modsecurity-git
pkgver=v1.0.0.58.gd7101e1
pkgrel=5

_modname=ModSecurity-nginx
_nginxver=1.17.0

pkgdesc='ModSecurity v3 Nginx Connector (module for mainline nginx)'
arch=('i686' 'x86_64')
depends=('nginx-mainline' 'libmodsecurity')
makedepends=('git')
conflicts=('nginx-mainline-mod-security')
provides=('nginx-mainline-mod-security')
url="https://github.com/SpiderLabs/ModSecurity-nginx"
license=('GPL3')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	git+https://github.com/SpiderLabs/ModSecurity-nginx.git
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('e21b5d06cd53e86afb94f0b3678e0abb0c0f011433471fa3d895cefa65ae0fab'
            'SKIP'
            'SKIP')

pkgver() {
	cd "$srcdir"/$_modname
	git describe --tags --always | sed 's|-|.|g'
}


build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname
	make modules
}

package() {
	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
