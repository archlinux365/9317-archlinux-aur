# Maintainer: schalox <schalox at gmail dot com>
# Contributor: Simon Zimmermann <simon@insmo.com>
# Contributor: Jon Yamokoski <code@jonyamo.us>

pkgname=pass-git
pkgver=20160207.413
pkgrel=1
pkgdesc='Stores, retrieves, generates, and synchronizes passwords securely'
url='http://www.passwordstore.org/'
license=('GPL2')
arch=('any')
depends=('bash' 'git' 'gnupg' 'grep' 'pwgen' 'tree>=1.7.0' 'xclip')
makedepends=('git')
provides=('pass' 'passmenu')
conflicts=('pass' 'passmenu')
source=("$pkgname::git://git.zx2c4.com/password-store")
sha256sums=('SKIP')

pkgver() {
    cd "$pkgname"
    local _tmpver="$(git log -n 1 --format="%cd" --date=short)."
    local _tmpver+="$(git rev-list --count HEAD)"
    echo "${_tmpver//-/}"
}
package() {
    cd "$pkgname"
    make FORCE_ALL=1 DESTDIR="${pkgdir}" install

    cd contrib/dmenu
    install -Dm0755 passmenu "${pkgdir}/usr/bin/passmenu"
}
