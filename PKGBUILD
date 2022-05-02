# Maintainer: JP Roemer <jp+aur@roemer.im>
# Contributor: Nenad Stojanovikj <me+aur@nenad.dev>
# Contributor: David Stark <david@starkers.org>

pkgname=saml2aws
pkgver=2.35.0
pkgrel=1
pkgdesc='CLI tool which enables you to login and retrieve AWS temporary credentials using a SAML IDP'
arch=('x86_64' 'armv7h' 'aarch64')
url="https://github.com/Versent/${pkgname}"
license=('MIT')
depends=('gcc-libs')
makedepends=('git' 'go')
provides=("${pkgname}")
conflicts=("${pkgname}-bin")
source=("saml2aws_${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz")
sha256sums=('a7f2c915912824c426e1c6bafa303ed7a1728181e7a9ce03b983f3af34dfe39c')

export CGO_CPPFLAGS="${CPPFLAGS}"
export CGO_CFLAGS="${CFLAGS}"
export CGO_CXXFLAGS="${CXXFLAGS}"
export CGO_LDFLAGS="${LDFLAGS}"
export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"

build() {
    local _commit _flags
    _commit=$(bsdcat "saml2aws_${pkgver}.tar.gz" | git get-tar-commit-id)
    _flags=(
        -X=main.Version="${pkgver}"
        -X=main.commit="${_commit::7}"
        -X=main.date="$(date -u -d "@${SOURCE_DATE_EPOCH}" +'%FT%TZ')"
        -linkmode=external
    )
    cd "${pkgname}-${pkgver}"
    go build -o "${pkgname}" -ldflags="-s -w ${_flags[*]}" "./cmd/${pkgname}"
}

package() {
    cd "${pkgname}-${pkgver}"
    install -Dm 755 "${pkgname}" -t "${pkgdir}/usr/bin"
}
