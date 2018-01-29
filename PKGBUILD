# Maintainer: rich_o <aurua@riseup.net>

pkgname=paperkey
pkgver=1.5
pkgrel=1
pkgdesc="Make long term backups of OpenPGP keys by printing only the secret bits on paper."
arch=('i686' 'x86_64')
url="http://www.jabberwocky.com/software/paperkey/"
license=('GPL2')
depends=('glibc')
source=(http://www.jabberwocky.com/software/$pkgname/$pkgname-$pkgver.tar.gz)
sha256sums=('c4737943083ce92e41faf13c27a9d608105b6285c0840dfb684a7ee294142ddf')

build() {
    cd "$pkgname-$pkgver"
    ./configure --prefix=/usr
    make
}

package() {
    cd "$pkgname-$pkgver"
    make DESTDIR=$pkgdir install
}
