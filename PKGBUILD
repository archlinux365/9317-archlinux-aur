# Maintainer: Hexchain Tong <i at hexchain dot org>

pkgname=tinc-pre
pkgver=1.1pre14
pkgrel=3
pkgdesc="VPN (Virtual Private Network) daemon (Pre-release)"
arch=(i686 x86_64 armv7h)
url="http://www.tinc-vpn.org/"
license=('GPL')
depends=('lzo' 'zlib' 'openssl-1.0' 'miniupnpc')
makedepends=('git' 'autoconf')
optdepends=('python2' 'wxpython: gui support')
provides=('tinc-pre' 'tinc-pre-systemd')
conflicts=('tinc' 'tinc-pre-systemd')
install="${pkgname}.install"
source=("git+https://github.com/gsliepen/tinc.git#tag=release-$pkgver")
sha256sums=('SKIP')

build() {
    cd "$srcdir/tinc"

    autoreconf -fsi
    ./configure \
        --prefix=/usr \
        --sbindir=/usr/bin \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --with-systemd=/usr/lib/systemd/system \
        --with-openssl=/usr/lib/openssl-1.0 \
        --with-openssl-include=/usr/include/openssl-1.0 \
        --with-openssl-lib=/usr/lib/openssl-1.0 \
        --enable-miniupnpc
    make
}

package() {
    cd "$srcdir/tinc"
    make DESTDIR="$pkgdir" install

    mkdir -p "$pkgdir/etc/tinc/"
    mkdir -p "$pkgdir/usr/share/doc/tinc-pre/"
    cp -rv --no-preserve='ownership' "$srcdir/tinc/doc/sample-config/" "$pkgdir/usr/share/doc/tinc-pre/"
    install -Dm644 "$srcdir/tinc/bash_completion.d/tinc" -t "$pkgdir/usr/share/bash-completion/completions/"

    # install -Dm644 "$srcdir/tinc/systemd/tinc@.service" -t "$pkgdir/usr/lib/systemd/system/"
}
