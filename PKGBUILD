# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>

pkgname=python-tesla-dashcam	 
pkgdesc='Python program to merge video files created by Tesla dashcam'
pkgver=0.1.20
pkgrel=1
url="https://pypi.org/project/tesla-dashcam"
license=('Apache')
arch=('any')
depends=('python')
source=("https://files.pythonhosted.org/packages/d4/ae/bd784373c3b3a7cdefd7be75e02471c8f741d54423f8ecac12c981eab40a/tesla_dashcam-${pkgver}.tar.gz")
sha256sums=('0f0a74ff45511da1d5262c8c81f5dde0825d9dd02d686e7ff8442f17e415e4ed')

package() {
  cd "${srcdir}/tesla_dashcam-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
}
