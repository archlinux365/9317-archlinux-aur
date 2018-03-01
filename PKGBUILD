# Maintainer: Musee "lae" Ullah <lae(at)lae(dot)is>

pkgname=monacoin-bin
_coinname=monacoin
pkgver=0.15.1
pkgrel=1
pkgdesc="Monacoin is a peer-to-peer network based digital currency. This packages provides already compiled binaries."
arch=('i686' 'x86_64')
url="https://monacoin.org/en/index.html"
license=('MIT')
provides=('monacoin-qt' 'monacoind' 'monacoin-tx')
conflicts=('monacoin-qt')
depends=('openssl-1.0' 'boost-libs' 'libevent' 'db4.8' 'qt5-base' 'protobuf')
optdepends=('qrencode: for generating QR codes within the GUI' 'zeromq: send notifications via zeromq')
source=("monacoin-qt.desktop" "monacoin256.xpm")
source_x86_64=("https://github.com/monacoinproject/${_coinname}/releases/download/${_coinname}-${pkgver}/monacoin-${pkgver}-x86_64-linux-gnu.tar.gz")
source_i686=("https://github.com/monacoinproject/${_coinname}/releases/download/${_coinname}-${pkgver}/monacoin-${pkgver}-i686-pc-linux-gnu.tar.gz")
sha256sums=('4af25bac0076c6d2060832b66819741d3e049a71d6ad5f1a26a2700415d23cfc'
            'ddf39249561bc216d67194d6d87582e5738af0625fd1b6abe8f277851f7fe5bc')
sha256sums_x86_64=('8199f92d4296ea99891db34f5d779d7e95a2338425544b82b04fd8b427dae905')
sha256sums_i686=('3cda32ac704ef88f5cff4d3349dadf1ec84ebad3f250854142dccc366d0bc974')
install=monacoin.install

package() {
    install -Dm644 "${srcdir}/monacoin-qt.desktop" "${pkgdir}/usr/share/applications/monacoin-qt.desktop"
    install -Dm644 "${srcdir}/monacoin256.xpm" "${pkgdir}/usr/share/pixmaps/monacoin.xpm"

    cd "${srcdir}/${_coinname}-${pkgver}"
    install -Dm755 bin/monacoin-cli "${pkgdir}"/usr/bin/monacoin-cli
    install -Dm755 bin/monacoind "${pkgdir}"/usr/bin/monacoind
    install -Dm755 bin/monacoin-qt "${pkgdir}"/usr/bin/monacoin-qt
    install -Dm755 bin/monacoin-tx "${pkgdir}"/usr/bin/monacoin-tx
    install -Dm644 share/man/man1/monacoin-cli.1 "${pkgdir}"/share/man/man1/monacoin-cli.1
    install -Dm644 share/man/man1/monacoind.1 "${pkgdir}"/share/man/man1/monacoind.1
    install -Dm644 share/man/man1/monacoin-qt.1 "${pkgdir}"/share/man/man1/monacoin-qt.1
    install -Dm644 share/man/man1/monacoin-tx.1 "${pkgdir}"/share/man/man1/monacoin-tx.1
}
