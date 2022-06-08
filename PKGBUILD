# Maintainer: rern <rernrern@gmail.com>

pkgname=bluealsa
pkgver=4.0.0
pkgrel=1
pkgdesc='Bluetooth audio ALSA backend'
arch=( x86_64
       aarch64
       armv6h
       armv7h )
reponame=bluez-alsa
url=https://github.com/Arkq/$reponame
license=( MIT )
depends=( alsa-lib bluez-libs glib2 libfdk-aac sbc systemd )
makedepends=( git python-docutils )
optdepends=( 'lame: build with mp3 support'
             'libbsd: build with hcitop tool'
             'libopenaptx-git: build with libopenaptx for apt-X'
             'mpg123: build with mpg123 decoding support'
             'ncurses: build with hcitop tool'
             'readline: build with bluealsa-rfcomm tool'
             'spandsp: build mSBC codec support' )
source=( https://github.com/Arkq/bluez-alsa/archive/refs/tags/v$pkgver.tar.gz )
sha512sums=('8a79e5a1189db2d39b2d772cb8f8cd51ebb96b9bd91489556195e83dfd16f40a581dce68c5ad9e886b66cec8a03ae7f959e8288bb4c5c87ea5a2bbd6aee9c5f0')

build() {
	local flags

    cd $srcdir/$reponame-$pkgver
	autoreconf --install
	flags=( #--with-libopenaptx
		  #--enable-a2dpconf
		  --enable-aac
		  --enable-cli
		  --enable-debug
		  #--enable-hcitop
		  #--enable-ldac
		  --enable-manpages
		  #--enable-mp3lame
		  #--enable-mpg123
		  #--enable-msbc
		  --enable-ofono
		  #--enable-rfcomm
		  --enable-systemd
		  --enable-upower )
	./configure --prefix=/usr --sysconfdir=/etc "${flags[@]}"
	make
}

package() {
    cd $srcdir/$reponame-$pkgver
	make DESTDIR=$pkgdir install
	install -Dm0644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
