#Maintainer Matthijs Tadema <M dot J dot Tadema at pm dot me>
#Previous Maintainer Jens Staal <staal1978@gmail.com>

pkgname=ugene-bin
pkgver=38.1
pkgrel=1
pkgdesc="A free cross-platform genome analysis suite (binary release)"
arch=('x86_64')
url="http://ugene.net"
license=('GPL')
depends=('qt5-script' 'qt5-svg' 'qt5-webkit' 'glu' 'procps-ng' 'python')
provides=('ugene')
conflicts=('ugene')
source=("https://github.com/ugeneunipro/ugene/releases/download/${pkgver}/ugene-${pkgver}-linux-x86-64.tar.gz")
sha256sums=('ee8509a3edea8675f3aed6a537d38f64c97e20026ab923d5a656a1029b4be3a1')

package() {
    cd "$srcdir/ugene-$pkgver"
    mkdir -p "${pkgdir}/usr/"{bin,share/{applications,icons,ugene}}
    tar -xf icons.tar.gz -C $pkgdir/usr/share/icons
    mv * $pkgdir/usr/share/ugene
    ln -s /usr/share/ugene/ugene "$pkgdir"/usr/bin/ugene
    ln -s /usr/share/ugene/ugene.desktop "$pkgdir"/usr/share/applications/ugene.desktop
}

