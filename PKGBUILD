# Maintainer: Alec Larsen <aleclarsen42@gmail.com>

pkgname=shadow-relaxed
pkgver=4.4
pkgrel=3
pkgdesc="The official Arch shadow package with Debian's 506_relaxed_usernames patch"
arch=('i686' 'x86_64')
url='https://github.com/shadow-maint/shadow'
license=('BSD')
groups=('base')
depends=('bash' 'pam' 'acl')
conflicts=('shadow')
provides=('shadow')
makedepends=('git' 'libxslt' 'docbook-xsl' 'gnome-doc-utils')
backup=(etc/login.defs
        etc/pam.d/{chage,passwd,shadow,useradd,usermod,userdel}
        etc/pam.d/{chpasswd,newusers,groupadd,groupdel,groupmod}
        etc/pam.d/{chgpasswd,groupmems}
        etc/default/useradd)
options=(strip debug)
install='shadow.install'
validpgpkeys=('D5C2F9BFCA128BBA22A77218872F702C4D6E25A8')  # Christian Perrier
source=("git+https://github.com/shadow-maint/shadow.git#tag=$pkgver"
	"506_relaxed_usernames::https://anonscm.debian.org/git/pkg-shadow/shadow.git/plain/debian/patches/506_relaxed_usernames?id=f9176c3be3740a49b0c3372f6296e13604941f2f"
        LICENSE
        chgpasswd
        chpasswd
        defaults.pam
        login.defs
        newusers
        passwd
        shadow.{timer,service}
        useradd.defaults
        xstrdup.patch
        shadow-strncpy-usage.patch
	lastlog.tmpfiles)
sha1sums=('SKIP'
          'ed3d9cb0f03772d69274952f5912604444f44d4a'
          '33a6cf1e44a1410e5c9726c89e5de68b78f5f922'
          '4ad0e059406a305c8640ed30d93c2a1f62c2f4ad'
          '12427b1ca92a9b85ca8202239f0d9f50198b818f'
          '0e56fed7fc93572c6bf0d8f3b099166558bb46f1'
          'bb3509087947d08bfb6e5d1b5c033856b9146ad9'
          '12427b1ca92a9b85ca8202239f0d9f50198b818f'
          '611be25d91c3f8f307c7fe2485d5f781e5dee75f'
          'a154a94b47a3d0c6c287253b98c0d10b861226d0'
          '7372dfd8a3030bee4ec39c79bad4f9b9c6f8687a'
          '9ae93de5987dd0ae428f0cc1a5a5a5cd53583f19'
          '6010fffeed1fc6673ad9875492e1193b1a847b53'
          '21e12966a6befb25ec123b403cd9b5c492fe5b16'
          'f57ecde3f72b4738fad75c097d19cf46a412350f')

pkgver() {
  cd "shadow"

  git describe
}

prepare() {
  cd "shadow"

  # need to offer these upstream
  patch -Np1 <"$srcdir/xstrdup.patch"
  patch -Np1 <"$srcdir/shadow-strncpy-usage.patch"

  # Fix regression in useradd not loading defaults properly.
  git cherry-pick -n '507f96cdeb54079fb636c7ce21e371f7a16a520e'

  # apply Debian's 506_relaxed_usernames
  patch -Np1 <"$srcdir/506_relaxed_usernames"

  autoreconf -v -f --install

  # supress etc/pam.d/*, we provide our own
  sed -i '/^SUBDIRS/s/pam\.d//' etc/Makefile.in
}

build() {
  cd "shadow"

  ./configure \
    LIBS="-lcrypt" \
    --prefix=/usr \
    --bindir=/usr/bin \
    --sbindir=/usr/bin \
    --libdir=/usr/lib \
    --mandir=/usr/share/man \
    --enable-man \
    --sysconfdir=/etc \
    --with-libpam \
    --with-group-name-max-length=32 \
    --without-selinux

  make
}

package() {
  cd "shadow"

  make DESTDIR="$pkgdir" install

  # license
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/shadow/LICENSE"

  # useradd defaults
  install -Dm644 "$srcdir/useradd.defaults" "$pkgdir/etc/default/useradd"

  # systemd timer
  install -D -m644 "$srcdir/shadow.timer" "$pkgdir/usr/lib/systemd/system/shadow.timer"
  install -D -m644 "$srcdir/shadow.service" $pkgdir/usr/lib/systemd/system/shadow.service
  install -d -m755 "$pkgdir/usr/lib/systemd/system/timers.target.wants"
  ln -s ../shadow.timer "$pkgdir/usr/lib/systemd/system/timers.target.wants/shadow.timer"

  # login.defs
  install -Dm644 "$srcdir/login.defs" "$pkgdir/etc/login.defs"

  # PAM config - custom
  install -dm755 "$pkgdir/etc/pam.d"
  install -t "$pkgdir/etc/pam.d" -m644 "$srcdir"/{passwd,chgpasswd,chpasswd,newusers}

  # PAM config - from tarball
  install -Dm644 etc/pam.d/groupmems "$pkgdir/etc/pam.d/groupmems"

  # we use the 'useradd' PAM file for other similar utilities
  for file in chage groupadd groupdel groupmod shadow \
      useradd usermod userdel; do
    install -Dm644 "$srcdir/defaults.pam" "$pkgdir/etc/pam.d/$file"
  done

  # lastlog log file creation
  install -Dm644 "$srcdir/lastlog.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/lastlog.conf"

  # Remove evil/broken tools
  rm "$pkgdir"/usr/sbin/logoutd

  # Remove utilities provided by util-linux
  rm \
      "$pkgdir"/usr/bin/{login,su,chsh,chfn,sg,nologin} \
      "$pkgdir"/usr/sbin/{vipw,vigr}

  # but we keep newgrp, as sg is really an alias to it
  mv "$pkgdir"/usr/bin/{newgrp,sg}

  # ...and their many man pages
  find "$pkgdir"/usr/share/man \
      '(' -name 'chsh.1'    -o \
          -name 'chfn.1'    -o \
          -name 'su.1'      -o \
          -name 'logoutd.8' -o \
          -name 'login.1'   -o \
          -name 'nologin.8' -o \
          -name 'vipw.8'    -o \
          -name 'vigr.8'    -o \
          -name 'newgrp.1' ')' \
      -delete
  rmdir \
      "$pkgdir"/usr/share/man/{fi,id,zh_TW}/man1 \
      "$pkgdir"/usr/share/man/{fi,ko/man8}

  # move everything else to /usr/bin, because this isn't handled by ./configure
  mv "$pkgdir"/usr/sbin/* "$pkgdir"/usr/bin
  rmdir "$pkgdir/usr/sbin"
}
