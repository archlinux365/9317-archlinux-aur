# Maintainer: Achmad Fathoni <fathoni DOT id AT gmail DOT com>

pkgname=evaltool-bin
pkgver=1.9.0
pkgrel=1
pkgdesc="Explore and test functionality of the Inertial Sense products in real-time"
arch=('x86_64')
url="https://docs.inertialsense.com/user-manual/software/evaltool/"
license=('MIT')
depends=('qt5-charts-ubuntu-ver')

source=("https://github.com/inertialsense/inertial-sense-sdk/releases/download/${pkgver}/EvalTool_${pkgver}.deb")
sha256sums=('90e7e040b84458568778a5a9e27315af0fb103aab9c6d4b771d1cdc5f5d813c5')

package(){
	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"
    find "${pkgdir}" -type d -exec chmod 755 {} \;
}
