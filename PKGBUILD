# Maintainer: Mikel Pintado <mikelaitornube2010@gmail.com>

pkgname=nuclear-player-bin
pkgver=0.5.1
repurl=https://github.com/nukeop/nuclear
commidfull=$(git ls-remote $repurl.git -tags v$pkgver^{})
# Delete the "^{}" next time
commid=${commidfull:0:6}
pkgrel=1
pkgdesc="A free, multiplatform music player app that streams from multiple sources."
arch=('x86_64')
url="http://nuclear.gumblert.tech/"
install=nuclear-player-bin.install
license=('GPL3')
depends=('gconf' 'libnotify' 'libappindicator-gtk3' 'libxtst' 'nss')
source=(
    https://github.com/nukeop/nuclear/releases/download/v${pkgver}/nuclear-${commid}.deb
    nuclear.desktop
)
md5sums=(
    '31628b2c178ad1221ecd952fedd7a9d9'
    '02328fb5995b2e92b3ee11dca5c6b262'    
)

package()   {
    tar xf data.tar.xz

    cp --preserve=mode -r usr "${pkgdir}"
    cp --preserve=mode -r opt "${pkgdir}"

    find "${pkgdir}" -type d -exec chmod 755 {} +

    cp --preserve=mode ${srcdir}/nuclear.desktop ${pkgdir}/usr/share/applications
}
