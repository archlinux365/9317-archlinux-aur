# Maintainer: Lennart Husvogt <lennart at husvogt dot net>

pkgname=faubox
pkgver=15.0.100
pkgrel=1
pkgdesc="Desktop client for FAU's file synchronization service"
arch=('any')
url="https://www.fau.eu/intranet/tools/faubox-cloud-storage-for-all-fau-members/"
license=(custom)
depends=('jre8-openjdk')
makedepends=('gendesk')


source=("faubox.sh"
        "https://faubox.rrze.uni-erlangen.de/client_deployment/FAUbox_Linux.tar.gz")
sha256sums=('0c8d4a37f00f60b4afa4bc4e1b91598a0996bbf44b3dd3e8be1fe9c47ec25391'
            'c13da2153c5eb330c76f6cc983c0f3d9aa3ddec9c86f08eff7b1023497eb3255')


prepare() {
    gendesk -f -n --pkgname "$pkgname" --pkgdesc "FAU file synchronization" --name "FAUbox" --categories "Network"
}

package() {
    cd ${srcdir}
    install -Dm655 faubox.sh ${pkgdir}/usr/bin/faubox
    install -Dm644 faubox.desktop ${pkgdir}/usr/share/applications/faubox.desktop
    
    cd ${srcdir}/FAUbox
    install -Dm644 FAUbox.jar ${pkgdir}/usr/share/java/${pkgname}/FAUbox.jar
    install -Dm644 VERSION ${pkgdir}/usr/share/${pkgname}/VERSION
    install -Dm644 README ${pkgdir}/usr/share/${pkgname}/README
    install -Dm644 install-files/FAUbox.png ${pkgdir}/usr/share/pixmaps/faubox.png
    install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
