# Maintainer: Erkin Batu Altunbaş <erkin@sdf.org>
pkgname=openlisp
pkgver=10.8.0
pkgrel=1
pkgdesc="A full and efficient ISO/IEC 13816:2007(E) ISLISP Implementation"
arch=('x86_64' 'i686')
url="http://www.eligis.com"
license=("custom")
depends=("sh")

source_x86_64=("http://www.eligis.com/downloads/${pkgname}-${pkgver}-Linux-x86_64.tar.gz")
source_i686=("http://www.eligis.com/downloads/${pkgname}-${pkgver}-Linux-i686.tar.gz")

sha256sums_x86_64=('15b0d2823a600bcb4c8b9267a5957f952dddf92d87aef3fd4f1ad4ba682236b5')
sha256sums_i686=('73cf19e380685791bf8fca786cfae4a5ec094ca2e8e5483d3e88c68bc009d54c')

package()
{
    cd "$pkgname-$pkgver"

    install -d "$pkgdir/usr/share/doc/$pkgname"
    cp -a --no-preserve=ownership README NEWS ChangeLog AUTHORS "$pkgdir/usr/share/doc/$pkgname"
    install -Dm644 README "$pkgdir/usr/share/licenses/$pkgname/README"

    install -Dm644 "emacs/openlisp.el" "$pkgdir/usr/share/emacs/site-lisp/openlisp.el"

    install -d "$pkgdir/usr/lib/$pkgname"
    cp -r -a --no-preserve=ownership bench contrib lib net uxlisp "$pkgdir/usr/lib/$pkgname"

    echo -e "#!/bin/sh\ncd /usr/lib/$pkgname\n/usr/lib/$pkgname/uxlisp \$*\ncd - > /dev/null" > openlisp
    install -Dm755 openlisp "$pkgdir/usr/bin/openlisp"
}
