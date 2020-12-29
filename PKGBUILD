pkgname=bird-git
pkgver=r3666.455c13dc
pkgrel=1
pkgdesc='RIP, OSPF, BGP, MPLS, BFD, Babel routing daemon'
arch=('x86_64')
url='https://bird.network.cz/'
license=('GPL2')
backup=('etc/bird.conf')
depends=('glibc' 'readline' 'ncurses' 'libssh')
makedepends=('git' 'autoconf' 'automake')
replaces=('bird6')
conflicts=('bird')
source=("git+https://gitlab.nic.cz/labs/bird.git"
        'bird.service')
md5sums=('SKIP'
         '69221e063a3f07dcad519d5eeacaae75')

pkgver() {
  cd "$srcdir/$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$pkgname"
  autoreconf -ifv
  CFLAGS+=' -fcommon' # https://wiki.gentoo.org/wiki/Gcc_10_porting_notes/fno_common
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --docdir=/usr/share/doc/$pkgname
  make
}

package () {
  cd "$srcdir/$pkgname"
  make \
    prefix="$pkgdir/usr" \
    sysconfdir="$pkgdir/etc" \
    sbindir="$pkgdir/usr/bin" \
    localstatedir="$pkgdir/var" \
    docdir="$pkgdir/usr/share/doc/$pkgname" \
    install

  # no /var inside pkg
  rm -r "$pkgdir/var"

  # systemd
  install -D -m 644 "$srcdir/bird.service" "$pkgdir/usr/lib/systemd/system/bird.service"

  # overwrite invalid default config file (see FS#57096)
  install -D -m 644 doc/bird.conf.example2 "$pkgdir/etc/bird.conf"
}

# vim:set ts=2 sw=2 et:
