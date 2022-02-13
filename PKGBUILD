## Maintainer:     barfin <barfin@protonmail.com>
## Co-Maintainer:  Jaja <jaja@mailbox.org>
## Co-Maintainer:  floriplum <floriplum@mailbox.org>

## pkginfo
pkgdesc="A fancy custom distribution of Valves Proton with various patches"
pkgname=proton-ge-custom-bin
pkgver=7.1_GE_2
pkgrel=1
arch=('x86_64')
license=('BSD' 'LGPL' 'zlib' 'MIT' 'MPL' 'custom')
changelog=changelog
provides=('proton' "proton-ge-custom=${pkgver/_/.}")
conflicts=('proton-ge-custom-legacy-bin' 'proton-ge-custom')
depends=('python'
         'vulkan-icd-loader')
optdepends=('kdialog: KDE splash dialog support'
            'zenity: GNOME splash dialog support'
            'python-kivy: splash dialog support (big picture mode)'
            'steam: use proton with steam like intended'
            'lib32-vulkan-icd-loader: dxvk dependency for 32bit prefixes'
            'vulkan-driver: actually have a vulkan driver installed'
            'winetricks: protonfixes backend - highly recommended'
            'wine: support for 32bit prefixes'
            'xboxdrv: gamepad driver service')

## makepkg options
options=('!strip')

## fix naming conventions, matching upstream
_pkgname=${pkgname//-bin/}
_pkgver=${pkgver//_/-}
_srcdir=Proton-${_pkgver}

## paths and files
_protondir=usr/share/steam/compatibilitytools.d/${_pkgname}
_licensedir=usr/share/licenses/${_pkgname}
_execfile=usr/bin/proton
_protoncfg=${_protondir}/user_settings.py

## user edited files to backup
backup=("${_protoncfg}")

## sources
url='https://github.com/GloriousEggroll/proton-ge-custom'
source=(${_pkgname}-${_pkgver}_${pkgrel}.tar.gz::"${url}/releases/download/${_pkgver}/${_srcdir}.tar.gz"
        "supplementary.tar.zst")
sha512sums=('8f61c1a8758c1e3961af1c680630436c420b8a8ded86d7fc274dd31249b9cb01d9fb7ffa4e1845f23f7cbe476771ace9981c3255dd395b107a53082b443fbae3'
            'bd680bcd8fc45ed728514be12a2728b09a48856c522f94f1903d18d1755ac15804e36964f9a840469dd3f28fb2f44b50c048fe18448ab3ff16e4abb289f51d07')

build() {
## setup paths
sed -i "s|_proton=echo|_proton=/${_protondir}/proton|" ${srcdir}/launchers/proton.sh
## setup naming that appears in steam compat tool list
sed -i -r 's|"Proton-.*"|"Proton-GE"|' ${srcdir}/Proton-${_pkgver}/compatibilitytool.vdf
}

package() {
## create paths
install -d ${pkgdir}/${_protondir}/
install -d ${pkgdir}/${_licensedir}/
install -d ${pkgdir}/$(dirname ${_execfile})/
## licenses
mv ${_srcdir}/LICENSE ${pkgdir}/${_licensedir}/license
mv ${_srcdir}/LICENSE.OFL ${pkgdir}/${_licensedir}/license_OFL
mv ${_srcdir}/protonfixes/LICENSE ${pkgdir}/${_licensedir}/license_protonfixes
## config files
install --mode=0775 --group=50 ${srcdir}/configs/user_settings.py ${pkgdir}/${_protoncfg}
## executables
mv ${_srcdir}/* ${pkgdir}/${_protondir}
install --mode=0755 ${srcdir}/launchers/proton.sh ${pkgdir}/${_execfile}
## patches
# Setup replacement tracked_files. If used without steam, we never get this file? Used by launcher script.
# Update from your ~/.steam/steam/steamapps/compatdata/0/tracked_files please. It gets created as soon as you start steam.
# Check first ~/.steam/steam/steamapps/compatdata/0/version if it is the correct version of GE, though!
install --mode=0755 ${srcdir}/patches/tracked_files ${pkgdir}/${_protondir}/proton_ge_tracked_files
}
