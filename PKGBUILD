# Maintainer: Lorenzo Fontana <lo@linux.com>
pkgname=coredns-bin
pkgver=v1.1.3
pkgrel=1
pkgdesc="CoreDNS is a DNS server that chains plugins (official binary version)"
arch=('x86_64')
conflicts=('coredns')
url="https://github.com/coredns/coredns"
license=('Apache')
provides=('coredns')
source=(coredns_x64_${pkgver}.tar.gz::https://github.com/coredns/coredns/releases/download/${pkgver}/coredns_${pkgver//v/}_linux_amd64.tgz
https://raw.githubusercontent.com/coredns/deployment/39c9f7ed7640f86fa0fb6ba06a88e9afa830b306/systemd/coredns.service
https://raw.githubusercontent.com/coredns/deployment/39c9f7ed7640f86fa0fb6ba06a88e9afa830b306/systemd/coredns-sysusers.conf)

sha256sums=('68a74088cc76882500288a37e5a4d36fde646f1a5dac469664af5da2bcdc07a4'
'947b4838af48212ecd8e565155c97ca61ff7d408d0b8622499925b6e232656c4'
'178c632fd855a5a35ae69e13ab554d5abad696cf75d23c6b6b37f0ace3b4b0f2')

package() {
    install -Dm755 "$srcdir/coredns" "$pkgdir/usr/bin/coredns"
    install -Dm644 "$srcdir/coredns.service" "$pkgdir/usr/lib/systemd/system/coredns.service"
    install -Dm644 "$srcdir/coredns-sysusers.conf" "$pkgdir/usr/lib/sysusers.d/coredns.conf"
    install -d "${pkgdir}/etc/coredns"
}
