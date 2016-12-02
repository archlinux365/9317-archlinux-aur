# Maintainer: Tomislav Ivek <tomislav.ivek@gmail.com>

pkgname=('conan')
pkgver=0.16.0
pkgrel=3
pkgdesc="A distributed, open source, C/C++ package manager."
arch=('any')
url="https://conan.io"
license=('MIT')
makedepends=('python-setuptools')
depends=('python-pyjwt>=1.4.0' 'python-pyjwt<1.5.0'
         'python-requests>=2.7.0' 'python-requests<2.13.0'
         'python-colorama>=0.3.3' 'python-colorama<0.4.0'
         'python-boto>=2.38.0' 'python-boto<2.44.0'
         'python-yaml>=3.11' 'python-yaml<3.13.0'
         'python-patch=1.16'
         'python-fasteners>=0.14.1'
         'python-six>=1.10.0'
         'python-node-semver=0.1.1'
         'python-bottle>=0.12.8' 'python-bottle<0.13')
source=("https://github.com/conan-io/conan/archive/${pkgver}.tar.gz" "drop-passlib.patch")
sha512sums=('078bf08b2f63812f204b9070590a3deb1ec338d702b81a918076ecedf8598bd5c309d05c3deccc3d735b35770847b4acaee37a81f0f0b2e5dd2c2165afdca41d'
            '3b57353283dd280892e980b6c5bf5b74d0676c1cd42ac1a59a150634f69225086243ac6e2c23e07556b62a71ec36402e69534d4921189a7dfff546f190828fe0')

prepare() {
  cd $pkgname-$pkgver
  patch -Np1 -i "${srcdir}/drop-passlib.patch"
}


build() {
  cd "$srcdir/conan-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/conan-$pkgver"
  python setup.py install --optimize=1 --root=${pkgdir}
  install -m755 -d "${pkgdir}/usr/share/licenses/conan"
  install -m644 LICENSE.md "${pkgdir}/usr/share/licenses/conan/"
  install -m755 -d "${pkgdir}/usr/share/doc/conan"
  install -m644 contributors.txt "${pkgdir}/usr/share/doc/conan/"
}
