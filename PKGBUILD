# Maintainer: Thorsten Mueller <info@thorko.de>
# Contributor: 

pkgname=samhain-server
pkgver=4.3.2
pkgrel=1
pkgdesc="file integrity / intrusion detection system"
arch=(x86_64 armv7h)
url="http://www.la-samhna.de/"
license=('GPL')
install=samhain.install
source=("http://www.la-samhna.de/samhain/samhain-current.tar.gz"
        "yule.service")
sha256sums=('0582864ef56ab796031e8e611ed66c48adeb3a30ec34e1a8d0088572442035fc'
            'f8c579fd60b1004272351f257374615d99adab43249b746f557abf0f91cd4c90')
validpgpkeys=('EF6CEF54701A0AFDB86AF4C31AAD26C80F571F6C') 

build() {
  echo "Note: If the GPG verification fails, import the Samhain GPG key: http://www.la-samhna.de/samhain/s_rkey.html"
  gpg --verify samhain-${pkgver}.tar.gz.asc samhain-${pkgver}.tar.gz
  tar -zxvf samhain-${pkgver}.tar.gz
  cd "samhain-${pkgver}"
  # see samhain documentation, lots of other options available. e.g. use --enable-network=server to run in server mode.
  #./configure --prefix=/usr --localstatedir=/var --sysconfdir=/etc --sbindir=/usr/bin
  ./configure --prefix=/usr --localstatedir=/var --sysconfdir=/etc --sbindir=/usr/bin --enable-network=server
  make
}

package() {
  cd "samhain-${pkgver}"
  make DESTDIR="$pkgdir/" install
  chmod 755 ${pkgdir}/usr/bin/yule
  chmod 755 ${pkgdir}/usr/bin/yuleadmin.pl
  chmod 755 ${pkgdir}/usr/bin/yule_setpwd
  chmod 755 ${pkgdir}/usr/bin/yulectl
  chmod 644 ${pkgdir}/etc/yulerc
  install -m755 -d "${pkgdir}/usr/lib/systemd/system"
  install -m644 "${srcdir}/yule.service" "${pkgdir}/usr/lib/systemd/system/yule.service"
  rmdir ${pkgdir}/run
  rm -rf ${pkgdir}/var/log
}
