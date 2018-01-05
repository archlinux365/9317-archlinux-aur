# $Id: PKGBUILD 266875 2017-11-15 14:29:11Z foutrelis $
# Maintainer: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: G_Syme <demichan(at)mail(dot)upb(dot)de>

pkgname=twin
pkgver=0.6.2
pkgrel=7
pkgdesc="A text-mode window environment"
arch=('x86_64')
url='http://sourceforge.net/projects/twin/'
license=('GPL2' 'LGPL2.1')
depends=('gpm' 'zlib' 'libxpm')
options=('!makeflags')
source=("http://downloads.sourceforge.net/$pkgname/$pkgname-$pkgver.tar.gz")
md5sums=('6211c8b2e655003eb96b1fc5dc37e7d9')

build() {
  cd "$srcdir"/$pkgname-$pkgver
  LDFLAGS="-lX11" ./configure --prefix=/usr --sbindir=/usr/bin \
	--enable-tt=yes \
	--enable-tt-hw-twin=yes --enable-tt-hw-twin-tunnel=yes --enable-tt-hw-twin-detunnel=yes \
	--enable-tt-hw-xml=yes
  make
}

package() {
  cd "$srcdir"/$pkgname-$pkgver
  make DESTDIR="$pkgdir" install
}
