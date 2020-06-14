# Maintainer: imtbl <imtbl at mser dot at>
pkgname=soundsense-rs-git
_pkgname=soundsense-rs
pkgver=1.5.1.travis.r8.g055acfb
pkgrel=2
pkgdesc="A Rust version of SoundSense"
arch=('x86_64')
url="https://github.com/prixt/${_pkgname}"
license=('MIT')
makedepends=('rust' 'alsa-lib' 'gtk3' 'webkit2gtk')
source=("git+https://github.com/prixt/${_pkgname}.git"
        soundsense-rs.desktop)
sha256sums=('SKIP'
            'ced141bf8441d271ee610beebe79cdd5bfe287b1d157d79a7c470d0e44673e5f')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/${_pkgname}"
  cargo build --release --locked
}

package() {
  depends+=('libasound.so' 'libgtk-3.so' 'libgdk-3.so' 'libwebkit2gtk-4.0.so'
            'libjavascriptcoregtk-4.0.so')

  cd "${srcdir}/${_pkgname}"
  install -Dm755 "target/release/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
  install -Dm644 "icons/icon.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"

  cd "${srcdir}"
  install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
}
