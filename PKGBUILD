# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Artem Vorotnikov <artem@vorotnikov.me>

_gemname=chef
pkgname=ruby-$_gemname
pkgver=12.3.0
pkgrel=1
pkgdesc='A systems integration framework, built to bring the benefits of configuration management to your entire infrastructure.'
arch=(any)
url='http://www.getchef.com'
license=(Apache-2.0)
depends=(ruby ruby-mixlib-config ruby-mixlib-cli ruby-mixlib-log ruby-mixlib-authentication ruby-mixlib-shellout ruby-ohai ruby-ffi-yajl ruby-net-ssh ruby-net-ssh-multi ruby-highline ruby-erubis ruby-diff-lcs ruby-chef-zero ruby-pry ruby-plist ruby-rspec-core ruby-rspec-expectations ruby-rspec-mocks ruby-rspec_junit_formatter ruby-serverspec ruby-specinfra)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha512sums=('bc8c621e0dfca3c8292e59162f78ce9082798ba073f1dee3c8984e8d8298a0c5798659882c4454dcf315c200ca69b7a7b64422f4b3de349358325da42429d97b')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
