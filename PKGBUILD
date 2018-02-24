# Maintainer: Malte Rabenseifner <mail@malte-rabenseifner.de>

pkgname=('icinga2-common-git' 'icinga2-git')
pkgbase=icinga2-git
_pkgname=icinga2
pkgver=r7877.aacc535ac
pkgrel=1
pkgdesc="An open source host, service and network monitoring program"
license=('GPL')
arch=('i686' 'x86_64')
url="http://www.icinga.org"
depends=('boost-libs' 'libedit' 'openssl' 'yajl')
makedepends=('boost' 'cmake' 'git' 'libmariadbclient' 'postgresql-libs' 'systemd' 'wxgtk')
source=('git+https://github.com/Icinga/icinga2.git')
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  mkdir -p "$srcdir/$_pkgname/build"
  cd "$srcdir/$_pkgname/build"

  cmake "$srcdir/$_pkgname" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_SYSCONFDIR=/etc \
    -DICINGA2_RUNDIR=/run \
    -DCMAKE_INSTALL_SBINDIR=/usr/bin \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DCMAKE_INSTALL_LOCALSTATEDIR=/var \
    -DICINGA2_SYSCONFIGFILE=/etc/default/icinga2 \
    -DICINGA2_PLUGINDIR=/usr/lib/monitoring-plugins \
    -DUSE_SYSTEMD=ON \
    -DLOGROTATE_HAS_SU=OFF

  make
}

package_icinga2-common-git() {
  pkgdesc="Common files for Icinga2"
  provides=('icinga2-common')
  conflicts=('icinga2-common')

  cd "$srcdir/$_pkgname/build"
  make DESTDIR="$pkgdir" install
  rm -r $pkgdir/{etc,run,var}
  rm -r $pkgdir/usr/{bin,share}
  rm -r $pkgdir/usr/lib/systemd
  rm -r $pkgdir/usr/lib/icinga2/{prepare-dirs,safe-reload,sbin}
}

package_icinga2-git() {
  depends=('icinga2-common')
  optdepends=('monitoring-plugins: plugins needed for icinga checks'
              'libmariadbclient: for MySQL support'
              'postgresql-libs: for PostgreSQL support')
  provides=('icinga2')
  conflicts=('icinga2')
  backup=(etc/default/icinga2
          etc/icinga2/features-available/api.conf
          etc/icinga2/features-available/checker.conf
          etc/icinga2/features-available/command.conf
          etc/icinga2/features-available/compatlog.conf
          etc/icinga2/features-available/debuglog.conf
          etc/icinga2/features-available/elasticsearch.conf
          etc/icinga2/features-available/gelf.conf
          etc/icinga2/features-available/graphite.conf
          etc/icinga2/features-available/ido-mysql.conf
          etc/icinga2/features-available/ido-pgsql.conf
          etc/icinga2/features-available/influxdb.conf
          etc/icinga2/features-available/livestatus.conf
          etc/icinga2/features-available/mainlog.conf
          etc/icinga2/features-available/notification.conf
          etc/icinga2/features-available/opentsdb.conf
          etc/icinga2/features-available/perfdata.conf
          etc/icinga2/features-available/statusdata.conf
          etc/icinga2/features-available/syslog.conf
          etc/icinga2/constants.conf
          etc/icinga2/icinga2.conf
          etc/icinga2/scripts/mail-host-notification.sh
          etc/icinga2/scripts/mail-service-notification.sh
          etc/icinga2/zones.conf
          etc/logrotate.d/icinga2)
  install='icinga2-git.install'

  cd "$srcdir/$_pkgname/build"

  make DESTDIR="$pkgdir" install

  mv "$pkgdir/etc/icinga2/conf.d" "$pkgdir/etc/icinga2/conf.d.example"
  mkdir "$pkgdir/etc/icinga2/conf.d"
  rm "$pkgdir/etc/icinga2/features-enabled/checker.conf"
  rm "$pkgdir/etc/icinga2/features-enabled/mainlog.conf"
  rm "$pkgdir/etc/icinga2/features-enabled/notification.conf"
  rm -r "$pkgdir/run"

  mkdir -p "$pkgdir/usr/lib/tmpfiles.d"
  cat > "$pkgdir/usr/lib/tmpfiles.d/icinga2.conf" <<- EOF
	d /run/icinga2 0750 icinga icingacmd -
	d /run/icinga2/cmd 2750 icinga icingacmd -
	EOF

  cd "$srcdir/$_pkgname"

  install -Dm644 tools/syntax/vim/ftdetect/icinga2.vim "$pkgdir/usr/share/vim/vimfiles/ftdetect/icinga2.vim"
  install -Dm644 tools/syntax/vim/syntax/icinga2.vim "$pkgdir/usr/share/vim/vimfiles/syntax/icinga2.vim"
  install -Dm644 tools/syntax/nano/icinga2.nanorc "$pkgdir/usr/share/nano/icinga2.nanorc"

  chmod 750 "$pkgdir/etc/icinga2" \
            "$pkgdir/var/lib/icinga2" \
            "$pkgdir/var/spool/icinga2" \
            "$pkgdir/var/cache/icinga2" \
            "$pkgdir/var/log/icinga2"

  rm -r $pkgdir/usr/lib/icinga2/lib*

  # check that the backup array contains all files in /etc except those explicitly excluded in the command below.
  diff -u \
    <(printf '%s\n' "${backup[@]}" | sort) \
    <(find "$pkgdir/etc" '(' \
        -path "$pkgdir/etc/bash_completion.d" -o \
        -path "$pkgdir/etc/icinga2/conf.d.example" -o \
        -path "$pkgdir/etc/icinga2/zones.d/README" \
      ')' -prune -o -type f -printf 'etc/%P\n' | sort) || {
    error 'Backup array and file installed to /etc are inconsistent.'
    return 1
  }
}
