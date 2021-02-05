# Maintainer: Nocifer <apmichalopoulos at gmail dot com>
# Contributor: david0

pkgname=reaper-bin
pkgver=6.23
pkgrel=1
pkgdesc="A complete digital audio production application for computers, offering a full multitrack audio and MIDI recording, editing, processing, mixing and mastering toolset"
arch=('x86_64')
url="https://reaper.fm"
license=('custom')
depends=('gtk3' 'desktop-file-utils' 'xdg-utils')
optdepends=('jack' 'pulseaudio')
provides=("reaper=${pkgver}")
source=("https://reaper.fm/files/6.x/reaper${pkgver//.}_linux_x86_64.tar.xz")
sha256sums=('8dc5cdccf4f21c021202260c2c0fc78ca42b29f2b14725211a078d89f3452ce9')

package() {
  XDG_DATA_HOME="${srcdir}/desktop" sh "${srcdir}/reaper_linux_x86_64/install-reaper.sh" --install "${pkgdir}/opt" --integrate-user-desktop

  sed -i 's#^Exec.*#Exec="/opt/REAPER/reaper" %F#g' "${srcdir}/desktop/applications/cockos-reaper.desktop"
  install -D -m644 "${srcdir}/desktop/applications/cockos-reaper.desktop" "${pkgdir}/usr/share/applications/cockos-reaper.desktop"
  install -d "${pkgdir}/usr/share/icons/hicolor/256x256/apps"
  install -m644 "${srcdir}/desktop/icons/hicolor/256x256/apps/"*.png "${pkgdir}/usr/share/icons/hicolor/256x256/apps"
  install -D -m644 "${srcdir}/desktop/mime/packages/application-x-reaper.xml" "${pkgdir}/usr/share/mime/packages/application-x-reaper.xml"

  rm "${pkgdir}/opt/REAPER/uninstall-reaper.sh"
  mkdir -p "${pkgdir}/usr/bin"
  ln -s /opt/REAPER/reaper "${pkgdir}/usr/bin/reaper"
  mkdir -p "${pkgdir}/usr/share/licenses/reaper"
  ln -s /opt/REAPER/license.txt "${pkgdir}/usr/share/licenses/reaper/LICENSE"
}

