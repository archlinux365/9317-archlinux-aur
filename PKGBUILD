# Mantainer: sgar < swhaat at github >

pkgbase=esphomeyaml
pkgname=esphome
pkgver=2022.1.1
pkgrel=1
pkgdesc="Solution for your ESP8266/ESP32 projects with Home Assistant"
url="https://github.com/esphome/ESPHome"
depends=('python-setuptools'
	'python-voluptuous'
	'python-yaml'
	'python-paho-mqtt'
	'python-colorlog'
	'python-tornado'
	'python-protobuf'
	'python-tzlocal'
	'python-pyserial'
	'python-ifaddr'
	'python-pyaes'
	'python-ecdsa'
	'platformio'
	'esptool'
	'python-aioesphomeapi')
optdepends=('python-esphome-dashboard: esphome dashboard addition')
license=('MIT')
arch=('any')
replaces=('esphomeyaml')
source=("https://github.com/esphome/ESPHome/archive/${pkgver}.tar.gz")
sha256sums=('98d0baffe2980625c17515f361798cfa1134ebc51f78bfdc5b53f898d3285db0')

prepare() {
    cd "$srcdir/${pkgname}-${pkgver}"
	sed -i 's/==.*//' requirements.txt
}

build() {
    cd "$srcdir/${pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

check() {
    cd "$srcdir/${pkgname}-${pkgver}"

##	 Run tests, takes a while
    cp ${pkgname}/__main__.py ${pkgname}.py
#    python esphome.py tests/test1.yaml compile
#    python esphome.py tests/test2.yaml compile
}

