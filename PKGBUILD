# Maintainer: Yen Chi Hsuan <yan12125 at gmail.com>
# Contributor: Nicolas Quiénot < niQo at aur >
# Contributor: Jens Staal <staal1978@gmail.com>

pkgname=libpthread_workqueue-git
_github_addr=mheily/libpwq
pkgver=20140727
pkgrel=2
pkgdesc="a portable implementation of the pthread_workqueue API first introduced in Mac OS X."
url="https://github.com/mheily/libpwq"
arch=('i686' 'x86_64')
license=('BSD')
depends=('glibc')
makedepends=('git')
provides=('libpthread_workqueue' 'libpthread_workqueue-libpthread')
source=("${pkgname}"::"git+https://github.com/$_github_addr")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname}"
    git log -1 --format='%cd' --date=short | tr -d -- '-'
}

build() {
    cd "${srcdir}/${pkgname}"

    autoreconf --install --symlink --verbose
    ./configure --prefix=/usr

    make
}

package() {
    cd "${srcdir}/${pkgname}"
    make DESTDIR=$pkgdir install
    install -Dvm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
