# Maintainer: Gabriel-Andrew Pollo-Guilbert <gabrielpolloguilbert@gmail.com>

pkgname=libpcanbasic
pkgver=4.3.1
pkgrel=1
pkgdesc='API for the development of applications with PEAK CAN connection for Linux '
arch=('x86_64')
url='https://www.peak-system.com/PCAN-USB.199.0.html'
license=('LGPL')
depends=('peak-linux-headers')
source=(
    "https://www.peak-system.com/produktcd/Develop/PC%20interfaces/Linux/PCAN-Basic_API_for_Linux/PCAN-Basic_Linux-${pkgver}.tar.gz"
)
sha256sums=(
    "b88f5a73ebe6a52a58f005ae4a205c937ed317445a95de58b6872af69f1f9524"
)

prepare() {
    # go into source directory 
    cd "PCAN-Basic_Linux-${pkgver}/libpcanbasic/pcanbasic"

    # add new install target into the makefile
    echo -e ''                                                                  >> 'Makefile_latest.mk'
    echo -e 'install-archlinux:'                                                >> 'Makefile_latest.mk'
    echo -e '\tcp $(TARGET) $(DESTDIR)/$(LIBPATH)/$(TARGET)'                    >> 'Makefile_latest.mk'
    echo -e '\t$(LN) /$(LIBPATH)/$(TARGET) $(DESTDIR)/$(LIBPATH)/$(SONAME)'     >> 'Makefile_latest.mk'
    echo -e '\t$(LN) /$(LIBPATH)/$(TARGET) $(DESTDIR)/$(LIBPATH)/$(SONAME_OLD)' >> 'Makefile_latest.mk'
    echo -e '\t$(LN) /$(LIBPATH)/$(SONAME) $(DESTDIR)/$(LIBPATH)/$(LDNAME)'     >> 'Makefile_latest.mk'
    echo -e '\tcp PCANBasic.h $(DESTDIR)/usr/include/PCANBasic.h'               >> 'Makefile_latest.mk'
    echo -e '\tchmod 644 $(DESTDIR)/usr/include/PCANBasic.h'                    >> 'Makefile_latest.mk'
}

build() {
    # go into source directory 
    cd "PCAN-Basic_Linux-${pkgver}/libpcanbasic/pcanbasic"

    # build libpcanbasic
    make clean
    make
}

package() {
    # go into source directory 
    cd "PCAN-Basic_Linux-${pkgver}/libpcanbasic/pcanbasic"

    # create directories
    install -d "${pkgdir}/usr/lib"
    install -d "${pkgdir}/usr/include"

    # install files
    make LIBPATH="usr/lib" DESTDIR="${pkgdir}" install-archlinux
}
