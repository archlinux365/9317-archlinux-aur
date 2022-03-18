# Generated by debtap
# Maintainer: e-search-git
# Contributor: e-search-git
pkgname=e-search-git
pkgver=1.3.10
pkgrel=1
pkgdesc="识屏 · 搜索"
arch=('x86_64')
url="https://xushengfeng.github.io/eSearch-website/"
license=('GPL3')
groups=('')
depends=('at-spi2-core' 'clion' 'desktop-file-utils' 'glib2' 'gtk3' 'hicolor-icon-theme' 'kde-cli-tools' 'libdrm' 'libnotify' 'libxcb' 'libxtst' 'mesa' 'metasploit' 'trash-cli' 'xdg-utils' 'libappindicator-gtk3')
makedepends=('git' 'npm' 'nodejs' 'node-gyp' 'python')
optdepends=('alsa-lib'
            'apparmor'
            'gir1.2-gnomekeyring-1.0'
            'libgnome-keyring'
            'pulseaudio')
conflicts=('e-search')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("git+https://github.com/xushengfeng/eSearch")
sha512sums=('SKIP')


prepare() {
    cd "${srcdir}/eSearch"
    git checkout $(git describe --abbrev=0 --tags)
    npm install
}


build() {
    cd "${srcdir}/eSearch"
    npm run make
}

package(){
    cd "${srcdir}/eSearch/out/make/deb/x64"

	# Extract package data
    ar -x *.deb
	tar xf data.tar.xz -C "${pkgdir}"

	install -D -m644 "${pkgdir}/usr/lib/e-search/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

}
