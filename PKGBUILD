# Maintainer: Steve Engledow <steve@engledow.me>
pkgname=aws-cli-v2-bin
pkgver=2.1.3
pkgrel=1
pkgdesc='Universal Command Line Interface for Amazon Web Services version 2'
arch=('i686' 'x86_64')
url='https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html'
license=('Apache')
provides=('aws-cli' 'aws-cli-v2')
conflicts=('aws-cli' 'aws-cli-v2')
makedepends=('unzip')
depends=('less')
source=(
    "$pkgname-$pkgver.zip::https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip"
    "$pkgname-$pkgver.zip.sig::https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip.sig"
)
sha256sums=(
    "SKIP"
    "SKIP"
)
validpgpkeys=(
    "FB5DB77FD5C118B80511ADA8A6310ACC4672475C"
)

pkgver() {
    ./aws/dist/aws --version | cut -d ' ' -f 1 | cut -d '/' -f 2
}

package() {
  $srcdir/aws/install -i "$pkgdir/usr/share/aws-cli" -b "$pkgdir/usr/bin" >/dev/null

  # Fix symlinks
  BIN_DIR="/usr/share/aws-cli/v2/current/bin"
  for i in $pkgdir/$BIN_DIR/*; do
    ln -sf "$BIN_DIR/$(basename $i)" "$pkgdir/usr/bin/"
  done

  # Fix symlink for current version
  rm "$pkgdir/usr/share/aws-cli/v2/current"
  ln -s "/usr/share/aws-cli/v2/$pkgver" "$pkgdir/usr/share/aws-cli/v2/current"
}
