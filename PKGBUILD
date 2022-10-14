# Maintainer: Peter Cai <peter at typeblog dot net>
# Contributor: yhaupenthal <y dot h plus aur at posteo dot de>
# Contributor: Brice Waegeneire <brice dot wge at gmail dot com>
# Contributor: Reventlov <contact+aur@volcanis.me>
pkgname=isso
pkgver=0.13.0
pkgrel=2
pkgdesc="A commenting python server similar to Disqus"
arch=('any')
url="http://posativ.org/isso/"
license=('MIT')
depends=('python-bleach' 'python-jinja' 'python-werkzeug' 'python-html5lib' 'python-misaka' 'python-itsdangerous' 'python-flask-caching' 'python-cffi' 'sqlite' 'python-setuptools')
makedepends=('git' 'python')
backup=('etc/isso.cfg')
source=("isso-${pkgver}-pypi.tar.gz::https://files.pythonhosted.org/packages/source/i/isso/isso-${pkgver}.tar.gz"
  "https://raw.githubusercontent.com/posativ/isso/master/LICENSE"
  "isso.service")
install=$pkgname.install
b2sums=('40df9612362692c2072c937f253ca04b1d15992e78501bd00be4a0563b07fec41446cc16c3915a8c016299e4665dc6ebcc3153b3bf6e3442e96aecc6bf4405ba'
        '05677ab5ac31698a973cbe8b125f47474d5fcc53d353c38401ea7c3569b920b149faf751c37819cb955da1c1e1633ae7286d7c908435b926f0ee4b7f257ddffc'
        '4013a58fec845440adc42c7890d7825ab6fb5b54883adb591257913582cbcb04807845eea14665b9493463a58370f8dc70d071ed31c87c9a8d17249c6755fb45')
validpgpkeys=("7757B21C0C6E5AE4BC6F6462FD1BA15E0E87FE5C")
package() {
  cd "${srcdir}"
  # License
  install -D -m 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  msg "Starting build..."
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1

  # ... systemd
  install -D -m 644 "${srcdir}/isso.service" "${pkgdir}/usr/lib/systemd/system/isso.service"
  # ... common config
  install -D -m 644 "${srcdir}/${pkgname}-${pkgver}/isso/isso.cfg" "${pkgdir}/etc/isso.cfg"
}

# vim:set ts=2 sw=2 et:
