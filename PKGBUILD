# Maintainer: Cedric Roijakkers <cedric [the at sign goes here] roijakkers [the dot sign goes here] be>.
# Inspired from the PKGBUILD for ferdi-bin.

_pkgname='ferdium'
pkgname="$_pkgname-bin"
pkgverorg='6.0.0-nightly.78'
pkgver='6.0.0.nightly.78'
pkgrel='1'
pkgdesc='A messaging browser that allows you to combine your favorite messaging services into one application (binary release).'
arch=('x86_64' 'armv7l' 'arm64')
url="https://$_pkgname.org"
license=('Apache')
depends=('nss' 'atk' 'at-spi2-atk' 'libcups' 'libdrm' 'gdk-pixbuf2' 'gtk3' 'alsa-lib' 'c-ares' 'ffmpeg' 'libevent' 'libxkbfile' 'libxslt' 'minizip' 're2' 'snappy')
provides=("$_pkgname")
conflicts=("$_pkgname")
_releaseurl="https://github.com/$_pkgname/$_pkgname-app/releases/download/v$pkgverorg"
source_x86_64=("$pkgname-$pkgverorg-$pkgrel-amd64.zip::${_releaseurl}/${_pkgname}_${pkgverorg}_amd64.deb")
source_armv7l=("$pkgname-$pkgverorg-$pkgrel-armv7l.zip::${_releaseurl}/${_pkgname}_${pkgverorg}_armv7l.deb")
source_arm64=("$pkgname-$pkgverorg-$pkgrel-arm64.zip::${_releaseurl}/${_pkgname}_${pkgverorg}_arm64.deb")
sha512sums_x86_64=('eb5fcac37d266ec595f5ec9a0e13d8c8827212db6b5682f2e395b5825107f9c6551a214af97680fadd8e43c1f842e3f0588a98a5da9a764f0d98cbcf65e5c5e6')
sha512sums_armv7l=('ab6ac32d1571b833df01c69aa257849e50840a98e4c775c0918ebbec11a99830470cb8041cc87d4e1e5c898c7dfc1749ba26bd498a85b84a3a22d84b7367b3fe')
sha512sums_arm64=('75de175234d9475fcb5039c75c973a44a4d26851814d7b112e50e30d45e0ec393dedb1b7a9f7515cf1cd3b1997e523a8d80f14212782d11cf7ea0ddfb0cde40f')

_sourcedirectory="$pkgname-$pkgverorg-$pkgrel"

prepare() {
	cd "$srcdir/"
	mkdir -p "$_sourcedirectory/"
	bsdtar -xf 'data.tar.xz' -C "$_sourcedirectory/"

	cd "$srcdir/$_sourcedirectory/"
	sed -E -i -e "s|Exec=/opt/${_pkgname^}/$_pkgname|Exec=/usr/bin/$_pkgname|" "usr/share/applications/$_pkgname.desktop"
}

package() {
	cd "$srcdir/$_sourcedirectory/"

	install -dm755 "$pkgdir/opt/"
	cp -r --no-preserve=ownership --preserve=mode "opt/${_pkgname^}/" "$pkgdir/opt/$pkgname/"

	chmod u+s "$pkgdir/opt/$pkgname/chrome-sandbox"

	install -dm755 "$pkgdir/usr/bin/"
	ln -sf "/opt/$pkgname/$_pkgname" "$pkgdir/usr/bin/$_pkgname"

	install -Dm644 "usr/share/applications/$_pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
	for _size in 16 24 32 48 64 96 128 256 512 1024; do
		install -Dm644 "usr/share/icons/hicolor/${_size}x${_size}/apps/$_pkgname.png" "$pkgdir/usr/share/icons/hicolor/${_size}x${_size}/apps/$_pkgname.png"
	done

	install -dm755 "$pkgdir/usr/share/licenses/$pkgname/"
	for _license in 'LICENSE.electron.txt' 'LICENSES.chromium.html'; do
		ln -sf "/opt/$pkgname/$_license" "$pkgdir/usr/share/licenses/$pkgname/$_license"
	done
}
