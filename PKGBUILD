# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=dog-dns-git
_pkgname=dog
pkgver=0.1.0.r0.g445ed98
pkgrel=1
pkgdesc="Command-line DNS client (git)"
arch=('x86_64')
url="https://github.com/ogham/dog"
license=('custom:EUPL')
makedepends=('cargo' 'git')
conflicts=("${pkgname%-git}" "${pkgname%-git}-bin")
provides=("${pkgname%-git}")
source=("git+${url}")
sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_pkgname"
  cargo build --release --locked --all-features
}

check() {
  cd "$_pkgname"
  cargo test --release --locked
}

package() {
  cd "$_pkgname"
  install -Dm 755 "target/release/$_pkgname" -t "$pkgdir/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$_pkgname"
  install -Dm 644 LICENCE -t "$pkgdir/usr/share/licenses/$_pkgname"
  install -Dm 644 "completions/$_pkgname.bash" "${pkgdir}/usr/share/bash-completion/completions/$_pkgname"
  install -Dm 644 "completions/$_pkgname.fish" -t "${pkgdir}/usr/share/fish/completions"
  install -Dm 644 "completions/$_pkgname.zsh" "${pkgdir}/usr/share/zsh/functions/Completion/Linux/_$_pkgname"
}
