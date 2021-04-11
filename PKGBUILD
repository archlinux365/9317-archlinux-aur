# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=build-fs-tree-bin
pkgver=0.0.0
source=(build-fs-tree-f9bb3f40f4d1822078666c458f776027cb7360b0::https://github.com/KSXGitHub/build-fs-tree/releases/download/0.0.0/build-fs-tree-x86_64-unknown-linux-gnu completion.0.0.0.bash::https://github.com/KSXGitHub/build-fs-tree/releases/download/0.0.0/completion.bash completion.0.0.0.fish::https://github.com/KSXGitHub/build-fs-tree/releases/download/0.0.0/completion.fish completion.0.0.0.zsh::https://github.com/KSXGitHub/build-fs-tree/releases/download/0.0.0/completion.zsh https://raw.githubusercontent.com/KSXGitHub/build-fs-tree/0.0.0/README.md https://raw.githubusercontent.com/KSXGitHub/build-fs-tree/0.0.0/LICENSE.md)
_checksum=f9bb3f40f4d1822078666c458f776027cb7360b0
_completion_checksums=(SKIP SKIP SKIP)
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Create a filesystem tree from YAML'
pkgrel=1
arch=(x86_64)
license=(MIT)
url='https://github.com/KSXGitHub/build-fs-tree'
provides=(build-fs-tree)
conflicts=(build-fs-tree)
sha1sums=(
  "$_checksum"                  # for the build-fs-tree binary
  "${_completion_checksums[@]}" # for the completion files
  SKIP                          # for the readme file
  SKIP                          # for the license file
)

package() {
  install -Dm755 "build-fs-tree-$_checksum" "$pkgdir/usr/bin/build-fs-tree"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
  install -Dm644 "completion.$pkgver.bash" "$pkgdir/usr/share/bash-completion/completions/build-fs-tree"
  install -Dm644 "completion.$pkgver.fish" "$pkgdir/usr/share/fish/completions/build-fs-tree.fish"
  install -Dm644 "completion.$pkgver.zsh" "$pkgdir/usr/share/zsh/site-functions/_build-fs-tree"
}

