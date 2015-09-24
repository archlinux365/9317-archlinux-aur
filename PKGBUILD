# Maintainer:  Giovanni Santini "ItachiSan" <giovannisantini93@yahoo.it>
# Previous maintainer:  agnotek <agnostic.sn [at]gmail.com>
# Contributor: agnotek <agnostic.sn [at]gmail.com>

pkgname=telegram-desktop-bin
pkgver=0.9.0
pkgrel=1
pkgdesc="Official desktop version of Telegram messaging app. - Static binaries"
arch=('i686' 'x86_64')
url="https://desktop.telegram.org"
license=('GPL3')
depends=('libx11' 'libgcrypt' 'libasyncns' 'libsndfile' 'libsystemd' 'libdbus' 'openal' 'libogg' 'opus' 'opusfile' 'portaudio' 'openssl' 'zlib' 'libexif' 'xz')
conflicts=('telegram-desktop')
provides=('telegram-desktop')
replaces=('telegram-bin')
install="$pkgname.install"

# Sources
source=("$pkgname.sh" "$pkgname.desktop" "$pkgname.png")
source_i686=('https://updates.tdesktop.com/tlinux32/tsetup32.'$pkgver'.tar.xz')
source_x86_64=('https://updates.tdesktop.com/tlinux/tsetup.'$pkgver'.tar.xz')
# Checksums
sha256sums=('0f2a6e4c2b9b4ff5f4ddb628728be4cc5a419f79695c0151321a5f234099ee59'
            'e3e10fe8620bd4ed8fda41743ad844739757286eeecea5249cf1fcf21a8431bd'
            '4226167b476a75e844ddf0d429068e7e901bbde516810a7d4ca90f8405c01eef')
sha256sums_i686=('73c1644ab4b11b70e559406445a52867d6976fadccca22050ca403ab12de7a6c')
sha256sums_x86_64=('225bfe245363d29a1d74598d9fbd40ff979cec96311a68004196f3fd8f72e675')

package() {

	cd "$srcdir/"

	# Creating needed directories
	install -dm755 "$pkgdir/opt/telegram/"
	install -dm755 "$pkgdir/usr/bin"
	install -dm755 "$pkgdir/usr/share/pixmaps/"
	install -dm755 "$pkgdir/usr/share/applications/"

	# Program
	install -Dm755 "$srcdir/Telegram/Telegram" "$pkgdir/opt/telegram/"
	install -Dm755 "$srcdir/Telegram/Updater" "$pkgdir/opt/telegram/"

	# Shell wrapper
	install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/telegram"

	# Desktop launcher
	install -Dm755 "$srcdir/$pkgname.png" "$pkgdir/usr/share/pixmaps/telegram.png"
	install -Dm755 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/telegramdesktop.desktop"
}
