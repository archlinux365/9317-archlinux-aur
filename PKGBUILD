# Maintainer: Michael Taboada <michael@2mb.solutions>
_hgrev=797a3a043831
pkgname=chirpc
pkgver=1
pkgrel=1
pkgdesc="GUI tool for programming ham radios, experimental CLI tool"
arch=('any')
url="https://chirp.danplanet.com/"
license=('GPL3')
depends=("chirp" "python")
source=("https://chirp.danplanet.com/projects/chirp/repository/revisions/${_hgrev}/raw/chirpc"
        "https://chirp.danplanet.com/projects/chirp/repository/revisions/${_hgrev}/raw/README.chirpc")
sha512sums=('606e2de977d905b42a3ea15552c9e6d2dbb0c489bcc88e3af5f4a929de3da613e1abd857d0241f2522a80a3b7552d91b855f74f784d5cbfd56c6c96b90c4a62b'
            'c3516e24bc95083691ca07dbbb7366b67b3846ef3c475c3aec0f8e657672de294b23196ea2eaf773699f3b173986b41c5a108c560a93c2fd8f99c6223b578f7c')

package() {
        install -d "${pkgdir}"/usr/bin
        install -d "${pkgdir}"/usr/share/doc/chirpc/
        cp chirpc "${pkgdir}"/usr/bin/
        chmod 755 "${pkgdir}"/usr/bin/chirpc
        cp README.chirpc "${pkgdir}"/usr/share/doc/chirpc/README
}
