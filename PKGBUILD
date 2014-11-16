# Maintainer: Dave Reisner <dreisner@archlinux.org>
# Maintainer: Tom Gundersen <teg@jklm.no>
# SELinux Maintainer: Nicolas Iooss (nicolas <dot> iooss <at> m4x <dot> org)
# SELinux Contributor: Timothée Ravier <tim@siosm.fr>
# SELinux Contributor: Nicky726 <Nicky726@gmail.com>

pkgbase=systemd-selinux
pkgname=('systemd-selinux' 'libsystemd-selinux' 'systemd-sysvcompat-selinux')
pkgver=217
pkgrel=6
arch=('i686' 'x86_64')
url="http://www.freedesktop.org/wiki/Software/systemd"
groups=('selinux')
makedepends=('acl' 'cryptsetup' 'docbook-xsl' 'gobject-introspection' 'gperf'
             'gtk-doc' 'intltool' 'kmod' 'libcap' 'libidn' 'libgcrypt' 'libmicrohttpd'
             'libxslt' 'util-linux' 'linux-api-headers' 'lz4' 'pam-selinux' 'python'
             'python-lxml' 'quota-tools' 'shadow-selinux' 'xz' 'audit' 'libselinux')
options=('strip' 'debug')
source=("http://www.freedesktop.org/software/${pkgname/-selinux}/${pkgname/-selinux}-$pkgver.tar.xz"
        '0001-nspawn-ignore-EEXIST-when-creating-mount-point.patch'
        '0001-sd-dhcp-client-clean-up-raw-socket-sd_event_source-w.patch'
        '0001-shared-install-avoid-prematurely-rejecting-missing-u.patch'
        '0001-sd-bus-properly-handle-removals-of-non-existing-matc.patch'
        '0001-units-don-t-order-journal-flushing-afte-remote-fs.ta.patch'
        '0001-units-order-sd-journal-flush-after-sd-remount-fs.patch'
        '0001-units-make-systemd-journald.service-Type-notify.patch'
        '0001-shutdown-fix-arguments-to-run-initramfs-shutdown.patch'
        'initcpio-hook-udev'
        'initcpio-install-systemd'
        'initcpio-install-udev')
md5sums=('e68dbff3cc19f66e341572d9fb2ffa89'
         'ca9e33118fd8d456563854d95512a577'
         'ade8c1b5b2c85d0a83b7bcf5aa6d131a'
         '7aaf44ce842deb449fca0f2595bbc1e4'
         '4adc3ddce027693bafa53089322e859b'
         '42ff9d59bb057637355b202157d59991'
         '92497d06e0af615be4b368fe615109c0'
         'a321d62d6ffada9e6976bdd339fa3219'
         'f72e8d086172177c224f0ce48ef54222'
         '29245f7a240bfba66e2b1783b63b6b40'
         '107c489f27c667be4101aecd3369b355'
         'bde43090d4ac0ef048e3eaee8202a407')


prepare() {
  cd "${pkgname/-selinux}-$pkgver"

  patch -Np1 <../0001-nspawn-ignore-EEXIST-when-creating-mount-point.patch
  patch -Np1 <../0001-sd-dhcp-client-clean-up-raw-socket-sd_event_source-w.patch
  patch -Np1 <../0001-shared-install-avoid-prematurely-rejecting-missing-u.patch
  patch -Np1 <../0001-sd-bus-properly-handle-removals-of-non-existing-matc.patch
  patch -Np1 <../0001-units-don-t-order-journal-flushing-afte-remote-fs.ta.patch
  patch -Np1 <../0001-units-order-sd-journal-flush-after-sd-remount-fs.patch
  patch -Np1 <../0001-units-make-systemd-journald.service-Type-notify.patch
  patch -Np1 <../0001-shutdown-fix-arguments-to-run-initramfs-shutdown.patch
}

build() {
  cd "${pkgname/-selinux}-$pkgver"

  local timeservers=({0..3}.arch.pool.ntp.org)

  ./configure \
      --libexecdir=/usr/lib \
      --localstatedir=/var \
      --sysconfdir=/etc \
      --enable-audit \
      --enable-introspection \
      --enable-gtk-doc \
      --enable-lz4 \
      --enable-compat-libs \
      --enable-selinux \
      --disable-ima \
      --disable-kdbus \
      --with-sysvinit-path= \
      --with-sysvrcnd-path= \
      --with-ntp-servers="${timeservers[*]}"

  make
}

check() {
  make -C "${pkgname/-selinux}-$pkgver" check || :
}

package_systemd-selinux() {
  pkgdesc="system and service manager with SELinux support"
  license=('GPL2' 'LGPL2.1' 'MIT')
  depends=('acl' 'bash' 'dbus' 'glib2' 'kbd' 'kmod' 'hwids' 'libcap' 'libgcrypt'
           'libsystemd-selinux' 'libidn' 'lz4' 'pam-selinux' 'libseccomp'
           'util-linux-selinux' 'xz' 'audit' 'libselinux')
  provides=('nss-myhostname' "systemd-tools=$pkgver" "udev=$pkgver"
            "${pkgname/-selinux}=${pkgver}-${pkgrel}")
  replaces=('nss-myhostname' 'systemd-tools' 'udev' 'selinux-systemd')
  conflicts=('nss-myhostname' 'systemd-tools' 'udev'
             "${pkgname/-selinux}" 'selinux-systemd')
  optdepends=('python: systemd library bindings'
              'cryptsetup: required for encrypted block devices'
              'libmicrohttpd: remote journald capabilities'
              'quota-tools: kernel-level quota management'
              'systemd-sysvcompat: symlink package to provide sysvinit binaries'
              'polkit: allow administration as unprivileged user')
  backup=(etc/dbus-1/system.d/org.freedesktop.systemd1.conf
          etc/dbus-1/system.d/org.freedesktop.hostname1.conf
          etc/dbus-1/system.d/org.freedesktop.login1.conf
          etc/dbus-1/system.d/org.freedesktop.locale1.conf
          etc/dbus-1/system.d/org.freedesktop.machine1.conf
          etc/dbus-1/system.d/org.freedesktop.timedate1.conf
          etc/pam.d/systemd-user
          etc/systemd/bootchart.conf
          etc/systemd/coredump.conf
          etc/systemd/journald.conf
          etc/systemd/logind.conf
          etc/systemd/system.conf
          etc/systemd/timesyncd.conf
          etc/systemd/resolved.conf
          etc/systemd/user.conf
          etc/udev/udev.conf)
  install="systemd.install"

  make -C "${pkgname/-selinux}-$pkgver" DESTDIR="$pkgdir" install

  # don't write units to /etc by default. some of these will be re-enabled on
  # post_install.
  rm "$pkgdir/etc/systemd/system/getty.target.wants/getty@tty1.service" \
      "$pkgdir/etc/systemd/system/multi-user.target.wants/systemd-networkd.service" \
      "$pkgdir/etc/systemd/system/multi-user.target.wants/systemd-resolved.service" \
      "$pkgdir/etc/systemd/system/sysinit.target.wants/systemd-timesyncd.service" \
      "$pkgdir/etc/systemd/system/network-online.target.wants/systemd-networkd-wait-online.service"
  rmdir "$pkgdir/etc/systemd/system/getty.target.wants" \
      "$pkgdir/etc/systemd/system/network-online.target.wants"

  # get rid of RPM macros
  rm -r "$pkgdir/usr/lib/rpm"

  # add back tmpfiles.d/legacy.conf
  install -m644 "systemd-$pkgver/tmpfiles.d/legacy.conf" "$pkgdir/usr/lib/tmpfiles.d"

  # Replace dialout/tape/cdrom group in rules with uucp/storage/optical group
  sed -i 's#GROUP="dialout"#GROUP="uucp"#g;
          s#GROUP="tape"#GROUP="storage"#g;
          s#GROUP="cdrom"#GROUP="optical"#g' "$pkgdir"/usr/lib/udev/rules.d/*.rules
  sed -i 's/dialout/uucp/g;
          s/tape/storage/g;
          s/cdrom/optical/g' "$pkgdir"/usr/lib/sysusers.d/basic.conf

  # add mkinitcpio hooks
  install -Dm644 "$srcdir/initcpio-install-systemd" "$pkgdir/usr/lib/initcpio/install/systemd"
  install -Dm644 "$srcdir/initcpio-install-udev" "$pkgdir/usr/lib/initcpio/install/udev"
  install -Dm644 "$srcdir/initcpio-hook-udev" "$pkgdir/usr/lib/initcpio/hooks/udev"

  # ensure proper permissions for /var/log/journal. This is only to placate
  chown root:systemd-journal "$pkgdir/var/log/journal"
  chmod 2755 "$pkgdir/var/log/journal"{,/remote}

  # fix pam file
  sed 's|system-auth|system-login|g' -i "$pkgdir/etc/pam.d/systemd-user"

  # ship default policy to leave services disabled
  echo 'disable *' >"$pkgdir"/usr/lib/systemd/system-preset/99-default.preset

  ### split out manpages for sysvcompat
  rm -rf "$srcdir/_sysvcompat"
  install -dm755 "$srcdir"/_sysvcompat/usr/share/man/man8/
  mv "$pkgdir"/usr/share/man/man8/{telinit,halt,reboot,poweroff,runlevel,shutdown}.8 \
     "$srcdir"/_sysvcompat/usr/share/man/man8

  ### split off runtime libraries
  rm -rf "$srcdir/_libsystemd"
  install -dm755 "$srcdir"/_libsystemd/usr/lib
  cd "$srcdir"/_libsystemd
  mv "$pkgdir"/usr/lib/lib{systemd,{g,}udev}*.so* usr/lib

  # include MIT license, since it's technically custom
  install -Dm644 "$srcdir/${pkgname/-selinux}-$pkgver/LICENSE.MIT" \
      "$pkgdir/usr/share/licenses/${pkgname}/LICENSE.MIT"
}

package_libsystemd-selinux() {
  pkgdesc="systemd client libraries with SELinux support"
  depends=('glib2' 'glibc' 'libgcrypt' 'xz')
  license=('GPL2')
  provides=('libgudev-1.0.so' 'libsystemd.so' 'libsystemd-daemon.so' 'libsystemd-id128.so'
            'libsystemd-journal.so' 'libsystemd-login.so' 'libudev.so'
            "${pkgname/-selinux}=${pkgver}-${pkgrel}")
  conflicts=("${pkgname/-selinux}")

  mv "$srcdir/_libsystemd"/* "$pkgdir"
}

package_systemd-sysvcompat-selinux() {
  pkgdesc="sysvinit compat for systemd with SELinux support"
  license=('GPL2')
  conflicts=('sysvinit' "${pkgname/-selinux}" 'selinux-systemd-sysvcompat')
  depends=('systemd-selinux')
  provides=("${pkgname/-selinux}=${pkgver}-${pkgrel}"
            "selinux-systemd-sysvcompat=${pkgver}-${pkgrel}")
  replaces=("${pkgname/-selinux}")

  mv "$srcdir/_sysvcompat"/* "$pkgdir"

  install -dm755 "$pkgdir/usr/bin"
  for tool in runlevel reboot shutdown poweroff halt telinit; do
    ln -s 'systemctl' "$pkgdir/usr/bin/$tool"
  done

  ln -s '../lib/systemd/systemd' "$pkgdir/usr/bin/init"
}

# vim: ft=sh syn=sh et
