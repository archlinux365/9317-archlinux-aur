# Maintainer: TheJonsey <mail@thejonsey.com>
pkgname=streamdeckd
_pkgname=streamdeckd
pkgver=${PKGVER:-autogenerated}
pkgrel=${PKGREL:-1}
pkgdesc="A Linux Driver for the Elgato Streamdeck"
arch=('i686' 'x86_64')
url='https://github.com/unix-streamdeck/streamdeckd'
license=('BSD-3')
depends=(
	'libusb'
	'xdotool'
	'xdg-utils'
)
makedepends=(
	'go'
	'git'
)

source=(
	"$_pkgname::git+git://github.com/unix-streamdeck/streamdeckd#branch=${BRANCH:-master}"
	"50-elgato.rules"
	"streamdeckd.service"
)

md5sums=(
	'SKIP'
	'c181439b9cd1c7905c37dcaa8c53580f'
	'113449dd0ba48054b4c3300442e71775'
)

backup=(
	"etc/udev/rules.d/50-elgato.rules"
)

pkgver() {
	if [[ "$PKGVER" ]]; then
		echo "$PKGVER"
		return
	fi

	cd "$srcdir/$_pkgname"
	local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
	local count=$(git rev-list --count HEAD)
	local commit=$(git rev-parse --short HEAD)
	echo "$date.${count}_$commit"
}

build() {
	cd "$srcdir/$_pkgname"

	if [ -L "$srcdir/$_pkgname" ]; then
		rm "$srcdir/$_pkgname" -rf
		mv "$srcdir/go/src/$_pkgname/" "$srcdir/$_pkgname"
	fi

	rm -rf "$srcdir/go/src"

	mkdir -p "$srcdir/go/src"

	export GOPATH="$srcdir/go"

	mv "$srcdir/$_pkgname" "$srcdir/go/src/"

	cd "$srcdir/go/src/$_pkgname/"
	ln -sf "$srcdir/go/src/$_pkgname/" "$srcdir/$_pkgname"

	echo ":: Updating git submodules"
	git submodule update --init

	echo ":: Building binary"
	go get -v \
		-gcflags "-trimpath $GOPATH/src"
}

package() {
	find "$srcdir/go/bin/" -type f -executable | while read filename; do
		install -DT "$filename" "$pkgdir/usr/bin/$(basename $filename)"
	done
	install -DT -m0755 "$srcdir/50-elgato.rules" "$pkgdir/etc/udev/rules.d/50-elgato.rules"
	install -DT -m0755 "$srcdir/streamdeckd.service" "$pkgdir/usr/lib/systemd/user/streamdeckd.service"
	echo "To enable and start the service:"
	echo -e "systemctl --user enable --now streamdeckd.service"
	echo -e "A reboot might be required for streamdeckd to work correctly."
}
