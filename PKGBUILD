# Maintainer: Oleg Shparber <trollixx+aur@gmail.com>
# Maintainer: Thomas Weißschuh <thomas t-8ch de>

pkgname=zeal
epoch=1
pkgver=0.2.1
pkgrel=2
pkgdesc='An offline API documentation browser'
arch=('i686' 'x86_64')
url='https://zealdocs.org/'
license=('GPL3')
depends=('qt5-webkit' 'hicolor-icon-theme' 'desktop-file-utils' 'libarchive'
         'qt5-x11extras')
makedepends=()
conflicts=(zeal-git)
install=zeal.install
source=("zeal-${pkgver}.tar.gz::https://github.com/zealdocs/zeal/archive/v${pkgver}.tar.gz"
        "zeal.install")
sha256sums=('994c5fad079cb34952fc05b0663920118489ed7f00f8e5a5887ff2e2bd05861d'
            '00c8482dd54eaa217682adee62267e8b9e45cc72842cba82ae7de370301cd4eb')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	QT_SELECT=5 qmake
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make INSTALL_ROOT="$pkgdir" install
}
