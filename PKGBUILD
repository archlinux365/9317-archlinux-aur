# Maintainer: Bradley Cicenas <bradley.cicenas@gmail.com>
pkgname=slackcat
pkgver=${PKGVER:-autogenerated}
pkgrel=${PKGREL:-1}
pkgdesc="Commandline utility for posting snippets to Slack"
arch=('i686' 'x86_64')
license=('GPL')
depends=(
)
makedepends=(
	'go'
	'git'
)

source=(
	"slackcat::git://github.com/vektorlab/slackcat.git"
)

md5sums=(
	'SKIP'
)

backup=(
)

pkgver() {
	cat "$srcdir/$pkgname/VERSION"
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
	GO15VENDOREXPERIMENT=1 go get \
		-ldflags="-X main.version=$pkgver-$pkgrel"
}

package() {
	find "$srcdir/.go/bin/" -type f -executable | while read filename; do
		install -DT "$filename" "$pkgdir/usr/bin/$(basename $filename)"
	done
}
