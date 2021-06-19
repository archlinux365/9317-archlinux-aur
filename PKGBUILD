pkgname=socalabs
pkgver=$(date +%Y%m%d)
pkgrel=1
pkgdesc="Socalabs VST Plugins"
arch=('x86_64')
url="http://www.semanticaudio.co.uk"
license=('BSD')
groups=('pro-audio' 'vst-plugins')
depends=('libglvnd' 'curl' 'freetype2' 'libcurl-gnutls' 'glibc')
_archive=("All_Linux.zip")
source=("${pkgname}_linux.zip::https://socalabs.com/files/get.php?id=${_archive}")
md5sums=('SKIP')

package() {
	cd "$srcdir"
	for plugin in *.so; do
		install -Dm755 "$plugin" "$pkgdir/usr/lib/vst/$plugin"
	done
}
