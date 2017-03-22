# Maintainer: Jeremy "Ichimonji10" Audet <ichimonji10 at gmail dot com>
# Contributor: pumpkin <pumpkin at mailoo dot org>
# Contributor: Vsevolod Balashov <vsevolod at balashov dot name>

pkgbase=gunicorn
pkgname=(gunicorn gunicorn-python2)
pkgver=19.7.1
pkgrel=1
pkgdesc='WSGI HTTP Server for UNIX'
arch=(any)
url='http://gunicorn.org/'
license=(MIT)
makedepends=(python-distribute python2-distribute)
source=("https://github.com/benoitc/${pkgbase}/archive/${pkgver}.tar.gz")
sha256sums=('768a548eac4bb3a0eb5c897a0ac674cbe03628c1130233d3299df98a4bd7ec49')

package_gunicorn() {
  depends=(python)
  optdepends=(
    'python-eventlet: For asynchronous request handling with eventlet.'
    'python-gevent: For asynchronous request handling with gevent.'
  )

  cd "${srcdir}/${pkgbase}-${pkgver}"
  python setup.py install --root="${pkgdir}" --prefix=/usr --optimize=1
  rm -r "${pkgdir}/usr/bin/gunicorn_paster"
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_gunicorn-python2() {
  depends=(python2)
  provides=(python2-gunicorn)
  conflicts=(python2-gunicorn)
  optdepends=(
    'python2-eventlet: For asynchronous request handling with eventlet.'
    'python2-gevent: For asynchronous request handling with gevent.'
  )

  cd "${srcdir}/${pkgbase}-${pkgver}"
  python2 setup.py install --root="${pkgdir}" --prefix=/usr --optimize=1
  rm -r "${pkgdir}/usr/bin/gunicorn_paster"
  mv "${pkgdir}/usr/bin/gunicorn" "${pkgdir}/usr/bin/gunicorn-python2"
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
