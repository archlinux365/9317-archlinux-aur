# Maintainer: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Christer Solskogen <christer.solskogen@gmail.com>

_arch=aarch64
_kernel_arch=arm64
_target=$_arch-unknown-linux-gnu
pkgname=$_arch-linux-api-headers
pkgver=5.10.28
pkgrel=1
pkgdesc="Kernel headers sanitized for use in userspace ($_target)"
arch=(any)
url='https://www.kernel.org'
license=(GPL2)
makedepends=(rsync)
source=(https://www.kernel.org/pub/linux/kernel/v5.x/linux-$pkgver.tar.{xz,sign})
sha256sums=('4dfc3aea719556e63e90b8692e9d4b779ad1cb2a9a4823bf721e30004e7ac354'
            'SKIP')
validpgpkeys=(
  'ABAF11C65A2970B130ABE3C479BE3E4300411886'  # Linus Torvalds
  '647F28654894E3BD457199BE38DBBDC86092693E'  # Greg Kroah-Hartman
)


build() {
  cd linux-$pkgver

  make ARCH=$_kernel_arch mrproper
  make ARCH=$_kernel_arch headers_check
}

package() {
  cd linux-$pkgver

  make INSTALL_HDR_PATH="$pkgdir/usr/$_target/sys-root/usr" ARCH=$_kernel_arch V=0 headers_install

  # clean-up unnecessary files generated during install
  find "$pkgdir" \( -name .install -or -name ..install.cmd \) -delete
}
