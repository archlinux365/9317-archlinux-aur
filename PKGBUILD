# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: WorMzy Tykashi <wormzy.tykashi@gmail.com>
pkgname=python-pulsectl
_name=${pkgname#python-}
pkgver=21.3.4
pkgrel=1
epoch=1
pkgdesc="Python high-level interface and ctypes-based bindings for PulseAudio (libpulse)"
arch=('any')
url="https://github.com/mk-fg/python-pulse-control"
license=('MIT')
depends=('python' 'libpulse')
makedepends=('python-setuptools')
conflicts=('python-pulse-control')
replaces=('python-pulse-control')
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('faa8b9336237565990298f20870e13dd1678a4586847ca5a7ff2abf10752f356')

build() {
	cd "$_name-$pkgver"
	python setup.py build
}

# Test fails in chroot
#check() {
#	cd "$_name-$pkgver"
#	python -m unittest pulsectl.tests.all
#}

package() {
	cd "$_name-$pkgver"
	export PYTHONHASHSEED=0
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build

	install -Dm644 COPYING -t "$pkgdir/usr/share/licenses/$pkgname"
}
