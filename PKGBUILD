# Maintainer :  Kr1ss $(echo \<kr1ss+x-yandex+com\>|sed s/\+/./g\;s/\-/@/)


pkgname=git-delta
_name="${pkgname#*-}"
pkgver=0.3.0
pkgrel=1

pkgdesc='A syntax-highlighting pager for git and diff output'
arch=('x86_64')
url="https://github.com/dandavison/$_name"
license=('MIT')

depends=('git')
makedepends=('rust' 'clang' 'llvm')

source=("$url/archive/$pkgver.tar.gz")
sha256sums=('4ff8d5864306f130be8e0da3d8013bcc4ece082835d4cc5395775c669111ed77')


prepare() {
  # Assist chroot builds with a persistent cargo cache (hat tip @ccorn for this patch)
  if [ -d "$startdir/.cargo" ]; then
    export CARGO_HOME="${CARGO_HOME:-$startdir/.cargo}"
  else
    msg2 "NOTE : If you're building in a (clean) chroot and want a persistant
            cargo cache folder specific for this package, you can create
            an empty '.cargo' directory next to the 'PKGBUILD'. This will
            be recognized and used as CARGO_HOME (except when CARGO_HOME is
            already set)."
  fi
}

build() {
  cd "$_name-$pkgver"
  cargo build --release --locked
}

check() {
  cd "$_name-$pkgver"
  cargo test --locked
}

package() {
  cd "$_name-$pkgver"
  install -Dm755 "target/release/$_name"     -t"$pkgdir/usr/bin/"
  install -Dm644 README.md                   -t"$pkgdir/usr/share/doc/$_name/"
  cp -a --no-preserve=ownership performance    "$pkgdir/usr/share/doc/$_name/"
  install -Dm644 LICENSE                     -t"$pkgdir/usr/share/licenses/$_name/"
  install -Dm644 completion/completion.bash    "$pkgdir/usr/share/bash-completion/completions/$_name"
  install -Dm644 completion/completion.zsh     "$pkgdir/usr/share/zsh/site-functions/_$_name"
}


# vim: ts=2 sw=2 et ft=PKGBUILD:
