# Maintainer: Jose Riha <jose 1711 gmail com>
# Maintainer: Carlos Aznarán <caznaranl@uni.pe>

_base=textual
pkgname=python-${_base}
pkgver=0.2.1
pkgrel=1
pkgdesc="Text User Interface using Rich"
arch=(any)
url="https://github.com/Textualize/${_base}"
license=(MIT)
depends=(python-rich python-importlib-metadata)
makedepends=(python-build python-installer python-poetry-core)
checkdepends=(python-pytest python-aiohttp python-msgpack python-jinja python-syrupy python-nanoid python-click python-time-machine python-pytest-aiohttp python-pytest-asyncio)
optdepends=('python-aiohttp: for HTTP server'
  'python-click: for click event as mouse button'
  'python-msgpack: for MessagePack serializer'
  'python-nanoid: for generate unique string ID')
source=(${_base}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz)
sha512sums=('e089e246873665712db3170d2ed26075453acedebebfc69689b1151c072308f867ccaa882a444b5c264da711286110d2b150aa94c2777fa30101312b55699323')

build() {
  cd ${_base}-${pkgver}
  python -m build --wheel --skip-dependency-check --no-isolation
}

check() {
  cd ${_base}-${pkgver}
  python -m venv --system-site-packages test-env
  test-env/bin/python -m installer dist/*.whl
  test-env/bin/python -m pytest
}

package() {
  cd ${_base}-${pkgver}
  python -m installer --destdir="${pkgdir}" dist/*.whl

  # Symlink license file
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  install -d ${pkgdir}/usr/share/licenses/${pkgname}
  ln -s "${site_packages}/${_base}-${pkgver}.dist-info/LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}