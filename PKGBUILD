# Generated by debtap
# Maintainer: e-search
# Contributor: e-search
pkgname=e-search
pkgver=1.2.3
pkgrel=1
pkgdesc="截图+OCR+搜索+贴图"
arch=('x86_64')
url="https://github.com/xushengfeng/eSearch"
license=('GPL3')
groups=('')
depends=('at-spi2-core' 'clion' 'desktop-file-utils' 'glib2' 'gtk3' 'hicolor-icon-theme' 'kde-cli-tools' 'libdrm' 'libnotify' 'libxcb' 'libxtst' 'mesa' 'metasploit' 'trash-cli' 'xdg-utils')
optdepends=('alsa-lib'
            'apparmor'
            'gir1.2-gnomekeyring-1.0'
            'libgnome-keyring'
            'pulseaudio')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("https://hub.fastgit.org/xushengfeng/eSearch/releases/download/${pkgver}/esearch_${pkgver}_amd64.deb")
sha512sums=('f2c7c6369fbdc22492368febf1086aa8b00114bfb8e38696feefa60655b311ce4b56558f0bb8680ce189c8db897b41fc8312c5382c47f4cbfac2d56bb0c1857f')

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	install -D -m644 "/usr/lib/esearch/resources/app/node_modules/yallist/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -D -m644 "/usr/share/doc/esearch/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/COPYRIGHT"

}
