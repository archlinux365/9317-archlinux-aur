# Maintainer: Guilhelm Savin <aur@gsav.in>
# Maintainer: Jake <aur@ja-ke.tech>
#
# Upstream URL: https://github.com/platformio/platformio
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/gsavin/arch
#

pkgname=('platformio' 'platformio-udev-rules')
pkgver=5.2.5
pkgrel=2
pkgdesc="A cross-platform code builder and library manager"
arch=('any')
url="https://github.com/platformio/platformio-core/"
license=('Apache')
depends=('python-setuptools'
         'python-bottle'
         'python-click'
         'python-colorama'
         'python-pyserial>=3.4' #https://github.com/platformio/platformio-core/commit/a37eb9868f3b20e982d0c3cd1a742fcb8ab60efc
         'python-requests'
         'python-semantic-version'
         'python-tabulate'
         'python-pyelftools'
         'python-marshmallow'
         # Python 3
         'python-zeroconf'
         # "pio home" requirements:
         'python-aiofiles'
         'python-ajsonrpc'
         'python-starlette'
         'python-wsproto'
         'uvicorn')
optdepends=('python-click-completion: for shell completions'
           'python-shellingham: for shell completions')
conflicts=('platformio-git')
source=("https://github.com/platformio/platformio-core/archive/v${pkgver}.tar.gz")
sha256sums=('26cc5b61d113250519257c156ae693ab8f6aea891283b28f1c4c67ffc81fb574')

package_platformio() {
    cd "$srcdir/platformio-core-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
}

package_platformio-udev-rules() {
    depends=('udev')
    optdepends=()
    pkgdesc="udev rules for PlatformIO supported boards/devices"
    url="https://docs.platformio.org/en/latest/faq.html#platformio-udev-rules"

    cd "$srcdir/platformio-core-$pkgver"
    install -m644 -Dt "$pkgdir/usr/lib/udev/rules.d" "scripts/99-platformio-udev.rules"
}
