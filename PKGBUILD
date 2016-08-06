#Maintainer: Alexey Stukalov <astukalov@gmail.com>
pkgname=smartgit
pkgver=7.1.4
pkgrel=1
pkgdesc="Git client with Hg and SVN support."
arch=("any")
url="http://www.syntevo.com/smartgit"
license=('custom')
depends=("java-runtime" "desktop-file-utils" "sh" "git" "gtk2")
optdepends=("mercurial: hg repositories support")
replaces=(smartgithg)

# package version as it appears in the name of tar.gz archive file
_pkgver=${pkgver//\./_}
# folder within tar.gz archive
_pkgfolder=${pkgname}
source=(https://www.syntevo.com/downloads/${pkgname}/${pkgname}-linux-${_pkgver}.tar.gz
        smartgit.desktop)
install="smartgit.install"
sha1sums=('d1d3f716fd8dd651a11455070d61edc0c2f976ba'
          'bafa47c0b43ad89aaa3b34a078771b3cd12bd1f3')

package() {
    cd "$srcdir"

    #install -D -m644 "${_pkgfolder}"/licenses/* "${pkgdir}/usr/share/licenses/${pkgname}"
    mkdir -p "${pkgdir}"/opt
    mv "${_pkgfolder}" ${pkgdir}/opt/${pkgname} || return 1

    install -D -m644 smartgit.desktop "${pkgdir}"/usr/share/applications/${pkgname}.desktop

    # link icon files
    mkdir -p ${pkgdir}/usr/share/icons/hicolor/{32x32,48x48,64x64,128x128,256x256}/apps
    cd ${pkgdir}/usr/share/icons/hicolor
    ln -s /opt/${pkgname}/bin/smartgit-32.png 32x32/apps/${pkgname}.png
    ln -s /opt/${pkgname}/bin/smartgit-48.png 48x48/apps/${pkgname}.png
    ln -s /opt/${pkgname}/bin/smartgit-64.png 64x64/apps/${pkgname}.png
    ln -s /opt/${pkgname}/bin/smartgit-128.png 128x128/apps/${pkgname}.png
    ln -s /opt/${pkgname}/bin/smartgit-256.png 256x256/apps/${pkgname}.png

    # create link in /usr/bin
    cd ${pkgdir}
    chmod 755 opt/${pkgname}/bin/smartgit.sh
    mkdir -p usr/bin
    ln -s /opt/${pkgname}/bin/smartgit.sh usr/bin/${pkgname}
}
