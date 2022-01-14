# Maintainer: Funami
pkgname=coredns-fanout
pkgver=1.8.7
pkgrel=1
pkgdesc="A DNS server that chains plugins - with module fanout"
arch=('x86_64' 'i686')
url="https://github.com/networkservicemesh/fanout"
license=('APACHE')
provides=('coredns')
conflicts=('coredns')
makedepends=('go')
source=("coredns-$pkgver.tar.gz::https://github.com/coredns/coredns/archive/v$pkgver.tar.gz"
        'coredns.service'
        'coredns-sysusers.conf')
sha256sums=('0684addf625f10e99b652e5ef452f18d5ed3072fb7d9fe284fd9c4113171e0b5'
            '030cd8e938c293c11a9acdb09b138f98b37874772072336792ec4bf0d9eff9b1'
            'e3cc35967f12c8bca2961f4d98413958649072492fe37052249a8cbcd2313ed1')

build() {
  export GOPATH="$srcdir/build"
  cd "coredns-$pkgver"
  echo 'fanout:github.com/networkservicemesh/fanout' >> plugin.cfg
  make BUILDOPTS='-v -trimpath -buildmode=pie -mod=readonly -modcacherw'
  go clean -modcache
}

package() {
  install -Dm755 "coredns-$pkgver/coredns" "$pkgdir/usr/bin/coredns"
  install -Dm644 "coredns.service" "$pkgdir/usr/lib/systemd/system/coredns.service"
  install -Dm644 "coredns-sysusers.conf" "$pkgdir/usr/lib/sysusers.d/coredns.conf"
  
  install -Dm644 "coredns-$pkgver/man"/*.1 -t "$pkgdir/usr/share/man/man1"
  install -Dm644 "coredns-$pkgver/man"/*.5 -t "$pkgdir/usr/share/man/man5"
  install -Dm644 "coredns-$pkgver/man"/*.7 -t "$pkgdir/usr/share/man/man7"
  
  install -d "$pkgdir/etc/coredns"
}
