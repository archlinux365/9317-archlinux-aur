pkgname=pakku-gui
pkgver=0.1.4
pkgrel=1
pkgdesc="GTK frontend for pakku"
arch=("any") # If pakku and python can be installed, this too
url="https://gitlab.com/mrvik/pakku-gui"
license=("GPL2")
depends=("python" "python-gobject" "gtk3" "pakku")
source=("https://gitlab.com/mrvik/$pkgname/-/archive/$pkgver/$pkgname-$pkgver.tar")
provides=($pkgname)
conflicts=($pkgname-git)
sha256sums=("3979441e0b0d9f0ffa8b1dbbc4c10cbe353578ff05b95c9f187ff97ad0281901")

package(){
    _libdir=$pkgdir/usr/lib/$pkgname
    _applications=$pkgdir/usr/share/applications
    cd "$srcdir/$pkgname-$pkgver"
    mkdir -p "$_libdir" "$_applications" "$pkgdir/usr/bin" "$pkgdir/etc"
    cp *.py "$_libdir"
    cp "$pkgname.desktop" "$_applications"
    cp "$pkgname.conf" "$pkgdir/etc"
    chmod +x "$_libdir/main.py"
    ln -s "/usr/lib/$pkgname/main.py" "$pkgdir/usr/bin/$pkgname"
}
