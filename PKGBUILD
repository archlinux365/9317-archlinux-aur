# Maintainer: dec05eba <dec05eba@protonmail.com>

pkgname=quickmedia-git
pkgver=r707.7068f9c
pkgrel=1
pkgdesc='A dmenu-inspired native client for web services. Supports youtube, spotify (podcasts), soundcloud, nyaa.si, 4chan, matrix and several manga sites.'
arch=('x86_64')
url="https://git.dec05eba.com/QuickMedia"
license=('GPL3')
makedepends=('sibs')
depends=('sfml' 'libx11' 'jsoncpp' 'tidy' 'curl' 'mpv' 'imagemagick' 'libglvnd' 'libxrandr' 'noto-fonts' 'noto-fonts-cjk')
optdepends=(
    'libnotify: For showing notifications'
    'automedia: For automatically downloading new chapters of tracked manga'
    'waifu2x-ncnn-vulkan: For upscaling manga pages when using the --upscale-images option'
    'xdg-utils: For downloading torrents when using nyaa.si plugin or opening remote links'
    'ffmpeg: For sending video metadata and thumbnail with /upload in matrix'
    'youtube-dl: To play youtube videos'
)
provides=('quickmedia')
conflicts=('quickmedia')
source=("${pkgname}-${pkgver}.tar.gz::https://dec05eba.com/snapshot/QuickMedia.git.tar.gz")
sha512sums=('5b500610606f81aed5828cf91e4fd107ce25b1da8c42da3ac92188e8d4d7e7a6b537a7f6ea72d3278500a149b5b62cbd272963f8271a6b7964e0fa133ecbb995')

build() {
  cd "$srcdir"
  sibs build --release
}

package() {
  cd "$srcdir"
  install -Dm755 "sibs-build/$(sibs platform)/release/quickmedia" "$pkgdir/usr/bin/quickmedia"
  install -Dm644 boards.json "$pkgdir/usr/share/quickmedia/boards.json"
  install -Dm644 input.conf "$pkgdir/usr/share/quickmedia/input.conf"
  for file in images/* icons/* shaders/*; do
    install -Dm644 "$file" "$pkgdir/usr/share/quickmedia/$file"
  done
  for file in launcher/*; do
    filename=$(basename "$file")
    install -Dm644 "$file" "$pkgdir/usr/share/applications/$filename"
  done
}
