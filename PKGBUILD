# Maintainer: Yurii <yu hrysh at posteo dot net>

pkgname=lbrynet-bin
pkgver=0.101.0
pkgrel=1
pkgdesc='Implementation of the LBRY Network protocols, without the desktop app'
arch=('x86_64')
url='https://lbry.tech/'
license=('MIT')
conflicts=('lbrynet' 'lbry-app-bin>=0.47.1' 'lbry-app-bin<0.47.2-2')
provides=("lbrynet=$pkgver")
source=("lbrynet-linux-$pkgver.zip::https://github.com/lbryio/lbry-sdk/releases/download/v$pkgver/lbrynet-linux.zip"
        "lbrynet-LICENSE-$pkgver::https://raw.githubusercontent.com/lbryio/lbry-sdk/v$pkgver/LICENSE")

package() {
   install -Dm755 "${srcdir}/lbrynet" -t "${pkgdir}/usr/bin/"
   install -Dm644 "${srcdir}/lbrynet-LICENSE-$pkgver" "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
}
b2sums=('03d8282738d1fc22f1e5380d743539a52fe76e0309e1c54708b98b36fd38986bfee4763323d31292ae1dbdaeda52c1e4f05618caa9bf7f08c265487c71e00c4a'
        'c17e30091ae9d3f6ad3f5a70c80ff686bdcbfc41b9b603d5693c34a006aba635968ebc67aa5ddeb607053b098ad8d3d3a03b790249ab58b9cbb6f66ba6cf5693')
