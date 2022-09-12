# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Blacktop <https://github.com/blacktop>

pkgname='ipsw-bin'
pkgver=3.1.177
pkgrel=1
pkgdesc='iOS/macOS Research Swiss Army Knife'
url='https://github.com/blacktop/ipsw'
arch=('aarch64' 'x86_64')
license=('MIT')
provides=('ipsw')
conflicts=('ipsw')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/blacktop/ipsw/releases/download/v3.1.177/ipsw_3.1.177_linux_arm64.tar.gz")
sha256sums_aarch64=('02d543bbbb9d4af6aa8a8449467ec9514c50de88df33ae1316a0ea692c3833db')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/blacktop/ipsw/releases/download/v3.1.177/ipsw_3.1.177_linux_x86_64.tar.gz")
sha256sums_x86_64=('9e3d66f5d510f63bc1de10d56c41e749e4b4bcb20288ae4a3caba7300a2abf93')

package() {
  # bin
  install -Dm755 "./ipsw" "${pkgdir}/usr/bin/ipsw"

  # license
  install -Dm644 "./LICENSE.md" "${pkgdir}/usr/share/licenses/ipsw/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./completions/ipsw" "${pkgdir}/usr/share/bash-completion/completions/ipsw"
  install -Dm644 "./completions/_ipsw" "${pkgdir}/usr/share/zsh/site-functions/_ipsw"
  install -Dm644 "./completions/ipsw.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/ipsw.fish"

  # man pages
  install -Dm644 "./manpages/ipsw.1.gz" "${pkgdir}/usr/share/man/man1/ipsw.1.gz"
}
