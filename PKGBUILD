# Maintainer: Kohei Suzuki <eagletmt@gmail.com>
pkgname=amazon-corretto-11
pkgver=11.0.14.9.1
pkgrel=1
pkgdesc='No-cost, multiplatform, production-ready distribution of OpenJDK'
arch=('x86_64' 'aarch64')
url='https://aws.amazon.com/corretto/'
license=('GPL2')
depends=('java-runtime-common' 'java-environment-common')
provides=('java-runtime-headless=11' 'java-runtime=11' 'java-environment=11')
backup=()
options=()
# https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html
source_x86_64=("https://corretto.aws/downloads/resources/${pkgver}/amazon-corretto-${pkgver}-linux-x64.tar.gz"{,.sig})
source_aarch64=("https://corretto.aws/downloads/resources/${pkgver}/amazon-corretto-${pkgver}-linux-aarch64.tar.gz"{,.sig})
validpgpkeys=('6DC3636DAE534049C8B94623A122542AB04F24E3') # Amazon Services LLC (Amazon Corretto release) <corretto-team@amazon.com>

package() {
  mkdir -p "$pkgdir/usr/lib/jvm"
  case "$CARCH" in
    "x86_64")
      cp -a "amazon-corretto-$pkgver-linux-x64" "$pkgdir/usr/lib/jvm/java-11-amazon-corretto"
      ;;
    "aarch64")
      cp -a "amazon-corretto-$pkgver-linux-aarch64" "$pkgdir/usr/lib/jvm/java-11-amazon-corretto"
      ;;
  esac
}

md5sums_x86_64=('bc1bc7203435fb7eaca360f581af73f3'
                'SKIP')
md5sums_aarch64=('a26d40950ff4caca6169af32ed3b2fb9'
                 'SKIP')
