# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

pkgname=jack-matchmaker
pkgver=0.8.1
pkgrel=1
pkgdesc="A command line tool to auto-connect JACK ports matching given patterns."
arch=('any')
url="https://github.com/SpotlightKid/jack-matchmaker"
license=('GPL2')
depends=('python-setuptools' 'jack')
source=("https://files.pythonhosted.org/packages/source/j/${pkgname}/${pkgname}-${pkgver}.tar.gz")
backup=('etc/conf.d/jack-matchmaker')
sha256sums=('c593db0871134d456306ebf0b2a6bdf1b51ef4750bf0ef620d05615adb06ee27')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  python setup.py install --skip-build --root="${pkgdir}" --prefix=/usr \
    --optimize=1

  # systemd service
  install -Dm 644 systemd/jack-matchmaker.conf $pkgdir/etc/conf.d/jack-matchmaker
  install -Dm 644 systemd/jack-matchmaker.service -t $pkgdir/usr/lib/systemd/user
}
