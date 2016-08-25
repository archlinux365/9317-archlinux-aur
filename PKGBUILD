pkgname="shxkd"
pkgver=${PKGVER:-autogenerated}
pkgrel=${PKGREL:-1}
pkgdesc="Simple X Hotkey Daemon"
arch=("i686" "x86_64")
license=("GPL")
depends=()
source=(
    "$pkgname::git://github.com/baskerville/sxhkd"
)
md5sums=("SKIP")

pkgver() {
    cd "$srcdir/$pkgname"
    local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
    local count=$(git rev-list --count HEAD)
    local commit=$(git rev-parse --short HEAD)
    echo "$date.${count}_$commit"
}

build() {
    cd "$srcdir/$pkgname"

    make
    PREFIX="$srcdir/$pkgname/build" make install
}

package() {
    cp -r \
        "$srcdir/$pkgname/build" \
        "$pkgdir/usr"
}
