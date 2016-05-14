# Maintainer: FadeMind <fademind@gmail.com>
# Contributor: Marcel Korpel <marcel[dot]korpel[at]gmail>

_plugin_name=keefox
pkgname=firefox-extension-${_plugin_name}
pkgver=1.6.0
pkgrel=2
pkgdesc="Adds free, secure and easy to use password management features to Firefox"
arch=('any')
url="http://${_plugin_name}.org"
license=('GPL2')
depends=('firefox' 'keepass-plugin-rpc')
makedepends=('unzip')
source=("https://addons.cdn.mozilla.net/user-media/addons/306880/${_plugin_name}-${pkgver}-tb+fx-linux.xpi")
sha256sums=('79b24492e191e112bac7fb42dfc318fe0e2fac369ab9dcb8da4534c3149f2ca4')
noextract=(${_plugin_name}-${pkgver}.xpi)

prepare(){
    unzip -qqo ${_plugin_name}-${pkgver}-tb+fx-linux.xpi
}

package() {
    cd "$srcdir"
    emid=$(sed -n '/.*<em:id>\(.*\)<\/em:id>.*/{s//\1/p;q}' install.rdf)
    local dstdir="$pkgdir/usr/lib/firefox/browser/extensions/${emid}"
    install -d "$dstdir"
    rm *.xpi
    cp -dpr --no-preserve=ownership * "$dstdir"
    chmod -R 755 "$dstdir"
}
