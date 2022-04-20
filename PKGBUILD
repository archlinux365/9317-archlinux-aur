# Maintainer: Paul Seehofer <seehofer.paul@gmail.com>
# Co-maintainer: Slash <demodevil5 [at] yahoo [dot] com>

pkgname=prometheus_wireguard_exporter
pkgver=3.6.3
pkgrel=1
pkgdesc="A prometheus exporter for wireguard stats"
url="https://github.com/MindFlavor/prometheus_wireguard_exporter/"
depends=('wireguard-tools')
makedepends=('rustup')
arch=('i686' 'x86_64')
license=('MIT')
backup=('etc/conf.d/prometheus-wireguard-exporter')
source=('prometheus-wireguard-exporter.service' 'prometheus-wireguard-exporter.confd'
    "$pkgname-$pkgver.tar.gz::https://github.com/MindFlavor/${pkgname}/archive/refs/tags/${pkgver}.tar.gz")
sha512sums=('65682733b64e3d6fe274859afa8e43539befa0e4e5347326469178db3b458d7668f13fa2b500016245109a7346d1fadaabcf48e439bed12773f155b1ab95edf8'
            '9227742536d97a9bf36c763b5a67c0953295375affadd4caee46849a0828e7d08ca850146040e81eed87d4dc0fb5b33543411af9f46d1e0d0d146c2fd8edc21b'
            'e4b66aa92f1710a56d8d21317b7777c014b1399cdebda470007e6cc6508aa6fa8b0f81404e2c59128d18c1d73f988afad3b9e9b34266811d7fcb8dfedfa6bd16')

build() {
    cd "${pkgname}-${pkgver}"

    rustup install nightly
    rustup run nightly \
        cargo build --release --locked --all-features
}

check() {
    cd "${pkgname}-${pkgver}"

    rustup install nightly
    rustup run nightly \
        cargo test --release --locked --all-features
}

package() {
    cd "${pkgname}-${pkgver}"

    # Install Binary
    install -Dm755 "target/release/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"

    # Install License
    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"

    # Install Daemon Configuration
    install -D -m0644 "${srcdir}/prometheus-wireguard-exporter.confd" \
        "${pkgdir}/etc/conf.d/prometheus-wireguard-exporter"

    # Install SystemD Service File
    install -D -m0644 "${srcdir}/prometheus-wireguard-exporter.service" \
        "${pkgdir}/usr/lib/systemd/system/prometheus-wireguard-exporter.service"
}
