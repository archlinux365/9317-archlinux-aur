# Maintainer: dreieck

# PKGBUILD last time manually edited: At least on 2022-05-04.

_year='22'

_fullyear="20${_year}"

_pkgname="idos-timetable-data-zsr-europe+sk"
pkgname="${_pkgname}"
epoch=0
pkgver="${_fullyear}"
pkgrel=1
pkgdesc="Metapackage designed to depend on the latest ${_pkgname} data package."
arch=(any)
url="https://www.inprop.eu/Home/Downloads"
license=('custom: public domain')

groups=(
        "idos-timetable"
       )

depends=(
         "${_pkgname}-${_fullyear}"
        )

makedepends=()
optdepends=()
provides=()
replaces=()
conflicts=()

source=(
  "license-metapackage-pd.txt"
)

sha256sums=(
  "1e86f8ac1ad7315c76f4db8bf6a1dbdde6825ac95ff468e431bbe452b6865ae6"
)

package() {
  install -D -m644 "${srcdir}/license-metapackage-pd.txt" "${pkgdir}/usr/share/licenses/${pkgname}/copying.txt"
}
