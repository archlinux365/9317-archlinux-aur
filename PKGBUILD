# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Anthony HAMON <hamon.anth@gmail.com>
pkgname=yogo
pkgver=2.2.0
pkgrel=1
pkgdesc="Interact with yopmail from command-line"
arch=('x86_64' 'i686')
url="https://github.com/antham/yogo"
license=('GPL')
source=("https://github.com/antham/yogo/releases/download/v2.2.0/yogo_linux_386")
md5sums=("6f46458e84537719d8e574aeaa140383")

package() {
    install -Dm755 "yogo_linux_386" "$pkgdir/usr/bin/$pkgname"
}
