# Maintainer: metaanon [at] mailbox dotorg
# Maintainer: strahe
# Maintainer: tyjak

pkgname=binance
pkgver=1.23.0
pkgrel=1
pkgdesc="The Binance desktop application"
arch=('x86_64')
url="https://www.binance.com/en/download"
license=('unknown')
checkdepends=('curl' 'coreutils')
source=('https://ftp.binance.com/electron-desktop/linux/production/binance-amd64-linux.deb')
source=("${pkgname}-${pkgver}.deb::https://ftp.binance.com/electron-desktop/linux/production/binance-amd64-linux.deb")
sha256sums=('761dad3fc8a0e9bed51a8a31a90abc7c15e21be81aa561996459d06c5a2f6db8')

check() {
    cd "$srcdir"
    binancechecksums=$(curl https://ftp.binance.com/electron-desktop/linux/production/binance-amd64-linux-deb-sha256.txt)
    echo "Checksum verification..."
    echo "1 Binance :" $binancechecksums
    echo "2 PKGBUILD:" $sha256sums
    echo "3 Deb File:" $(sha256sum ${pkgname}-${pkgver}.deb)
    echo "4 Compare :" $(sha256sum ${pkgname}-${pkgver}.deb | awk '{print $1}') $binancechecksums 
    [ "$sha256sums" == "$binancechecksums" ] \
        && echo -e "binance checksum file and PKGBUILD declared checksum: \e[1;32m\033[1mOK\033[0m\e[0m" \
        || (echo -e "binance checksum file and PKGBUILD declared checksum: \e[1;31m\033[1mKO\033[0m" && exit 1)
    [ "$(sha256sum ${pkgname}-${pkgver}.deb | awk '{print $1}')" == "$binancechecksums" ] \
        && echo -e "deb checksum and binance file checksum: \e[1;32m\033[1mOK\033[0m\e[0m" \
        || (echo -e "deb checksum and binance file checksum: \e[1;31m\033[1mKO\033[0m\e[0m" && exit 1)
}

package() {
    bsdtar -xv -C "${pkgdir}" -f "${srcdir}/data.tar.xz"
    mkdir "${pkgdir}/usr/bin"
    ln -s /opt/Binance/binance "${pkgdir}/usr/bin/binance"
}
