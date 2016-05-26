# Maintainer: Peter Reschenhofer < peterreschenhofer at gmail dot com >
# Contributor: Familia < carlosfamilia at gmail dot com >
pkgname=gams
pkgver=24.7.1
pkgrel=1
pkgdesc="The General Algebraic Modeling System (GAMS) is a high-level modeling system for mathematical optimization."
arch=('x86_64')
license=('custom')
url="http://www.gams.com/"
depends=()
conflicts=()

source=("https://d37drm4t2jghv5.cloudfront.net/distributions/${pkgver}/linux/linux_x64_64_sfx.exe")
md5sums=("bb58205f215a98cfa103516f02d06e7e")

package() {
    install -d ${pkgdir}/{opt/gams,usr/bin}
    cp -r ${srcdir}/gams*_linux_x64_64_sfx/* ${pkgdir}/opt/gams/
    ln -s "/opt/gams/gams" "$pkgdir/usr/bin/gams"
}
