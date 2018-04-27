# Maintainer: Lucas Werkmeister <mail@lucaswerkmeister.de>

pkgname=graal
pkgver_=1.0.0-rc1
pkgver=${pkgver_/-/_}
pkgrel=1
pkgdesc='Universal virtual machine for running applications written in a variety of languages (JVM-based, LLVM-based, or other)'
arch=('x86_64')
url='https://www.graalvm.org/'
license=('custom')
depends=('java-environment-common')
makedepends=()
optdepends=()
provides=('java-environment=8')
install="$pkgname.install"
source=("https://github.com/oracle/graal/releases/download/vm-${pkgver_}/graalvm-ce-${pkgver_}-linux-amd64.tar.gz")
sha256sums=('08474e5b934e44f515df6c0449289b20b26990a9fc45fe0a58901d181117e009')

package() {
    cd "${pkgname}vm-${pkgver_}"
    mkdir -p "$pkgdir/usr/lib/jvm/java-8-graal/"
    cp -a -t "$pkgdir/usr/lib/jvm/java-8-graal/" *
    install -Dm644 GraalCE_license_3rd_party_license.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
