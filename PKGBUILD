# $Id$
# Maintainer: Travis Glenn Hansen <travisghansen@yahoo.com>

pkgname=xcursor-jaguarx
pkgver=1.1
pkgrel=5
pkgdesc="animated OSX-style mouse cursors"
arch=('any')
url="https://www.gnome-look.org/p/999877/"
license=('PerlArtistic')
groups=()
depends=()
source=('14775-jaguarx.tar.bz2::https://www.opendesktop.org/p/999877/startdownload?file_id=1460735153&file_name=14775-jaguarx.tar.bz2&file_type=application/x-bzip2&file_size=201940&url=https%3A%2F%2Fdl.opendesktop.org%2Fapi%2Ffiles%2Fdownload%2Fid%2F1460735153%2Fs%2F227f275ec6785d4444efd3b19e09d0d1%2Ft%2F1539399980%2Fu%2F%2F14775-jaguarx.tar.bz2')
md5sums=('bda85cac7a92327086249f3fbc8be08d')

package() {
    cd "${srcdir}"
    install -d "${pkgdir}/usr/share/icons/jaguarx/cursors"
    cp -a jaguarx/cursors/* "${pkgdir}"/usr/share/icons/jaguarx/cursors
    install -Dm644 jaguarx/index.theme "${pkgdir}"/usr/share/icons/jaguarx/index.theme
}
