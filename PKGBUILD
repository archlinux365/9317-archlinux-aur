# Maintainer: Pellegrino Prevete <pellegrinoprevete@gmail.com>
# Contributor: John Beard <john.j.beard@gmail.com>

# shellcheck disable=SC2034
_pkgname=daty
pkgname=$_pkgname-git
pkgver=1.0beta+78+g81b9736
pkgrel=4
pkgdesc='Daty Wikidata Editor'
url='https://gitlab.gnome.org/World/daty'
license=('AGPLv3')
arch=('any')
depends=('libhandy0' 'python-appdirs' 'python-bleach' 'python-beautifulsoup4' 'python-gobject' 'python-requests' 'python-setproctitle' 'python-pywikibot')
makedepends=('git' 'python-setuptools')
provides=($_pkgname)
conflicts=($_pkgname)
source=("$_pkgname::git+$url.git")
sha512sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/-/+/g'
}

# shellcheck disable=SC2154
package() {
    cd "${_pkgname}"
    python3 setup.py install --root="${pkgdir}" --optimize=1
}

check() (
  glib-compile-schemas "${GSETTINGS_SCHEMA_DIR:=$PWD/$_pkgname/data}"
  export GSETTINGS_SCHEMA_DIR
)
