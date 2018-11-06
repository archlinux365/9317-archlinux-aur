# $Id$
# Maintainer: Arthur Borsboom <arthurborsboom@gmail.com>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Jonathan Wiersma <archaur at jonw dot org>

pkgname=libvirt-git
pkgver=4.9.0.9.g912b8a5970
pkgrel=1
pkgdesc="API for controlling virtualization engines (openvz,kvm,qemu,virtualbox,xen,etc)"
arch=('i686' 'x86_64')
url="http://libvirt.org/"
license=('LGPL')
depends=('e2fsprogs' 'gnutls' 'iptables' 'libxml2' 'parted' 'polkit' 'python'
	 'avahi' 'yajl' 'libpciaccess' 'udev' 'dbus' 'libxau' 'libxdmcp' 'libpcap' 'libcap-ng'
	 'curl' 'libsasl' 'libgcrypt' 'libgpg-error' 'openssl' 'libxcb' 'gcc-libs'
	 'iproute2' 'libnl' 'libx11' 'numactl' 'gettext' 'ceph-libs' 'libssh2' 'netcf' 'perl-xml-xpath')
makedepends=('pkgconfig' 'lvm2' 'linux-api-headers' 'dnsmasq' 'rpcsvc-proto'
	     'libiscsi' 'perl-xml-xpath' 'libxslt' 'git' 'xhtml-docs')
optdepends=('ebtables: required for default NAT networking'
	    'dnsmasq: required for default NAT/DHCP for guests'
	    'bridge-utils: for bridged networking'
	    'openbsd-netcat: for remote management over ssh'
	    'qemu'
	    'radvd'
	    'dmidecode'
	    'pm-utils: host power management')
conflicts=('libvirt')
provides=('libvirt')
options=('emptydirs')
backup=('etc/conf.d/libvirt-guests'
	'etc/conf.d/libvirtd'
	'etc/libvirt/libvirt.conf'
	'etc/libvirt/virtlogd.conf'
	'etc/libvirt/libvirtd.conf'
	'etc/libvirt/lxc.conf'
	'etc/libvirt/nwfilter/allow-arp.xml'
	'etc/libvirt/nwfilter/allow-dhcp-server.xml'
	'etc/libvirt/nwfilter/allow-dhcp.xml'
	'etc/libvirt/nwfilter/allow-incoming-ipv4.xml'
	'etc/libvirt/nwfilter/allow-ipv4.xml'
	'etc/libvirt/nwfilter/clean-traffic.xml'
	'etc/libvirt/nwfilter/no-arp-ip-spoofing.xml'
	'etc/libvirt/nwfilter/no-arp-mac-spoofing.xml'
	'etc/libvirt/nwfilter/no-arp-spoofing.xml'
	'etc/libvirt/nwfilter/no-ip-multicast.xml'
	'etc/libvirt/nwfilter/no-ip-spoofing.xml'
	'etc/libvirt/nwfilter/no-mac-broadcast.xml'
	'etc/libvirt/nwfilter/no-mac-spoofing.xml'
	'etc/libvirt/nwfilter/no-other-l2-traffic.xml'
	'etc/libvirt/nwfilter/no-other-rarp-traffic.xml'
	'etc/libvirt/nwfilter/qemu-announce-self-rarp.xml'
	'etc/libvirt/nwfilter/qemu-announce-self.xml'
	'etc/libvirt/qemu-lockd.conf'
	'etc/libvirt/qemu.conf'
	'etc/libvirt/qemu/networks/autostart/default.xml'
	'etc/libvirt/qemu/networks/default.xml'
	'etc/libvirt/virt-login-shell.conf'
	'etc/libvirt/virtlockd.conf'
	'etc/logrotate.d/libvirtd'
	'etc/logrotate.d/libvirtd.lxc'
	'etc/logrotate.d/libvirtd.qemu'
	'etc/logrotate.d/libvirtd.uml'
	'etc/sasl2/libvirt.conf')
install="libvirt.install"
source=('git+git://libvirt.org/libvirt.git'
	libvirtd.conf.d
	libvirtd-guests.conf.d
	libvirt.tmpfiles.d)
md5sums=('SKIP'
	 '5e31269067dbd12ca871234450bb66bb'
	 '384fff96c6248d4f020f6fa66c32b357'
	 '020971887442ebbf1b6949e031c8dd3f')	 
pkgver() {
  cd "$SRCDEST/${pkgname/-git/}"
  git describe --always | sed 's|-|.|g' | sed 's/^.//'
}

prepare() {
  cd "$srcdir/${pkgname/-git/}"

  for file in $(find . -name '*.py' -print); do
    sed -i 's_#!.*/usr/bin/python_#!/usr/bin/python_' $file
    sed -i 's_#!.*/usr/bin/env.*python_#!/usr/bin/env python_' $file
  done

  sed -i 's|/sysconfig/|/conf.d/|g' \
    src/remote/libvirtd.service.in \
    tools/{libvirt-guests.service,libvirt-guests.sh,virt-pki-validate}.in \
    src/locking/virtlockd.service.in
  sed -i 's|@sbindir@|/usr/bin|g' src/locking/virtlockd.service.in
  # 78 is kvm group: https://wiki.archlinux.org/index.php/DeveloperWiki:UID_/_GID_Database
  sed -i 's|#group =.*|group="78"|' src/qemu/qemu.conf
  sed -i 's|/usr/libexec/qemu-bridge-helper|/usr/lib/qemu/qemu-bridge-helper|g' \
    src/qemu/qemu{.conf,_conf.c} \
    src/qemu/test_libvirtd_qemu.aug.in

  sed -i 's/notify/simple/' src/remote/libvirtd.service.in
}

build() {
  cd "$srcdir/${pkgname/-git/}"

  export PYTHON=`which python`
  export LDFLAGS=-lX11
  export RADVD=/usr/bin/radvd
  NOCONFIGURE=1 ./autogen.sh
  sed -i 's|libsystemd-daemon|libsystemd|g' configure
  sed -i 's|aclocal-1.15|aclocal-1.16|g' daemon/Makefile
  sed -i 's|automake-1.15|automake-1.16|g' daemon/Makefile
  
  [ -f Makefile ] || ./configure --prefix=/usr --libexec=/usr/lib/"${pkgname/-git/}" --sbindir=/usr/bin \
	--with-storage-lvm --with-udev --without-hal --disable-static \
	--with-init-script=systemd \
	--with-qemu-user=nobody --with-qemu-group=nobody \
	--with-netcf --with-interface
	# --with-numad
	# --with-audit
  make
}

package() {
  cd "$srcdir/${pkgname/-git/}"

  make DESTDIR="$pkgdir" install

  install -D -m644 "$srcdir"/libvirtd.conf.d "$pkgdir"/etc/conf.d/libvirtd
  install -D -m644 "$srcdir"/libvirtd-guests.conf.d "$pkgdir"/etc/conf.d/libvirt-guests
  install -D -m644 "$srcdir"/libvirt.tmpfiles.d "$pkgdir"/usr/lib/tmpfiles.d/libvirt.conf

  chown -R 0:78 "$pkgdir"/var/lib/libvirt/qemu
  chmod 0770 "$pkgdir"/var/lib/libvirt/qemu

  chown 0:102 "$pkgdir"/usr/share/polkit-1/rules.d
  chmod 0750 "$pkgdir"/usr/share/polkit-1/rules.d

  rm -rf \
	"$pkgdir"/var/run \
	"$pkgdir"/etc/sysconfig \
	"$pkgdir"/etc/rc.d
}
