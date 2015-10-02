# Maintainer: zaps166 <spaz16 at wp dot pl>

pkgname=mate-xfce4-panel-plugin-loader-applet
pkgver=1.1.1
pkgrel=1
pkgdesc='Applet for MATE panel which can load external Xfce4 panel plugins like xfce4-whiskermenu-plugin or xfce4-weather-plugin'
arch=('i686' 'x86_64')
url='https://github.com/zaps166/mate-xfce4-panel-plugin-loader-applet'
license=('GPL')
depends=('mate-panel' 'xfce4-panel')
optdepends=('xfce4-whiskermenu-plugin' 'xfce4-weather-plugin')
makedepends=('mate-common' 'make' 'gcc' 'autoconf' 'intltool' 'pkg-config')
source=("https://github.com/zaps166/mate-xfce4-panel-plugin-loader-applet/archive/v${pkgver}.tar.gz")
sha1sums=(685d1c460562c017c33828b0fc624414c9022163)
install=$pkgname.install

build()
{
	cd ${pkgname}-${pkgver}
	sh autogen.sh --prefix=/usr
	make
}

package()
{
	cd ${pkgname}-${pkgver}
	make DESTDIR="${pkgdir}" install
}
