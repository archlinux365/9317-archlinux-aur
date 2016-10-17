# Maintainer: Christian Rebischke <chris.rebischke[at]archlinux[dot]org>
pkgname='nyan'
pkgver=1.2.1
pkgrel=1
pkgdesc="a simple netcat wrapper"
arch=('any')
url="https://github.com/shibumi/nyan"
license=('GPL3')
depends=('gnu-netcat' 'pv')
source=('https://github.com/shibumi/nyan/archive/1.2.1.tar.gz')
sha512sums=('c6c14766c5d1796a8cc713f265156b38600186bde96565ccad05118b3149eeb39ab8a3a09cfa2ee9d74d011de3c4ba8fe20935a66db8ceea33180db164eb0d0d')

package() {
  cd "${srcdir}/$pkgname-$pkgver"
  install -D -m755 nyan.sh "${pkgdir}/usr/bin/nyan"
  gzip nyan.1
  install -D -m644 nyan.1.gz "${pkgdir}/usr/share/man/man1/nyan.1.gz"
}

# vim:set et sw=2 ts=2 tw=79:
