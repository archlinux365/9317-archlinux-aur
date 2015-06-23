# Maintainer: Theodoros Theodoridis <theodoridisgr@mail.com>

pkgname=range-v3
pkgver=20150622
pkgrel=1
pkgdesc="Eric Niebler' C++ ranges library."
arch=('any')
url='https://github.com/ericniebler/range-v3'
license=('custom')
makedepends=('git')
source=("git+https://github.com/ericniebler/range-v3.git")
md5sums=('SKIP')

package() {
    mkdir -p  "$pkgdir/usr/include"
    cp -R "$srcdir/range-v3/include/"* "$pkgdir/usr/include"
	# install custom license
	install -Dm644 "$srcdir/range-v3/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE" 
}
