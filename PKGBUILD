# Maintainer: AlphaJack <alphajack at tuta dot io>

pkgname="python-degiro-connector"
pkgver=2.0.20
pkgrel=1
pkgdesc="Yet another library to access Degiro's API"
url="https://github.com/Chavithra/degiro-connector"
license=("BSD-3")
arch=("any")
provides=("degiro-connector")
# not adding "python-orjson" because it is not compatible with ARM architectures yet
depends=("python-grpcio" "python-onetimepass" "python-pandas" "python-protobuf" "python-requests" "python-wrapt")
makedepends=("python-dephell" "python-setuptools")
source=("$pkgname-$pkgver.tar.gz::https://github.com/Chavithra/degiro-connector/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('a16cfd68ffd6345d421449653e8c52e72b2b64433ce7e8a1beec1ce18d5a9bd5')

prepare(){
 cd "degiro-connector-$pkgver"
 # use plain json because orjson is not compatible with ARM architectures yet
 find . -type f -not -path "*/.git/*" -exec sed -i {} -e "s/import orjson as json/import json/g" -e "s/'orjson',/#'orjson',/g" \;
 dephell deps convert --from pyproject.toml --to setup.py
}

build(){
 cd "degiro-connector-$pkgver"
 python setup.py build
}

package(){
 cd "degiro-connector-$pkgver"
 python setup.py install --root="$pkgdir" --optimize=1
}
