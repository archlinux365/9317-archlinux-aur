# Maintainer: johnpyp <johnpyp.dev@gmail.com>

# To increment version/make changes:
# update pkgver
# `updpkgsums` to update checksums
# `makepkg --printsrcinfo > .SRCINFO` to update the srcinfo
# `makepkg -si` to install the package locally and test it out
pkgname=audiobookconverter-bin
pkgver=5.5.26
pkgrel=1
epoch=
pkgdesc="Improved AudioBookConverter based on freeipodsoftware release (mp3 to m4b converter)"
arch=("x86_64")
url="https://github.com/yermak/AudioBookConverter"
license=('GPL2')
groups=()
depends=(
	"glibc"
  "alsa-lib"
  "at-spi2-atk"
  "at-spi2-core"
  "atk"
  "cairo"
  "dbus"
  "desktop-file-utils"
  "fontconfig"
  "freetype2"
  "gdk-pixbuf2"
  "glib2"
  "graphite"
  "gtk2"
  "gtk3"
  "harfbuzz"
  "hicolor-icon-theme"
  "libbsd"
  "libdatrie"
  "libepoxy"
  "libgcrypt"
  "libgl"
  "libglvnd"
  "libgpg-error"
  "libpng"
  "libselinux"
  "libthai"
  "libx11"
  "libxau"
  "libxcb"
  "libxcomposite"
  "libxcursor"
  "libxdamage"
  "libxdmcp"
  "libxext"
  "libxfixes"
  "libxi"
  "libxinerama"
  "libxkbcommon"
  "libxrandr"
  "libxrender"
  "libxtst"
  "lz4"
  "pcre"
  "pixman"
  "systemd-libs"
  "util-linux-libs"
  "wayland"
  "xdg-utils"
  "zlib"
)
provides=('audiobookconverter')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("https://github.com/yermak/AudioBookConverter/releases/download/version_${pkgver}/audiobookconverter_${pkgver}-${pkgrel}_amd64.deb"
        "audiobookconverter-bin.install")
sha512sums=('2dc341621ef5acc1e998cec4b70039511de7ad500796483c3bc4c27842529ab719bc5a219555dec248f56a2e2f498df6179dd7558d9605398dcf6735966e6642'
            '620d4d55985dfca088918e0daede656b158fa199c64f03f365c9305fef239e2d2eb82cd15e9de3ad63fb891efdeb4c1faf6487b6e88f73f97b1b6de97b8471f3')

package() {
	tar xf data.tar.xz -C "${pkgdir}"

  install -dm0755 "${pkgdir}/usr/bin"
  ln -sf "/opt/audiobookconverter/bin/AudioBookConverter" "${pkgdir}/usr/bin/audiobookconverter"

  cp -dpr --no-preserve=ownership "${pkgdir}/opt/audiobookconverter/lib" "${pkgdir}/usr/lib"

  install -Dm644 "${pkgdir}/opt/audiobookconverter/lib/audiobookconverter-AudioBookConverter.desktop" "${pkgdir}"/usr/share/applications/audiobookconverter.desktop
}
