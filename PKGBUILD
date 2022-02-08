# Maintainer: WhiredPlanck

pkgname=astap-bin
_pkgname=astap
pkgver=2022.2.04a
pkgrel=1
pkgdesc="Astrometric (plate) solver, stacking of images, photometry and FITS viewer"
arch=('i686' 'x86_64')
url="http://www.hnsky.org/astap.htm"
license=('GPL')
source_i686=("${_pkgname}_i386.deb::https://sourceforge.net/projects/astap-program/files/linux_installer/astap_i386.deb/download")
source_x86_64=("${_pkgname}_amd64.deb::https://sourceforge.net/projects/astap-program/files/linux_installer/astap_amd64.deb/download")
sha256sums_i686=('c52ea287343c9d43491c3ce7488405d398b7b1a0f69d2c41dbe3f48daa181bb1')
sha256sums_x86_64=('9c3d4415f5c3cb68fee7834995eb3610bf85594f9c8fa957a6e2ffaa8abfc1b0')

mkinfo() { echo -e "[\e[96mMKINFO\e[0m]:  \e[1m$*\e[0m"; }

pkgver() {
    if [[ "$CARCH" == "i686" ]]; then
        echo "2022.1.17"
    else
        echo "${pkgver}"
    fi
}

build() {
    if [[ "$CARCH" == "i686" ]]; then
      ar x "${srcdir}/${_pkgname}_i386.deb"
    else
      ar x "${srcdir}/${_pkgname}_amd64.deb"
    fi
}

package() {
    mkinfo "Extracting data.tat.xz ..."
    tar -xpvf "${srcdir}"/data.tar.xz

    mkinfo "Preparing needed directories ..."
    mkdir -pv "${pkgdir}"/usr/{bin,lib,licenses/"${_pkgname}"}

    mkinfo "Install binaries ..."
    cp -rv "${srcdir}"/opt/"${_pkgname}" "${pkgdir}"/usr/lib/

    mkinfo "Installing shared files ..."
    cp -rv "${srcdir}"/usr/share "${pkgdir}"/usr

    mkinfo "Installing licenses ..."
    install -Dvm644 "${pkgdir}"/usr/lib/"${_pkgname}"/*.txt \
        -t "${pkgdir}/usr/share/licenses/${_pkgname}"

    mkinfo "Modifying path to executable in desktop file ..."
    sed -e "s|Exec=/opt/astap/astap|Exec=astap|g" \
        -i "${pkgdir}"/usr/share/applications/*.desktop

    mkinfo "Removeing unneeded resources ..."
    rm -rv "${pkgdir}"/usr/lib/"${_pkgname}"/*.txt

    mkinfo "Creating application symlinks to /usr/bin ..."
    ln -sv ../lib/"${_pkgname}"/"${_pkgname}" "${pkgdir}"/usr/bin/"${_pkgname}"
}
