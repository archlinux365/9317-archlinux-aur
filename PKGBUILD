# Maintainer: Yufan You <ouuansteve at gmail>

pkgname=bilili
pkgver=1.4.4
pkgrel=1
pkgdesc='bilibili video and danmaku downloader | B站视频、弹幕下载器'
arch=('any')
url='https://github.com/SigureMo/bilili'
license=('GPL3')
depends=('python-requests')
makedepends=('python-setuptools')
source=("https://pypi.io/packages/source/${pkgname:0:1}/$pkgname/$pkgname-$pkgver.tar.gz")
sha256sums=('f699a2d13af90d25251d9bacd35f4919cae2f027890ef0228e0ced8016b3a5f8')

build() {
    cd "$pkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$pkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
