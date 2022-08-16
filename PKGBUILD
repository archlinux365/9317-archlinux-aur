# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=pretty-exec-bin
pkgver=0.2.0
source=(pretty-exec-8b89312f34b84ca382c669c4c7ac0bfbf98719f9::https://github.com/KSXGitHub/pretty-exec/releases/download/0.2.0/pretty-exec-x86_64-unknown-linux-gnu completion.0.2.0.bash::https://github.com/KSXGitHub/pretty-exec/releases/download/0.2.0/completion.bash completion.0.2.0.fish::https://github.com/KSXGitHub/pretty-exec/releases/download/0.2.0/completion.fish completion.0.2.0.zsh::https://github.com/KSXGitHub/pretty-exec/releases/download/0.2.0/completion.zsh https://raw.githubusercontent.com/KSXGitHub/pretty-exec/0.2.0/README.md https://raw.githubusercontent.com/KSXGitHub/pretty-exec/0.2.0/LICENSE.md)
_checksum=8b89312f34b84ca382c669c4c7ac0bfbf98719f9
_completion_checksums=(SKIP SKIP SKIP)
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Print command and execute it'
pkgrel=1
arch=(x86_64)
license=(MIT)
url='https://github.com/KSXGitHub/pretty-exec'
provides=(pretty-exec)
conflicts=(pretty-exec)
sha1sums=(
  "$_checksum"                  # for the pretty-exec binary
  "${_completion_checksums[@]}" # for the completion files
  SKIP                          # for the readme file
  SKIP                          # for the license file
)

package() {
  install -Dm755 "pretty-exec-$_checksum" "$pkgdir/usr/bin/pretty-exec"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
  install -Dm644 "completion.$pkgver.bash" "$pkgdir/usr/share/bash-completion/completions/pretty-exec"
  install -Dm644 "completion.$pkgver.fish" "$pkgdir/usr/share/fish/completions/pretty-exec.fish"
  install -Dm644 "completion.$pkgver.zsh" "$pkgdir/usr/share/zsh/site-functions/_pretty-exec"
}

