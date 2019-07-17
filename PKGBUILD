# Maintainer: hfte@posteo.org
pkgname=sws
pkgver=2.10.0.1
pkgrel=2
pkgdesc="A collection of features that seamlessly integrate into REAPER"
arch=('x86_64')
url="http://www.sws-extension.org/"
license=('MIT')
depends=('reaper-bin>=5.965')
makedepends=('git' 'gcc' 'make' 'php' 'php-gd')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
source=("git://github.com/reaper-oss/sws.git"
	"git://github.com/justinfrankel/WDL.git/"
	"https://swsaur.000webhostapp.com/files/reaper_plugin_functions.tar.xz")
sha256sums=('SKIP'
	    'SKIP'
            '5a8bfe55b1687ffcb173121bd85cf58ede78dc959dce230e5524e62fbe07890b')

pkgver() {
	cd "$pkgname"
	head -1 version.h | tr , . | cut -d' ' -f3
}

prepare() {
          cp "$srcdir/reaper_plugin_functions/reaper_plugin_functions.h"\
             "$srcdir/$pkgname"
}


build() {
	cd "$srcdir/$pkgname"
	git checkout next
	make
}


package() {
	DESTDIR="${pkgdir}/usr/lib/REAPER/UserPlugins/"
	mkdir -p "${DESTDIR}"
	cp "${srcdir}/$pkgname/reaper_sws64.so" "${DESTDIR}"
	cd "${srcdir}"
	cd ..
        mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}/"
	cp LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/"
}
