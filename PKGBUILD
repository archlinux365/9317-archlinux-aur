# Maintainer: Markus Richter <mqus at disroot dot org>

pkgname=bitwarden_rs-vault-bin
pkgver=2.15.1
pkgrel=1
pkgdesc="Integrates the Vault Web-Interface into bitwarden_rs. Pre-compiled binaries from https://github.com/dani-garcia/bw_web_builds."
arch=('any')
url="https://github.com/bitwarden/web"
license=('AGPL3')
depends=('bitwarden_rs')
conflicts=("bitwarden_rs-vault" "bitwarden_rs-vault-git") 
provides=('bitwarden_rs-vault')
install=bitwarden_rs-vault.install
source=("https://github.com/dani-garcia/bw_web_builds/releases/download/v$pkgver/bw_web_v$pkgver.tar.gz"
	"https://github.com/dani-garcia/bw_web_builds/releases/download/v$pkgver/bw_web_v$pkgver.tar.gz.asc"
	"${pkgname%-bin}.install")
sha512sums=('81f051ecb8f899de317550b3d6118602232cfafe306e8a049415a152df979cf03d18e6d42600ba083a25395f885b07c83981fef8b6f8196f58f010abe0553170'
            'SKIP'
            '0b93ea1a442f15ac2445bc0cb759887b0826215edbc73dabb150de8ac136c8712c18b798ff397a06d50989332562a36382b5b7d962e60c2f2619d0f46cf9b04d')
validpgpkeys=('B9B7A108373276BF3C0406F9FC8A7D14C3CD543A')

package() {
	# install vault files
	install -d "$pkgdir/usr/share/bitwarden_rs"
	cp -r "$srcdir/web-vault" "$pkgdir/usr/share/bitwarden_rs/vault"
}
