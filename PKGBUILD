# Maintainer: Peter Cai <peter at typeblog dot net>
# Contributor: yhaupenthal <y dot h plus aur at posteo dot de>
# Contributor: Brice Waegeneire <brice dot wge at gmail dot com>
# Contributor: Reventlov <contact+aur@volcanis.me>
pkgname=isso
pkgver=0.12.2
pkgrel=1
pkgdesc="A commenting python server similar to Disqus"
arch=('any')
url="http://posativ.org/isso/"
license=('MIT')
depends=('python-bleach' 'python-jinja' 'python-werkzeug' 'python-html5lib-9x07' 'python-misaka' 'python-itsdangerous' 'python-six' 'python-cffi' 'sqlite' 'python-setuptools')
makedepends=('git' 'python' 'python-sphinx')
backup=('etc/isso.conf')
source=("https://github.com/posativ/isso/archive/$pkgver/isso-$pkgver.tar.gz"
  "https://raw.githubusercontent.com/posativ/isso/master/LICENSE"
  "isso.service")
install=$pkgname.install
sha256sums=('b1aafbfda42e9862f6492952865ba85499a23e51bb0afc44b6ea3622ea45ed69'
            'd909d060d71c4d9ce92102fa68aa53c963db9b4b6ca315fa0817eafb07651fe2'
            '5e625e14f757101dcfa9cdacb18c191d5f6f0324a2c68dc8847cb77e343b7eef')
validpgpkeys=("7757B21C0C6E5AE4BC6F6462FD1BA15E0E87FE5C")
package() {
  cd "${srcdir}"
  # License
  install -D -m 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  msg "Starting build..."
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1
  make man

  # ... systemd
  install -D -m 644 "${srcdir}/isso.service" "${pkgdir}/usr/lib/systemd/system/isso.service"
  # ... common config
  install -D -m 644 "${srcdir}/${pkgname}-${pkgver}/share/isso.conf" "${pkgdir}/etc/isso.conf"
  # ... man pages
  install -D -m 644 "${srcdir}/${pkgname}-${pkgver}/man/man1/isso.1" "${pkgdir}/usr/share/man/man1/isso.1"
  install -D -m 644 "${srcdir}/${pkgname}-${pkgver}/man/man5/isso.conf.5" "${pkgdir}/usr/share/man/man5/isso.conf.5"
}

# vim:set ts=2 sw=2 et:
