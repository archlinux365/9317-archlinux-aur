# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Fernandez Ludovic <lfernandez dot dev at gmail dot com>
# Maintainer: Carlos Alexandro Becker <carlos at becker dot software>

pkgname='goreleaser-pro-bin'
pkgver=1.11.4
pkgrel=1
pkgdesc='Deliver Go binaries as fast and easily as possible'
url='https://goreleaser.com'
arch=('aarch64' 'armv7h' 'i686' 'x86_64')
license=('MIT')
provides=('goreleaser' 'goreleaser-pro')
conflicts=('goreleaser' 'goreleaser-pro')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.11.4-pro/goreleaser-pro_Linux_arm64.tar.gz")
sha256sums_aarch64=('af35e2c6c5023974c9cfd713f53f3d9b54cd765d62ecb4ce1686d4f49b6e7cb5')

source_armv7h=("${pkgname}_${pkgver}_armv7h.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.11.4-pro/goreleaser-pro_Linux_armv7.tar.gz")
sha256sums_armv7h=('55fbd8f76dd16d97f399a00234a2d94beaa3b2e3a2ba352ad8b234eed6ae74b7')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.11.4-pro/goreleaser-pro_Linux_i386.tar.gz")
sha256sums_i686=('0b2f600ba5540388edcc7148795f29bb8435e5a0b238873d9e65f7b3dc6a8052')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.11.4-pro/goreleaser-pro_Linux_x86_64.tar.gz")
sha256sums_x86_64=('eeb41d8077716cafef78a93424b49b5faf3dc12e016f7843a2fcbb53c1e34b4a')

package() {
  # bin
  install -Dm755 "./goreleaser" "${pkgdir}/usr/bin/goreleaser"

  # license
  install -Dm644 "./LICENSE.md" "${pkgdir}/usr/share/licenses/goreleaser/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./completions/goreleaser.bash" "${pkgdir}/usr/share/bash-completion/completions/goreleaser"
  install -Dm644 "./completions/goreleaser.zsh" "${pkgdir}/usr/share/zsh/site-functions/_goreleaser"
  install -Dm644 "./completions/goreleaser.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/goreleaser.fish"

  # man pages
  install -Dm644 "./manpages/goreleaser.1.gz" "${pkgdir}/usr/share/man/man1/goreleaser.1.gz"
}
