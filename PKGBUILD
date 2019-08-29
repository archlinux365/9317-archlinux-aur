# Maintainer: Maxime Poulin <maxpoulin64@gmail.com>
# Contributor: Damian Nowak <damian.nowak@atlashost.eu>
# Contributor: Kyle Fuller <inbox@kylefuller.co.uk>
# Contributor: jibi <jibi@paranoici.org>
# Co-Maintainer: TheGoliath <contact@xdfr.de>

pkgname='inspircd'
pkgver='3.3.0'
pkgrel='3'
pkgdesc='A modular C++ IRC daemon (ircd).'
arch=('any')
url='http://www.inspircd.org/'
license=('GPL2')
conflicts=('inspircd')
provides=('inspircd')
depends=('perl')
makedepends=('pkgconf' 'libmariadbclient' 'sqlite3' 'libldap' 'geoip'
             'gnutls' 'openssl' 'libgcrypt')
optdepends=('gnutls: m_ssl_gnutls'
            'libgcrypt: m_ssl_gnutls'
            'openssl: m_ssl_openssl'
            'libmariadbclient: m_mysql'
            'pcre: m_regex_pcre'
            'sqlite3: m_sqlite3'
            'libldap: m_ldapoper and m_ldapauth'
            'geoip: m_geoip')
install='inspircd.install'
source=("https://github.com/inspircd/inspircd/archive/v$pkgver.tar.gz"
        'inspircd.service')
sha512sums=('067904d877803c370873b5e79860fe0ac68529e740283e7e78dcd4dbbea30e19841a1f2e7e57e3e0b701704224369dbd484562e7edbbcd775bf85c18a4d340c3'
            '5a16a7c237693ffc6a108358f339b6aa2451fb16430561848ae869f890199b38fab6a13640bcc35cf1d07e32d7e5fff405d88668ee05ddaffc2ef61cb42ee832')

build() {
  cd "${srcdir}/inspircd-${pkgver}"

  ./configure \
    --enable-extras=m_geoip.cpp \
    --enable-extras=m_ldapauth.cpp \
    --enable-extras=m_ldapoper.cpp \
    --enable-extras=m_mysql.cpp \
    --enable-extras=m_regex_pcre.cpp \
    --enable-extras=m_regex_posix.cpp \
    --enable-extras=m_sqlite3.cpp

  ./configure \
    --uid=0 \
    --prefix=/usr/lib/inspircd \
    --binary-dir=/usr/bin \
    --module-dir=/usr/lib/inspircd/modules \
    --config-dir=/etc/inspircd \
    --data-dir=/var/lib/inspircd \
    --log-dir=/var/log/inspircd \
    --distribution-label=archlinux
  make
}

package() {
  install -Dm644 "${srcdir}"/inspircd.service "${pkgdir}"/usr/lib/systemd/system/inspircd.service
  install -o141 -g141 -dm750 "${pkgdir}/var/log/inspircd" "${pkgdir}/var/lib/inspircd"

  cd "${srcdir}/inspircd-${pkgver}"
  make DESTDIR="$pkgdir" install

  mkdir -p "${pkgdir}"/usr/share/inspircd
  mv "${pkgdir}"/etc/inspircd/examples "${pkgdir}"/usr/share/inspircd/examples

  rm -rf "${pkgdir}"/usr/lib/inspircd/logs
  rm -rf "${pkgdir}"/usr/lib/inspircd/data

  # Warn about major upgrade
  echo "Version 3 is a major upgrade!"
  echo "Please consult https://docs.inspircd.org/3/configuration-changes/"
  echo "for configuration changes and add them accordingly" 

}
