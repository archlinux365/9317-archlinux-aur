# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=fotoxx-test
_pkgvermaj=20.0
_pkgvermin=2019.12.10
pkgver=${_pkgvermaj}.${_pkgvermin}
pkgrel=1
pkgdesc="A program for improving image files made with a digital camera, test-version"
url="http://www.kornelix.net/fotoxx/fotoxx.html"
arch=('i686' 'x86_64')
license=('GPL3')
conflicts=('fotoxx')
provides=('fotoxx')
depends=('libraw' 'gtk3' 'libchamplain' 'perl-image-exiftool>=0.8.6' 'xdg-utils')
optdepends=('rawtherapee: for raw image processing'
	    'dvd+rw-tools: for burning CDs,DVDs or BlueRays'
	    'hugin: for panorama photos')
source=("http://kornelix.net/downloads/downloads/${pkgname%-test}-${_pkgvermaj}-test-${_pkgvermin//./-}.tar.gz")
sha256sums=('0a4a796819e1badc784e7f00d0f2c20d78b4315b97fd95527c7728b200a488e5')
options=('!makeflags')

build() {
  cd ${pkgname%-test}
  make clean
  make PREFIX=/usr
}

package() {
  cd ${pkgname%-test}
  make DESTDIR="$pkgdir" PREFIX=/usr install
  rm -r "$pkgdir"/usr/share/appdata
}
