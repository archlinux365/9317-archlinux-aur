# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Your Name <youremail@domain.com>
pkgname="jgtk"
pkgver=1.0
pkgrel=1
epoch=
pkgdesc="GTK+ 3 Bindings for Java"
arch=('x86_64')
url="https://bitbucket.org/Scoopta/native-proxy/src/default/"
license=('GPL3')
groups=()
depends=('gtk3' 'glib2' 'wayland' 'jwl' 'native-proxy' 'jdk-openjdk>=11')
makedepends=('mercurial')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
noextract=()
validpgpkeys=()

prepare() {
	mkdir -p "${pkgname}-${pkgver}"
	hg clone ${url} "${pkgname}-${pkgver}"
}

build() {
	echo "Building"
	cd "${pkgname}-${pkgver}"
	./gradlew build 
	./gradlew linuxPackage
	cd ..
}

check() {
	echo "Checking"
}

package() {
	echo "Packaging"
	mkdir -p "../pkg/${pkgname}/usr/share/java"
	pwd
	cp ${pkgname}-${pkgver}/build/libs/*.jar "../pkg/${pkgname}/usr/share/java/"
}
