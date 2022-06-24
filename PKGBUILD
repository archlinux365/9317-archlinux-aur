# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Randy Fay <randy at randyfay.com>

pkgname='ddev-edge-bin'
pkgver=1.19.4
pkgrel=1
pkgdesc='DDEV-Local: a local web development environment'
url='https://ddev.com/'
arch=('aarch64' 'x86_64')
license=('Apache 2')
provides=('ddev')
conflicts=('ddev')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/rfay/ddev/releases/download/v1.19.4-ac8/ddev_linux-arm64.v1.19.4-ac8.tar.gz")
sha256sums_aarch64=('88a7f68f1fa44b25b332149a040300cf54f1adf78fe27832d68118e71fe80ba9')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/rfay/ddev/releases/download/v1.19.4-ac8/ddev_linux-amd64.v1.19.4-ac8.tar.gz")
sha256sums_x86_64=('d2ed1b0873e4225f6dc00d2d37bd2c4ed1512981751b72bbaaba1bd46769f291')

package() {
  # bin
  install -Dm755 "./ddev" "${pkgdir}/usr/bin/ddev"
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/ddev/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./src/ddev_bash_completions.sh" "${pkgdir}/usr/share/bash-completion/completions/ddev"
  install -Dm644 "./src/ddev_zsh_completions.sh" "${pkgdir}/usr/share/zsh/site-functions/_ddev"
  install -Dm644 "./src/ddev_fish_completions.sh" "${pkgdir}/usr/share/fish/vendor_completions.d/ddev.fish"
}
