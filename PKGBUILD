# Maintainer: Marko Korhonen <marko.korhonen@reekynet.com>
pkgname="lqsd-bin"
progname="lqsd"
pkgdesc="LiQuid Screen Dim - Dim your screen smoothly. Precompiled binary version"
pkgver=0.1.0
pkgrel=1
arch=('x86_64')
url="https://git.reekynet.com/ReekyMarko/lqsd"
license=('Apache')
depends=('light')
provides=('lqsd')
conflicts=('lqsd')
source=("https://gitlab.com/ReekyMarko/lqsd/uploads/9e783ffe478273226f05b89f1c2ee8ab/lqsd")
sha256sums=('f089bcfb18d2538486efc4954b8766d554170a194f32605ce2c939a49be292ff')

package() {
	install -D -m755 "${progname}" "$pkgdir/usr/bin/${progname}"
}
