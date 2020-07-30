# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=gonha-git
pkgver=r148.8d716b3
pkgrel=1
pkgdesc='Light-weight system monitor for Linux'
arch=('any')
url='https://github.com/fredcox/gonha'
license=('MIT')
provides=('gonha')
conflicts=('gonha')
depends=('python-pyqt5'
         'python-ewmh'
         'python-psutil'
         'python-humanfriendly'
         'python-pyinquirer'
         'python-colr'
         'python-distro'
         'python-prompt_toolkit1014'
         'python-py-cpuinfo'
         'ttf-fira-code'
         'python-pathlib'
         'python-requests'
         'python-netifaces'
         'python-numpy'
         'python-country-list'
         'python-unit-convert'
         'python-portolan')
makedepends=('python-setuptools' 'git')
source=("${pkgname%-git}::git+https://github.com/fredcox/gonha")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${pkgname%-git}"
  python setup.py build
}

package() {
  cd "${pkgname%-git}"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et: