# Maintainer: Alva <a at u8 dot is>
_pkgbasename=passphrase
_exename=pp
pkgname=${_pkgbasename}-git
pkgrel=2
pkgver=r8.80cd4f9
pkgdesc="Zero-dependency passphrase generator, written in Zig"
arch=('any')
url="https://git.sr.ht/~alva/${_pkgbasename}"
license=('MIT')
depends=('zig>=0.6.0')
source=(git+https://git.sr.ht/~alva/${_pkgbasename})
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgbasename}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_pkgbasename}"
    zig build -Drelease-fast
}

package() {
    cd "${srcdir}/${_pkgbasename}"
    install -D -m755 zig-cache/bin/$_exename "${pkgdir}/usr/bin/$_exename"
    install -D -m644 zig-cache/share/pp/dictionary.txt "${pkgdir}/usr/share/$_exename/dictionary.txt"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/$_exename/LICENSE"
}
