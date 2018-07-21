# Maintainer: Piotr Miller <nwg.piotr@gmail.com>
pkgname=('obhud')
pkgver=0.1.7
pkgrel=2
pkgdesc="Script for handling laptop-specific keys and events in Openbox"
arch=('i686' 'x86_64')
url="https://github.com/nwg-piotr/obhud"
license=('GPL3')
depends=('xorg-xbacklight' 'xorg-xrandr' 'libxrandr' 'alsa-utils' 'python' 'python-pmw'
'python-pillow' 'python-psutil' 'xf86-input-synaptics' 'ffmpeg' 'python-lxml')
source=("https://github.com/nwg-piotr/obhud/raw/master/dist/obhud-0.1.7.tar.gz"
"https://github.com/nwg-piotr/obhud/raw/master/dist/obhud"
"https://github.com/nwg-piotr/obhud/raw/master/dist/obhud.conf")

md5sums=('77f3812e07e9b99a4ff10277148b8262'
         '5b26cb8e7fff160d1eccc183e8ae2d28'
         '4429cf48928bf71e761df0f9b7dcbd8a')

package() {
  install -D -m 755 obhud \
 	 "$pkgdir"/usr/bin/obhud
  install -D -m 644 obhud.conf \
 	 "$pkgdir"/etc/obhud/obhud.conf
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}
