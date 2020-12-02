# Maintainer: Archie Meng <archiemeng@protonmail.com>
pkgname=plasma-nano-git
pkgver=r127.da8ffe2
pkgrel=1
pkgdesc="A minimal plasma shell package intended for embedded devices."
arch=('any')
url="https://invent.kde.org/plasma/plasma-nano"
license=('GPL2')
groups=()
depends=(
	'kactivities' 
	'kactivities-stats' 
	'ki18n' 
	'kdeconnect' 
	'plasma-workspace'
	'kdeclarative' 
	'plasma-framework' 
	'kirigami2' 
	'kcmutils' 
	'kwayland'
	'xorg-server-xwayland'  
	'plasma-wayland-session')

makedepends=('cmake' 'extra-cmake-modules' 'git') 
optdepends=()
provides=('plasma-nano')
conflicts=('plasma-nano')
replaces=()
backup=()
options=()
install=
source=('git+https://invent.kde.org//plasma/plasma-nano.git')
noextract=()
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/plasma-nano"
	printf "r%s.%s\n" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/plasma-nano"
	cmake -B build \
	      -DCMAKE_INSTALL_PREFIX="/usr" \
      	      -DCMAKE_BUILD_TYPE=Release 

}


build() {
	cd "$srcdir/plasma-nano/build"
	make
}

package() {
	cd "$srcdir/plasma-nano/build"
	make DESTDIR="$pkgdir/" install
}
