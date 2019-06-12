# Maintainer: Jurica Bradaric <jbradaric@gmail.com>
pkgname=python2-profilehooks
pkgver=1.11.0
pkgrel=1
pkgdesc="Decorators for profiling/timing/tracing individual functions"
arch=(any)
url="http://mg.pov.lt/profilehooks"
license=('custom:MIT')
depends=('python2')
makedepends=('python2' 'python2-setuptools')

source=("https://files.pythonhosted.org/packages/cf/71/3851700846f54fade72f1f8ec6744693632b388d38019eddfa767407b6c2/profilehooks-1.11.0.tar.gz"
        "LICENSE")
sha256sums=('40eab473491bc37b70efe6462707781a0730d86f78a1f5fd1c02dc9e4186f94b'
            '782297002c4e5baa591d289916113b39d8ae046e41855e6beb1266f26f9ec82a')

build() {
    cd "${srcdir}/profilehooks-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/profilehooks-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1
    install -D -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
