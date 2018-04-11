# Maintainer: Mathieu Clabaut <mathieu[at]clabaut.net>

pkgname=prometheus-nginxlog-exporter-bin
_name=prometheus-nginxlog-exporter
pkgver=1.2.0
pkgrel=1
pkgdesc="Export metrics from Nginx access log files to Prometheus"

arch=('x86_64')
url="https://github.com/martin-helmich/${_name}/"
license=('Apache')
depends=()
makedepends=()
backup=('etc/prometheus/nginxlog.yml')
provides=("${_name}")
conflicts=("${_name}")
source=( "${_name}.service" 'config.yml'
"${url}/releases/download/v${pkgver}/${_name}")

package() {
   cd "${srcdir}/"

    # Install Binary
    install -D -m0755 "${_name}" \
        "${pkgdir}/usr/bin/${_name}"

    # Install SystemD Service File
    install -D -m0644 "${srcdir}/${_name}.service" \
        "${pkgdir}/usr/lib/systemd/system/${_name}.service"
    #Install example configuration
    install -D -m0644 "${srcdir}/config.yml" \
        "${pkgdir}/etc/prometheus/nginxlog.yml"
}
md5sums=('c6a8077b0dee0f3a748ee73b7c146044'
         '7f951e89fda154346240c0f0eb9223ce'
         'aca2467d2cbd7caed90e2dd8274a5817')
