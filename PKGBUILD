# Maintainer: lmbbrkr <lmbbrkr at protonmail dot ch>

pkgname=lxd-snapper-bin
_pkgname="${pkgname%-bin}"
pkgver=1.0
pkgrel=3
pkgdesc="LXD snapshots, automated"
arch=('i686' 'x86_64')
url="https://github.com/Patryk27/lxd-snapper"
license=('MIT')
depends=('lxd>=4.0.0')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source_i686=("${_pkgname}-${pkgver}-i686::${url}/releases/download/v${pkgver}/lxd-snapper-linux32")
source_x86_64=("${_pkgname}-${pkgver}-x86_64::${url}/releases/download/v${pkgver}/lxd-snapper-linux64")
source=("LICENSE::https://raw.githubusercontent.com/Patryk27/lxd-snapper/master/LICENSE")
sha256sums=('161d3e4f2761b10a75f7fd88de8a66319d3017e67e77491e2da90a521fc1383a')
sha256sums_i686=('44e433b2559397a83cd4dfdbaaf3e6f3f508242e9d4f4b0aad1d9f80daddc863')
sha256sums_x86_64=('4264fafe4738a4448eb21f27c8333a26f2f9fb0c0f3a721387fe5af68f6d7d06')

package() {
  install -Dm755 "${_pkgname}-${pkgver}-${CARCH}" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}/"
}

# vim:set ts=2 sw=2 et:
