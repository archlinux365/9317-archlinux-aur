# Maintainer: DuckSoft <realducksoft at gmail dot com>
# Maintainer: sukanka <su975853527 at gmail dot com>
# Contributor: sihuan <sihuan at sakuya.love>
# Contributor: Nick Cao <nickcao at nichi dot co>

pkgname=wechat-uos
_pkgname=wechat
pkgver=2.1.1
pkgrel=2
epoch=2
pkgdesc="微信官方原生桌面版 WeChat desktop"
arch=('x86_64')
url="https://weixin.qq.com/"
license=('ISC')
depends=(electron bubblewrap lsb-release )
source=("${_pkgname}-${pkgver}.deb::https://home-store-packages.uniontech.com/appstore/pool/appstore/c/com.tencent.weixin/com.tencent.weixin_2.1.1_amd64.deb"
"wechat.sh"
"license.tar.gz"
)
sha512sums=('35403a3b0033cfba23c2b3d6a0ea2ece4df6e78eb6c2184a0f7a8eb9c2ffe4f581874839e71100e886a86284c3e016c084e0d06e592a8f83cc3858d9476c97d0'
            '6d94ef476de859d35c88fc8437429a405e3d17abbce3b81b1e2ce726a11ee763e0c9bda5bce22c1f6ea5b5b35653741725a4ff12a944d912db993f3e22c452b6'
            'd6a2cc365ff513b1adb69c71e60433ec8cde80fb41c12a614a65cd22f220b9175d930c38d2b4babde7b93ea76b23e0cf094a426555a9376fbcd9c31f21e79ed5')
options=(!strip)

prepare() {
    cd ${srcdir}
    tar -Jxvf data.tar.xz -C "${srcdir}"
    cp -rf $srcdir/opt/apps/com.tencent.weixin/files/weixin $srcdir/opt
    rm -rf usr/lib
    cd ${srcdir}/usr/share/applications/
    sed -i "3c Exec=wechat %U" weixin.desktop
    echo "Keywords=wechat;weixin;" >> weixin.desktop
}

package(){
    cd $srcdir
    mv usr $pkgdir
    
    mkdir -p ${pkgdir}/usr/lib/license
    mv opt/weixin/resources/app ${pkgdir}/usr/lib/wechat
    install -Dm755 wechat.sh ${pkgdir}/usr/bin/wechat
    
    mv license/usr/lib/license ${pkgdir}/usr/lib/${_pkgname}
    mkdir -p ${pkgdir}/usr/share/${_pkgname}
    mv license/etc ${pkgdir}/usr/share/${_pkgname}
    mv license/var ${pkgdir}/usr/share/${_pkgname}
}
# vim: ts=2 sw=2 et:
