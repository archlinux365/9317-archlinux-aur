# Maintainer: Muflone http://www.muflone.com/contacts/english/
# Contributor: ssv1982 <ssv1982@gmail.com>

pkgname=kerio-control-vpnclient
pkgver=8.6.1.3803
pkgrel=1
pkgdesc="Kerio Control VPN client for corporate networks."
arch=('i686' 'x86_64')
url="http://www.kerio.com/control"
license=('custom:EULA')
options=(!strip)
install="${pkgname}.install"
depends=('procps' 'dialog' 'util-linux')
source=("kvpnc"
        "kvpnc.conf"
        "kvpnc.service")
source_i686=("http://download.kerio.com/dwn/control/control-${pkgver%.*}-${pkgver##*.}/kerio-control-vpnclient-${pkgver%.*}-${pkgver##*.}-p1-linux.deb")
source_x86_64=("http://download.kerio.com/dwn/control/control-${pkgver%.*}-${pkgver##*.}/kerio-control-vpnclient-${pkgver%.*}-${pkgver##*.}-p1-linux-amd64.deb")
sha256sums=('8725cb7067f0640e75f6ac4d1894b067bca577fc0f1db1fdcedc937e8ca5f9a7'
            '2f15a0d88c9fa915cd9150796638811daec911e6824b8ff5f96f131352d1e74a'
            'bd8b1aabc31b9b24c4b63ce8099bef111dc84bd4923c77d42e05d3f1704d5c17')
sha256sums_i686=('37fea60548aea8d6fb9f671cea46e5c0716c77762a198d0f44cdadf709774646')
sha256sums_x86_64=('fd3dfbe335370f740cb1fca543758bc36d32782815ed9e9f25e2d74d6a129df8')

build() {
  # Get binary sources.
  bsdtar -xf "data.tar.gz"

  # Extract license file
  gzip -dfc "usr/share/doc/${pkgname}/EULA.txt.gz" > "EULA.txt"
}

package() {
  # Install files in the package
  install -m 755 -d "${pkgdir}/usr/bin"
  install -m 755 -t "${pkgdir}/usr/bin" "kvpnc"

  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "usr/sbin/kvpncsvc"

  install -m 755 -d "${pkgdir}/usr/lib"
  install -m 644 -t "${pkgdir}/usr/lib" "usr/lib"/*

  install -m 755 -d "${pkgdir}/usr/share/doc/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/doc/${pkgname}" "usr/share/doc/${pkgname}/Acknowledgments.gz"
  install -m 644 -t "${pkgdir}/usr/share/doc/${pkgname}" "usr/share/doc/${pkgname}/copyright"

  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "EULA.txt"

  # Install configuration file
  install -m 755 -d "${pkgdir}/etc/conf.d"
  install -m 644 -t "${pkgdir}/etc/conf.d" kvpnc.conf

  # Install systemd service
  install -m 755 -d "${pkgdir}/usr/lib/systemd/system"
  install -m 644 -t "${pkgdir}/usr/lib/systemd/system" kvpnc.service
}
