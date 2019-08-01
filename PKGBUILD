# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_pkgname=netease-cloud-music-gtk

pkgname=netease-cloud-music-gtk-bin
pkgver=0.6.0
pkgrel=2
pkgdesc="Linux 平台下基于 Rust + GTK 开发的网易云音乐播放器"
arch=('x86_64')
url="https://github.com/gmg137/netease-cloud-music-gtk"
license=('GPL')
depends=('curl' 'gstreamer' 'gtk3' 'gst-plugins-bad' 'gst-plugins-good' 'gst-plugins-ugly' 'gst-libav' 'openssl')
optdepends=(
  'osdlyrics: Show lyrics'
)
conflicts=('netease-cloud-music-gtk')
source=(
  "${url}/releases/download/${pkgver}/${_pkgname}-${pkgver}-1.x86_64.rpm"
  "README-${pkgver}.md::${url}/raw/${pkgver}/README.md"
  "LICENSE-${pkgver}::${url}/raw/${pkgver}/LICENSE"
)
noextract=("${_pkgname}-${pkgver}-1.x86_64.rpm")
sha256sums=(
  '054b992f1377d1fd0dc47d4c9b8bd98a7921f3141d84a3791ce84b7f9a785c4a'
  'f81feb5da97db3d2a5bb1cfdfcdb0b8f09b78d74e022439c2eeb9d34d72fec72'
  '3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986'
)

package() {
  cd "${srcdir}"
  bsdtar -xf "${_pkgname}-${pkgver}-1.x86_64.rpm" -C "${pkgdir}/"
  install -D -m644 "README-${pkgver}.md" "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -D -m644 "LICENSE-${pkgver}" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
