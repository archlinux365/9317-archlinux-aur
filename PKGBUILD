# Maintainer: Llewelyn Trahaearn <WoefulDerelict at GMail dot com>

pkgname="gnome-shell-extension-easyscreencast-git"
pkgver=0.9.7.1.r4.gef69b61
pkgrel=2
pkgdesc="Provides a convienent top bar pop-down interface to configure the GNOME Shell Screencast Recording feature."
arch=('any')
url="https://github.com/iacopodeenosee/EasyScreenCast"
license=('GPL3')
depends=('gnome-shell')
makedepends=('git')
provides=('gnome-shell-extension-easyscreencast')
conflicts=('gnome-shell-extensions-git' 'gnome-shell-extensions-easyscreencast')
install="gschemas.install"
source=("${pkgname}::git+https://github.com/iacopodeenosee/EasyScreenCast.git")
sha512sums=('SKIP')
_branch=master

pkgver() {
  cd "${srcdir}/${pkgname}"
  git checkout ${_branch} --quiet
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "${srcdir}/${pkgname}"
  git checkout ${_branch}
}

package() {
  cd "${srcdir}/${pkgname}"
  # Locate the extension.
  _extname=$(grep -Po '(?<="uuid": ")[^"]*' metadata.json)
  _destdir="${pkgdir}/usr/share/gnome-shell/extensions/${_extname}"
  # Copy extension files into place.
  find -maxdepth 1 \( -iname '*.js*' -or -iname '*.css' -or -iname '*.ui' -or -iname '*.gtkbuilder' \) -exec install -Dm644 -t "${_destdir}" '{}' +
  find -maxdepth 2 \( -iname '*.svg*' \) -exec install -Dm644 -t "${_destdir}/images" '{}' +
  find -maxdepth 2 \( -wholename '*schemas/*' \) -exec install -Dm644 -t "${_destdir}/schemas" '{}' +
  cd "${srcdir}/${pkgname}/locale"
  for locale in */
    do
      install -Dm644 -t "${_destdir}/locale/${locale}/LC_MESSAGES" "${locale}/LC_MESSAGES"/*.mo
    done
  cd "${srcdir}/${pkgname}/locale-UI"
  for locale in */
    do
      install -Dm644 -t "${_destdir}/locale-UI/${locale}/LC_MESSAGES" "${locale}/LC_MESSAGES"/*.mo
    done
}
