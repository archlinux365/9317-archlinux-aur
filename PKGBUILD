# Maintainer: Ranadeep B < mail at rnbguy dot at >

_pkgname=apalache
pkgname=$_pkgname-bin
pkgver=0.20.0
pkgrel=1
pkgdesc="A symbolic model checker for TLA+"
arch=('any')
url="https://$_pkgname.informal.systems/"
license=('Apache')
provides=(${_pkgname})
conflicts=(${_pkgname})
depends=('java-runtime>=11'
         'glibc=2.33'
         'findutils'
         'coreutils'
         'util-linux')
makedepends=('patch')
source=("https://github.com/informalsystems/$_pkgname/releases/download/v$pkgver/$_pkgname-v$pkgver.tgz"
        'sys-install.patch')
sha256sums=('6fc82eb9bd7b25fcc8897bdc2e19a9cd64e2cc7c8fcdd38aa7c7e88be239d285'
            '8a94836c798779dcbaebc3920fe6ef64f74a2ff0b5a247fc15ecb82a5ce4acbc')

prepare() {
    patch --directory="$srcdir" --forward --strip=1 --input="$srcdir/sys-install.patch"
}

package() {
    install -Dt "$pkgdir/usr/bin" "bin/$_pkgname-mc"
    install -Dt "$pkgdir/opt/$_pkgname" "target/scala-2.12/$_pkgname-pkg-$pkgver-full.jar"
    install -m644 -Dt "$pkgdir/usr/share/licenses/$_pkgname" LICENSE

    ln -s "/usr/bin/$_pkgname-mc" "$pkgdir/usr/bin/$_pkgname"
}
