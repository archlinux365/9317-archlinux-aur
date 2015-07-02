# Maintainer: Ian Hernandez <ihernandezs@openmailbox.org>

pkgname=simple-text
pkgver=0.9.5
pkgrel=2
epoch=1
pkgdesc="A not so simple text and code editor written in Vala (Still in development)"
arch=('i686' 'x86_64')
license=('GPL2')
url="https://github.com/badwolfie/$pkgname"
depends=('gtk3-typeahead>=3.16' 'gtksourceview3' 'libgee' 'vte3' 'dconf')
makedepends=('vala' 'git' 'intltool')
options=('!emptydirs')
source=("$pkgname-$pkgver::git+$url.git")
md5sums=('SKIP')
install=$pkgname.install

build() {
    cd $pkgname-$pkgver
    ./autogen.sh
    ./configure --disable-schemas-compile --prefix=/usr
    make
}

package() {
    cd $pkgname-$pkgver
    make DESTDIR="$pkgdir" install
}
