# Maintainer: Timo Sarawinski <timo at it-kraut dot net>
# Logpresso

pkgname=logpresso-log4j-scan
pkgver=3.0.0
pkgrel=1
arch=('any')
pkgdesc="tool for CVE-2021-44228 vuln scanning and patch. also detects CVE-2021-45046, CVE-2021-45105, CVE-2021-44832, CVE-2021-4104, CVE-2019-17571, CVE-2017-5645, CVE-2020-9488, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307, CVE-2021-42550"
url="https://github.com/logpresso/CVE-2021-44228-Scanner"
license=('GPL3')
optdepends=('java-runtime=11')


source=("https://github.com/logpresso/CVE-2021-44228-Scanner/releases/download/v${pkgver}/logpresso-log4j2-scan-${pkgver}-linux.tar.gz"
        "https://github.com/logpresso/CVE-2021-44228-Scanner/releases/download/v${pkgver}/logpresso-log4j2-scan-${pkgver}.jar")
sha256sums=('4100cdd7d862bcbfab97c0324db51f51e4c08fd709db3fe9ca617e2182c6cad6'
            'a64ca566c3cd97875f285f16710eaa1e2124a24ef97bd69b9af91d53e17c7aad')


package() {
    install -Dm644 $srcdir/logpresso-log4j2-scan-${pkgver}.jar $pkgdir/usr/share/java/logpresso-log4j-scan/logpresso-log4j2-scan-${pkgver}.jar
    install -Dm655 $srcdir/log4j2-scan $pkgdir/usr/bin/logpresso-log4j2-scan-${pkgver}
}

