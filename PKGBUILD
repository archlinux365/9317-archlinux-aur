# Maintainer: EagleXiang <eagle.xiang@outlook.com>
pkgname=msbuild-stable
_pkgver=15.4+xamarinxplat.2017.09.14.16.14-0xamarin1+ubuntu1404b1
pkgver=${_pkgver//[+-]/_}
pkgrel=3
pkgdesc="Xamarin implementation of the Microsoft build system"
arch=('x86_64')
depends=('mono>=5.0.0')
provides=('msbuild')
conflicts=('msbuild')
url="https://github.com/mono/msbuild"
license=('MIT')
source=("msbuild-amd64-v${_pkgver}.deb::https://github.com/eaglexiang/Downloads/raw/master/msbuild_${_pkgver}_all.deb")
sha256sums=('SKIP')

package() {
    cd "${srcdir}"

    bsdtar xf data.tar.xz
    chmod -R g-w usr
    mv usr "${pkgdir}"
}
