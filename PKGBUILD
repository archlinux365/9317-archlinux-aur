#!/hint/bash
# Maintainer: bartus <arch-user-repoᘓbartus.33mail.com>
pkgname=openboard-develop-git
_fragment="#branch=dev-qt5.1x"
pkgver=v1.6.0a3.r14.g25abc5de
pkgrel=1
pkgdesc="Interactive whiteboard software for schools and universities"
arch=('x86_64' 'i686')
url="http://openboard.ch/index.en.html"
license=('GPL3')
depends=('qt5-base' 'qt5-multimedia' 'qt5-svg' 'qt5-script' 'qt5-webkit' 'qt5-tools' 'qt5-xmlpatterns' 'libpaper' 'bzip2' 'openssl' 'libfdk-aac' 'sdl' 'ffmpeg')
depends+=(quazip)  #drop internal quazip and use system one.
depends+=(poppler) #replace internal xpdf with poppler and drop freetype/xpdf from deps
makedepends=(git)
source=("git://github.com/OpenBoard-org/OpenBoard.git${_fragment}"
        openboard.desktop)
source+=(qchar.patch)
source+=(quazip.patch)
source+=(drop_ThirdParty_repo.patch)
md5sums=('SKIP'
         '6f058362f39f74df820fcac3a3336def'
         'bf2c524f3897cfcfb4315bcd92d4206e'
         '5bd8fd678a114e0633eef1e709ba7ccf'
         '894a397374dea23004d8d5f0173cb063')

pkgver() {
  cd "$srcdir/OpenBoard"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$srcdir"/OpenBoard
  patch -p1 < "$srcdir"/drop_ThirdParty_repo.patch
  patch -p1 < "$srcdir"/qchar.patch
  patch -p1 < "$srcdir"/quazip.patch
}

build() {
  cd "$srcdir"/OpenBoard
  qmake OpenBoard.pro -spec linux-g++
  make
}

package() {
  cd "$srcdir"/OpenBoard

  install -Dm755 build/linux/release/product/OpenBoard -t "$pkgdir"/opt/openboard/
  cp -rp "$srcdir"/OpenBoard/resources/{customizations,etc,i18n,library} -t "$pkgdir"/opt/openboard/
  install -Dm644 "$srcdir"/OpenBoard/resources/images/OpenBoard.png -t "$pkgdir"/usr/share/icons/hicolor/64x64/apps/
  install -Dm644 "$srcdir"/openboard.desktop -t "$pkgdir"/usr/share/applications/
  install -dm755 "$pkgdir"/usr/bin/
  ln -s /opt/openboard/OpenBoard "$pkgdir"/usr/bin/openboard
}
