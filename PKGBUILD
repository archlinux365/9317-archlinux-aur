# Maintainer: Plague-doctor <plague at privacyrequired dot com >
# Credit for simplifying build goes to Martin Cihlář.

_pkgname=freetube
pkgname=${_pkgname}-bin
pkgver=0.16.0
pkgrel=1
pkgdesc="An open source desktop YouTube player built with privacy in mind."
arch=('x86_64' 'aarch64')
url="https://github.com/FreeTubeApp/FreeTube"
license=('AGPL3')
options=("!strip" "staticlibs")
provides=("${_pkgname}")
conflicts=("${_pkgname}")

source_x86_64=("${pkgname}-${pkgver}-amd64.deb"::"$url/releases/download/v$pkgver-beta/${_pkgname}_${pkgver}_amd64.deb")
source_aarch64=("${pkgname}-${pkgver}-arm64.deb"::"$url/releases/download/v$pkgver-beta/${_pkgname}_${pkgver}_arm64.deb")

prepare() {
    mkdir data
    bsdtar -x -f data.tar.xz -C data
}

package() {
    install -d "$pkgdir/usr/bin"
    cp -a  ${srcdir}/data/* ${pkgdir}/
    ln -s "/opt/FreeTube/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}

md5sums_x86_64=('a0a6deb1ad093e1b0657abba92f8016d')
md5sums_aarch64=('286d27af3d02713565010f5034decf84')
