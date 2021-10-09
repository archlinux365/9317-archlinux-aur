# Maintainer: Jose Lopes <josemslopes at gmail dot com>

_pjsipver=2.10
_zrtpcppver='6b3cd8e6783642292bad0c21e3e5e5ce45ff3e03'
pkgname=python3-sipsimple
pkgver=5.2.6
pkgrel=1
pkgdesc='SIP SIMPLE SDK is a Python library for desktop operating'
license=('GPL-3+')
arch=('aarch64' 'x86_64')
url="https://github.com/AGProjects/python3-sipsimple"
depends=(
  'cython'
  'ffmpeg'
  'openssl'
  'python-dateutil'
  'python-dnspython'
  'python-greenlet'
  'python-lxml'
  'python-requests'
  'python-twisted'
  'python-zope-interface'
  'python3-application'
  'python3-eventlib'
  'python3-gnutls'
  'python3-otr'
  'python3-msrplib'
  'python3-xcaplib'
  'util-linux'
  )
options=('!makeflags')
source=(
  "https://github.com/AGProjects/${pkgname}/archive/${pkgver}.tar.gz"
  "https://github.com/pjsip/pjproject/archive/${_pjsipver}.tar.gz"
  "https://github.com/wernerd/ZRTPCPP/archive/${_zrtpcppver}.tar.gz"
  )
sha512sums=(
  '3a33ba5bfd438fc48e1c281765be10d5d55614db172481b5b1b8fb2dc27f2b31f18e3154eeae4c902e24151d96e40d5b2b78bd8e1e874627ecef8037e722935c'
  'a67f083df175b536b4e6a7b7fe39e07d3ee805d6917ec64a50694542a7455c33a100889191044ab3fa679b6656774a6be045621aa53510b5f04cdde9ddd59893'
  '37c3e268ac58a8ba6f2feaf09795d568e51d338b022dca1f65153a419b838e06ca5254788bd4fccd5658d716466d79de455fb2a5ba16be10ff3fc539cf101402'
  )

prepare() {
  cd "${srcdir}"
  cp ${_pjsipver}.tar.gz ${pkgname}-${pkgver}/deps/
  cp ZRTPCPP-${_zrtpcppver} ${pkgname}-${pkgver}/deps/ZRTPCPP -R

  cd ${pkgname}-${pkgver}
  ./get_dependencies.sh
  chmod +x deps/pjsip/configure
  chmod +x deps/pjsip/aconfigure
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python3 setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python3 setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  # license
  install -Dm644 LICENSE \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
