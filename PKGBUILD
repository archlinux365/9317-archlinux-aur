# Maintainer: drarig29 <corentingirard.dev@gmail.com>
# Contributor: chn <g897331845@gmail.com>
# Contributor: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Alex Dewar <alex.dewar@gmx.co.uk>
# Contributor: Andrew Sun <adsun701@gmail.com>
# Contributor: John Jenkins <twodopeshaggy@gmail.com>
# Contributor: Maxime Gauduin <alucryd@gmail.com>
# Contributor: Balló György <ballogyor+arch@gmail.com>

pkgname=libunity
pkgver=7.1.4
pkgrel=11
pkgdesc='Library for instrumenting and integrating with all aspects of the Unity shell'
arch=('i686' 'x86_64')
url="https://launchpad.net/libunity"
license=('LGPL')
depends=('dee' 'gtk3' 'libdbusmenu-glib')
makedepends=('gnome-common' 'gobject-introspection' 'intltool' 'vala0.52')
source=("https://launchpad.net/ubuntu/+archive/primary/+files/${pkgname}_${pkgver}+19.04.20190319.orig.tar.gz"
        "https://launchpadlibrarian.net/443817430/0001-Fix-FTB-with-recent-vala-requiring-non-public-abstra.patch"
        "0001-Fix-optional-types.patch")
sha256sums=('56ecb380d74bf74caba193d9e8ad6b0c85ccf9eeb461bc9731c2b8636e1f1492'
            '98a2562dcf3b3a864d1c05331b4dc672d8bff4b592ca796a0bc132a416f33262'
            'dd6ea48c848da79b251c09ec86579f2bc26014c10a67ad4df88c3487064a1661')

prepare() {
	patch -p1 < 0001-Fix-FTB-with-recent-vala-requiring-non-public-abstra.patch
	patch -p1 < 0001-Fix-optional-types.patch
}

build() {
	NOCONFIGURE=1 ./autogen.sh
	./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var --disable-static
	make
}

package() {
	make DESTDIR="$pkgdir" install
}
