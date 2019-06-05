# Maintainer: RedTide <redtid3@gmail.com>

pkgname=sfizz-git
pkgver=r5.4d45914
pkgrel=1
pkgdesc="Juce based SFZ format sampler"
url="https://github.com/azdrums/sfizz"
arch=('x86_64')
license=('GPL3')
makedepends=('git' 'juce')
source=(
    "$pkgname"::"git+https://github.com/azdrums/sfizz"
)
md5sums=(
    'SKIP'
)
pkgver() {
    cd "$pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
build() {
    cd "$srcdir/$pkgname/Builds/LinuxMakefile"
    sed -i -e 's/$(HOME)/\/opt/' "./Makefile"
    make INSTALL_DIR=$pkgdir
}
package() {
    cd "$srcdir/$pkgname"
    install -D -m644 $srcdir/$pkgname/bundle/linux/sfizz.desktop $pkgdir/usr/share/applications/sfizz.desktop
    install -D -m644 $srcdir/$pkgname/resources/icons/icon_256px.png $pkgdir/usr/share/pixmaps/sfizz.png
    install -D -m755 $srcdir/$pkgname/Builds/LinuxMakefile/build/sfizz $pkgdir/usr/bin/sfizz
}
