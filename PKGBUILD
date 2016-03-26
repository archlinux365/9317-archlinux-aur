#Maintainer wicast <wicastchen at hotmail>

pkgname=glide-bin
_pkgname=glide
pkgver=0.10.1
pkgrel=1
pkgdesc="Simplified Go project management, dependency management, and vendoring."
arch=('x86_64' 'i686')
url='https://github.com/Masterminds/glide'
licence=('MIT')
provides=('glide=0.8.3')
conflicts=('glide')
source_x86_64=("https://github.com/Masterminds/glide/releases/download/${pkgver}/${_pkgname}-${pkgver}-linux-amd64.tar.gz")
source_i686=("https://github.com/Masterminds/glide/releases/download/${pkgver}/${_pkgname}-${pkgver}-linux-386.tar.gz")
md5sums_x86_64=('201f4f77110a65a36c4853e6a948d074')
md5sums_i686=('8ed3ebf96ebc590bbf31b7da90efdab3')

if [ "$CARCH" = "i686"  ]; then
    _PKGARCH=386
else
    _PKGARCH=amd64
fi

package() {
    cd $srcdir/linux-$_PKGARCH
    install -Dm755 "$_pkgname" "${pkgdir}/usr/bin/${_pkgname}"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
