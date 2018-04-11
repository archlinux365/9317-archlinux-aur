# Maintainer: Rolf van Kleef <aur@rolfvankleef.nl>
# Contributor: Gregory Goijaerts <crecketgaming@gmail.com>
# Contributor: Dennis Snijder <dennissnijder97@gmail.com>
# Contributor: Nick Duijvelshoff <nick@duijvelshoff.com>
# Contributor: basst85 <bastiaan85@gmail.com>
# Contributor: Kees Kluskens
# Contributor: TimZ99
# Contributor: Emile Bons

pkgname="bunq-desktop-src"
pkgver="0.8.2"
pkgrel=1
pkgdesc="A desktop implementation for the bunq API"
url="https://github.com/BunqCommunity/BunqDesktop"
provides=('bunq-desktop')
conflicts=(
	'bunq-desktop-git'
	'bunq-desktop-bin'
)

arch=(
	'x86_64'
)

license=(
	'MIT'
)

depends=(
	'nodejs'
)

makedepens=(
	'git'
	'yarn'
)

source=(
	"https://github.com/BunqCommunity/BunqDesktop/archive/${pkgver}.tar.gz"
	"bunq-desktop-src.desktop"
)

sha256sums=(
	"a454aee04f3397b551000362ef2883ad4584a9eb37f2b9d5f311487aebf74ecc"
	"1d84f185830733bb38928fcaa33ffc0ba46140f7f116b4d5ad24c93a585a0ffa"
)

build() {
	cd BunqDesktop-$pkgver

	# Generate release files
	yarn && yarn release
}

package() {
	mkdir $pkgdir/usr
	mkdir $pkgdir/usr/bin
	mkdir $pkgdir/usr/share
	mkdir $pkgdir/usr/share/pixmaps
	mkdir $pkgdir/opt

	cp -R\
		BunqDesktop-$pkgver/dist/linux-unpacked\
		$pkgdir/opt/$pkgname

	cp -R\
		BunqDesktop-$pkgver/LICENSE\
		$pkgdir

	cp\
		BunqDesktop-$pkgver/build/icons/512x512.png\
		$pkgdir/usr/share/pixmaps/bunq.png
	
	pushd $pkgdir/usr/bin

	ln -s\
		../../opt/$pkgname/bunqdesktop\
		bunq-desktop-src

	popd

	desktop-file-install\
		$pkgname.desktop\
		--dir $pkgdir/usr/share/applications/
}

