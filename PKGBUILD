# Maintainer: dreieck

# PKGBUILD last time manually edited: At least on 2016-12-11.

_pkgname=idos-package-updater-script
pkgname="${_pkgname}"
epoch=0
pkgver=20190825.1
pkgrel=4
pkgdesc="Bash script which automates the process of updating installed IDOS timetable browser related packages by reinstalling and thus fetching the newest version."
arch=('any')
license=('custom')

groups=(
        "idos-timetable"
       )

depends=(
  "util-linux" # for 'column'-executable.
  "pacman"
  "yaourt"
)

makedepends=()

optdepends=()

provides=()

conflicts=()

replaces=()


source=(
  "idos-packages-update.sh::http://ix.io/1TLQ"
  "copying.txt"
)

sha256sums=(
  "c17fbec61a0348c4e070b74a27686bee8415a03f5d5295453033a8dd50019d7e"
  "c3cbff25307e905545788f5c74cc137d79706c60549092f2a37919b93cf55ee3"
)


pkgver() {
  cd "${srcdir}"
  ./idos-packages-update.sh --version
}


prepare() {
  chmod a+x "${srcdir}/idos-packages-update.sh"
}


package() {
  _instdirbase='/opt/idos-timetable'
  _instdir="${pkgdir}/${_instdirbase}"
  _licdirbase="/usr/share/licenses/${pkgname}"
  _licdir="${pkgdir}/${_licdirbase}"
  _execdirbase='/usr/bin'
  _execdir="${pkgdir}/${_execdirbase}"
  
  install -v -D -m755 "${srcdir}/idos-packages-update.sh" "${_instdir}/idos-packages-update.sh"
  install -v -D -m644 "${srcdir}/copying.txt" "${_licdir}/copying.txt"
  install -v -d -m755 "${_execdir}"

  ln -sv "${_instdirbase}/idos-packages-update.sh" "${_execdir}/"
}
