# Maintainer: dreieck

# PKGBUILD last time manually edited: At least on 2017-12-17.

_year='18'
_prevyear="$(( ${_year} - 1 ))"

_pkgname="idos-timetable-data-chaps-trains-idol-20${_year}"
pkgname="${_pkgname}-latest"
epoch=0
pkgver=2018_1_22
pkgrel=1
pkgdesc="20${_prevyear}/20${_year} Timetable data for the timetable search engines by CHAPS: Trains in Liberec public transport reagion (IDOL). Note that this timetable needs the purchased version of IDOS to run."
arch=(any)
url="http://chaps.cz/eng/download/idos/zip#kotvatt"
license=('custom')

groups=(
        "idos-timetable"
       )

depends=(
         "idos-timetable-data-trains-common"
        )

makedepends=(
  "wget"
)

optdepends=(
            "idos-timetable-tariff-mhd-idol: For showing prices."
            "idos-timetable-maps-mhd-idol: For displaying routes on maps."
            "idos-timetable-additionalinfo-mhd-idol: For additional information."
            "idos-timetable-browser-license: To use this timetable."
           )

provides=(
  "${_pkgname}=${pkgver}"
  
  "idos-timetable-data=${pkgver}"
  "idos-timetable-data-trains=${pkgver}"
  
  "idos-timetable-data-trains-idol=${pkgver}"
  "idos-timetable-data-trains-idol-20${_year}=${pkgver}"
)

replaces=(
  'idos-timetable-data-chaps-trains-europe-latest'
  "${_pkgname}<=${pkgver}"
)

conflicts=(
  "${_pkgname}"
  ### The conflict will be handled by idos-timetable-data-chaps-all, if needed. Sometimes idos-timetable-data-chaps-all does not provide the train data, and then idos-timetable-data-chaps-all will depend on this package, thus this package should not have idos-timetable-data-chaps-all as conflict.
  # "idos-timetable-data-chaps-all"
)

_zipfile="VLAKIDOL${_year}.ZIP"
_target="vlakidol${_year}.zip"

source=(
  "${_target}::http://ttakt.chaps.cz/TTAktual/Win/Zip/${_zipfile}"
  "IDOS-Licence.pdf::http://chaps.cz/files/idos/IDOS-Licence.pdf"
  "license-dummy.txt"
)

sha256sums=(
  'SKIP'
  "e904d167ccdcfb2743f4cfd596aaa9dce8b751fb5c8315b972b42b7cbb3189e6"
  "c6bb216055d3670d3100b7a74e04ce0644030f365f4349a09e630ef60fbcb9a4"
)

pkgver() {
  # Do not use metadata of the source file, but do website parsing: So we do not need to download the file to (AUR-)update the package version with our own crude hacked script 'idos-aur-update-versions.sh'.
  #date -r "${srcdir}/${_target}" +"%Y_%m_%d"
  
  wget -nv -O- "${url}" | tr -d '\a' | tr '\n' '\a' | sed  's|^.*File '"${_zipfile}"'\(.*\)Zip/'"${_zipfile}"'.*$|\1\n|g' | tr '\a' '\n' | grep 'Update date:' | cut -d, -f1 | sed -r 's|([0-9]+)\.([0-9]+)\.([0-9]+).|\n\3_\2_\1\n|g' | grep -E '^[0-9]+_[0-9]+_[0-9]+'
}


package() {
  _instdirbase='/opt/idos-timetable'
  _instdir="${pkgdir}/${_instdirbase}"
  install -d -m755 "${_instdir}"

  cp -r "${srcdir}"/Data* "${_instdir}/"
  chmod 755 "${_instdir}"/Data*
  chmod 644 "${_instdir}"/Data*/*
  rm -f "${_instdir}/Data1"/[vV][lL][aA][kK].[tT][tT][rR] # This one is provided by idos-timetable-data-trains-common.

  install -d -m755 "${pkgdir}/usr/share/doc/${_pkgname}"
  echo "${url}" > "${pkgdir}/usr/share/doc/${_pkgname}/info.url"
  chmod 644 "${pkgdir}/usr/share/doc/${_pkgname}/info.url"

  install -D -m644 "${srcdir}/license-dummy.txt" "${pkgdir}/usr/share/licenses/${pkgname}/copying.txt"
  install -D -m644 "${srcdir}/IDOS-Licence.pdf" "${pkgdir}/usr/share/licenses/${pkgname}/IDOS-Licence.pdf"
}
