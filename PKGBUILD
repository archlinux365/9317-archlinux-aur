# Maintainer: Markus Richter <mqus at disroot dot org>

pkgname=bitwarden_rs-git
_pkgbase=bitwarden_rs
pkgver=r169.2f892cb
pkgrel=1
pkgdesc="An unofficial lightweight implementation of the bitwarden-server using rust and sqlite. Does NOT include the web-interface."
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/dani-garcia/bitwarden_rs"
license=('GPL3')
groups=()
makedepends=('rust-nightly' 'cargo-nightly')
depends=('openssl')
provides=("$_pkgbase") 
conflicts=("$_pkgbase" "${_pkgbase}-vault-git" "${_pkgbase}-vault") 
replaces=()
backup=('etc/bitwarden_rs.env')
options=()
install=bitwarden_rs.install
source=('git+https://github.com/dani-garcia/bitwarden_rs.git'
	"${_pkgbase}.install"
	"${_pkgbase}.service"
	"0001-Disable-Vault.patch")
noextract=()
sha512sums=('SKIP'
            'e7952d8a47b1b023b00d693ef43676e4e13f4820e27447b613be51ffa18f4880e02838fc7bcef0606d537606e950d6ca535acf03ca17b38edb3b6391fa8ca043'
            '773dc0830b4eaf3a1d4134a52a6157e6a94265c6212ae8cc24b9584f9c444b9a0f822325f487ce9c23c363f743f1f64f269352f030e98e336816aee0a68048f6'
            '704057f0bf6d71ab9888378c3d66ee97c5019e8b18d0f22f93615fef60bef7df80a11ad7ebf5cca1cc49c90ba3f9d84515a160555e395790f325510f8a81f5cd')


pkgver() {
	cd "$srcdir/$_pkgbase"
	( set -o pipefail
	    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
	    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	#build bitwarden_rs
	cd "$srcdir/$_pkgbase"
	patch -N -i "$srcdir/0001-Disable-Vault.patch"
	cargo build --release
}

package() {
	# setup systemd service
	install -D -m 0644 "$srcdir/bitwarden_rs.service" "$pkgdir/usr/lib/systemd/system/bitwarden_rs.service"
	# copy default config file
	install -D -m 0644 "$srcdir/$_pkgbase/.env" "$pkgdir/etc/bitwarden_rs.env"
	# copy binary
	install -D -m0755 "$srcdir/$_pkgbase/target/release/bitwarden_rs" "$pkgdir/usr/bin/bitwarden_rs"
}
