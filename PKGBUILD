# Maintainer: Atte Virtanen <aten.email@gmail.com>
pkgname=vrk-mpollux-digisign-client
pkgver=3.1.9_3745
pkgrel=4
pkgdesc="Client program for Finnish chip ID cards"
arch=('x86_64')
url="http://fineid.fi/default.aspx?id=294"
license=('custom')
depends=('pcsclite' 'qt4')

source_x86_64=("VRK-RHEL-mpollux-digisign-client-${pkgver//_/-}.x86_64.rpm::https://eevertti.vrk.fi/Default.aspx?id=0&docid=1128&action=Publish")

md5sums_x86_64=('dda1519d16f74960dd03434e08ae0e63')
sha1sums_x86_64=('c3d1853fe2ca9845ad84a3364d15792442f459bd')
sha256sums_x86_64=('22aea7a7bd723af1f106e2ba976e7db94ed7c11bea58eafc1176f719eb1a9a5c')
sha384sums_x86_64=('74ccd7ff1fe8afd589b65751bf4b7f51a04dabb8eb6592fe17bf1347dc381df8f7486bfbe77a2005673471209ba9cf57')
sha512sums_x86_64=('295f9eb7dda06b730e13fedeb341e9dbe8449497f57756797f63862e7532510eccc2f1085518f47d776389b222364fa0c450785f223e396d507bf4b5479236e7')

package() {
	mv usr/lib64 usr/lib
	cp -r etc usr "$pkgdir/"
	mv "$pkgdir/usr/share/doc/mpollux-digisign-client" "$pkgdir/usr/share/doc/vrk-mpollux-digisign-client"

	mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"
	cp "$pkgdir/usr/share/doc/$pkgname/"{LICENSE,Lisenssiehdot_{en,fi,sv}.html} "$pkgdir/usr/share/licenses/$pkgname/"
}

