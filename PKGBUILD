# Maintainer: Alad Wenter <alad@mailbox.org>
# Contributor: Bartłomiej Piotrowski <nospam@bpiotrowski.pl>
# Contributor: peter feigl <peter.feigl@gmail.com>

pkgname=mit-scheme
pkgver=11.2
pkgrel=1
pkgdesc='MIT/GNU Scheme'
url='https://www.gnu.org/software/mit-scheme/'
arch=('x86_64')
license=('GPL')
depends=('ncurses' 'zlib' 'libx11')
makedepends=('ghostscript')
optdepends=('openssl: support for openssl')
provides=('x11-shim.so')
source=("https://ftp.gnu.org/gnu/mit-scheme/stable.pkg/$pkgver/$pkgname-$pkgver-x86-64.tar.gz"
        "https://ftp.gnu.org/gnu/mit-scheme/stable.pkg/$pkgver/$pkgname-$pkgver-x86-64.tar.gz.sig")
validpgpkeys=('8F664EF430167B808170D35AC9E40BAAFD0CB132') # Chris Hanson <cph@chris-hanson.org>
sha256sums=('7ca848cccf29f2058ab489b41c5b3a101fb5c73dc129b1e366fb009f3414029d'
            'SKIP')

build() {
    cd "$pkgname-$pkgver"/src
    ./configure --prefix=/usr \
        --with-x \
        --enable-x11 \
        --enable-native-code
    make -j1
    cd ../doc
    ./configure --prefix=/usr \
        --disable-pdf \
        --disable-html
    make
}

package() {
    cd "$pkgname-$pkgver"
    install -Dm644 "etc/xscheme.el" "$pkgdir/usr/share/emacs/site-lisp/xscheme.el"
    cd src
    make DESTDIR="$pkgdir" install
    cd ../doc
    make DESTDIR="$pkgdir" install-info install-man
}
