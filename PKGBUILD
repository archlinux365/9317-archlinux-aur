# Maintainer: termuellinator

pkgname=sc-updater-git
pkgver=r3.f81b233
pkgrel=1
pkgdesc="A script to make installing the latest wine runners from Snatella's Awesome Star Citizen Runners even easier."
arch=('any')
depends=('bash')
provides=('sc-updater')
conflicts=('sc-updater')
url="https://github.com/richardtatum/sc-runner-updater"
license=('CC0 1.0 Universal')
source=("https://raw.githubusercontent.com/richardtatum/sc-runner-updater/master/update.sh")
sha256sums=('SKIP')

package() {
    cd "${srcdir}"
    install -Dm755 update.sh "$pkgdir/usr/local/bin/sc-updater"
}
 
