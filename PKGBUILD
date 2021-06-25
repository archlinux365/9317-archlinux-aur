# Maintainer: garionion <garionion@entr0py.de>

pkgname=psst-git
_pkgname="psst"
pkgver=r213.4ee0b48
pkgrel=1
pkgdesc="Fast and multi-platform Spotify client with native GUI"
arch=("x86_64")
url="https://github.com/jpochyla/psst"
license=('MIT')
makedepends=( 'rust'
              'git'
              'gtk3'
              'cairo'
              'openssl'
              'clang')
provides=("psst")
conflicts=("psst")
source=("git+https://github.com/jpochyla/psst.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
	cd "$_pkgname"
	git submodule update --recursive --init
}

build() {
	cd "$_pkgname"
  cargo build --release
}

check() {
  cd "$_pkgname"
  cargo test --release
}

package() {
    # install
    install -Dm 755 ${_pkgname}/target/release/psst-gui -t "${pkgdir}/usr/bin/"
    
    # desktop entry

    install -dm 755 "${pkgdir}/usr/share/applications"
    cat > ${pkgdir}/usr/share/applications/${_pkgname}.desktop << EOF
[Desktop Entry]
Type=Application
Version=${pkgver}
Name=Psst
Comment=Fast and multi-platform Spotify client with native GUI 
Exec=psst-gui
Icon=psst-gui
Terminal=false
EOF

}
