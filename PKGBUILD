# Maintainer: Ammon Smith <ammon.i.smith@gmail.com>

_pkgname=qotd
pkgname="$_pkgname-git"
pkgver=0.9.4.9e67b89
pkgrel=1
pkgdesc="A simple RFC 865-compliant QOTD (quote of the day) daemon. (git version)"
arch=('any')
url="https://gitlab.com/ammongit/$_pkgname"
license=('GPL')
depends=('glibc')
makedepends=('git' 'gcc' 'ghostscript' 'gzip')
optdepends=()
provides=("$_pkgname")
conflicts=("$_pkgname")
options=('!zipman')
install="$pkgname.install"
source=("git+https://gitlab.com/ammongit/$_pkgname.git")
sha256sums=('SKIP')
backup=('etc/qotd.conf')

pkgver() {
	cd "$srcdir/$_pkgname"
    local _ver="$(git describe --tags | sed 's/-/_/g')"
    printf '%s.%s' "${_ver:1}" "$(git describe --always)"
}

build() {
    cd "$srcdir/$_pkgname"
	make release
}

package() {
    cd "$srcdir/$_pkgname"
	make ROOT="$pkgdir" SYSTEMD=1 install
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}

# vim: set ft=sh noet:
