# Maintainer: Christopher Bero <bigbero@gmail.com>
# Taken from https://aur.archlinux.org/packages/mspds
# PKGBUILD copied from https://github.com/greigdp/msp430-mspds
# Contributor: Alexei Colin <ac@alexeicolin.com>
pkgname=mspds
pkgver=3.13.000.001
pkgrel=2
pkgdesc="MSP430 Debug Stack. Contains a dynamic link library as well as embedded firmware that runs on the MSP-FET430UIF or the eZ430 emulators."
arch=('i686' 'x86_64')
url="http://www.ti.com/tool/mspds"
# Licenses were found in "Manifest MSPDebugStack OS Package.pdf" from the mspds source archive.
license=('custom:TI BSD' 'custom:IAR BSD' 'custom: TI TSPA')
group=('msp430')
depends=('hidapi' 'boost')
makedepends=('unzip' 'dos2unix')
optdepends=('mspdebug')
_release='slac460y'
_releasefile="${_release}.zip"
noextract=("${_releasefile}")
source=("http://www.ti.com/lit/sw/${_release}/${_releasefile}"
        'hidapi.patch')
sha256sums=('d3c5a50444d8d6ab9456fecf2a8ebbc9a391fa9447120d20aaa76c62bc5cc9b8'
            'aa2bdb86118a84423f3df752f48d90d2ebcb1e1bbc5293bdfd7fb1c62f765a34')


prepare() {
    unzip ${_releasefile}
    find "${srcdir}" -type f -exec dos2unix -q '{}' \;
    # This hidapi patch allows us to build mspds from the hidapi Archlinux package rather than the v0.7 source.
    patch -p1 < hidapi.patch
    sed -i 's/^\/\/\(#define FPGA_UPDATE\)/\1/' $srcdir/DLL430_v3/src/TI/DLL430/UpdateManagerFet.cpp
    ## resolve conflict between std::chrono and boost::chrono
    grep -Rl '(chrono::' $srcdir | xargs -- sed -i 's/(chrono::/(std::chrono::/'
    ## resolve conflict between std::ofstream and boost::chrono
    egrep -Rl '\sofstream' $srcdir | xargs -- sed -i 's/ofstream/std::ofstream/'
    ## boost::asio::io_service was renamed to boost::asio::io_context in 1.66
    egrep -Rl '::io_service' $srcdir | xargs -- sed -i 's/::io_service/::io_context/'
}

build() {
    cd "$srcdir"
    make
}

package() {
    install -Dm644 "$srcdir/libmsp430.so" "$pkgdir/usr/lib/libmsp430.so"
}
