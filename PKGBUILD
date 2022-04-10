# Maintainer: Patrick Northon <northon_patrick3@yahoo.ca>
# Contributor: Mathias Walters <waltersm@protonmail.com>

pkgname=maptool
_pkgname=MapTool
pkgver=1.11.5
pkgrel=2
pkgdesc="An open source virtual tabletop program"
arch=('x86_64')
url="https://rptools.net/tools/maptool"
license=('AGPL3')
depends=('jre-openjdk')
makedepends=('git' 'dpkg' 'jdk-openjdk' 'gradle' 'xdg-utils' 'rpm-tools')
optdepends=('gvfs: access virtual filesystem')
source=("git+https://github.com/RPTools/${pkgname}.git#tag=${pkgver}")
sha256sums=('SKIP')
install='maptool.install'

_prefix="/opt/$pkgname"

prepare() {
	cd "${pkgname}"
	
	_java_version=$(java --version | head -n 1 | sed -r 's/openjdk ([[:digit:]]+).*/\1/')
	if (( _java_version < 16 )); then
		>&2 echo
		>&2 echo "MapTool require a version of java of a least 16. See archlinux-java on how to change the default java on your system."
		>&2 echo
		return 1
	fi
	
	sed -i -r 's|jdkHome = jdkDownload.+$|jdkHome = "/usr/lib/jvm/default"|' 'build.gradle'
}

build() {
	cd "${pkgname}"
	gradle --parallel jpackage
}

check() {
	cd "${pkgname}"
	gradle --parallel check
}

package() {
	cd "${pkgdir}"
	
	dpkg-deb -x "${srcdir}/${pkgname}/releases/${pkgname}_${pkgver}_amd64.deb" .
	mkdir -p "usr/share/licenses/${pkgname}"
	mv "${pkgdir}/${_prefix}/share/doc/copyright" "usr/share/licenses/${pkgname}/"
	rm -rf "${pkgdir}/${_prefix}/share"
	
	#rpmextract.sh "${srcdir}/${pkgname}/releases/${pkgname}-${pkgver}-${pkgrel}.x86_64.rpm"
	#mv "usr/share/licenses/maptool-${pkgver}" "usr/share/licenses/${pkgname}"
	
	install -dm755 'usr/share/applications'
	mv "${pkgdir}/${_prefix}/lib/${pkgname}-${_pkgname}.desktop" "usr/share/applications/${pkgname}.desktop"
	
	install -dm755 'usr/bin'
	echo "#!/usr/bin/env sh" > "usr/bin/${pkgname}"
	echo "${_prefix}/bin/MapTool \"\$@\"" >> "usr/bin/${pkgname}"
	chmod 755 "usr/bin/${pkgname}"
}
