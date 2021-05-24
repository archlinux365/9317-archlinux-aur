pkgname=ovenmediaengine
pkgver=v0.12.0.r4.gaf99ce43
pkgrel=1
pkgdesc='Open-source streaming video service with sub-second latency'
arch=('x86_64')
url='https://ovenmediaengine.com'
license=('GPL2')
makedepends=('bc' 'jemalloc')
source=("git+https://github.com/AirenSoft/OvenMediaEngine")
sha512sums=('SKIP')

backup=('etc/ovenmediaengine/Logger.xml')

pkgver() {
    cd "${srcdir}/OvenMediaEngine"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "${srcdir}/OvenMediaEngine/src"
	make release
}

package()  {
	cd "${srcdir}/OvenMediaEngine"
	install -D -m0644 "misc/ovenmediaengine.service" "${pkgdir}/usr/lib/systemd/system/ovenmediaengine.service"
	install -D -m0644 "misc/conf_examples/Origin.xml" "${pkgdir}/usr/share/ovenmediaengine/origin_conf/Server.xml"
	install -D -m0644 "misc/conf_examples/Edge.xml" "${pkgdir}/usr/share/ovenmediaengine/edge_conf/Server.xml"
	install -D -m0644 "misc/conf_examples/Logger.xml" "${pkgdir}/usr/share/ovenmediaengine/origin_conf/Logger.xml"
	install -D -m0644 "misc/conf_examples/Logger.xml" "${pkgdir}/usr/share/ovenmediaengine/edge_conf/Logger.xml"
	install -D -m0644 "misc/conf_examples/Logger.xml" "${pkgdir}/etc/ovenmediaengine/Logger.xml"
}
