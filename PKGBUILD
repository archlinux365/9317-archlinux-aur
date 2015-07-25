# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>
# Contributor: Doug Newgard <scimmia at archlinux dot info>

pkgname=jriver-media-center
_debpkgver=20.0.129
pkgver=$_debpkgver
pkgrel=1
pkgdesc="The Most Comprehensive Media Software"
arch=('x86_64')
url="http://www.jriver.com/"
license=('custom')
depends=('lib32-alsa-lib' 'lib32-gcc-libs' 'lib32-libx11' 'lib32-libxcb' 'lib32-libxau' 'lib32-libxdmcp' 'lib32-util-linux' 'lib32-libxext' 'lib32-gtk2' 'lib32-p11-kit')
optdepends=('lib32-mesa-libgl: nouveau video support' 'lib32-nvidia-libgl: nvidia video support' 'xorg-fonts-75dpi:' 'xorg-fonts-100dpi:' 'vorbis-tools:' 'lame:' 'musepack-tools:')
source=("http://files.jriver.com/mediacenter/channels/v20/latest/MediaCenter-$_debpkgver.deb" 'License.txt')
sha256sums=('50ebc016a5940abc1378c42990769a528a5aff389e71b83cd353a02d5a865845' 'ee00f430918df6be37777a61e12812875b5583379c78daaa969bae7383a41fbd')

package() {
  cd "$srcdir"
  bsdtar xf data.tar.xz -C "$pkgdir"
    install -Dm644 "License.txt" \
    "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
