# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

_setmiscver=0.33
_ndkver=0.3.1

pkgname=nginx-mainline-mod-ndk-set-misc
pkgver=$_setmiscver+$_ndkver
pkgrel=1

_modname=set-misc

pkgdesc="Various set_xxx directives added to nginx's rewrite + ngx_devel_kit (module for mainline nginx)"
arch=('i686' 'x86_64')
depends=('nginx-mainline')
makedepends=('nginx-mainline-src')
conflicts=('nginx-mainline-mod-ndk')
provides=('nginx-mainline-mod-ndk')
url="https://github.com/openresty/set-misc-nginx-module"
license=('BSD')

source=(https://github.com/openresty/$_modname-nginx-module/archive/v$_setmiscver/$_modname-$_setmiscver.tar.gz
        https://github.com/simpl/ngx_devel_kit/archive/v$_ndkver/ngx_devel_kit-$_ndkver.tar.gz)
sha256sums=('cd5e2cc834bcfa30149e7511f2b5a2183baf0b70dc091af717a89a64e44a2985'
            '0e971105e210d272a497567fa2e2c256f4e39b845a5ba80d373e26ba1abfbd85')

prepare() {
	mkdir -p build
	cd build
	ln -sf /usr/src/nginx/auto
	ln -sf /usr/src/nginx/src
}

build() {
	cd build
	/usr/src/nginx/configure --with-compat \
	  --add-dynamic-module=../ngx_devel_kit-$_ndkver \
	  --add-dynamic-module=../$_modname-nginx-module-$_setmiscver
	make modules
}

package() {
	cd build/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
