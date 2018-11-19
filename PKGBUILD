# Maintainer: Allen Zhong <moeallenz@gmail.com>
# Contributor: Sébastien Luttringer
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: judd <jvinet@zeroflux.org>
# Contributor: Mario Vazquez <mario_vazq@hotmail.com>

pkgbase=bind-rl
pkgname=(bind-rl bind-rl-tools)
_pkgver=9.13.3
pkgver=${_pkgver//-/.}
pkgrel=1
url='https://www.isc.org/software/bind/'
license=('MPL2')
arch=('x86_64')
options=('!emptydirs')
makedepends=('libcap' 'libxml2' 'zlib' 'krb5' 'e2fsprogs' 'openssl' 'readline'
 'idnkit' 'geoip' 'dnssec-anchors' 'python' 'json-c' 'python-ply' 'libseccomp')
validpgpkeys=('2B48A38AE1CF9886435F89EE45AC7857189CDBC5'
              'ADBE9446286C794905F1E0756FA6EBC9911A4C02' #ISC, Inc)
              'BE0E9748B718253A28BB89FFF1B11BF05CF02E57' #Internet Systems Consortium, Inc.
              )
source=("https://ftp.isc.org/isc/bind9/${_pkgver}/bind-${_pkgver}.tar.gz"{,.asc}
        'tmpfiles.conf'
        'sysusers.conf'
        'named.conf'
        'named.service'
        'localhost.zone'
        'localhost.ip6.zone'
        '127.0.0.zone'
        'empty.zone')
sha1sums=('eed41fd32887bd163935fe14b94afad4a8b287c2'
          'SKIP'
          'c5a2bcd9b0f009ae71f3a03fbdbe012196962a11'
          '9537f4835a1f736788d0733c7996a10db2d4eee4'
          'c017aae379c32c7cb1aa1ad84776b83e3a5c139f'
          '62b06487323dd0d515a4dc659b8ecd193c29107b'
          '6704303a6ed431a29b1d8fe7b12decd4d1f2f50f'
          '52da8f1c0247a11b16daa4e03d920e8f09315cbe'
          '9c33726088342207ad06d33b2c13408290a0c8ad'
          '4f4457b310cbbeadca2272eced062a9c2b2b42fe')

prepare() {
  msg2 'Getting a fresh version of root DNS'
  # no more using source array, lack of versioning.
  curl -o root.hint https://www.internic.net/zones/named.root
  [[ -s root.hint ]]
  cd bind-$_pkgver
  # apply patch from the source array (should be a pacman feature)
  local filename
  for filename in "${source[@]}"; do
    if [[ "$filename" =~ \.patch$ ]]; then
      msg2 "Applying patch ${filename##*/}"
      patch -p1 -N -i "$srcdir/${filename##*/}"
    fi
  done
}

build() {
  cd bind-$_pkgver
  export CFLAGS+=' -DDIG_SIGCHASE'
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --sbindir=/usr/bin \
    --localstatedir=/var \
    --disable-static \
    --enable-ipv6 \
    --enable-filter-aaaa \
    --enable-fixed-rrset \
    --enable-seccomp \
    --enable-full-report \
    --enable-rrl \
    --with-python=/usr/bin/python \
    --with-geoip \
    --with-idn \
    --with-openssl \
    --with-libjson \
    --with-libxml2 \
    --with-libtool
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package_bind-rl() {
  pkgdesc='The ISC DNS Server, with Response Rate Limit (RRL) enabled'
  provides=('dns-server')
  depends=('glibc' 'libxml2' 'libcap' 'libseccomp' 'openssl' 'geoip' 'json-c'
           'bind-tools')
  conflicts=('bind')
  replaces=('bind')
  backup=('etc/named.conf'
          'var/named/127.0.0.zone'
          'var/named/localhost.zone'
          'var/named/localhost.ip6.zone'
          'var/named/empty.zone')

  cd "bind-$_pkgver"
  install -dm755 "$pkgdir/usr/share/licenses/$pkgname/"
  install -Dm644 LICENSE COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname/"
  for _d in bin/{check,confgen,named,rndc}; do
    (cd "$_d" && make DESTDIR="$pkgdir" install)
  done

  cd "$srcdir"
  install -D -m644 tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
  install -D -m644 sysusers.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"

  install -D -m644 named.service "$pkgdir/usr/lib/systemd/system/named.service"
  install -D -m640 -o 0 -g 40 named.conf "$pkgdir/etc/named.conf"

  install -d -m770 -o 0 -g 40 "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 root.hint "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 localhost.zone "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 localhost.ip6.zone "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 127.0.0.zone "$pkgdir/var/named"
  install    -m640 -o 0 -g 40 empty.zone "$pkgdir/var/named"
}

package_bind-rl-tools() {
  pkgdesc='The ISC DNS tools'
  depends=('glibc' 'libcap' 'libseccomp' 'libxml2' 'zlib' 'krb5' 'e2fsprogs'
           'openssl' 'readline' 'geoip' 'idnkit' 'dnssec-anchors' 'json-c')
  optdepends=('python: for python scripts')
  conflicts=('dnsutils' 'bind-tools')
  replaces=('dnsutils' 'host' 'bind-tools')
  provides=("dnsutils=$pkgver")

  cd "bind-$_pkgver"
  install -Dm644 COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  make DESTDIR="$pkgdir" SUBDIRS="" install
  (cd lib && make DESTDIR="$pkgdir" install)
  for _d in bin/{dig,dnssec,delv,nsupdate,python,tools}; do
    (cd "$_d" && make DESTDIR="$pkgdir" install)
  done
}

