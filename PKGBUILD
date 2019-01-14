# Maintainer: Blooser <blooser@protonmail.com>
pkgname=gemini
pkgver=1.8.3
pkgrel=4
pkgdesc="Graphical audio player"
arch=('x86_64')
md5sums=('36dbce62c74bf42232cad959c92b7dfa')
url="https://github.com/blooser/gemini"
license=('MIT')
depends=('qt5-base' 'qt5-declarative' 'qt5-multimedia' 'qt5-webengine' 'qt5-webview' 'qt5-webkit' 'qt5-quickcontrols' 'qt5-quickcontrols2' 'python')
makedepends=('cmake' 'python-setuptools')
applocation=~/$pkgname
shortcut="
[Desktop Entry]
Encoding=UTF-8
Version=${pkgver}
Name[en_US]=Gemini
GenericName=Graphical audio player
Exec=${applocation}/Gemini
Icon[en_US]=${applocation}/content/icons/gemini.png
Type=Application
Categories=Application;AudioVideo
Comment[en_US]=Take a break and listen to music while looking at wallpapers
"

source=("https://github.com/blooser/gemini/archive/v${pkgver}.tar.gz")

build() {
	sudo pip install beautifulsoup4
	cd $pkgname-$pkgver
	qmake	
	make
}

package() {
	cd $pkgname-$pkgver
	make clean
	cd ..
	mv $pkgname-$pkgver ~/$pkgname
	echo "${shortcut}" > ~/.local/share/applications/gemini.desktop
	if [ -f ~/.zshrc ]; then
		echo "alias gemini=${applocation}/Gemini" >> ~/.zshrc
	else
		echo "alias gemini=${applocation}/Gemini" >> ~/.bashrc	
	fi	
}

