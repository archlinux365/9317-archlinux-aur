# Contributor: Pedro H Lara Campos <root@pedrohlc.com>
pkgname=haxm-git
pkgver=1.0.0.r50.geda0250
pkgrel=1
pkgdesc="Intel® Hardware Accelerated Execution Manager - a hardware-assisted virtualization engine (git version)"
arch=('x86_64' 'i686')
url="https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager"
license=('BSD')
depends=('linux>4' 'nasm>=2.11')
makedepends=(linux-headers)
provides=(haxm)
conflicts=(haxm)
_extramodules=extramodules-ARCH
source=("$pkgname::git+https://github.com/intel/haxm.git")
md5sums=('SKIP')
install='haxm-git.install'

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/loader\.v//g'
}

build() {
  cd "$srcdir/$pkgname/platforms/linux"

  make modules
}

package() {
  cd "$srcdir/$pkgname/platforms/linux"

  _ldir="$pkgdir/usr/lib/haxm"
  install -dm 644 "${_ldir}"
  install -Dm 755 'haxm-install.sh' "${_ldir}/install.sh"
  install -Dm 755 'haxm-uninstall.sh' "${_ldir}/uninstall.sh"

  install -Dt "$pkgdir/usr/lib/modules/${_extramodules}" -m644 haxm.ko
  # TODO: Add license
}
