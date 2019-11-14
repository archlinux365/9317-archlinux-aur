# Maintainer: Hao Long <aur@esd.cc>

pkgname=cloudflared-bin
pkgver=2019.11.0
pkgrel=1
pkgdesc="An Argo Tunnel client which proxies any local webserver through the Cloudflare network"
arch=("x86_64" "i686" "armv6h" "armv7h")
url="https://developers.cloudflare.com/argo-tunnel/"
license=("custom")
depends=("glibc")
provides=("cloudflared")
conflicts=("cloudflared")
source=("https://raw.githubusercontent.com/cloudflare/cloudflared/master/LICENSE"
        "cloudflared.yml"
        "cloudflared@.service"
        "cloudflared-dns.service"
        "sysusers.d")
source_x86_64=("https://bin.equinox.io/a/6mHJpAdzmZF/cloudflared-2019.11.0-linux-amd64.tar.gz")
source_i686=("https://bin.equinox.io/a/2erdbm7LCsn/cloudflared-2019.11.0-linux-386.tar.gz")
source_armv6h=("https://bin.equinox.io/a/diWT7SefFRZ/cloudflared-2019.11.0-linux-arm.tar.gz")
source_armv7h=("https://bin.equinox.io/a/diWT7SefFRZ/cloudflared-2019.11.0-linux-arm.tar.gz")
sha256sums=('6a486a0f6c00e87cce1caf0aa8db45ea9fefd0bf91d9be6fc44460160dc0dbda'
            'e769786afdfbd486a4d7ca99495dbe955c25e41b5e012b722b018ca17f269dac'
            '791ec5bebea5863544f5e0db0d9184a5bbb75e66725f7505e83e252f51d84376'
            'bc40e3f7e1b21b93a949a1b1c05639584943d9ce9cc7ccb96612688eeb9fd206'
            'bfda935c07b8e49821ee13e19433b1ed475ebb651e3008a32950734afbaef813')
sha256sums_x86_64=('fc320275d952288262dbf14a88cb7ed6592c8b2bf5fbdebfcb6ea4415336c958')
sha256sums_i686=('4b6fcc01751866047297d2baec046c30c0fc07800dd3e54e08f0346a2e5c28da')
sha256sums_armv6h=('a5821825e3d53d488e3d9503479b5282e841f7ec904cd232d192c6284c5de442')
sha256sums_armv7h=('a5821825e3d53d488e3d9503479b5282e841f7ec904cd232d192c6284c5de442')

package() {
    # Install License
    install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

    # Install Binary
    install -Dm755 cloudflared ${pkgdir}/usr/bin/cloudflared

    # Configuration File
    install -Dm644 cloudflared.yml ${pkgdir}/etc/cloudflared/cloudflared.yml.example
    install -Dm644 -t ${pkgdir}/usr/lib/systemd/system cloudflared{@,-dns}.service

    # Post install
    install -Dm644 sysusers.d ${pkgdir}/usr/lib/sysusers.d/cloudflared.conf
}

# vim: ts=2 sw=2 et:
