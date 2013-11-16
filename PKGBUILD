# Maintainer: Philipp Schmitt (philipp<at>schmitt<dot>co)

pkgname=pilight-git
_pkgname=pilight
pkgver=v2.0.r0.g172149f
pkgrel=5
pkgdesc='Modular domotica with the Raspberry Pi'
arch=('x86_64' 'armv6h')
url="http://pilight.org/"
license=('GPL3')
makedepends=('git' 'gcc' 'glibc')
source=('git+https://github.com/pilight/pilight.git'
        'https://raw.github.com/pschmitt/pilight-git/master/Makefile'
        'https://raw.github.com/pschmitt/pilight/master/pilight.service')
sha256sums=('SKIP' 
            '8669f4366b60f9ff6e17cbab219654a3c81e4e5f0a0e8e79779e3a3297fae760'
            '826f51966a2fbaf00ea8b3900010142f6974420e475874a314ad5466811a6bd9')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --long | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/${_pkgname}"
    sed -i 's|\("webserver-root"\): "/usr/local/share/pilight/"|\1: "/usr/share/webapps/pilight"|' settings.json-default 

    cp -f "${srcdir}/Makefile" Makefile                                                                 
    for f in $(grep -IRl 'pilight.h"' .); do
        sed -i 's|\(#include .*pilight.h\)"|\1.in"|g' $f
    done
    sed -i 's/#cmakedefine/#define/g' pilight.h.in 
}

build() {
    cd "${srcdir}/${_pkgname}"
    make
}

package() {
    cd "${srcdir}/${_pkgname}"
    make DESTDIR="$pkgdir/" install
    install -Dm644 "${srcdir}/pilight.service" "${pkgdir}/usr/lib/systemd/system/pilight.service"
}

