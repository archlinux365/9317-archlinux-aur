# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: S. Leduc <sebastien@sleduc.fr>
# Contributor: redfish <redfish@galactica.pw>
# Contributor: Amr Hassan <amr.hassan@gmail.com>
# Contributor: Nathan Owe <ndowens.aur at gmail dot com>
# Contributor: G. Richard Bellamy <rbellamy@pteradigm.com>

## Using the tarball from PyPI because it's smaller, thus easier on bandwidth

pkgname=flexget
_pkgname=FlexGet
pkgver=3.3.26
pkgrel=1
pkgdesc='Multipurpose automation tool for downloading media content from different sources'
arch=('any')
url='https://github.com/flexget/flexget'
license=('MIT')
depends=(
  # documented in requirements.in
  'python-apscheduler'
  'python-beautifulsoup4'
  'python-cherrypy'
  'python-click'
  'python-colorama'
  'python-colorclass'
  'python-dateutil'
  'python-feedparser'
  'python-flask'
  'python-flask-compress'
  'python-flask-cors'
  'python-flask-login'
  'python-flask-restful'
  'python-flask-restx'
  'python-guessit'
  'python-html5lib'
  'python-jinja'
  'python-jsonschema'
  'python-loguru'
  'python-more-itertools'
  'python-packaging'
  'python-psutil'
  'python-pynzb'
  'python-pyparsing'
  'python-pyrss2gen'
  'python-rebulk'
  'python-requests'
  'python-rich'
  'python-rpyc'
  'python-sqlalchemy'
  'python-terminaltables'
  'python-yaml'
  'python-zxcvbn'
)
optdepends=(
  'python-boto3: SNS output plugin'
  'python-rarfile: decompress plugin'
  'python-transmissionrpc: Transmission support'
)
makedepends=(
  'python-build'
  'python-installer'
  'python-paver'
  'python-setuptools'
  'python-wheel'
)
source=(
  "$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/F/$_pkgname/$_pkgname-$pkgver.tar.gz"
  'flexget.service'
  'flexget@.service')
sha256sums=('487911fa44e26e3f1126017d87d4b4a7d1f09553390bb9788d033db755d2388a'
            'e2c3a958ed0c286337cd37fba1d6cbdf4306c57fcddf2b9cc43615ce80ae83aa'
            'aceecee5496a34c14c12ed5ad8b97197de32896f358b5aef63a84bf4a419756a')

prepare() {
  cd "$_pkgname-$pkgver"

  # Remove specific versions, because they are not going to match
  # versions of Arch packages. Yes, this might break something.
  sed -i 's/[=<~]=.*//g' requirements.txt

  ## zxcvbn-python has been renamed zxcvbn
  sed -i 's/zxcvbn-python/zxcvbn/' requirements.txt

  # Prebuilt egg-info erroneously includes tests in final package
  rm -rf "$_pkgname.egg-info"
}

build() {
  cd "$_pkgname-$pkgver"

  # Build wheel according to new Python packaging guidelines
  python -m build --wheel --no-isolation
}

package() {
  cd "$_pkgname-$pkgver"

  # Install wheel according to new Python packaging guidelines
  # PYTHONHASHSEED is for reproducible builds
  PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir" dist/*.whl

  # Symlink license instead of installing a copy
  local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
  install -d "$pkgdir/usr/share/licenses/$pkgname/"
  ln -s "$_site/$_pkgname-$pkgver.dist-info/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/"

  # install systemd user unit
  install -Dm644 "$srcdir/$pkgname"{,@}.service -t "$pkgdir/usr/lib/systemd/user/"
}
# vim:set ts=2 sw=2 et:
