# Maintainer: Léopold Koprivnik Ibghy <skwal.net@gmail.com>
pkgbase="linux-on-drugs"
pkgname="linux-on-drugs-git"
pkgver="r4.841a229"
pkgrel=2
pkgdesc="Gives drugs to your terminal"
arch=(x86_64 i686)
url="https://github.com/SkwalExe/linux-on-drugs"
license=('MIT')
makedepends=("git" "rustup")
provides=("linux-on-drugs")
install=linux-on-drugs.install
source=("git+$url")
md5sums=("SKIP")

pkgver() {
	cd linux-on-drugs
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd linux-on-drugs
        rustup install stable
      
        sudo rm -rf /usr/bin/linux-on-drugs
}

build() {
	cd linux-on-drugs       
	cargo build --release
}


package() {
	cd linux-on-drugs
	mkdir -p ${pkgdir}/opt/${pkgname}
        cp -rf * ${pkgdir}/opt/${pkgname}
	install -Dm755 ./target/release/linux-on-drugs "$pkgdir/usr/bin/linux-on-drugs"
        install -Dm644 ./README.md "$pkgdir/usr/share/doc/$pkgname"
}
