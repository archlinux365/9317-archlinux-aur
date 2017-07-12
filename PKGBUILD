# Maintainer: Arne Beer <arne@twobeer.de>

pkgname=encarne
pkgver=1.0.1
pkgrel=1
arch=('any')
pkgdesc='A command scheduler for shells'
license=('MIT')
depends=('python-daemonize' 'python-terminaltables-git' 'python-colorclass-git' 'mediainfo' 'pueue' 'python-lxml')
makedepends=('python-setuptools')
provides=('encarne')
url='https://github.com/nukesor/encarne'
source=("https://github.com/Nukesor/encarnearchive/${pkgver}.tar.gz")
sha256sums=('SKIP')

package() {
  cd "${pkgname}-${pkgver}"

  # We don't need anything related to git in the package
  rm -rf .git*

  # Install
  python setup.py install --optimize=1 --root="${pkgdir}"

  # Place systemd user service
  install -Dm644 "utils/${_gitname}.service" "${pkgdir}/usr/lib/systemd/user/${pkgname}.service"

  # Install License
  # MIT/X11 license
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
