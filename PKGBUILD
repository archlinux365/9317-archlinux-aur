# Maintainer: ZaZam <zazaamm ät gmail>
# Contributor: Jesse Jaara <gmail.com: jesse.jaara>
# Contributor sumt <sumt at sci dot fi>

pkgname=yle-dl
pkgver=20220213
pkgrel=1
pkgdesc="Download video and audio from YLE Areena."
arch=('any')
url="http://aajanki.github.io/yle-dl/"
license=('GPL3')
depends=('ffmpeg'
       'python-attrs>=18.1.0'
       'python-configargparse>=0.13.0'
       'python-lxml'
       'python-requests'
)
optdepends=('wget: for some rare streams')
makedepends=('python-setuptools')
source=("$pkgname-$pkgver.tar.gz::https://github.com/aajanki/yle-dl/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('611cc519da6974bc8ed9cb032edea541e66a5af5bba08351d136214f59223c39')


build() {
  cd $pkgname-$pkgver
  python setup.py build
}

package() {
  cd $pkgname-$pkgver
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
