pkgname=sigma-ex-amp-bin
pkgver=1.0.0
pkgrel=1
pkgdesc="Audio Assault Modern High Gain Amp Simulator Next Generation"
arch=('x86_64')
url="https://audioassault.mx/products/sigma"
license=('EULA')
groups=('pro-audio' 'vst-plugins')
depends=('libcurl-gnutls' 'glibc')
makedepends=('xdg-user-dirs' 'unzip')
source=("Sigma EX Amp.desktop")
sha256sums=('81b5cfc2851b158188f60483a18c8f47fa6aa0d7a43d771e16ca6290c2e2ee04')

prepare () {
	## Extract Duality Bass Studio
	_archive="`xdg-user-dir DOWNLOAD`/SigmaEXFinal.zip"
	ln -srf "${_archive}" "$srcdir/`basename "${_archive}"`"
	unzip "$srcdir/`basename "${_archive}"`"
	find $srcdir -name ".DS_Store" -delete
}

package() {
    ## Install Preset and Default Libraries
    mkdir -p "$pkgdir/opt/Audio Assault/Sigma EX" "$pkgdir/usr/bin" "$pkgdir/usr/share/applications"
    cp -rf "$srcdir/Linux/Sigma EX"/{IRs,MIDI,Presets} "$pkgdir/opt/Audio Assault/Sigma EX"

    ## Install VST Plugin
    install -Dm755 "$srcdir/Linux/Sigma EX vst2.so" "$pkgdir/usr/lib/vst/Sigma EX.so"

    ## Install VST3 Plugin
    mkdir -p "$pkgdir/usr/lib/vst3"
    cp -r "$srcdir/Linux/Sigma EX.vst3" "$pkgdir/usr/lib/vst3/Sigma EX.vst3"

    ## Install Standalone Binary
    cp "$srcdir/Linux/Sigma EX Standalone" "$pkgdir/usr/bin/Sigma EX Standalone"
    chmod +x "$pkgdir/usr/bin/Sigma EX Standalone"
    install -Dm644 "$srcdir/Sigma EX Amp.desktop" "$pkgdir/usr/share/applications/Sigma EX Amp.desktop"
}
