# Maintainer: Trizen <echo dHJpemVuQHByb3Rvbm1haWwuY29tCg== | base64 -d>

_pkgname=trizen
pkgname=trizen-git
pkgver=1.62
pkgrel=1
pkgdesc="Trizen AUR Package Manager: lightweight pacman wrapper and AUR helper (-git version)."
arch=('any')
url="https://github.com/trizen/${_pkgname}"
license=('GPL3')

provides=('trizen')
conflicts=('trizen')

depends=(
         'git'
         'pacutils'
         'perl>=5.20.0'
         'perl-libwww'
         'perl-term-ui'
         'pacman'
         'perl-json'
         'perl-data-dump'
         'perl-lwp-protocol-https'
         'perl-term-readline-gnu'
        )

optdepends=(
            'highlight: for syntax highlighting'
            'perl-json-xs: faster JSON deserialization'
            #'perl-term-readline-gnu: better STDIN support'
           )

source=("git+https://github.com/trizen/${_pkgname}.git")
sha256sums=('SKIP')

pkgver() {
    cd "$_pkgname"
    git describe --always | sed -e 's|-|.|g'
}

package() {
  cd "$_pkgname"
  install -m 755 -D "$_pkgname" "$pkgdir/usr/bin/${_pkgname}"
  install -m 644 -D "trizen.1" "$pkgdir/usr/share/man/man1/trizen.1"
  install -m 644 -D "zsh.completion" "$pkgdir/usr/share/zsh/site-functions/_trizen"
  install -m 644 -D "bash.completion" "$pkgdir/usr/share/bash-completion/completions/trizen"
  install -m 644 -D "fish.completion" "$pkgdir/usr/share/fish/vendor_completions.d/trizen.fish"
}
