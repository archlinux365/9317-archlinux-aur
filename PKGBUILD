# Maintainer: CrocoDuck <crocoduck dot oducks at gmail dot com>

pkgname=gmsh-bin
pkgver=4.0.1
pkgrel=1
pkgdesc="A free 3D finite element grid generator with a build-in CAD engine and post-processor."
arch=('i686' 'x86_64')
url="http://gmsh.info/"
license=('GPL')
depends=('libxft' 'libxinerama' 'libxcursor' 'glu')
makedepends=('wget' 'tar' 'gendesk' 'chrpath')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")

# Define Download data:
if [ $CARCH == 'x86_64' ]; then
    _archvar=64
    _downsha256sum=8d5e48e4f99a0354139b0413e4423d6ec90c4d05c391c257380bdbc9a770d817
else
    _archvar=32
    _downsha256sum=a8f0076449d0708dc397e4836476234b7c1d4599b864abca6d52e000d5d36083
fi

prepare() {
    # Download Files:
    _downfname="gmsh-${pkgver}-Linux${_archvar}.tgz"
    wget "${url}bin/Linux/$_downfname"
    # Checksum:
    echo $_downsha256sum $_downfname|sha256sum -c || { echo 'Checksum failed!'; exit 1; }
    # Extract:
    tar zxvf $_downfname
    # Set Icon and Launcher:
    cp "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/share/doc/${pkgname%-*}/tutorial/image.png" "${srcdir}/gmsh_icon.png"
    gendesk -f -n --pkgname "${pkgname}" --pkgdesc "${pkgdesc}" --name=${pkgname%-*} --exec=${pkgname%-*} --categories 'Education;Science;Math;'
    # Strip RPATH from binary:
    chrpath -d "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/bin/gmsh"
}

package() {
    # Program Files
    cd "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/bin"
    for file in *; do
        install -Dm 755 "$file" "${pkgdir}/usr/bin/$file"
    done
    # Docs:
    cd "$srcdir"
    mkdir -p "${pkgdir}/usr/share/doc"
    cp -r "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/share/doc/${pkgname%-*}" "${pkgdir}/usr/share/doc/${pkgname%-*}"
    # Man
    cd "$srcdir"
    install -D "${srcdir}/${pkgname%-*}-${pkgver}-Linux${_archvar}/share/man/man1/${pkgname%-*}.1" "${pkgdir}/usr/share/man/man1/${pkgname%-*}.1"
    # Launcher
    install -Dm 644 "${srcdir}/gmsh_icon.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    install -Dm 644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname%-*}.desktop"
}

