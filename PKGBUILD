# Maintainer:  twa022 <twa022 at gmail dot com>
# Contributor: Sebastian Lau <lauseb644 _at_ gmail _dot_ com>

pkgname=nemo-compare
pkgver=5.4.1
pkgrel=1
pkgdesc="Context menu comparison extension for Nemo file manager"
arch=("x86_64" 'i686' 'armv7h' 'aarch64')
url="https://github.com/linuxmint/nemo-extensions"
license=('GPL3')
groups=('nemo-extensions')
depends=('nemo-python>=3.9.0' 'python-gobject')
optdepends=('meld: Install at least one file comparison program'
            'kompare: Additional comparison options (preferred diff, three-way, multi-compare)'
	        'fldiff: Additional comparison options (preferred diff, three-way, multi-compare)'
	        'diffuse: Alternate comparison backend'
	        'kdiff3: Alternate comparison backend')
source=("nemo-extensions-$pkgver.tar.gz::https://github.com/linuxmint/nemo-extensions/archive/$pkgver.tar.gz")
sha256sums=('6a0b83e6a9129c7217c29fbc992109d8f6eedbe8f076da863c507c0005182404')

build() {
  cd "${srcdir}/nemo-extensions-${pkgver}/${pkgname}"
  python ./setup.py build
}

package() {
  cd "${srcdir}/nemo-extensions-${pkgver}/${pkgname}"
  python ./setup.py install --prefix=/usr --root="${pkgdir}" \
                            --no-compile -O0
}
