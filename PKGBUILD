# Maintainer: Peter Reschenhofer <peter.reschenhofer@gmail.com>
pkgname=gocryptfs
pkgver=1.2.1
_tag=v1.2.1
pkgrel=2
pkgdesc="Encrypted overlay filesystem written in Go."
arch=('i686' 'x86_64' 'armv7h')
url="https://github.com/rfjakob/gocryptfs"
license=('MIT')
depends=('gcc-libs' 'openssl' 'fuse')
makedepends=('git' 'go')
source=("git+https://github.com/rfjakob/gocryptfs.git#tag=$_tag"
        "gocryptfs.1")
md5sums=('SKIP'
         '209623fc120e60d878bc3bbb0f80d92d')

prepare() {
    export GOPATH="$PWD/GO"
    mkdir -p $GOPATH/src/github.com/rfjakob
    ln -sf $PWD/gocryptfs $GOPATH/src/github.com/rfjakob/
    go get -d github.com/rfjakob/gocryptfs
}

build() {
    export GOPATH="$PWD/GO"
    go get -d github.com/hanwen/go-fuse/fuse
    $GOPATH/src/github.com/rfjakob/gocryptfs/build.bash
}

package() {
    install -Dm755 "$PWD/GO/bin/gocryptfs" "$pkgdir/usr/bin/gocryptfs"
    install -Dm644 "gocryptfs.1" "$pkgdir/usr/share/man/man1/gocryptfs.1"
}
