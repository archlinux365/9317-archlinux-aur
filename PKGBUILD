# Maintainer: linduxed <linduxed at gmail dot com>

pkgname=exercism-cli
pkgver=v2.2.0
pkgrel=1
pkgdesc="Command line client for exercism.io"
arch=("i686" "x86_64")
url="https://github.com/exercism/cli"
license=("MIT")

source=("https://github.com/exercism/cli/releases/download/$pkgver/exercism-linux-64bit.tgz"
        "https://raw.githubusercontent.com/exercism/cli/$pkgver/LICENSE")
md5sums=("ddcde1e2641bc3b72c4b7fced333bf64"
         "f92fe05e2b91655399f2a8b9d24bfe41")


if [[ $CARCH = "i686" ]]; then
    source=("https://github.com/exercism/cli/releases/download/$pkgver/exercism-linux-32bit.tgz"
            "https://raw.githubusercontent.com/exercism/cli/$pkgver/LICENSE")
    md5sums=("6e2ede3ee83c571a6b5f88a042665402"
             "f92fe05e2b91655399f2a8b9d24bfe41")
fi

package(){
    cd "$srcdir"
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -D exercism "$pkgdir/usr/bin/exercism"
}
