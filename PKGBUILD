#Maintainer: Dmytro Aleksandrov <alkersan@gmail.com>
pkgname=rocker-compose-bin
pkgver=0.1.3
pkgrel=2
pkgdesc="Docker composition tool with idempotency features for deploying apps composed of multiple containers"
depends=( )
arch=('x86_64')
conflicts=('rocker-compose')
options=( )
source=(
  "https://github.com/grammarly/rocker-compose/releases/download/${pkgver}/rocker-compose-${pkgver}_linux_amd64.tar.gz"
  "https://raw.githubusercontent.com/grammarly/rocker-compose/master/LICENSE"
  "https://raw.githubusercontent.com/alkersan/rocker-compose/master/completion/zsh/_rocker-compose"
)
url="https://github.com/grammarly/rocker-compose"
license="Apache"
sha256sums=('0d3d5f93554be348aba041b348a62f9ebbd560650a4c5a8ad131337b4904b66f'
            '58f1fbfa93dd08a1b77a80dd5821c6e8cf025d54831c43e8235a280d512fb62b'
            '72d3d3b81447a5da71060184173f877bf69583a6495d36b3fc4d860fa1969369')

package() {
  cd "$srcdir"
  install -Dm755 rocker-compose "$pkgdir/usr/bin/rocker-compose"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/rocker-compose/LICENSE"
  install -Dm644 _rocker-compose "$pkgdir/usr/share/zsh/site-functions/_rocker-compose"
}
