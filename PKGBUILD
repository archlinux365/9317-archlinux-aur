# Maintainer: Sundeep Mediratta <smedius@gmail.com>

_pkgver='11'

_basename='desktop-icons-ng'
_extname="gtk4-${_basename}"
_shellextension='gnome-shell-extension'
_uuid='gtk4-ding@smedius.gitlab.com'

pkgname="${_shellextension}-${_extname}"
pkgver="${_pkgver}"
pkgrel=1
pkgdesc="A Gtk4 fork from the official desktop icons project, with several enhancements for gnome shell 40, 41, 43"
arch=('x86_64' 'i686')
url="https://extensions.gnome.org/extension/5263/gtk4-desktop-icons-ng-ding"
license=('GPL3')
depends=('gnome-shell')
makedepends=('git' 'meson' 'glib2')
conflicts=("${_shellextension}-${_basename}-git" "${_shellextension}-${_basename}")

source=("${_extname}-${pkgver}.tar.gz::https://gitlab.com/smedius/${_basename}/-/archive/${_pkgver}/${_basename}-${_pkgver}.tar.gz")
sha256sums=('ce0467c2c8ed41745561eab656c65b1cc2e8e0f19850608d3f85991d804ad7b4')
sha512sums=('32f46b394a6edebeb9dfca2ee6b3d8fa1fa02ee7ef91e6beaf1d691a4378564978d52534bb70144d6a2d44ebcbae2f308a3060c6727cc0891cc39a2c3a36bba7')

package() {

    cd "${srcdir}"

    install -dm755 "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}"

    # taken from scripts/export-zip.sh
    if [[ -d "${_extname}-${_pkgver}"  ]]; then
        local _repodir="${srcdir}/${_basename}-${_pkgver}"
    else
        local _repodir="${srcdir}/${_basename}-${pkgver}"
    fi
    local _build_dir="${_repodir}/builddir"
    local _local_prefix="${_repodir}/${_uuid}"
    local _extension_dir="${_local_prefix}/share/gnome-shell/extensions/${_uuid}"
    local _schemadir="${_local_prefix}/share/glib-2.0/schemas"
    cp "${_repodir}/scripts/meson.build" "${_repodir}/"
    meson --prefix="${_local_prefix}" --localedir=locale "${_build_dir}" "${_repodir}"
    ninja -C "${_build_dir}" install

    cd "${_local_prefix}"
    mkdir -p schemas
    cp "${_schemadir}"/*.xml schemas/
    glib-compile-schemas schemas/
    cp -r "${_extension_dir}"/* .

    cp -dpr --no-preserve=ownership {*.js,*.json,app,utils,locale,schemas} "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}"

}
