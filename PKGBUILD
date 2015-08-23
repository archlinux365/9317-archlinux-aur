# Maintainer: mutantmonkey <aur@mutantmonkey.in>
pkgname=ciphr
pkgver=104.0ecd5fe
_gemver=0.0.1
pkgrel=2
pkgdesc="A CLI tool for encoding, decoding, encryption, decryption, and hashing streams of data."
url="https://github.com/frohoff/ciphr"
arch=('any')
license=('MIT')
depends=('ruby' 'ruby-parslet' 'ruby-base32' 'ruby-slop-3')
makedepends=('git' 'ruby-bundler')
source=('git+https://github.com/frohoff/ciphr.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/ciphr"
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

build() {
  cd "$srcdir/ciphr"
  bundle install --path=bundle
  bundle exec rake build
}

package() {
  cd "$srcdir/ciphr"
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" pkg/ciphr-$_gemver.gem
  rm "$pkgdir/$_gemdir/cache/ciphr-$_gemver.gem"
  install -D -m644 LICENSE.txt "$pkgdir/usr/share/licenses/ciphr/LICENSE.txt"
}

# vim:set ts=2 sw=2 et:
