#Maintainer: Gharim Turen <gharim@turen.de>
pkgname=evesetup
pkgver=1514997
pkgrel=0
pkgdesc="An inofficial EVE Online Launcher Setup Tool."
arch=(x86_64)
url="https://forums.eveonline.com/t/eve-installing/71494"
license=('custom')

depends=('icu'
         'openssl'
         'openssl-1.0'
         'qt5-base'
         'qt5-declarative'
         'qt5-translations'
         'qt5-location'
         'qt5-webchannel'
         'qt5-webengine'
         'qt5-websockets'
         'wine'
         'winetricks'
)

optdepends=('libnotify')

conflicts=('evelauncher' 'evesetup_dev')

source=("evelauncher.desktop"
        "evelauncher.sh"
        "evelauncher.sh.in"
        "evelauncher.sh.real"
        "evelauncher.shlib"
        "everegedit.desktop"
        "evewine"
        "evewinecfg.desktop"
        "evewinetricks.desktop"
        "evewinetricks"
        "qt.conf"
        "build_installer.sh"
        "setup.sh.in"
        "eve-icons.tar.gz"
        "eve-icons_large.tar.gz"
        "eve-transl5.11-de.tar.gz"
        "eve-transl5.11-en.tar.gz"
        "eve-transl5.11-fr.tar.gz"
        "eve-transl5.11-ja.tar.gz"
        "eve-transl5.11-ru.tar.gz"
        "eve-transl5.11-zh.tar.gz"
        "https://github.com/megastep/makeself/releases/download/release-2.4.0/makeself-2.4.0.run"
        "https://binaries.eveonline.com/evelauncher-${pkgver}.tar.gz")

noextract=('eve-transl5.11-de.tar.gz'
           'eve-transl5.11-en.tar.gz'
           'eve-transl5.11-fr.tar.gz'
           'eve-transl5.11-ja.tar.gz'
           'eve-transl5.11-ru.tar.gz'
           'eve-transl5.11-zh.tar.gz'
           'https://github.com/megastep/makeself/releases/download/release-2.4.0/makeself-2.4.0.run')

package() {
        install -d "${pkgdir}/opt/${pkgname}/bin"
        install -d "${pkgdir}/usr/bin"
        install -d "${pkgdir}/usr/share/applications"
        for cmd in evelauncher.sh everegedit evewine evewinecfg evewinetricks ;do
            if [ -f "${srcdir}/$cmd" ] ;then
                install "${srcdir}/$cmd" "${pkgdir}/opt/${pkgname}/bin"
            else
                ln -s evewine "${pkgdir}/opt/${pkgname}/bin/$cmd"
            fi
            ln -s "/opt/${pkgname}/bin/$cmd" "${pkgdir}/usr/bin/$cmd"
            if [ ! "$cmd" = "evewine" ] ;then
                cp "${srcdir}/${cmd%.*}.desktop" "${pkgdir}/usr/share/applications/"
            fi
        done
        mkdir -p ${srcdir}/Launcher
        cp -r ${srcdir}/evelauncher/errorpage ${srcdir}/Launcher
        cp ${srcdir}/evelauncher/evelauncher* ${srcdir}/Launcher
        cp ${srcdir}/evelauncher/LogLite ${srcdir}/Launcher
        cp ${srcdir}/evelauncher/libg* ${srcdir}/Launcher
        cp ${srcdir}/evelauncher/libprotobuf.so.16.0.0 ${srcdir}/Launcher
        cp ${srcdir}/evelauncher/libpng12.so.0.54.0 ${srcdir}/Launcher
        cp ${srcdir}/evelauncher/libsteam_api.so ${srcdir}/Launcher
        cp -f ${srcdir}/evelauncher.sh.real ${srcdir}/Launcher/evelauncher.sh
        ln -sf evelauncher.sh ${srcdir}/Launcher/LogLite.sh
        ln -sf libgpr.so.6.0.0 ${srcdir}/Launcher/libgpr.so
        ln -sf libgpr.so.6.0.0 ${srcdir}/Launcher/libgpr.so.6
        ln -sf libgrpc++.so.1.12.0 ${srcdir}/Launcher/libgrpc++.so
        ln -sf libgrpc++.so.1.12.0 ${srcdir}/Launcher/libgrpc++.so.1
        ln -sf libgrpc++.so.1.12.0 ${srcdir}/Launcher/libgrpc++.so.6
        ln -sf libgrpc.so.6.0.0 ${srcdir}/Launcher/libgrpc.so
        ln -sf libgrpc.so.6.0.0 ${srcdir}/Launcher/libgrpc.so.6
        ln -sf libprotobuf.so.16.0.0 ${srcdir}/Launcher/libprotobuf.so
        ln -sf libprotobuf.so.16.0.0 ${srcdir}/Launcher/libprotobuf.so.16
        ln -sf libpng12.so.0.54.0 ${srcdir}/Launcher/libpng12.so.0
        chmod 0755 ${srcdir}/Launcher/*
        chmod 0644 ${srcdir}/Launcher/*.qm
        cp ${srcdir}/qt.conf ${srcdir}/Launcher
        find ${srcdir}/Launcher -type f -exec strip -s {} 2>/dev/null \;
        tar cJf ${srcdir}/launcher-${pkgver}.tar.xz Launcher/
        install -d "${pkgdir}/opt/${pkgname}/lib"
        mv ${srcdir}/launcher-${pkgver}.tar.xz ${pkgdir}/opt/${pkgname}/lib
        cp ${srcdir}/evelauncher.shlib ${pkgdir}/opt/${pkgname}/lib
        install -d ${pkgdir}/usr/share/icons
        cp -r ${srcdir}/icons ${pkgdir}/usr/share/
}

sha256sums=('f49b404341e1dd48eaa2504c83f9ff07c9a4c11e1a109c67d04167dc70d65731'
            '9b918c748866e9d8cda2b34fd54c9e1f920422005b7e18a477059a1c52561637'
            'ebcefccd79849f5d204d60f5a4079fb4a8603f16cf9b81acafcd9be80dd6dd7f'
            '80fceef0e28c2291cd4ba3924410211edd188717be093ffc329d18697583bd21'
            '1b13f885ae3f62d7eaac1cf50f7ad05e62513117d7084822f9b8d2779f3efab4'
            'f8988be390204ce645ca37f43cdb8e395970f8d6dd36095acf08c5c7cf72833c'
            '459b74ad54268610e7e222407f2cb4efd2e9734e47c1c20c52f8f3c00034c623'
            '04d2a47524cbd132aad2fd310d56515a29310a2e693ba94ce12c65cd776a70d2'
            '22690e393ee89703b17898038aaa37900805104e8c960b346fe1f6050edc9bce'
            'af9e68d643f0482259393eb326ccfbfe88c3084ebb120bb4c299abf6f6f58576'
            '2520a9b19f2827fa2634ea2acae3a6f61e73aada1af0eb2029e95709f0c8927d'
            '0bab761f1b9cd2166bb08b20205dc2b4b49f7b4e74f49aaa6260320ccd29a429'
            '9abf77404e7d71aeb7b951a908742c5fdf14fd24005bbfd9fc9420b793d35525'
            '2c192fdc282fefafee5596b60bd1779668b611d386e2bf933eef51d39eac7a28'
            'f88c7c28582b6531a021b8fcece47c906f900c48edf453dc04c349f8671cf8a2'
            '47accd49b64d624c6a6dee42952f8627aaabdd315fad85ef037507745d393f1a'
            '1c3df28324c8498e34d2e789fd1f36577afa5a31bdbb278d752f7ef8c6ec5516'
            'bb63c2ea31d204f4d8eb270848674ad898ed45bbf0a9cea480611581f1149e4f'
            'f78996a8b01463891e97270b8f9d9fa5a61ccf0710e1163aff0c0c49ce3849c3'
            '7ae1c6324c4ad43ab3f18f5a3ceaa48b34ede5466b7a0b9351d018e8cef9bbd0'
            '1936061a14432ab2632ea3ff15d45350b59ac822985445f597a4a5db44a35ae6'
            'ca66a6113ce98152b85c8d847949f8c90ab9ba798e106bfc225d4ed3c2e2e3e2'
            '03d614575282b3fabfdeb60a7c82f6a5f63cd2945fbc6015a55af2724ac486e8')
