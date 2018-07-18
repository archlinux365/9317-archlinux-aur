# Maintainer: helix <stargr@gmail.com>
pkgname=subedit
pkgver=1.2
pkgrel=1
pkgdesc='Subtitle editor written in bash'
arch=('any')
license=('GPL2')
depends=('bash' 'dos2unix' 'uchardet')
url="https://github.com/helixarch/subedit"
source=("$pkgname-$pkgver.tar.gz::https://github.com/helixarch/subedit/archive/$pkgver.tar.gz"
        "subedit.install")

sha512sums=('55d95af769e56b35cabcd0a0581b3fac7c4e6dfcf83320afc12a6a13ab0bbc21800f884789b898d8bd89353cc6fdc53856859411c175fe67c6d91091d1a5641c'
            'baee56c87a9ed1974c6c5793472290d3302e0236a7bdcc585a841c5455463fba43ec2a6c10fa5945b39f60917eb88c0b6c1b2187ddbdcea6da758783df702d14')

install=subedit.install

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 subedit "$pkgdir/usr/bin/subedit"
  install -Dm644 subeditrc "$pkgdir/etc/subeditrc"
}
