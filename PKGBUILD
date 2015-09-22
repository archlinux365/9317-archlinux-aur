# Maintainer: Jonathan Steel <jsteel at aur.archlinux.org>
# Contributor: Sebastian Wolf < fatmike303 at gmail dot com >

pkgname=fs-uae
pkgver=2.6.1
pkgrel=1
pkgdesc="Focuses on emulating Amiga games using the accurate emulation code from WinUAE"
arch=('i686' 'x86_64')
url="http://fs-uae.net"
license=('GPL')
depends=('sdl2' 'openal' 'mesa' 'freetype2' 'gtk-update-icon-cache' 'glew'
         'desktop-file-utils' 'shared-mime-info')
makedepends=('zip')
install=$pkgname.install
source=($url/stable/$pkgver/$pkgname-$pkgver.tar.gz)
md5sums=('4f0e7b30824abd11e3c61aa7a8c06fec')

build() {
  cd $pkgname-$pkgver

  ./configure --prefix=/usr

  make 
}

package() {
  cd $pkgname-$pkgver

  make DESTDIR="$pkgdir" install
}
