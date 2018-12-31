# Maintainer: Evgeniy Filimonov <evgfilim1@gmail.com>

pkgname='python-aiogram'
pkgver=2.0.1
pkgrel=1
pkgdesc="A pretty simple and fully asynchronous library for Telegram Bot API written in Python 3.7 with asyncio and aiohttp"
arch=('any')
url="https://github.com/aiogram/aiogram"
license=('MIT')
depends=('python>=3.7' 'python-aiohttp>=3.4.4' 'python-babel>=2.6.0' 'python-certifi>=2018.8.24')
makedepends=('python-setuptools' 'python-pip')
optdepends=('python-uvloop: fast, drop-in replacement of the built-in asyncio event loop'
            'python-ujson: ultra fast JSON encoder and decoder written in pure C')
source=("https://github.com/aiogram/aiogram/archive/v${pkgver}.tar.gz")
sha256sums=('de0a7edef7612f2a0fb3ba1cc5a7c3c5872ae0199df1c802672b1b351355f301')

build() {
	cd "$srcdir/aiogram-${pkgver}"
	python setup.py build
}

package() {
	cd "$srcdir/aiogram-${pkgver}"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build

	install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.rst"
}

# vim: ft=sh ts=4 sw=4 et 

