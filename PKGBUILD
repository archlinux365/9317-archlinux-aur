# Generated by debtap
# Maintainer: e-search
# Contributor: e-search
pkgname=e-search
pkgver=1.6.0
pkgrel=1
pkgdesc="识屏 · 搜索"
arch=('x86_64')
url="https://esearch.vercel.app/"
license=('GPL3')
groups=('')
depends=('electron18' 'at-spi2-core' 'clion' 'desktop-file-utils' 'glib2' 'gtk3' 'hicolor-icon-theme' 'kde-cli-tools' 'libdrm' 'libnotify' 'libxcb' 'libxtst' 'mesa' 'trash-cli' 'xdg-utils' 'libappindicator-gtk3')
optdepends=('alsa-lib'
            'apparmor'
            'libgnome-keyring'
            'pulseaudio')
conflicts=('e-search-git')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("https://download.fastgit.org/xushengfeng/eSearch/releases/download/${pkgver}/eSearch_${pkgver}.aur")
sha512sums=('322298d14cdf4f4b1f75e9d4780c26a9bc85c8d97cb4d5711747d195dfbf42fc8ed64becd0dd91ca7617cd30cdd22fd73fe3b61f2b27339651cd6d6242fc6784')

package(){

	cp -r ${srcdir}/${pkgname}/* ${pkgdir}

}
