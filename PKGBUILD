# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=sane-fmt-bin
pkgver=0.8.5
source=(sane-fmt-b8f2937819efa729b21f39c76777a36bf1f1bed3::https://github.com/sane-fmt/sane-fmt/releases/download/0.8.5/sane-fmt-x86_64-unknown-linux-gnu completion.0.8.5.bash::https://github.com/sane-fmt/sane-fmt/releases/download/0.8.5/completion.bash completion.0.8.5.fish::https://github.com/sane-fmt/sane-fmt/releases/download/0.8.5/completion.fish completion.0.8.5.zsh::https://github.com/sane-fmt/sane-fmt/releases/download/0.8.5/completion.zsh https://raw.githubusercontent.com/sane-fmt/sane-fmt/0.8.5/README.md https://raw.githubusercontent.com/sane-fmt/sane-fmt/0.8.5/LICENSE.md)
_checksum=b8f2937819efa729b21f39c76777a36bf1f1bed3
_completion_checksums=(f135008e2560467cac97977188c1d7d7ef980d56 4c0fe4154172c05541f474dbd173fd0fb4a89bef c4f79c267148fe5e325049d3c935bb66d83eece9)
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Opinionated code formatter for TypeScript and JavaScript'
pkgrel=1
arch=(x86_64)
license=(MIT)
url='https://github.com/sane-fmt/sane-fmt'
provides=(sane-fmt)
conflicts=(sane-fmt)
sha1sums=(
  "$_checksum"                  # for the sane-fmt binary
  "${_completion_checksums[@]}" # for the completions
  SKIP                          # for the readme
  SKIP                          # for the license
)

package() {
  install -Dm755 "sane-fmt-$_checksum" "$pkgdir/usr/bin/sane-fmt"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
  install -Dm644 "completion.$pkgver.bash" "$pkgdir/usr/share/bash-completion/completions/sane-fmt"
  install -Dm644 "completion.$pkgver.fish" "$pkgdir/usr/share/fish/completions/sane-fmt.fish"
  install -Dm644 "completion.$pkgver.zsh" "$pkgdir/usr/share/zsh/site-functions/_sane-fmt"
}

