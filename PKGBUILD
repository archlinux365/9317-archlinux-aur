pkgname='rumtricks-git'
_pkgname=${pkgname%-git}
pkgver=r154.cd72058
pkgrel=1
pkgdesc='Winetricks alternative'
arch=('x86_64')
url='https://johncena141.eu.org:8141/johncena141/rumtricks'
license=('GPL3')
depends=(curl zstd wine jq)
provides=('rumtricks')
source=("https://johncena141.eu.org:8141/johncena141/rumtricks/raw/branch/main/rumtricks.sh")
md5sums=('SKIP')

prepare() {
  # needed for versioning
  rm -rf "$srcdir/rumtricks"
  git clone https://johncena141.eu.org:8141/johncena141/rumtricks.git --filter=blob:none --filter=tree:0 --no-checkout --single-branch "$srcdir/rumtricks"
}

pkgver() {
    cd "$srcdir/rumtricks"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    install -Dm755 "rumtricks.sh" "$pkgdir/usr/bin/$_pkgname"
}
