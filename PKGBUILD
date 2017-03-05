pkgname='apk-preview'
pkgver=1
pkgrel=1
pkgdesc="A graphical user interface to see APK file details & icon"
arch=('any')
license=('GPL3')
depends=( 'python' 'python-requests' 'python-gobject')
makedepends=('git')
provides=("${pkgname}" "apk-preview")
conflicts=("${pkgname}" "apk-preview")
source=("${pkgname}::git+https://github.com/alireza6677/apk-preview.git")
md5sums=('SKIP')


prepare() {
    cd "${srcdir}/${pkgname}"
    mkdir ${pkgdir}/usr
    mkdir ${pkgdir}/usr/bin
}
package() {
	cd "${srcdir}/${pkgname}"
	cp -a ./* ${pkgdir}/usr/bin/
}

