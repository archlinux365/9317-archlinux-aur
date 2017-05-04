# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgname=openvpn-openssl-1.0
_pkgname=openvpn
pkgver=2.4.1
pkgrel=1
pkgdesc='An easy-to-use, robust and highly configurable VPN (Virtual Private Network) (build against openssl-1.0)'
arch=('i686' 'x86_64')
url='http://openvpn.net/index.php/open-source.html'
depends=('openssl-1.0' 'lzo' 'iproute2' 'libsystemd' 'pkcs11-helper')
conflicts=('openvpn')
provides=('openvpn')
optdepends=('easy-rsa: easy CA and certificate handling')
makedepends=('systemd')
license=('custom')
install=openvpn-openssl-1.0.install
source=("https://swupdate.openvpn.net/community/releases/openvpn-${pkgver}.tar.xz")
sha256sums=('fde9e22c6df7a335d2d58c6a4d5967be76df173c766a5c51ece57fd044c76ee5')


build() {
  cd "${srcdir}"/${_pkgname}-${pkgver}

  export PKG_CONFIG_PATH=/usr/lib/openssl-1.0/pkgconfig

  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --enable-iproute2 \
    --enable-pkcs11 \
    --enable-plugins \
    --enable-systemd \
    --enable-x509-alt-username
  make
}

check() {
  cd "${srcdir}"/${_pkgname}-${pkgver}

  make check
}

package() {
  cd "${srcdir}"/${_pkgname}-${pkgver}

  # Install openvpn
  make DESTDIR="${pkgdir}" install

  # Create empty configuration directories
  install -d -m0750 -g 90 "${pkgdir}"/etc/openvpn/{client,server}

  # Install examples
  install -d -m0755 "${pkgdir}"/usr/share/openvpn
  cp -r sample/sample-config-files "${pkgdir}"/usr/share/openvpn/examples

  # Install license
  install -d -m0755 "${pkgdir}"/usr/share/licenses/openvpn/
  ln -sf /usr/share/doc/openvpn/{COPYING,COPYRIGHT.GPL} "${pkgdir}"/usr/share/licenses/openvpn/

  # Install contrib
  for FILE in $(find contrib -type f); do
    case "$(file --brief --mime-type "${FILE}")" in
      "text/x-shellscript") install -D -m0755 "${FILE}" "${pkgdir}/usr/share/openvpn/${FILE}" ;;
      *) install -D -m0644 "${FILE}" "${pkgdir}/usr/share/openvpn/${FILE}" ;;
    esac
  done
}

