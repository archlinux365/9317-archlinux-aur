pkgname=cmakeprojectmanager2-bin
pkgdesc="Enhanced CMake Project Manager plugin for Qt Creator. You need to use this package with QtCreator-git"
pkgver=20160401
pkgrel=1
arch=('x86_64')
url="https://github.com/h4tr3d/cmakeprojectmanager2"
license=('GPL')
source=(http://ppa.launchpad.net/adrozdoff/qtcreator-git/ubuntu/pool/main/q/qtcreator-git-plugin-cmake2/qtcreator-git-plugin-cmake2_$pkgver.1-25ff604-trusty~ppa3_amd64.deb)
md5sums=('SKIP')
depends=('')

package() {
	mkdir data
	tar xf data.tar.xz --directory data/
	cp -r data/* ${pkgdir}
}
