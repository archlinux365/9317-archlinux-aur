# Contributor: graysky <graysky AT archlinux dot us>
pkgname=pulseaudio-ctl
pkgver=1.68
pkgrel=1
pkgdesc='Control pulseaudio volume from the shell or mapped to keyboard shortcuts.'
arch=('any')
license=('MIT')
depends=('bc' 'libpulse' 'pulseaudio')
optdepends=('libnotify: to display volume and mute status')
conflicts=('pulseaudio_ctl')
replaces=('pulseaudio_ctl')
url='https://github.com/graysky2/pulseaudio-ctl'
source=("$pkgname-$pkgver.tar.gz::https://github.com/graysky2/pulseaudio-ctl/archive/v$pkgver.tar.gz")
b2sums=('a126730f53687b8456ed06f205e13d9380f7cadd4581430b4263dff65ebd33b22ad698cad4271402f873d9fa6c3499fd805ba02e9108723dcd60690016fcc196')
install=readme.install

build() {
	cd "$pkgname-$pkgver"
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install
	install -Dm644 MIT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

