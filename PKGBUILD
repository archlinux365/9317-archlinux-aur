# Maintainer: Clayton Craft <clayton@craftyguy.net>
pkgname=terminate
pkgver=0.2
pkgrel=1
pkgdesc="Minimal terminal emulator based on VTE"
arch=("x86_64")
url="https://git.sr.ht/~craftyguy/terminate"
license=("GPL3")
depends=("vte3" "vte-common")
makedepends=("gcc" "meson" "ninja" "scdoc")
provides=("${pkgname}")
backup=("etc/terminate/config")
source=("https://git.sr.ht/~craftyguy/${pkgname}/archive/${pkgver}.tar.gz")
sha512sums=('4ad49f6b4d9c2306a9006b11aaf0cd67d6d409c48388d0412fe118bed4cfe4a12a5f9c5b0a06fdd7220269a03220482e0d9e9e56ad3fa42ca037cf0674bdb0c8')

build() {
        cd "${srcdir}/${pkgname}-${pkgver}"
        meson --prefix="${pkgdir}/usr" builddir
        ninja -C builddir
}

package() {
        cd "${srcdir}/${pkgname}-${pkgver}"
        ninja -C builddir install
        install -Dm644 config "${pkgdir}/etc/${pkgname}/config"
        install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
        install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
