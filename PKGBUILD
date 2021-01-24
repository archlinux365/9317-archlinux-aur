# Maintainer: Francesco Zardi <frazar at hotmail dot it>
pkgname=fish-done
_reponame='done'
pkgver=1.15.0
pkgrel=1
pkgdesc='Receive notifications when long processes finish in fish'
arch=(any)
url="https://github.com/franciscolourenco/$_reponame/"
license=(MIT)
depends=('fish>=2.3.0')
checkdepends=('fish-fishtape')
optdepends=('jq: for use with sway'
            'libnotify: notification backend'
            'notify-desktop-git: notification backend')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('415511a94bc3547f96c731ad1caa7f386ec1f33350db5b040d967af019b9e4dc')

check() {
	cd "$_reponame-$pkgver"
	fish -c 'fishtape "test/done.fish"'
}

package() {
	cd "$_reponame-$pkgver"
	install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
	install -Dm644 -t "$pkgdir/usr/share/doc/$pkgname" README.md
	install -Dm644 -t "$pkgdir/etc/fish/conf.d" 'conf.d/done.fish'
}
