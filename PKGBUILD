# Maintainer: Khorne <khorne AT khorne DOT me>
pkgname=drone
pkgver=2.2.0
pkgrel=1
pkgdesc="Drone is a Continuous Delivery platform built on Docker, written in Go - OSS variant"
arch=('x86_64')
url="https://drone.io"
license=('Apache')
makedepends=('go' 'git')
source=("$pkgname-$pkgver.tar.gz::https://github.com/$pkgname/$pkgname/archive/v$pkgver.tar.gz"
        "systemd.service"
        "tmpfiles.conf"
        "sysusers.conf")
sha256sums=('b7d0e022b84e51768609a6cf122148bba248e31307defa03e6f449078212dad6'
            'a7f8c05f2a8b418700096b4e8fe57b1fca33bce0c0edeaa658d275c2c6815aec'
            'eb7ae43cf5c0983c9b9c908ea734d445f255c3f24a74682c0022f3f0132a6b44'
            '72a598c1699996286f0593f4ab392e56b8013de52f79cdee5714b27da815f2a6')

build() {
    cd "$pkgname-$pkgver"
    go build -tags "oss nolimit" -gcflags "all=-trimpath=${PWD}" -asmflags "all=-trimpath=${PWD}" -ldflags "-extldflags ${LDFLAGS}" ./cmd/drone-server
}

package() {
    install -Dm644 systemd.service "$pkgdir/usr/lib/systemd/system/$pkgname.service"
    install -Dm644 sysusers.conf "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
    install -Dm644 tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
    install -Dm755 "$srcdir/$pkgname-$pkgver/$pkgname"-server "$pkgdir"/usr/bin/"$pkgname"-server
}

