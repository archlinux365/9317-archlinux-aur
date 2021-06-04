# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

# set whether the Qt Quick GUI should be enabled: set to either ON or OFF
_quick_gui=${PASSWORD_MANAGER_QUICK_GUI:-ON}

_reponame=passwordmanager
pkgname=passwordmanager
pkgver=4.1.7
pkgrel=1
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
pkgdesc='A simple password store using AES-256-CBC encryption via OpenSSL'
license=('GPL')
depends=('qt5-base' 'qtutilities' 'passwordfile' 'openssl' 'libxkbcommon-x11' 'desktop-file-utils' 'xdg-utils')
makedepends=('cmake' 'ninja' 'qt5-tools' 'mesa' 'kirigami2')
url="https://github.com/Martchus/${_reponame}"
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Martchus/${_reponame}/archive/v${pkgver}.tar.gz")
sha256sums=('1f41fa3d39c9280cdba447c7e52074b65983ce8a257114231c773eea7a98c0b1')

# add further dependencies for the Qt Quick GUI (only kirigami2 is "pluggable")
if [[ $_quick_gui == ON ]]; then
    depends+=('qt5-quickcontrols2')
    optdepends+=('kirigami2: Qt Quick GUI')
fi

build() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  cmake \
    -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DQUICK_GUI="$_quick_gui" \
    -DBUILTIN_TRANSLATIONS:BOOL=ON \
    -DBUILTIN_TRANSLATIONS_OF_QT:BOOL=OFF \
    .
  ninja
}

package() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  DESTDIR="${pkgdir}" ninja install
}
