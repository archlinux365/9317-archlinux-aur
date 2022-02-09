# Maintainer: Célestin Matte aur [at] ploudseeker dot com
# Contributor: tealeaf joss-arch@pseudonymity.net
# Contributor: ormris ormris@ormris.com

pkgname="wyrd"
pkgver=1.5.2
pkgrel=1
pkgdesc="A text-based front-end to Remind."
arch=('i686' 'x86_64')
url="https://gitlab.com/wyrd-calendar/wyrd"
license=('GPL2')
provides=('wyrd')
conflicts=('wyrd')
depends=('remind' 'ncurses' 'less')
makedepends=('git' 'ocaml' 'camlp5' 'python' 'autoconf' 'opam')
# doc: 'hevea' 'texlive-core' 'texlive-latexextra'
replaces=('wyrd-git')
source=("${url}/-/jobs/artifacts/${pkgver}/raw/wyrd-${pkgver}.tar.xz?job=release")
md5sums=('2d24fb827e99f21a838723a8d1cb1c22')

build() {
        cd "$srcdir/wyrd-${pkgver}"
        opam init -n
        opam install -y curses
        eval "$(opam env)"
        ./prep-devtree.sh
        ./configure --exec-prefix=/usr --prefix=/usr --sysconfdir=/etc
	make wyrd
}

package() {
        cd "$srcdir/wyrd-${pkgver}"
	make DESTDIR="$pkgdir/" install
}
