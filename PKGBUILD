# Maintainer:  thoth <thoth@mailoo.org>
pkgname=python-odrive
_pkgnamepython=odrive
pkgver=0.4.8
pkgrel=1
pkgdesc="python tools for odrive motors"
arch=('any')
url="https://github.com/madcowswe/ODrive"
license=('MIT')
depends=('ipython' 'python-pyusb' 'python-pyserial' 'python-requests' 'python-intelhex')
optdepends=('python-matplotlib: required to run the liveplotter')


source=("https://files.pythonhosted.org/packages/source/${_pkgnamepython::1}/${_pkgnamepython}/${_pkgnamepython}-${pkgver}.tar.gz")


sha256sums=('47b50a4ec682e02008e18d3d7bdeb393037dc95cd9ff00268da432bce4051c13')
noextract=()

build() {
  cd "${srcdir}/${_pkgnamepython}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgnamepython}-${pkgver}"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  mkdir -p ${pkgdir}/usr/lib/udev/rules.d
  echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="1209", ATTR{idProduct}=="0d[0-9][0-9]", MODE="0666"' | tee ${pkgdir}/usr/lib/udev/rules.d/91-odrive.rules

  wget "https://github.com/madcowswe/ODrive/raw/master/LICENSE.md"
  install -D -m644 LICENSE.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}



# vim:set ts=2 sw=2 et:
