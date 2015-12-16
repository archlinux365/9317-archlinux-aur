# Maintainer: Alexey D. <lq07829icatm@rambler.ru>
# Contributor: Andreas Radke <andyrtr@archlinux.org>

pkgname="cups-nosystemd"
pkgver=2.1.2
pkgrel=1
pkgdesc="The CUPS Printing System - daemon package"
arch=('i686' 'x86_64')
license=('GPL')
url="http://www.cups.org/"
groups=('eudev-base')
depends=('acl' 'pam' "libcups>=${pkgver}" 'cups-filters' 'bc' 'colord'
         'dbus' 'hicolor-icon-theme' 'libpaper')
makedepends=('libtiff>=4.0.0' 'libpng>=1.5.7' 'xdg-utils' 'krb5' 'xinetd'
             'gzip' 'autoconf' 'avahi' 'gnutls' 'inetutils')
optdepends=('xdg-utils: xdg .desktop file support'
            'cups-openrc: cups openrc initscript')
provides=("cups=${pkgver}")
conflicts=('cups' 'cups-eudev')
replaces=('cups' 'cups-eudev')
install=cups-nosystemd.install
backup=(etc/cups/cupsd.conf
        etc/cups/snmp.conf
        etc/cups/printers.conf
        etc/cups/classes.conf
        etc/cups/cups-files.conf
        etc/cups/subscriptions.conf
        etc/dbus-1/system.d/cups.conf
        etc/logrotate.d/cups
	etc/pam.d/cups)
	#etc/xinetd.d/cups-lpd)
source=(http://www.cups.org/software/${pkgver}/cups-${pkgver}-source.tar.bz2
        cups cups.logrotate cups.pam
        # improve build and linking
        cups-no-export-ssllibs.patch
        cups-no-gcrypt.patch
        cups-no-gzip-man.patch
	cups-1.6.0-fix-install-perms.patch
	cups-1.6.2-statedir.patch
	)
md5sums=('b3ba0ca676d56857bbd9b182ef4b14b3'
         '9657daa21760bb0b5fa3d8b51d5e01a1'
         'fc8286f185e2cc5f7e1f6843bf193e2b'
         '96f82c38f3f540b53f3e5144900acf17'
         '3ba9e3410df1dc3015463d615ef91b3b'
         '1beb4896f217bc241bc08a422274ec0c'
         '90c30380d4c8cd48a908cfdadae1ea24'
         '5117f65342fcc69c6a506529e4daca9e'
         '451609db34f95209d64c38474de27ce1')

prepare() {
  cd cups-${pkgver}

  # improve build and linking
  # Do not export SSL libs in cups-config
  patch -Np1 -i "$srcdir"/cups-no-export-ssllibs.patch
  # https://www.cups.org/str.php?L4399
  patch -Np1 -i "$srcdir"/cups-no-gcrypt.patch

  # don't zip man pages in make install, let makepkg do that / Fedora
  patch -Np1 -i "$srcdir"/cups-no-gzip-man.patch

  # move /var/run -> /run for pid file
  patch -Np1 -i "$srcdir"/cups-1.6.2-statedir.patch

  # fix permissions on some files (by Gentoo)
  patch -Np0 -i "$srcdir"/cups-1.6.0-fix-install-perms.patch

  # set MaxLogSize to 0 to prevent using cups internal log rotation
  sed -i -e '5i\ ' conf/cupsd.conf.in
  sed -i -e '6i# Disable cups internal logging - use logrotate instead' conf/cupsd.conf.in
  sed -i -e '7iMaxLogSize 0' conf/cupsd.conf.in

  # Rebuild configure script for not zipping man-pages.
  aclocal -I config-scripts
  autoconf -I config-scripts
}

build() {
  cd cups-${pkgver}
  ./configure \
     --prefix=/usr \
     --sysconfdir=/etc \
     --localstatedir=/var \
     --sbindir=/usr/bin \
     --libdir=/usr/lib \
     --with-logdir=/var/log/cups \
     --with-docdir=/usr/share/cups/doc \
     --with-cups-user=daemon \
     --with-cups-group=lp \
     --enable-pam=yes \
     --enable-raw-printing \
     --enable-dbus --with-dbusdir=/etc/dbus-1 \
     --enable-ssl=yes \
     --enable-threads \
     --enable-avahi \
     --enable-libpaper \
     --with-php=/usr/bin/php-cgi \
     --with-optim="$CFLAGS"
  make
}

package() {
  cd "$srcdir"/cups-${pkgver}
  make BUILDROOT="$pkgdir" install-data install-exec

  # this one we ship in the libcups pkg
  rm -f "$pkgdir"/usr/bin/cups-config

  # kill the sysv stuff
  rm -rf "$pkgdir"/etc/rc*.d
  rm -rf "$pkgdir"/etc/init.d
  install -D -m755 ../cups "$pkgdir"/etc/rc.d/cupsd
  install -D -m644 ../cups.logrotate "$pkgdir"/etc/logrotate.d/cups
  install -D -m644 ../cups.pam "$pkgdir"/etc/pam.d/cups

  # fix perms on /var/spool and /etc
  chmod 755 "$pkgdir"/var/spool
  chmod 755 "$pkgdir"/etc

  # install ssl directory where to store the certs, solves some samba issues
  install -dm700 -g lp "$pkgdir"/etc/cups/ssl
  # remove directory from package, we create it in cups rc.d file
  rm -rf "$pkgdir"/run

  # install some more configuration files that will get filled by cupsd
  touch "$pkgdir"/etc/cups/printers.conf
  touch "$pkgdir"/etc/cups/classes.conf
  touch "$pkgdir"/etc/cups/subscriptions.conf
  chgrp -R lp "$pkgdir"/etc/cups

  # fix .desktop file
  sed -i 's|^Exec=htmlview http://localhost:631/|Exec=xdg-open http://localhost:631/|g' "$pkgdir"/usr/share/applications/cups.desktop

  # compress some driver files, adopted from Fedora
  find "$pkgdir"/usr/share/cups/model -name "*.ppd" | xargs gzip -n9f

  # remove client.conf man page
  rm -f "$pkgdir"/usr/share/man/man5/client.conf.5

  # comment out all conversion rules which use any of the removed filters that are now part of cups-filters
  perl -p -i -e 's:^(.*\s+bannertops\s*)$:#\1:' "$pkgdir"/usr/share/cups/mime/mime.convs

  # comment out unnecessary PageLogFormat entry
  sed -i -e 's:PageLogFormat:#PageLogFormat:' "$pkgdir"/etc/cups/cupsd.conf*
}
