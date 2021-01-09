# Maintainer: Maurice Zhou <ja at apvc punkt uk>

pkgname=bieaz
pkgver=0.0.24
pkgrel=1
pkgdesc="Shell script ZFS boot environment manager"
arch=(any)
url="https://gitlab.com/m_zhou/bieaz"
license=('GPL')
depends=('coreutils')
optdepends=('grub: select boot environment at boot')
source=(
	"$url/-/archive/$pkgver/$pkgname-$pkgver.tar.gz"
	"0000-42_bieaz-detect-archlinux-initramfs.patch"
)
package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install
}
prepare() {
	cd "${srcdir}/$pkgname-$pkgver/"
	echo "Patch to detect of Arch Linux initramfs images by grub-mkconfig..."
	patch -Np1 -i "${srcdir}/0000-42_bieaz-detect-archlinux-initramfs.patch"
}
md5sums=('e1c802127437029b7c6ff1bb609ce7be'
         'ec84f0633910e13007e040577ce30fb1')
