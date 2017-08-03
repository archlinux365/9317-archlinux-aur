# Maintainer: Michał Lisowski <lisu@riseup.net>
# Contributor: Daniel Landau <daniel.landau@iki.fi>

pkgname=thunderbird-conversations-git
pkgver=r1716.80bb08f
pkgrel=2
pkgdesc="GMail-like conversation view for Thunderbird"
arch=('any')
url="https://github.com/protz/GMail-Conversation-View"
license=('MPL' 'GPL2' 'LGPL2.1')
depends=('thunderbird>38.7.1')
makedepends=('git' 'gulp' 'nodejs' 'npm' 'zip')
source=("$pkgname"::'git://github.com/protz/GMail-Conversation-View.git' "${pkgname}-mark_as_read.patch")
md5sums=('SKIP'
         '2fd3c3fb307cde2815fd1480b2c8554b')

pkgver() {
        cd "$srcdir/$pkgname"
        printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
        cd "$srcdir/$pkgname"
        patch -p1 < ${srcdir}/${pkgname}-mark_as_read.patch
        git submodule init
        git submodule update
}

build() {
        cd "$srcdir/$pkgname"
        pushd content/pdfjs
        npm install
        node make generic
        popd
        ./build.sh
}

package() {
        cd "$srcdir/$pkgname"
        emid="$(sed -n '/.*<em:id>\(.*\)<\/em:id>.*/{s//\1/p;q}' install.rdf)"

        install -d -m755 "${pkgdir}/usr/lib/thunderbird/extensions/${emid}"
        cd "${pkgdir}/usr/lib/thunderbird/extensions/${emid}"

        unzip "${srcdir}/${pkgname}/conversations.xpi"
}
