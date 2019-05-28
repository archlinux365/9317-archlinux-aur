# Maintainer: <waruqi@gmail.com>
# PKGBuild Create By: lumpyzhu <lumpy.zhu@gmail.com>

pkgname=xmake
pkgver=2.2.6
pkgrel=1
pkgdesc="A make-like build utility based on Lua"
arch=('i686' 'x86_64')
url="https://github.com/xmake-io/xmake"
license=('Apache')
makedepends=()
source=("$pkgname.zip::https://github.com/xmake-io/xmake/archive/v${pkgver}.zip")
sha256sums=('0629a1d48289dfca1eaedfab97bc070a5446346a9473f1ed42bbcba9abbabbb0')

build() {
    cd "$srcdir/${pkgname}-${pkgver}"
    make build
}

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    mkdir -p "${pkgdir}/usr/share"
    cp -r "./xmake" "${pkgdir}/usr/share/"
    install -Dm755 ./core/src/demo/demo.b "${pkgdir}/usr/share/xmake/xmake"
    echo "#!/bin/bash
export XMAKE_PROGRAM_DIR=/usr/share/xmake
/usr/share/xmake/xmake \"\$@\"
" > ./xmake.sh
    install -Dm755 "./xmake.sh" "${pkgdir}/usr/bin/xmake"
}
