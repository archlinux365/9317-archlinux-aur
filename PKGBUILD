# Maintainer: Piotr Mrożek <dnadesigned@gmail.com>
# Contributor: /dev/rs0 <rs0@secretco.de.com>
# Contributor: Daniel Perez <tuvistavie@gmail.com>

pkgname=electron-bin
pkgver=1.3.1
pkgrel=1
pkgdesc="Framework for writing cross-platform desktop applications using JavaScript, HTML and CSS."

arch=('arm' 'i686' 'x86_64')
url="https://github.com/electron/electron"
license=('MIT')

replaces=('atom-shell')
provides=('electron')
conflicts=('electron')

optdepends=('nodejs')
depends=('libgcrypt15' 'libnotify' 'gconf' 'alsa-lib' 'nss' 'libxtst' 'gtk2' 'libgnome-keyring')

case $CARCH in
  'arm'   ) _arch='arm' ; sha256sums=('d961ed123be7f6762d5ab3486f55919ed0be7ad92253449a4cc48adfa68ad608');;
  'i686'  ) _arch='ia32'; sha256sums=('c5c82d94be17e2f0a8046cff90e2c1d1bf1f1b0e925b288f90dd495881bd1ed3');;
  'x86_64') _arch='x64' ; sha256sums=('c4d7a6ec0c41cd0033e69cbb1fa6c0989ac7c1ea9f3e8449dfb932f511fc54e0');;
esac

_zipname="electron-v${pkgver}-linux-${_arch}.zip"

source=("https://github.com/electron/electron/releases/download/v${pkgver}/${_zipname}")

package() {
  install -d "${pkgdir}/usr/lib/electron"
  cp -a "${srcdir}/." "${pkgdir}/usr/lib/electron"
  rm "${pkgdir}/usr/lib/electron/${_zipname}"

  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/electron/electron" "${pkgdir}/usr/bin/electron"

  install -Dm644 "${pkgdir}/usr/lib/electron/LICENSE" "${pkgdir}/usr/share/licenses/electron/LICENSE"
  install -Dm644 "${pkgdir}/usr/lib/electron/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/electron/LICENSES.chromium.html"
  rm "${pkgdir}/usr/lib/electron/LICENSE"
  rm "${pkgdir}/usr/lib/electron/LICENSES.chromium.html"
  ln -sf "/usr/lib/libgcrypt.so.11" "${pkgdir}/usr/lib/electron/libgcrypt.so.11"
  ln -sf "/usr/lib/libnotify.so.4" "${pkgdir}/usr/lib/electron/libnotify.so.4"
  ln -sf "/usr/lib/libudev.so" "${pkgdir}/usr/lib/electron/libudev.so.0"

  find "${pkgdir}" -type d -exec chmod 755 {} +
  find "${pkgdir}" -type f -exec chmod 644 {} +
  chmod 755 "${pkgdir}/usr/lib/electron/electron"
}
