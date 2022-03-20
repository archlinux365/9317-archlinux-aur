pkgname=sunflower-git
_gitname=Sunflower
pkgver=0.4.62.r202.gf7706d69
pkgrel=2
pkgdesc="Small and highly customizable twin-panel file manager for Linux with support for plugins"
arch=('any')
url="https://github.com/MeanEYE/Sunflower"
options=(!strip !zipman)
license=('GPL3')
depends=('gtk3' 'python-gobject' 'desktop-file-utils' 'python-chardet' 'librsvg')
makedepends=('git')
optdepends=('vte: integrated vte-based terminal'
'python-mutagen: audio-metadata support'
'gvfs: mount-management')
conflicts=('sunflower')
source=('git+https://github.com/MeanEYE/Sunflower.git')
md5sums=('SKIP')

prepare() {
    cd "${srcdir}/${_gitname}"
    git checkout develop
}

pkgver() {
	cd "${srcdir}/${_gitname}"
	local ver=$(git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g')
    [[ -z $ver ]] && ver=$(git describe --long --always)
    echo $ver | tee /dev/stderr
}
#pkgver() {
#	cd "${srcdir}/${_gitname}"
#	git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
#}

package() {
    cd "Sunflower"
    python setup.py install --root="$pkgdir/" --optimize=1
    install -Dm644 images/sunflower.png "${pkgdir}/usr/share/pixmaps/sunflower.png"
    rm "${pkgdir}/usr/share/sunflower/images/sunflower.png"
    rm -rd "${pkgdir}/usr/share/sunflower/translations"
    #install -d "${pkgdir}/usr/share/locale"
    cp -r "${srcdir}/Sunflower/translations/" "${pkgdir}/usr/share/locale"
    rm -f ${pkgdir}/usr/share/locale/*/LC_MESSAGES/*.po
    rm -f ${pkgdir}/usr/share/locale/*.pot
}
