# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Purple Clay <purple clay at gmail dot com>

pkgname='imds-mock-bin'
pkgver=0.1.0
pkgrel=1
pkgdesc='Mock the Amazon Instance Metadata Service (IMDS) for EC2'
url='https://github.com/purpleclay/imds-mock'
arch=('aarch64' 'armv7h' 'i686' 'x86_64')
license=('MIT')
provides=('imds-mock')
conflicts=('imds-mock')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/purpleclay/imds-mock/releases/download/v0.1.0/imds-mock_0.1.0_linux-arm64.tar.gz")
sha256sums_aarch64=('ab417c33a4ba17df2be00e0bae780fb7d8b0660ad83f748cfccf9ed9f0ffe091')

source_armv7h=("${pkgname}_${pkgver}_armv7h.tar.gz::https://github.com/purpleclay/imds-mock/releases/download/v0.1.0/imds-mock_0.1.0_linux-arm.tar.gz")
sha256sums_armv7h=('c4a7d2593046c1b1711088fd9acfb188995c2a0b89f846b86b3eabb69fd778ca')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/purpleclay/imds-mock/releases/download/v0.1.0/imds-mock_0.1.0_linux-i386.tar.gz")
sha256sums_i686=('a48092aee9700d36dbcecf23a1b589f8410354350c8949b609d88e0148666e8d')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/purpleclay/imds-mock/releases/download/v0.1.0/imds-mock_0.1.0_linux-x86_64.tar.gz")
sha256sums_x86_64=('ee0df9a056a7c0169c91a6e797f70883ec84a96622efd504400439934b2147ba')

package() {
  # bin
  install -Dm755 "./imds-mock" "${pkgdir}/usr/bin/imds-mock"

  # license
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/imds-mock/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./completions/imds-mock.bash" "${pkgdir}/usr/share/bash-completion/completions/imds-mock"
  install -Dm644 "./completions/imds-mock.zsh" "${pkgdir}/usr/share/zsh/site-functions/_imds-mock"
  install -Dm644 "./completions/imds-mock.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/imds-mock.fish"

  # manpages
  install -Dm644 "./manpages/imds-mock.1.gz" "${pkgdir}/usr/share/man/man1/imds-mock.1.gz"
}
