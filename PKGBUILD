# Maintainer: Vaporeon <vaporeon@vaporeon.io>

pkgname=lib32-libstdc++28
pkgver=2.8.0+14
pkgrel=1
pkgdesc="GNU Standard C++ library - 2.8.0"
arch=("x86_64")
url="http://rpm.pbone.net"
license=('GPL')
makedepends=('rpmextract')
source=("ftp://ftp.pbone.net/mirror/archive.download.redhat.com/pub/redhat/linux/5.2/en/os/i386/RedHat/RPMS/libstdc++-2.8.0-14.i386.rpm")
noextract=()
sha1sums=('dedef5807113a31180fd6f8660ccafdc8eef530e')
options=('!strip')

package() {
    cd "$pckgdir"
    rpmextract.sh "$srcdir"/libstdc++-2.8.0-14.i386.rpm
    install -Dm755 "$srcdir"/usr/lib/libstdc++.so.2.8.0 "$pkgdir"/usr/lib32/libstdc++.so.2.8.0
    ln -s libstdc++.so.2.8.0 "$pkgdir"/usr/lib32/libstdc++.so.2.8
}
