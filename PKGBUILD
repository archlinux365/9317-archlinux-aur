# vim: set et sw=2:
# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: Daniel Isenmann <daniel@archlinux.org>
# Contributor: Judd Vinet <jvinet@zeroflux.org>

pkgname=windowmaker
pkgver=0.95.8
pkgrel=6
pkgdesc="An X11 window manager with a NEXTSTEP look and feel"
arch=('i686' 'x86_64')
url="http://www.windowmaker.org/"
license=('GPL' 'custom')
depends=('libxinerama' 'libxrandr' 'libxmu' 'libpng' 'libxpm' 'libxft' 'libtiff' 'giflib' 'libmagick' 'libbsd')
source=("http://windowmaker.org/pub/source/release/WindowMaker-$pkgver.tar.gz"
        'wmaker.desktop'
        'https://gitweb.gentoo.org/repo/gentoo.git/plain/x11-wm/windowmaker/files/windowmaker-0.95.8-imagemagick7.patch')

prepare() {
  cd WindowMaker-$pkgver
  patch -Np1 -b -z .orig < ../windowmaker-0.95.8-imagemagick7.patch
  
  autoreconf -fi
  
  # fix some paths FS#3080 - ckeck also Gentoo ebuild
  for file in WindowMaker/*menu* util/wmgenmenu.c; do
        if [[ -r $file ]] ; then
        sed -i -e "s:/usr/local/GNUstep/Applications/WPrefs.app:/usr/lib/GNUstep/Applications/WPrefs.app:g;" "$file"
        sed -i -e "s:/usr/local/share/WindowMaker:/usr/share/WindowMaker:g;" "$file"
        sed -i -e "s:/opt/share/WindowMaker:/usr/share/WindowMaker:g;" "$file"
        fi;
  done;
}

build() {
  cd WindowMaker-$pkgver
  export LINGUAS="be bg bs ca cs da de el es et fi fr fy gl hr hu hy it ja ko ms nl no pl pt ro ru sk sv tr uk zh_CN zh_TW"
  ./configure --prefix=/usr --sysconfdir=/etc --enable-xinerama \
    --localedir=/usr/share/locale --with-gnustepdir=/usr/lib/GNUstep \
    --enable-usermenu --enable-modelock --enable-randr
  make V=0
}

package() {
  cd WindowMaker-$pkgver
  
  make DESTDIR="$pkgdir" install
  install -D -m644 COPYING.WTFPL "$pkgdir/usr/share/licenses/$pkgname/COPYING.WTFPL"
  install -D -m644 ../wmaker.desktop "$pkgdir/usr/share/xsessions/wmaker.desktop"
}

sha256sums=('9dbf5c5571bb79c4b1584f496c960ee2cd7379af45ef0f58b4b0f487259de88a'
            '126da08ac9cffc4354bb4f246ec5ed5abd3cd29ed665d05d190c5bf842c84bef'
            'e89e8c7638f38296f1fc31d892672122a73ce89ce40c192bb404d852cca06692')
