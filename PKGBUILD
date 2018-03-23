# Submitter: Thomas Fanninger <thomas@fanninger.at>
# Maintainer: Nils Czernia <nils@czserver.de>

pkgname=prometheus-snmp-exporter-bin
pkgver=0.9.0
pkgrel=5
pkgdesc="SNMP Exporter for Prometheus (binary, not built from source)"
arch=("x86_64" "armv5h" "armv6h" "armv7h")
url="https://github.com/prometheus/snmp_exporter"
license=("Apache")
depends=()
makedepends=()
provides=("prometheus-snmp-exporter")
conflicts=("prometheus-snmp-exporter")
backup=("etc/prometheus/snmp.yml")

source_x86_64=("prometheus-snmp-exporter.service"
               "https://github.com/prometheus/snmp_exporter/releases/download/v${pkgver}/snmp_exporter-${pkgver}.linux-amd64.tar.gz")
source_armv5h=("prometheus-snmp-exporter.service"
               "https://github.com/prometheus/snmp_exporter/releases/download/v${pkgver}/snmp_exporter-${pkgver}.linux-armv5.tar.gz")
source_armv6h=("prometheus-snmp-exporter.service"
               "https://github.com/prometheus/snmp_exporter/releases/download/v${pkgver}/snmp_exporter-${pkgver}.linux-armv6.tar.gz")
source_armv7h=("prometheus-snmp-exporter.service"
               "https://github.com/prometheus/snmp_exporter/releases/download/v${pkgver}/snmp_exporter-${pkgver}.linux-armv7.tar.gz")

sha512sums_x86_64=("38eb3feb8cc64b078d119d67d6855bee55dfff89f87c153755961abbafd1a6f729a9cfa9e76da1ab54f63b0c1d1c46775d0368cbb191e3ddde7e9754093ad9ab"
                   "5942c4a18de9000d22f48614995dccfeeec5eb3c86bb2501d2cc865af1d16be038d2e38d3c440f4afdab37fe64a256bdd263f46f165164819916340bf69e7175")
sha512sums_armv5h=("38eb3feb8cc64b078d119d67d6855bee55dfff89f87c153755961abbafd1a6f729a9cfa9e76da1ab54f63b0c1d1c46775d0368cbb191e3ddde7e9754093ad9ab"
                   "62e33e6ef70c5e34b4a421be982f2adafb0a7b91c3b5e7d211558f9ef621cdeb872b6de1f676780ea4e8f52f3769ed59256fe46542592d5d97f3156bfcc38e4d")
sha512sums_armv6h=("38eb3feb8cc64b078d119d67d6855bee55dfff89f87c153755961abbafd1a6f729a9cfa9e76da1ab54f63b0c1d1c46775d0368cbb191e3ddde7e9754093ad9ab"
                   "9cbdaab2a220b664e6f45fc958833852252a465665c53753d17ba20170949972ab0d456ac52c3bc185a8424513fabbb9e89657b778344c7ebea383de66cd18b3")
sha512sums_armv7h=("38eb3feb8cc64b078d119d67d6855bee55dfff89f87c153755961abbafd1a6f729a9cfa9e76da1ab54f63b0c1d1c46775d0368cbb191e3ddde7e9754093ad9ab"
                   "de4c479a1e1b0fd09d2d627ec90f910db287f91abed498551168cf97f1b83ee3e883ef2e07e604086cd58f31fad15200b08b6c74a9ed91316ca08dacfdb60c53")


package() {
    cd "${srcdir}/snmp_exporter-${pkgver}.linux-amd64"

    # Install Binary
    install -D -m0755 snmp_exporter "${pkgdir}/usr/bin/prometheus_snmp_exporter"

    # Install SystemD Service File
    install -D -m0755 "${srcdir}/prometheus-snmp-exporter.service" "${pkgdir}/usr/lib/systemd/system/prometheus-snmp-exporter.service"

    # Install snmp.yml
    install -D -m644 snmp.yml "${pkgdir}/etc/prometheus/snmp.yml"
}
