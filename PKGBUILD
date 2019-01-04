# Maintainer: Simone Gaiarin <simgunz@gmail.com>
pkgname=ktouch-lesson-generator
pkgver=2.0
pkgrel=1
pkgdesc="A script for automatically generating custom lessons for the typing tutor KTouch."
arch=('any')
url="https://github.com/simgunz/ktouch-lesson-generator"
license=('MIT')
depends=('python-voluptuous' 'python-docopt')
source=("https://github.com/simgunz/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('782f6c3c32a22daf9c4695526766fe9f')

prepare() {
    cd "$srcdir/${pkgname}-${pkgver}"
    sed -i s/ktouch-lesson-generator.py/ktouch-lesson-generator/g ktouch-lesson-generator.py
    mv ktouch-lesson-generator.py ktouch-lesson-generator
}

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    install -D ktouch-lesson-generator "$pkgdir/usr/bin/ktouch-lesson-generator"
    install -Dm644 LICENSE.md "$pkgdir"/usr/share/licenses/${pkgname}/LICENSE.md
}
