pkgname=gometalinter-git
pkgver=20151117.138_a2e60f2
pkgrel=1
pkgdesc="golang meta linter"
arch=('i686' 'x86_64')
license=('GPL')
makedepends=('go' 'git')

source=(
    "gometalinter-git::git://github.com/alecthomas/gometalinter"
)

md5sums=(
    'SKIP'
)

depends=('go' 'git')

backup=(
)

pkgver() {
    cd "$srcdir/$pkgname"
    local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
    local count=$(git rev-list --count HEAD)
    local commit=$(git rev-parse --short HEAD)
    echo "$date.${count}_$commit"
}

build() {
    cd "$srcdir/$pkgname"

    if [ -L "$srcdir/$pkgname" ]; then
        rm "$srcdir/$pkgname" -rf
        mv "$srcdir/.go/src/$pkgname/" "$srcdir/$pkgname"
    fi

    rm -rf "$srcdir/.go/src"

    mkdir -p "$srcdir/.go/src"

    export GOPATH="$srcdir/.go"

    mv "$srcdir/$pkgname" "$srcdir/.go/src/"

    cd "$srcdir/.go/src/$pkgname/"
    ln -sf "$srcdir/.go/src/$pkgname/" "$srcdir/$pkgname"

    git submodule init
    git submodule update

    echo "Running 'go get'..."
    GO15VENDOREXPERIMENT=1 go get

    echo "Running 'gometalinter --install --update'..."
    mv "$srcdir/.go/bin/$pkgname" "$srcdir/.go/bin/gometalinter"
    "$srcdir/.go/bin/gometalinter" --install --update
}

package() {
    find "$srcdir/.go/bin/" -type f -executable | while read filename; do
        install -DT "$filename" "$pkgdir/usr/bin/$(basename $filename)"
    done
}
