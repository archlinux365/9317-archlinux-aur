# Maintainer: Joseph Post <joe@jcpst.com>
# Previous Maintainer: Stephan Wienczny <stephan@wienczny.de>

pkgname=dbeaver-ee
pkgver=3.5.2
pkgrel=1
pkgdesc="A free universal database tool for developers and database administrators. Enterprise Edition includes NoSQL database support"
arch=('i686' 'x86_64')
url="http://dbeaver.jkiss.org/"
license=("GPL")
depends=('java-runtime>=1.6' 'gtk2' 'gtk-update-icon-cache')
install=dbeaver-ee.install

source=(dbeaver-ee.desktop dbeaver-ee.install)
source_i686=(http://dbeaver.jkiss.org/files/${pkgver}/dbeaver-ee-${pkgver}-linux.gtk.x86.tar.gz)
source_x86_64=(http://dbeaver.jkiss.org/files/${pkgver}/dbeaver-ee-${pkgver}-linux.gtk.x86_64.tar.gz)
sha256sums=('453912912ae8377b16ef74a3e7d93ea588792ee8f7054a573e9fe9b93cd9265f'
            '0c2a75baa39459fa56159e982d9f28c966837561bd52dffd24bac87b8d65555f')
sha256sums_i686=('2c4d6adc08372a90172db047f55af80b94fb381dbf12f6cf80be0f4e89873cf7')
sha256sums_x86_64=('729309e6119b6312273810209ea10347ed77f9e39ad463b673188c8b7bfec887')

noextract=("dbeaver-ee-${pkgver}-linux.gtk.x86.tar.gz"
           "dbeaver-ee-${pkgver}-linux.gtk.x86_64.tar.gz")

prepare() {
    mkdir -p $srcdir/$pkgname
    cd $srcdir/$pkgname
    if [ "$CARCH" = "x86_64" ]; then
        tar -xf "$srcdir/dbeaver-ee-${pkgver}-linux.gtk.x86_64.tar.gz"
    else
        tar -xf "$srcdir/dbeaver-ee-${pkgver}-linux.gtk.x86.tar.gz"
    fi
}

package() {
    cd $pkgdir
    mkdir -p opt/
    mkdir -p usr/bin
    mkdir -p usr/share/applications
    mkdir -p usr/share/icons/hicolor/48x48/apps

    cp -r $srcdir/$pkgname opt/
    cp opt/${pkgname}/icon.xpm usr/share/icons/hicolor/48x48/apps/${pkgname}.xpm
    ln -s /opt/${pkgname}/dbeaver usr/bin/dbeaver-ee
    install -m 644 $srcdir/dbeaver-ee.desktop $pkgdir/usr/share/applications/
}

