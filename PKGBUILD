# Maintainer: Piotr Miller <nwg.piotr@gmail.com>
pkgname=('azote')
pkgver=1.3.1
pkgrel=1
pkgdesc="Wallpaper manager for Sway, i3 and some other WMs"
arch=('x86_64')
url="https://github.com/nwg-piotr/azote"
license=('GPL3')
depends=('python' 'python-setuptools' 'python-gobject' 'python-pillow' 'gtk3' 'feh' 'xorg-xrandr' 'wmctrl')
optdepends=('python-send2trash: trash support')

source=("https://github.com/nwg-piotr/azote/archive/v1.3.1.tar.gz")

md5sums=('1d6280b5defb92076a34af65f6aa8901')

package() {
  install -D -t "$pkgdir"/usr/bin "$pkgname"-"$pkgver"/dist/azote
  install -D -t "$pkgdir"/usr/share/"$pkgname" "$pkgname"-"$pkgver"/dist/azote.svg
  install -D -t "$pkgdir"/usr/share/applications "$pkgname"-"$pkgver"/dist/azote.desktop
  cd "$srcdir/$pkgname-$pkgver"
  /usr/bin/python setup.py install --root="$pkgdir/" --optimize=1
}

