# Maintainer: Nenad Stojanovikj <me+aur@nenad.dev>
# Previous maintainer: David Stark <david@starkers.org>

pkgname=saml2aws
pkgver=2.21.0
_build=${pkgver}
pkgrel=0
pkgdesc="CLI tool which enables you to login and retrieve AWS temporary credentials using a SAML IDP"
url="https://github.com/Versent/saml2aws"
arch=("x86_64")
license=("MIT")
conflicts=()

source_x86_64=("https://github.com/Versent/saml2aws/releases/download/v${pkgver}/saml2aws_${pkgver}_linux_amd64.tar.gz")
md5sums_x86_64=("a9882bb31fefcb176d1f5bf780be76df")

package() {
    install -d ${pkgdir}/usr/bin
    install -Dm755 ${srcdir}/saml2aws ${pkgdir}/usr/bin/saml2aws
}
