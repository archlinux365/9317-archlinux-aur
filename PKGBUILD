# Maintainer: Stanisław Jasiewicz <stjasiewicz@protonmail.com>
pkgname=neverwinter.nim
pkgver=1.4.2
pkgrel=1
pkgdesc="A nim-lang library and utility collection to read and write data files used by Neverwinter Nights 1"
arch=('any')
url="https://github.com/niv/neverwinter.nim"
license=('MIT')
source=("https://github.com/niv/neverwinter.nim/releases/download/1.4.2/neverwinter.linux.amd64.zip")
md5sums=('88423bb51a2ca92de2063e165fbcc026')

package() {
    install -Dm 755 "nwn_twoda" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_tlk" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_ssf" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_resman_stats" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_resman_pkg" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_resman_grep" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_resman_extract" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_resman_diff" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_resman_cat" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_net" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_key_unpack" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_key_transparent" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_key_shadows" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_key_pack" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_gff" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_erf_tlkify" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_erf" -t "$pkgdir/usr/bin"
    install -Dm 755 "nwn_compressedbuf" -t "$pkgdir/usr/bin"
}
