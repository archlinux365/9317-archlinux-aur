# Maintainer: Alexandre Berthaud <alexandre at berthaud dot me>

pkgname=clever-tools-bin
pkgver=0.10.1
pkgrel=1
pkgdesc="Clever Cloud CLI tool (binary)"
arch=('x86_64')
url="https://github.com/clevercloud/clever-tools"
license=('MIT')

depends=('libcurl-compat'
         'gcc-libs'
         'libnghttp2'
         'libssh2'
         'libpsl')
options=('!strip')
source=("clever-tools-${pkgver}_linux.tar.gz::https://clever-tools.cellar.services.clever-cloud.com/releases/${pkgver}/clever-tools-${pkgver}_linux.tar.gz"
        "clever-wrapper.sh")
sha256sums=('332e7a8ec3f41a196376d1f9886e27c6ea0061657953f0f106e99f864e68a418'
            '47e0f16f00d261f3f5919344929a8931e56b7e79ac3919f3d47a64ddd7fe8318')

package() {
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/lib/${pkgname}"
  install -d "${pkgdir}/usr/share/bash-completion/completions"
  install -d "${pkgdir}/usr/share/zsh/site-functions"

  install "${srcdir}/nodegit.node" "${pkgdir}/usr/lib/${pkgname}/nodegit.node"
  install "${srcdir}/clever" "${pkgdir}/usr/lib/${pkgname}/clever"
  install "${srcdir}/clever-wrapper.sh" "${pkgdir}/usr/bin/clever"

  "${srcdir}/clever" --bash-autocomplete-script /usr/bin/clever > "${pkgdir}/usr/share/bash-completion/completions/clever"
  "${srcdir}/clever" --zsh-autocomplete-script /usr/bin/clever > "${pkgdir}/usr/share/zsh/site-functions/_clever"
}
