# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Fernandez Ludovic <lfernandez dot dev at gmail dot com>
# Maintainer: Carlos Alexandro Becker <carlos at becker dot software>

pkgname='goreleaser-pro-bin'
pkgver=1.9.2
pkgrel=1
pkgdesc='Deliver Go binaries as fast and easily as possible'
url='https://goreleaser.com'
arch=('aarch64' 'armv7h' 'i686' 'x86_64')
license=('MIT')
provides=('goreleaser' 'goreleaser-pro')
conflicts=('goreleaser' 'goreleaser-pro')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.9.2-pro/goreleaser-pro_Linux_arm64.tar.gz")
sha256sums_aarch64=('9827a214c5ee1c38aca3cdef8ce45d5f3416060518d5010712e1ef356d437fd0')

source_armv7h=("${pkgname}_${pkgver}_armv7h.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.9.2-pro/goreleaser-pro_Linux_armv7.tar.gz")
sha256sums_armv7h=('1ad851caf45def24bfcf558372a0b8e2470935d15f3244493173f45a645647bc')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.9.2-pro/goreleaser-pro_Linux_i386.tar.gz")
sha256sums_i686=('86ba8fbcf1a47f45d4c84e986266da3eebf1187517456a777dff272600f6594c')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/goreleaser/goreleaser-pro/releases/download/v1.9.2-pro/goreleaser-pro_Linux_x86_64.tar.gz")
sha256sums_x86_64=('83191690d3459bf326cd9902beca6de8d78b464443211d12e167e668dfd76aae')

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
