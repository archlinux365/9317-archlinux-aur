# Maintainer: Romain Gallet <rgallet@grumlimited.co.uk>
# Contributor: Romain Gallet <rgallet@grumlimited.co.uk>
_packager="Romain Gallet <rgallet@grumlimited.co.uk>"
_deb_pkgname=authenticator-rs
pkgname=$_deb_pkgname-bin
md5sums=('1f7aa58d2d8aef0800bce659117a6c5b')
pkgver=0.3.13
pkgrel=1
pkgdesc='MFA Authenticator. TOTP-MFA application written in Rust and GTK3.'
arch=('x86_64')
url="https://github.com/grumlimited/authenticator-rs"
license=('GPL3')
groups=()
depends=('gtk3' 'sqlite')
makedepends=()
checkdepends=()
optdepends=()
provides=()
replaces=()
backup=()
options=()
source=("$url/releases/download/$pkgver/authenticator-rs-$pkgver-$arch.deb")
noextract=()

build() {
	rm control.tar.xz
	tar xvf data.tar.xz
}

package() {
	cp -fr usr/ ${pkgdir}
}
