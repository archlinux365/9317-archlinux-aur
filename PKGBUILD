# Maintainer: Deposite Pirate <dpirate at metalpunks dot info>
#
# Upstream: https://git.metalpunks.info/arch-ports

_pkgname=gopherus
_pkgver=1.1
pkgname=$_pkgname-svn
pkgver=1.1.r123
pkgrel=1
pkgdesc="Gopher client"
arch=('i686' 'x86_64')
url="http://gopherus.sourceforge.net"
license=('BSD')
depends=('ncurses')
optdepends=('sdl2')
makedepends=('subversion')
conflicts=('gopherus')
provides=('gopherus')
source=("$_pkgname::svn://svn.code.sf.net/p/gopherus/code"
        'gopherus.desktop')
sha256sums=('SKIP'
            'b01f1fa220cb788edf5c743a35aeff169f62eefee19d5f6dee96274e8c8cfd21')

pkgver() {
  cd "${_pkgname}"
  local ver="$(svnversion)"
  printf "${_pkgver}.r%s" "${ver//[[:alpha:]]}"
}

build() {
  cd "${_pkgname}/trunk"
  make -f Makefile.lin CFLAGS="${CFLAGS}"
}

package() {
  cd "${_pkgname}/trunk"

  install -dm755 "${pkgdir}/usr/bin"
  install -m755 gopherus gopherus-sdl "${pkgdir}/usr/bin"

  install -dm755 "${pkgdir}/usr/share/doc/${_pkgname}"
  install -m644 gopherus.txt history.txt \
   "${pkgdir}/usr/share/doc/${_pkgname}"

  install -dm755 "${pkgdir}/usr/share/licenses/${_pkgname}"
  (
    cd "${pkgdir}/usr/share/licenses/${_pkgname}"
    ln -s /usr/share/doc/${_pkgname}/gopherus.txt LICENSE
  )

  install -Dm644 icon.svg \
   "${pkgdir}/usr/share/icons/hicolor/scalable/apps/${_pkgname}.svg"

  install -Dm644 "${srcdir}/gopherus.desktop" \
   "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
}
