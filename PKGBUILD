# Maintainer: Trizen <echo dHJpemVuQHByb3Rvbm1haWwuY29tCg== | base64 -d>

pkgname=trizen
pkgver=1.66
pkgrel=1
epoch=1
pkgdesc="Trizen AUR Package Manager: lightweight pacman wrapper and AUR helper."
arch=('any')
url="https://github.com/trizen/${pkgname}"
license=('GPL3')

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

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/trizen/${pkgname}/archive/${pkgver}.tar.gz")
b2sums=('3c34e29395eddf413f100fdd2bab34b1de31afeeb28676c85e7870ced10c6b569f5a6469388ba84fceb0204059fcac4f68415b849374b8ead92cccc87ea27f48')

package() {
  cd "$pkgname-$pkgver"
  install -m 755 -D $pkgname "$pkgdir/usr/bin/$pkgname"
  install -m 644 -D "trizen.1" "$pkgdir/usr/share/man/man1/trizen.1"
  install -m 644 -D "zsh.completion" "$pkgdir/usr/share/zsh/site-functions/_trizen"
  install -m 644 -D "bash.completion" "$pkgdir/usr/share/bash-completion/completions/trizen"
  install -m 644 -D "fish.completion" "$pkgdir/usr/share/fish/vendor_completions.d/trizen.fish"
}
