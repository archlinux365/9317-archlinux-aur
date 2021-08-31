# Maintainer:  Nick Bilbrey (beelzebud) <beelzebud@gmail.com>

_pkgname=vgtranslate
pkgname=vgtranslate-git
pkgver=r66.1b68c26
pkgrel=1
pkgdesc="VgTranslate service for retroarch"
arch=('any')
url="http://gitlab.com/spherebeaker/vgtranslate"
license=('GPL3')
provides=('vgtranslate')
conflicts=('vgtranslate')
depends=('python2')
makedepends=('git' 'python-setuptools' 'python2-setuptools')
source=("$pkgname"::'git+https://gitlab.com/spherebeaker/vgtranslate.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"
	git describe --long | sed "s/\([^-]*-g\)/r\1/;s/-/./g"
}

build() {
    cd "$srcdir/$pkgname"
    python2 setup.py build
}

package() {
    cd "$srcdir/$pkgname"
    PYTHONPATH="$srcdir/$_pkgname/usr/bin/"
    python2 setup.py install --root="$pkgdir" --optimize=1
    install -d "$pkgdir"/usr/share/$_pkgname/fonts
    install -Dm644 $srcdir/$pkgname/$_pkgname/*.* $pkgdir/usr/share/$_pkgname/
    install -Dm644 $srcdir/$pkgname/$_pkgname/fonts/*.* $pkgdir/usr/share/$_pkgname/fonts
    install -d "$pkgdir/usr/lib/systemd/system"
    install -Dm644 "$startdir/vgtranslate.service" "$pkgdir/usr/lib/systemd/system/vgtranslate.service"
	install -Dm644 $srcdir/$pkgname/LICENSE "$pkgdir"/usr/share/licenses/$_pkgname/LICENSE
echo
echo
echo _________________________________________________________________________________
echo Edit the /usr/local/vgtranslate/default_config.json file as per instructions at:
echo https://www.libretro.com/index.php/retroarch-1-7-8-ai-service-how-to-set-it-up/
echo Then use systemctl to enable the vgtranslate.service
echo _________________________________________________________________________________
echo
echo
}
