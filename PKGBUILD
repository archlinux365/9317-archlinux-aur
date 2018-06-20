# Maintainer: FFY00 <filipe.lains@gmail.com>

pkgname=mitmproxy-git
pkgver=3.0.1.r246.a4a48a96
pkgrel=1
pkgdesc="An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers"
arch=('any')
url="https://mitmproxy.org/"
license=('MIT')
depends=(
  'openssl' 'brotlipy' 'certifi' 'h2' 'hyperframe' 'kaitaistruct' 'ldap3'
  'python-urwid' 'python-pyopenssl' 'python-pyasn1' 'python-imaging'
  'python-lxml' 'python-flask' 'python-requests' 'python-passlib'
  'python-configargparse' 'python-tornado' 'python-wsproto'
  'python-pyperclip>=1.5.8' 'python-blinker>=1.3')
conflicts=('mitmproxy')
provides=('mitmproxy')
source=("git+https://github.com/mitmproxy/mitmproxy.git")
sha1sums=('SKIP')

pkgver() {
  cd "$srcdir/mitmproxy"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g;s/\.rc./rc/g'
}

package() {
  cd "$srcdir/mitmproxy"
  python setup.py install --root=$pkgdir
}
