pkgname=chromium-vaapi-bin
pkgver=64.0.3282.167
pkgrel=1
pkgdesc='Chromium compiled with VA-API support for Intel Graphics'
url='https://www.chromium.org/Home'
arch=('x86_64')
license=('BSD')
provides=('chromium')
conflicts=('chromium' 'chromium-vaapi')

depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-font' 'systemd' 'dbus' 'libpulse' 'pciutils' 'json-glib'
         'desktop-file-utils' 'hicolor-icon-theme' 'libva')
optdepends=('pepper-flash: support for Flash content'
            'kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet'
            'libva-intel-driver: Needed to support VA-API for Intel graphics cards')

source_x86_64=("https://github.com/maximbaz/$pkgname/raw/master/$arch/chromium-vaapi-$pkgver-$pkgrel-$arch.pkg.tar.xz")
sha256sums_x86_64=('88146ca976da1b7baa887c391ab00e966d35a1b0b58d8f5e8475f3e35a4bb38e')

# Keep in sync with AUR/chromium-vaapi:
#
# Possible replacements are listed in build/linux/unbundle/replace_gn_files.py
# Keys are the names in the above script; values are the dependencies in Arch
readonly -A _system_libs=(
  #[ffmpeg]=ffmpeg            # https://crbug.com/731766
  [flac]=flac
  #[fontconfig]=fontconfig    # Enable for M65
  #[freetype]=freetype2       # Using 'use_system_freetype=true' until M65
  #[harfbuzz-ng]=harfbuzz     # Using 'use_system_harfbuzz=true' until M65
  [icu]=icu
  [libdrm]=
  [libjpeg]=libjpeg
  #[libpng]=libpng            # https://crbug.com/752403#c10
  [libvpx]=libvpx
  [libwebp]=libwebp
  #[libxml]=libxml2           # https://crbug.com/736026
  [libxslt]=libxslt
  [opus]=opus
  [re2]=re2
  [snappy]=snappy
  [yasm]=
  [zlib]=minizip
)
depends+=(${_system_libs[@]} freetype2 harfbuzz)

package() {
  cp -ar "$srcdir/usr" "$pkgdir/usr"
  chmod 4755 "$pkgdir/usr/lib/chromium/chrome-sandbox"
}
