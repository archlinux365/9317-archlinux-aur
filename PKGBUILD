# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Blacktop <https://github.com/blacktop>

pkgname='ipsw-bin'
pkgver=3.1.164
pkgrel=1
pkgdesc='iOS/macOS Research Swiss Army Knife'
url='https://github.com/blacktop/ipsw'
arch=('aarch64' 'x86_64')
license=('MIT')
provides=('ipsw')
conflicts=('ipsw')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/blacktop/ipsw/releases/download/v3.1.164/ipsw_3.1.164_linux_arm64.tar.gz")
sha256sums_aarch64=('e27dd55e7fec40fd4e92e136e54566cf8c1551896c5939865fb96233b21de8bf')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/blacktop/ipsw/releases/download/v3.1.164/ipsw_3.1.164_linux_x86_64.tar.gz")
sha256sums_x86_64=('b73967c4db773c5ea67d8b29ab91ebfa12941ff8ede9fbdbd8fc921ba3f97dd4')

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
