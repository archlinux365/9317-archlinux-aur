# Maintainer: Yufan You <ouuansteve at gmail>

_npmname=vue-language-server
_npmscope=@volar
pkgname=volar-server-bin
_pkgname=volar-server
pkgver=1.0.4
pkgrel=1
pkgdesc='Explore high-performance tooling for Vue'
arch=('any')
url="https://github.com/johnsoncodehk/volar/tree/master/packages/$_npmname"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
provides=("$_pkgname" 'vue-language-server')
conflicts=("$_pkgname" 'vue-language-server')
source=(https://registry.npmjs.org/$_npmscope/$_npmname/-/$_npmname-$pkgver.tgz)
noextract=($_npmname-$pkgver.tgz)
sha256sums=('c455b051ac6c3fd8ceeaba3715a64be291e8e976c67ea69bba411a595051ca34')

package() {
    cd "$srcdir"
    local _npmdir="$pkgdir/usr/lib/node_modules/"
    mkdir -p "$_npmdir"
    cd "$_npmdir"
    npm install -g --prefix "$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"
    chown -R root:root "${pkgdir}"
    install -Dm644 "$_npmdir/$_npmscope/$_npmname/LICENSE" -t "$pkgdir/usr/share/licenses/$_pkgname"
    ln -s /usr/bin/vue-language-server "$pkgdir/usr/bin/volar-server"
}
