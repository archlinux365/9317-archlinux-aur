# Maintainer: Aurel Canciu <aurelcanciu@gmail.com>
# Maintainer: Hidde Beydals <hello@hidde.co>

pkgname=flux-bin
pkgver=0.19.0
pkgrel=1
pkgdesc="Open and extensible continuous delivery solution for Kubernetes"
url="https://fluxcd.io/"
arch=("x86_64" "armv6h" "armv7h" "aarch64")
license=("APACHE")
optdepends=('bash-completion: auto-completion for flux in Bash',
'zsh-completions: auto-completion for flux in ZSH')
source_x86_64=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/fluxcd/flux2/releases/download/v${pkgver}/flux_${pkgver}_linux_amd64.tar.gz"
)
source_armv6h=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/fluxcd/flux2/releases/download/v${pkgver}/flux_${pkgver}_linux_arm.tar.gz"
)
source_armv7h=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/fluxcd/flux2/releases/download/v${pkgver}/flux_${pkgver}_linux_arm.tar.gz"
)
source_aarch64=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/fluxcd/flux2/releases/download/v${pkgver}/flux_${pkgver}_linux_arm64.tar.gz"
)
sha256sums_x86_64=(
  56ee2b37a1e6c6c0d694de9727447bfae232b8a4ee5c0924aca7619f9b59a12b
)
sha256sums_armv6h=(
  ef0524590050269b6c278ad23eb0fc475cc15e067fc3d9a3c8f0fe385df0dc90
)
sha256sums_armv7h=(
  ef0524590050269b6c278ad23eb0fc475cc15e067fc3d9a3c8f0fe385df0dc90
)
sha256sums_aarch64=(
  6a57c138e1112f6038e0f74fef2a7ae7366f358ec1fe7c6a4edbbfec1c056e76
)
_srcname=flux

package() {
	install -Dm755 ${_srcname} "${pkgdir}/usr/bin/${_srcname}"

    "${pkgdir}/usr/bin/${_srcname}" completion bash | install -Dm644 /dev/stdin "${pkgdir}/usr/share/bash-completion/completions/${_srcname}"
    "${pkgdir}/usr/bin/${_srcname}" completion fish | install -Dm644 /dev/stdin "${pkgdir}/usr/share/fish/vendor_completions.d/${_srcname}.fish"
    "${pkgdir}/usr/bin/${_srcname}" completion zsh | install -Dm644 /dev/stdin "${pkgdir}/usr/share/zsh/site-functions/_${_srcname}"
}
