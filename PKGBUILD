# maintainer: libele <libele@disroot.org>

pkgname=inform7-git
_gitpkg=inform
pkgver=r1497.e0a9a9eb1
pkgrel=3
pkgdesc="A design system for interactive fiction based on natural language (git version)"
arch=('aarch64' 'arm' 'armv6h' 'armv7h' 'i686' 'pentium4' 'x86_64')
url="https://ganelson.github.io/inform"
license=('Artistic2.0')
makedepends=('rsync')
provides=('inform' 'inform7')
conflicts=('inform7')
groups=(inform)
install=inform7.install

source=('git+https://github.com/ganelson/inform'
	'git+https://github.com/ganelson/inweb'
	'git+https://github.com/ganelson/intest'
	'make-integration-settings.mk'
	'wrapper.sh')

md5sums=('SKIP'
	 'SKIP'
	 'SKIP'
	 'e068ffd6869177fae89a34dbe96bdf5d'
	 '88a7cefc597fdc719866b72c256166c6')

pkgver() {
  cd "${_gitpkg}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}"

  bash inweb/scripts/first.sh linux
  bash intest/scripts/first.sh

  cd "${_gitpkg}"
  bash scripts/first.sh
  ../intest/Tangled/intest inform7 -show Acidity
  # make check

  # make -C .. -f inweb/inweb.mk
  # make -C .. -f intest/intest.mk
  # make
}

package() {
  cd "${_gitpkg}"
  make forceintegration
  # make retrospective
  # cp -a retrospective DEST

  cd "${srcdir}"
  cp -a dist/* "${pkgdir}"

  install -Dm755 wrapper.sh "${pkgdir}/usr/bin/inform7"
}
