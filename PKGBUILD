# Maintainer: Tom Wadley <tom@tomwadley.net>

pkgname=chamber
pkgver=2.10.7
pkgrel=1
pkgdesc="A tool for managing secrets using AWS SSM Parameter Store"
arch=('x86_64' 'aarch64')
url="https://github.com/segmentio/$pkgname/"
license=('MIT')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/segmentio/$pkgname/archive/refs/tags/v$pkgver.tar.gz"
        "$pkgname-$pkgver-LICENSE::https://raw.githubusercontent.com/segmentio/$pkgname/v$pkgver/LICENSE")
sha256sums=('51af2fff232d8839ae772de7700c39f26f7a2428e02aaa185f06c18defa592f0'
            'feaff489d3c077f7b48cf76a5f038604338a092be379c1297c64c26c6b81714b')

declare -A _archmap=( ['x86_64']='amd64' ['aarch64']='arm64' )
_carch=${_archmap[$CARCH]}

build() {
  cd "$pkgname-$pkgver"
  export VERSION=v$pkgver
  make dist/$pkgname-v$pkgver-linux-$_carch
}

package() {
  install -Dm755 "$pkgname-$pkgver/dist/$pkgname-v$pkgver-linux-$_carch" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 $pkgname-$pkgver-LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
