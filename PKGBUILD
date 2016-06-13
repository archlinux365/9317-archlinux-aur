# Maintainer: Nathan Lowe <techwiz96@gmail.com>
# Upstream URL: https://github.com/stanfieldr/ghetto-skype
#
# Based off of the PKGBUILD for atom-editor
# https://aur.archlinux.org/packages/atom-editor/
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/techwiz24/aur-ghetto-skype

pkgname=ghetto-skype
pkgver=1.3.0
pkgrel=2
pkgdesc='Web Skype + Tray Icon + Notifications'
arch=('x86_64')
url='https://github.com/stanfieldr/ghetto-skype'
license=('GPLv3')
depends=('electron')
optdepends=('libappindicator-gtk2: Tray Icon support for certain DEs')
makedepends=('npm')
install=ghetto-skype.install
source=("https://github.com/stanfieldr/ghetto-skype/archive/v${pkgver}.tar.gz")
sha256sums=('806053e78d1f4e73a9815d0e3c4ec1615c3e0e84d796ccee2f333f977fb86a70')

prepare() {
  cd "ghetto-skype-$pkgver"

  echo "Fetching node dependencies..."
  npm install --production
}

package() {
  mkdir -p "$pkgdir/opt/ghetto-skype"
  cp -a "$srcdir/ghetto-skype-$pkgver/." "$pkgdir/opt/ghetto-skype"

  install -Dm644 "$srcdir/ghetto-skype-$pkgver/assets/skype.desktop" "$pkgdir/usr/share/applications/ghetto-skype.desktop"
  install -Dm644 "$srcdir/ghetto-skype-$pkgver/assets/tray/skype.png" "$pkgdir/usr/share/pixmaps/ghetto-skype.png"
  install -Dm644 "$srcdir/ghetto-skype-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  find "${pkgdir}" -type d -exec chmod 755 {} +
  find "${pkgdir}" -type f -exec chmod 644 {} +

  install -Dm777 "$srcdir/../ghetto-skype" "$pkgdir/usr/bin/ghetto-skype"
}
