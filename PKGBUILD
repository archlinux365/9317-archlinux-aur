# Maintainer: Dušan Simić <dusan.simic1810@gmail.com>

pkgname=tmpmail
pkgver=1.2.1
_commit=81b733ca469c52ca018bcbcecfa7239c24a95001
pkgrel=1
pkgdesc='A temporary email right from your terminal written in POSIX sh'
arch=(any)
url=https://github.com/sdushantha/tmpmail
license=(MIT)
depends=(curl jq)
makedepends=(git)
optdepends=('w3m: email rendering support'
            'xclip: address copy support')
source=("git+$url.git#commit=$_commit")
md5sums=(SKIP)

package() {
	cd "$pkgname"
	install -Dm755 tmpmail -t "$pkgdir/usr/bin"
	install -Dm644 tmpmail.1 -t "$pkgdir/usr/share/man/man1"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
