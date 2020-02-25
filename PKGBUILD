# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Joost Bremmer <contact at madeofmagicandwires dot online>
# Contributor: Bogdan <d0xi at inbox dot ru>
pkgname=cheat
pkgver=3.6.0
pkgrel=2
pkgdesc="Allows you to create and view interactive cheatsheets on the command-line"
arch=('arm' 'armv6h' 'armv7h' 'x86_64')
url="https://github.com/cheat/cheat"
license=('MIT' 'CC0 1.0 Universal')
makedepends=('go-pie' 'git')
optdepends=('bash-completion: for bash completions'
            'fzf: Fuzzy Finder integration for bash-completion'
            'fish: for fish completions')
conflicts=("python-$pkgname" "$pkgname-bash-git" "$pkgname-git")
replaces=("python-$pkgname")
backup=("etc/$pkgname/conf.yml")
source=("$pkgname-$pkgver.tar.gz::https://github.com/$pkgname/$pkgname/archive/$pkgver.tar.gz"
        'conf.yml'
        "git+https://github.com/$pkgname/cheatsheets.git"
        "https://raw.githubusercontent.com/$pkgname/cheatsheets/master/.github/LICENSE.txt")
sha256sums=('8441c94d12b6a6f088818c8cabd91f75bc583bee3c66dac7a53851ae1032862f'
            'd2f0e84c1fccb5916ee42d1696f04aa998aee30fb0173dbbe40926e770fe5bfd'
            'SKIP'
            'a2010f343487d3f7618affe54f789f5487602331c0a8d03f49e9a7c547cf0499')

prepare() {

	# Add /etc/$pkgname/ to config file path
	cd "$pkgname-$pkgver"
	sed -i '39 i\
			path.Join("/etc/cheat/conf.yml"),' internal/config/paths.go

	# create gopath
	mkdir -p "$srcdir/gopath"
	export GOPATH="$srcdir/gopath"

	# fetch dependencies
	msg "Fetching Go dependencies"
	cd "$srcdir/$pkgname-$pkgver"
	go get -d ./...
}

build() {
	cd "$pkgname-$pkgver"
	GOOS=linux \
	GOARCH=amd64 \
	go build \
		-v \
		-trimpath \
		-buildmode=pie \
		-gcflags "all=-trimpath=$srcdir" \
		-asmflags "all=-trimpath=$srcdir" \
		-ldflags "-extldflags $LDFLAGS" \
		-o "./dist/$pkgname" "./cmd/$pkgname"

	# Clean mod cache for makepkg -C
	go clean -modcache
}

package() {
	cd "$pkgname-$pkgver"
	install -Dm755 "dist/$pkgname" -t "$pkgdir/usr/bin"
	install -Dm755 "scripts/$pkgname.bash" \
		"$pkgdir/usr/share/bash-completion/completions/$pkgname"
	install -Dm755 "scripts/$pkgname.fish" -t "$pkgdir/usr/share/fish/completions"
	install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/$pkgname-LICENSE"

	install -dm755 "$pkgdir/usr/share/$pkgname/cheatsheets/community"
	find "$srcdir/cheatsheets" \
		-maxdepth 1 \
		-type f \
		-perm 644 \
		-exec \
			install -m644 "{}" \
			"$pkgdir/usr/share/$pkgname/cheatsheets/community/" \;
	install -Dm644 "$srcdir/conf.yml" -t "$pkgdir/etc/$pkgname"
	install -Dm644 "$srcdir/LICENSE.txt" \
		"$pkgdir/usr/share/licenses/$pkgname/cheatsheets-LICENSE"
}
