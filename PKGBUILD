# Maintainer: ValHue <vhuelamo at gmail dot com>
# https://github.com/ValHue/AUR-PKGBUILDs

pkgname="nautilus-pushbullet"
pkgver="0.3.0"
pkgrel="2"
pkgdesc="An extension for Nautilus to send files with pushbullet"
arch=('any')
url="http://www.atareao.es/tag/nautilus-pushbullet/"
license=('GPL-3.0+')
depends=('python2' 'pushbullet-commons')
makedepends=('python2-distutils-extra')
provides=("${pkgname}")
source=("https://launchpad.net/~atareao/+archive/ubuntu/atareao/+files/${pkgname}_${pkgver}-0extras14.04.0.tar.gz")
sha256sums=('4cbe9b4a6466be98abd19836ab563caf0ab689e9677eae8452ec2c7450a56bb1')
install="${pkgname}.install"

build() {
	cd "${srcdir}/${pkgname}"
    sed -i "s|/usr/share/locale-langpack|/usr/share/locale|g" ./src/nautilus-pushbullet.py
	python2 setup.py build
}

package() {
	cd "${srcdir}/${pkgname}"
	python2 setup.py install --root="${pkgdir}" --optimize=1
    install -d ${pkgdir}/usr/share/locale
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    cd "${pkgdir}"
    mv ./usr/share/locale-langpack/* ./usr/share/locale/
    rm -rf ./usr/share/locale-langpack
}

# vim:set ts=4 sw=2 ft=sh et: