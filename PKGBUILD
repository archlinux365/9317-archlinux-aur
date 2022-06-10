# Maintainer: Oleg "Zmey!" Vasiliev <ovasiliev@proton.me>
pkgname=victoriametrics-bin
pkgver=1.77.2
pkgrel=1
pkgdesc="Fast, cost-effective and scalable time series database"
arch=('x86_64')
url="https://victoriametrics.github.io"
license=('Apache')
backup=('etc/default/victoriametrics')
install=victoriametrics.install
source=("https://github.com/VictoriaMetrics/VictoriaMetrics/releases/download/v${pkgver}/victoria-metrics-amd64-v${pkgver}.tar.gz"
        "victoriametrics.service"
        "victoriametrics.sysusers"
        "victoriametrics.tmpfiles"
        "victoriametrics.default")
sha256sums=('658784ecf29c70a3e42b9c4c87d1a8de16ab4d18301c7f6dbb20860f63d8289a'
            'c47defa8ff60515a704daeb01eedebf08e15e85bcd37217c40c7133b6302c967'
            'ad4911f772a1a52d1bd5ba4236d27a84aabbb10fc057d2906bf50f30d179d4a4'
            'e26f3359d0afc3bf0f236a9b4b05554ed9256d477ef4b4f1b013898fac7a723c'
            'f538747c1384e6842561e1d13519c2118b8e74c6eb5132b9f2e8730f7d08cc26')

package(){
  install -Dm755 "${srcdir}/victoria-metrics-prod" "${pkgdir}/usr/bin/victoriametrics"
  install -Dm640 "${srcdir}/victoriametrics.service" "${pkgdir}/usr/lib/systemd/system/victoriametrics.service"
  install -Dm640 "${srcdir}/victoriametrics.default" "${pkgdir}/etc/default/victoriametrics"
  install -Dm644 "${srcdir}/victoriametrics.sysusers" "${pkgdir}/usr/lib/sysusers.d/victoriametrics.conf"
  install -Dm644 "${srcdir}/victoriametrics.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/victoriametrics.conf"
}
