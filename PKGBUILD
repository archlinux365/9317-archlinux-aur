pkgname=bbdown-git
pkgver=r323.8f07002
pkgrel=1
pkgdesc="一款命令行式哔哩哔哩下载器. Bilibili Downloader."
arch=("x86_64" "aarch64")
url="https://github.com/nilaoda/BBDown"
license=("MIT")
depends=("zlib" "gcc-libs")
makedepends=("git" "dotnet-sdk>=7")
optdepends=("ffmpeg: 混流用")
provides=("bbdown")
conflicts=("bbdown")
source=('git+https://github.com/nilaoda/BBDown.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/BBDown"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/BBDown"
	if "$CARCH" = "aarch64"
	then
	dotnet publish BBDown -r linux-arm64 -c Release -o artifact
	else
	dotnet publish BBDown -r linux-x64 -c Release -o artifact
	fi
}

package() {
	mkdir -p "$pkgdir/usr/bin"
	cp "$srcdir/BBDown/artifact/BBDown" "$pkgdir/usr/bin"
}
