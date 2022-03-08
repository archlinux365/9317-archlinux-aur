# Maintainer: Mario Blättermann <mario.blaettermann@gmail.com>

pkgname=man-pages-vi-git
_gitname=manpages-l10n
pkgver=r18108.9abf390d26
pkgrel=1
pkgdesc="Vietnamese man pages (Git version)"
arch=('any')
url="https://salsa.debian.org/manpages-l10n-team/manpages-l10n"
license=('GPL3')
conflicts=('man-pages-vi')
depends=('man')
makedepends=('po4a' 'git')
options=('!emptydirs')
source=("${_gitname}::git+https://salsa.debian.org/manpages-l10n-team/manpages-l10n.git")
sha512sums=('SKIP')

pkgver() {
  cd "${_gitname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}"/manpages-l10n
  ./configure --prefix=/usr --enable-distribution=archlinux
  
  cd po/vi
  make
}

package() {
  cd "${srcdir}"/manpages-l10n/po/vi

  make DESTDIR="${pkgdir}" install
}
