# Maintainer: lf <packages at lfcode dot ca>
pkgname=klipper-git
pkgver=r1517.4f89251f
pkgrel=1
pkgdesc="3D printer firmware with motion planning on the host"
arch=('x86_64' 'i686' 'armv7h')
url="https://github.com/KevinOConnor/klipper"
license=('GPLv3')
groups=()
depends=(
	python2-cffi
	python2-pyserial
	python2-greenlet
	ncurses
	libusb
	avrdude
	avr-gcc
	avr-binutils
	avr-libc
)
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=('git+https://github.com/KevinOConnor/klipper#branch=master' 'klipper.service' 'sysusers.conf' 'tmpfiles.conf')
noextract=()
md5sums=('SKIP'
         'a8e8aee6f576ebd9e335c20e225c99e5'
         '61912d101dc7c68c7314882b80621454'
         'ac76dba668e371a0686973e5069bc95e')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	make clean
	git clean -fx
}

build() {
	cd "$srcdir/${pkgname%-git}"
	echo 'Building C module...'
	python2 klippy/chelper/__init__.py
	echo 'Done'
	python2 -m compileall klippy
}

check() {
	cd "$srcdir/${pkgname%-git}"
}

package() {
	cd "$srcdir/${pkgname%-git}"
	install -Dm644 "$srcdir/klipper.service" "$pkgdir/usr/lib/systemd/system/klipper.service"
	install -Dm644 "$srcdir/sysusers.conf" "$pkgdir/usr/lib/sysusers.d/klipper.conf"
	install -Dm644 "$srcdir/tmpfiles.conf" "$pkgdir/usr/lib/tmpfiles.d/klipper.conf"
	install -dm755 "$pkgdir/opt/klipper/klippy"
	install -dm775 "$pkgdir/etc/klipper"
	python2 "$srcdir/${pkgname%-git}/scripts/make_version.py" archlinux > "$pkgdir/opt/klipper/klippy/.version"
	GLOBIGNORE=.git cp -r * "$pkgdir/opt/klipper"
}
