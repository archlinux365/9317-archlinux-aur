# Maintainer: Alexander Pohl <alex at ahpohl dot com>
pkgname=smartmeter
pkgver=0.3.1
pkgrel=5
epoch=
pkgdesc="Read energy utility meter with IR dongle"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/ahpohl/smartmeter"
license=('MIT')
groups=()
depends=('mosquitto')
makedepends=()
checkdepends=()
optdepends=('nodejs-node-red' 'postgresql' 'timescaledb' 'pg_cron' 'grafana-bin')
provides=()
conflicts=()
replaces=()
backup=('etc/smartmeter.conf')
options=()
install=
changelog=
source=("$pkgname-$pkgver::git+https://github.com/ahpohl/smartmeter.git#tag=v${pkgver}"
        "sysusers_smartmeter.conf"
        "smartmeter.service")
noextract=()
sha256sums=('SKIP'
            'c5de1caa62617c8a3287a342ec868e00c8a808647f71bef3a606521d76ac318f'
            'e321f08948196f7c0d631ba2ea3c845519f52c0a195c0c8bfeeffdce8ec444ec')
validpgpkeys=()

build() {
	cd "$pkgname-$pkgver"
  make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" PREFIX="/usr" install
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
  install -Dm644 README.md "$pkgdir"/usr/share/doc/$pkgname/README.md
  install -Dm644 CHANGELOG.md "$pkgdir"/usr/share/doc/$pkgname/CHANGELOG.md
  install -Dm644 "$srcdir"/sysusers_smartmeter.conf "$pkgdir"/usr/lib/sysusers.d/smartmeter.conf
  install -Dm644 "$srcdir"/smartmeter.service "$pkgdir"/usr/lib/systemd/system/smartmeter.service
  install -Dm644 resources/config/smartmeter_example.conf "$pkgdir"/etc/smartmeter.conf
  install -Dm644 resources/config/smartmeter_example.conf "$pkgdir"/usr/share/smartmeter/config/smartmeter_example.conf
  install -d "$pkgdir"/usr/share/smartmeter/postgres
  install -Dm644 resources/postgres/*.sql "$pkgdir"/usr/share/smartmeter/postgres
  install -Dm644 resources/nodejs/node-red-flow.json "$pkgdir"/usr/share/smartmeter/nodejs/node-red-flow.json
  install -Dm644 resources/grafana/grafana-dashboard.json "$pkgdir"/usr/share/smartmeter/grafana/grafana-dashboard.json
}
