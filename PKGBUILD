# Maintainer: pigt <pay2630@gmail.com>
pkgname=injection-git
pkgver=r42.6cfd4e8
pkgrel=1
pkgdesc="A Python-based ASCII programming-puzzle game."
arch=('i686' 'x86_64')
url="https://schilcote.itch.io/injection"
license=('MIT')
depends=('python-pygame' 'python-pyperclip' 'python-rsa' 'python-numpy' 'cython' 'tk' 'python-dill')
makedepends=('unzip' 'curl' 'python-pip' 'git')
conflicts=('injection')
source=('git+https://gitlab.com/toastengineer/INJECTION.git' injection.sh injection.desktop icon.png)
md5sums=('SKIP'
         '5f21ca7a8891291e250f5296ba855324'
         'cf419413f1dda3dcae7c665c9bb4bf46'
         '2e6543984ecc80ddf57ed822b344e0e1')

pkgver() {
	  cd "INJECTION"
	  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

_release_url="https://schilcote.itch.io/injection/file/235400?after_download_lightbox=true"
_release_ver=0.9.2
prepare() {
	_direct_link=$(curl -s -XPOST "${_release_url}" | grep -Po '"url":.*?[^\\]",' | cut -c8- | rev |cut -c3- | rev | sed 's/\\\//\//g') #Thanks, dcelasun
	#curl "$_direct_link" -o "INJECTION_${_release_ver}_src.zip"
	mkdir "INJECTION_${_release_ver}_src"
	unzip "INJECTION_${_release_ver}_src.zip" -d "INJECTION_${_release_ver}_src"
	
	#Backup music folder.
	mv INJECTION_${_release_ver}_src/music .
	rm -r INJECTION_${_release_ver}_src/*
	mv music INJECTION_${_release_ver}_src/
	#Overwrite with git
	cp -r INJECTION/* "INJECTION_${_release_ver}_src"
}

_python_depends=('pymsgbox' 'pygcurse')
build() {
	cd "INJECTION_${_release_ver}_src"

	#module that doesn't exist in repo.
	mkdir 'custom_packages'
	pip install -t 'custom_packages' ${_python_depends[*]}
	export PYTHONPATH='./custom_packages'

	#Build fx
	python setup.py build_ext
	cp build/lib*/* .
	rm -r build
}

package() {
	mkdir -p "$pkgdir/usr/lib"
	mkdir -p "$pkgdir/usr/bin"
	cp -r "$srcdir/INJECTION_${_release_ver}_src" "${pkgdir}/usr/lib/injection"
	install -D -m644 $srcdir/INJECTION_${_release_ver}_src/LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
	install -m 755 "${srcdir}/injection.sh" "${pkgdir}/usr/lib/injection/injection.sh"
	install -D -m644 $srcdir/injection.desktop "${pkgdir}/usr/share/applications/injection.desktop"
	install -D -m644 $srcdir/icon.png $pkgdir/usr/lib/injection/icon.png
	ln -s '/usr/lib/injection/injection.sh' "${pkgdir}/usr/bin/injection"
}
