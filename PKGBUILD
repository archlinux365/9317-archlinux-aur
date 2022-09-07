# Maintainer: Funami
pkgname=py-spy-bin
pkgver=0.3.14
pkgrel=1
pkgdesc="Sampling profiler for Python programs"
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url="https://github.com/benfred/py-spy"
license=('MIT')
provides=('py-spy')
conflicts=('py-spy')
source=("$pkgname-$pkgver-LICENSE::https://raw.githubusercontent.com/benfred/py-spy/v$pkgver/LICENSE")
source_x86_64=("$pkgname-$pkgver-x86_64.zip::https://github.com/benfred/py-spy/releases/download/v$pkgver/py_spy-$pkgver-py2.py3-none-manylinux_2_5_x86_64.manylinux1_x86_64.whl")
source_i686=("$pkgname-$pkgver-i686.zip::https://github.com/benfred/py-spy/releases/download/v$pkgver/py_spy-$pkgver-py2.py3-none-manylinux_2_5_i686.manylinux1_i686.whl")
source_armv7h=("$pkgname-$pkgver-armv7h.zip::https://github.com/benfred/py-spy/releases/download/v$pkgver/py_spy-$pkgver-py2.py3-none-manylinux_2_17_armv7l.manylinux2014_armv7l.whl")
source_aarch64=("$pkgname-$pkgver-aarch64.zip::https://github.com/benfred/py-spy/releases/download/v$pkgver/py_spy-$pkgver-py2.py3-none-manylinux_2_17_aarch64.manylinux2014_aarch64.whl")
noextract=("$pkgname-$pkgver-x86_64.zip"
           "$pkgname-$pkgver-i686.zip"
           "$pkgname-$pkgver-armv7h.zip"
           "$pkgname-$pkgver-aarch64.zip")
sha256sums=('80bbb8731db59cd835f59fcd06f127953804bb511c8487fd265d96c7c702cd00')
sha256sums_x86_64=('f59b0b52e56ba9566305236375e6fc68888261d0d36b5addbe3cf85affbefc0e')
sha256sums_i686=('3e8e48032e71c94c3dd51694c39e762e4bbfec250df5bf514adcdd64e79371e0')
sha256sums_armv7h=('fd6211fe7f587b3532ba9d300784326d9a6f2b890af7bf6fff21a029ebbc812b')
sha256sums_aarch64=('590905447241d789d9de36cff9f52067b6f18d8b5e9fb399242041568d414461')

prepare() {
  mkdir -p "$pkgname-$pkgver-$CARCH"
  bsdtar -xf "$pkgname-$pkgver-$CARCH.zip" -C "$pkgname-$pkgver-$CARCH"
}

package() {
  install -Dm644 "$pkgname-$pkgver-LICENSE" "$pkgdir/usr/share/licenses/py-spy/LICENSE"
  
  cd "$pkgname-$pkgver-$CARCH/py_spy-$pkgver.data/scripts"
  install -Dm755 py-spy -t "$pkgdir/usr/bin"
}
