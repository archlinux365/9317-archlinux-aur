# Maintainer: Vlad M. <vlad@archlinux.net>
# Contributor: Martin Villagra <mvillagra0@gmail.com>

pkgname=qbittorrent-nogui
_pkgname=qBittorrent
pkgver=3.3.2
pkgrel=1
pkgdesc="A bittorrent client based on Qt5 toolkit and libtorrent-rasterbar, w/o gui"
arch=('i686' 'x86_64')
url="http://www.qbittorrent.org"
license=('GPL')
depends=('boost-libs'
         'libtorrent-rasterbar'
         'qt5-base')
makedepends=('boost'
             'qt5-tools'
             'which')
conflicts=('qbittorrent-git-nogui')
source=("https://github.com/qbittorrent/qBittorrent/archive/release-$pkgver/$_pkgname-$pkgver.tar.gz"
        'qbittorrent.service'
        'qbittorrent@.service')
sha256sums=('97de55740a64389d39df047ecc19e82f45e06823a83980dc156633f3a2ed024e'
            '70eab4f1293f31ee435a5e53915bb3b6503d4449ec8c4a83e880164a2e955e9c'
            '12dfd06104eaf302b79328c8096248c051208f69348e33f7fb2e4a2fb49caa29')

build() {
  cd "$_pkgname-release-$pkgver"
  ./configure --prefix=/usr --disable-gui
  make
}

package() {
  cd "$_pkgname-release-$pkgver"
  make INSTALL_ROOT="$pkgdir/" install

  install -Dm755 "$srcdir/qbittorrent.service" "$pkgdir/usr/lib/systemd/user/qbittorrent.service"
  install -Dm755 "$srcdir/qbittorrent@.service" "$pkgdir/usr/lib/systemd/system/qbittorrent@.service"
}
