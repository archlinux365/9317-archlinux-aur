# Maintainer:  Alexei Colin <ac at alexeicolin dot com>

# NOTE: GUI is needed to run this, because top-level installer
# does not forward '--unattended" to the nested installers it
# invokes, hence those installers generate a GUI box. Parent
# installer fails if run headless.

pkgname=ti-ble-sdk
pkgver=2.02.01.18
pkgrel=1
pkgdesc="Texas Instruments BLE Stack for CC2640/CC2650/CC1350"
arch=('x86_64')
url="http://www.ti.com/tool/ble-stack"
license=('custom:LPRF')

makedepends=('wine' 'wine-mono' 'wine_gecko')
depends=('python2-lxml')
optdepends=('ccstudio' 'ti-cgt-arm')

_bundle=ble_sdk_2_02_01_18
_installer=${_bundle}_setup.exe

# This particular version of TI-RTOS is installed by this PKGBUILD
# because the path patch applies to both of them.
_tirtos_installer=tirtos_cc13xx_cc26xx_setuplinux_2_20_01_08.bin

# NOTE: patch is compressed because of AUR's 250KB limit

source=("http://software-dl.ti.com/download/lprf/GQ6NMS9R5GKUVISHMYWTKBMJEVFEQ5F8/${_installer}"
        "http://software-dl.ti.com/dsps/dsps_public_sw/sdo_sb/targetcontent/tirtos/2_20_01_08/exports/${_tirtos_installer}"
        "fix-paths-for-linux.patch.xz"
        "fix-example-projects-import.patch")

md5sums=('42e5194c59d0a6f097998d4e722cdf30'
         '6202e939f974623448a48fa834f880aa'
         '4412ee71f2f7c4959c625a47aa7c2549'
         '0386ce22fe5884319e9c0de415d74b3c')

options=(!strip libtool staticlibs emptydirs !purge !zipman)

_winedir=wine

# install into CCS parent directory for CCS to find it automatically
_ccsdir=ccstudio
_destdir=opt
_installdir=installdir
_installpath=$_installdir/$_destdir/$_ccsdir

prepare() {
    cd $srcdir
}

build() {
	cd $srcdir

    chmod +x ./${_tirtos_installer}
    ./${_tirtos_installer} --mode unattended --prefix $srcdir/${_installpath}

    echo ">>> Running Windows installer via wine. When prompted, CANCEL the install"
    echo ">>> of TI RTOS. It will be installed automatically from Linux installer." 

    WINEPREFIX=$srcdir/$_winedir wine $srcdir/${_installer} \
        --mode unattended --prefix $srcdir/${_installpath} 1> wine.log 2>&1

    # Fix paths (case, etc), patch generated using, find cmd from the script:
    # https://github.com/jcormier/TI_BLE_CC2650_Linux_Convert
    patch -p1 -d ${_installpath} < $srcdir/fix-paths-for-linux.patch
    find ${_installpath}/${_bundle} -name "board\.h" | sed -e "p;s/board.h/Board.h/" | xargs -n2 mv

    # Patch that makes the example projects importable and buildable:
    # * fixes dependency on the XDC and TI-RTOS products
    # * fixes refs to files generated by 'stack' project from 'app' project
    # * lets the imported copy build without it attempting to modify the source copy
    #   (which is owned by root).
    # TODO: currently, only cc2650lp/simple_broadcaster example is patched
    patch -p1 -d ${_installpath}/${_bundle} < $srcdir/fix-example-projects-import.patch
}

package() {
    cd $srcdir

    cp -al $srcdir/${_installdir}/${_destdir} $pkgdir

    install -D -m0644 $srcdir/${_installpath}/${_bundle}/license.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
