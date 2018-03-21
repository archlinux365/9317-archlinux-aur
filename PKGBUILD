# Maintainer: Matthew McGinn <mamcgi@gmail.com>
# Maintainer: Adam S Levy <adam@aslevy.com>
# Contributor: Chris Clonch <chris at theclonchs dot com>
# Contributor: Justin Dray <justin@dray.be>
pkgname='chronograf'
pkgver='1.4.2.3'
pkgrel='3'
pkgdesc='Time-series data visualization tool for InfluxDB'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url='https://github.com/InfluxData/chronograf'
license=('AGPL')
makedepends=('go' 'git' 'make' 'npm' 'yarn' 'nodejs' 'python2')
backup=('etc/chronograf/chronograf.conf')
install="chronograf.install"
source=("git+https://github.com/influxdata/chronograf#tag=$pkgver"
        'chronograf.sysusers'
        'chronograf.tmpfiles')
md5sums=('SKIP'
         'f02a4e7ce79a45bd2fe9473d9f7ec4a0'
         '0943ea927d009b047729578658c69943')

build() {
        export GOPATH="$srcdir"
        export GOBIN="$GOPATH/bin"
        export PATH="$GOBIN:$PATH"
        mkdir -p "$GOPATH/src/github.com/influxdata"
        cp -af "$srcdir/chronograf" "$GOPATH/src/github.com/influxdata/"

        cd "$GOPATH/src/github.com/influxdata/chronograf"

	make
	/usr/bin/go install github.com/influxdata/${pkgname}/cmd/${pkgname}
}

package() {
        export GOPATH="$srcdir"
        export GOBIN="$GOPATH/bin"

	cd "$srcdir"
	install -Dm644 chronograf.sysusers "$pkgdir/usr/lib/sysusers.d/chronograf.conf"
	install -Dm644 chronograf.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/chronograf.conf"

	cd "$GOBIN"
	install -Dsm755 chronograf "$pkgdir/usr/bin/chronograf"

	cd "$GOPATH/src/github.com/influxdata/chronograf"
        install -Dm644 etc/scripts/chronograf.service \
		"$pkgdir/usr/lib/systemd/system/chronograf.service"
        install -Dm644 LICENSE "$pkgdir/usr/share/licenses/chronograf/LICENSE"
        install -dm755 "$pkgdir/usr/share/chronograf/canned/"
        install -Dm644 canned/*.json "$pkgdir/usr/share/chronograf/canned/"
}
