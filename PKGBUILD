# Maintainer: robertfoster

pkgname=peerflix-server-git
pkgver=247.f4d7aff
pkgrel=1
pkgdesc="Streaming torrent client for node.js with web ui"
arch=('i686' 'x86_64')
url="https://github.com/asapach/peerflix-server"
license=('MIT')
depends=('nodejs')
makedepends=('nodejs-grunt-cli' 'bower')
source=("peerflix-server::git+https://github.com/asapach/peerflix-server.git"
	"peerflix-server.sh"
"peerflix-server.service")
conflicts=('peerflix-server')
options=('!strip')

build() {
	cd peerflix-server
	npm install
	bower install
	grunt build
}

package(){
	cd peerflix-server

	mkdir -p $pkgdir/opt/peerflix-server
	cp -r dist server node_modules LICENSE $pkgdir/opt/peerflix-server/

	# Clean up
	npm prune --production
	find "${pkgdir}"${appdir} \
		-name "package.json" \
		-exec sed -e "s|${srcdir}/${pkgname}-${pkgver}|${appdir}|" \
		-i {} \; \
		-or -name ".*" -prune -exec rm -r '{}' \; \
		-or -name "bin" -prune -exec rm -r '{}' \; \
		-or -name "example" -prune -exec rm -r '{}' \; \
		-or -name "examples" -prune -exec rm -r '{}' \; \
		-or -name "scripts" -prune -exec rm -r '{}' \; \
		-or -name "test" -prune -exec rm -r '{}' \;
	
        install -Dm644 "${srcdir}/peerflix-server.service" "${pkgdir}/usr/lib/systemd/system/peerflix-server.service"
        install -Dm775 "${srcdir}/peerflix-server.sh" "${pkgdir}/usr/bin/peerflix-server"
}

pkgver() {
	cd peerflix-server
	echo $(git rev-list --count master).$(git rev-parse --short master)
}
md5sums=('SKIP'
	'200ded7a50aea16929c179cf436b5835'
'f22faa77f2d6049eee5d1a91140a25cc')
