# Maintainer: Colin Arnott <colin@urandom.co.uk>

pkgname=hydroxide
pkgver=0.2.14
pkgrel=1
pkgdesc="A third-party, open-source ProtonMail CardDAV, IMAP and SMTP bridge"
arch=('any')
_import="github.com/emersion/hydroxide"
url="https://$_import"
license=('mit')
makedepends=('go')
source=('go.sum')
sha512sums=('2e4fd90d13bca61c2a65f305aea7dd743bd26a6aee62fb72733ec8f27b0fcdc17f4b1280a9e0bf5e9948a57a43d0d25861f942c42fd90feec59be16a80c34dd9')

package() {
	echo -e "module build\n\ngo 1.13\n\nrequire $_import v$pkgver" > go.mod
	GO111MODULE=on go build -mod readonly -o $pkgdir/usr/bin/$pkgname $_import/cmd/$pkgname
}
