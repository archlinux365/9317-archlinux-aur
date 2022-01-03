# Maintainer: MadPhysicist <jfoxrabinovitz at gmail dot com>
pkgname=panoply
pkgver=5.0.0
pkgrel=2
pkgdesc='NetCDF, HDF and GRIB Data Viewer by NASA GISS'
arch=('any')
url='http://www.giss.nasa.gov/tools/panoply/'
license=('custom')
groups=('nasa-tools')
depends=('java-runtime>=9'
         'hicolor-icon-theme')
makedepends=('unzip' 'imagemagick')
optdepends=()
provides=()
conflicts=(panoply-nodesktop)
replaces=()
backup=()
options=()
install=panoply.install
changelog=
source=("http://www.giss.nasa.gov/tools/panoply/download/PanoplyJ-${pkgver}.zip"
        "https://www.giss.nasa.gov/tools/panoply/download/Panoply-${pkgver}.sha1.txt"
        'LICENSES'
        'panoply-script.patch'
        'panoply.desktop')
noextract=()
sha1sums=('68830ffd2c033f4dc1af9ab75ab66d6506f169fb'
          '2eedbc86defd6576849600282c4ac094828f6da0'
          'a83855747414873269e21aaff1a53d13ab5de304'
          '707208d062922b5426303238870e0dd269257697'
          '39c9a58c25d8f764c928e9dfe75f4f73bb9198f0')

prepare() {
    _sha1="$(cat Panoply-${pkgver}.sha1.txt 2>/dev/null | grep 'PanoplyJ.*.zip' | grep -o '^[^ ]*')"
    if [ "${sha1sums[0]}" = "$_sha1" ]; then
        echo "Checksum correct. Proceed to build"
    else
        echo "Checksum fail. Please check download!"
        exit 1
    fi
    cd ${srcdir}/PanoplyJ
    patch -uN -i ../panoply-script.patch || return 1
    unzip -px jars/Panoply.jar gov/nasa/giss/panoply/about/panoply_320x320.png > ../panoply320.png
    declare -a StringArray=("16" "32" "48" "64" "128" "192")
    for i in "${StringArray[@]}"; do
        echo "Resizing icon to ${i}x${i}"
        convert ../panoply320.png -resize ${i}x${i} ../panoply${i}.png
    done
}

package() {
    install -Dm644 ${srcdir}/LICENSES ${pkgdir}/usr/share/licenses/${pkgname}/LICENSES
    install -d -m755 ${pkgdir}/usr/share/java/panoply
    install -Dm644 ${srcdir}/PanoplyJ/jars/*.jar ${pkgdir}/usr/share/java/panoply
    install -Dm755 ${srcdir}/PanoplyJ/panoply.sh ${pkgdir}/usr/bin/panoply
    for i in "${StringArray[@]}"; do
        install -Dm644 ${srcdir}/panoply${i}.png ${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/panoply.png
    done
    install -Dm644 ${srcdir}/panoply.desktop ${pkgdir}/usr/share/applications/panoply.desktop
}
