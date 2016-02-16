# Maintainer: Dan Bright <productions at zaziork dot com>
pkgname=python-iptceditor-gtk3
pkgrel=1
pkgver=0.3
pkgdesc="NOTE: THIS IS BETA. USE AT YOUR OWN RISK. This is a python3 GTK3 wrapper for the EXIV2 application, which is used to read and edit IPTC (and other forms) of image metadata. It can handle bulk operations on directories of image files."
arch=('any')
url="https://github.com/ZWS2014/python-iptceditor-gtk3"
license=('GPL3')
depends=('exiv2' 'python>=3.0.0' 'python-gobject' 'desktop-file-utils' 'python-setuptools')
source=("python-iptceditor-gtk3::git+https://github.com/ZWS2014/python-iptceditor-gtk3")
sha256sums=('SKIP')
pkgver() {
cd "$srcdir/python-iptceditor-gtk3/IptcEditor"
#printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
cat VERSION.rst # reading from included version file ensures version matches with the published PyPi package version
}
prepare() {
rm -rf .git LICENSE README.md
}
package() {
mv $srcdir/python-iptceditor-gtk3/IptcEditor $srcdir/python-iptceditor-gtk3/IptcEditor-$pkgver
cd "$srcdir/python-iptceditor-gtk3/IptcEditor-$pkgver"
python setup.py install --root="$pkgdir/" --optimize=1
install -Dm644 "$srcdir/python-iptceditor-gtk3/IptcEditor-$pkgver/IptcEditor/resources/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
install -Dm644 "$srcdir/python-iptceditor-gtk3/IptcEditor-$pkgver/IptcEditor/resources/iptc_editor-256x256.png" "$pkgdir/usr/share/pixmaps/iptc_editor-256x256.png"
}
post_install() {
update-desktop-database -q
}
post_remove() {
update-desktop-database -q
}
