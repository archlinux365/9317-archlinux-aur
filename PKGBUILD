# Maintainer: Peter Mattern <pmattern at arcor dot de>

_pkgname=lxqt-l10n
pkgname=$_pkgname-git
pkgver=0.10.95.4.g06ed8db
pkgrel=1
pkgdesc="Translations of all components maintained by the LXQt project"
arch=('any')
url='https://github.com/lxde/translations'
license=('LGPL')
makedepends=('git' 'cmake' 'liblxqt-git' 'qt5-tools')
provides=("$_pkgname")
conflicts=("$_pkgname" "compton-conf"{,-git} "libfm-qt"{,-git} "liblxqt"{,-git} "lximage-qt"{,-git}
          "lxqt-about"{,-git} "lxqt-admin"{,-git} "lxqt-config"{,-git} "lxqt-globalkeys"{,-git}
          "lxqt-notificationd"{,-git} "lxqt-openssh-askpass"{,-git} "lxqt-panel"{,-git}
          "lxqt-policykit"{,-git} "lxqt-powermanagement"{,-git} "lxqt-runner"{,-git}
          "lxqt-session"{,-git} "lxqt-sudo"{,-git} "obconf-qt"{,-git} "pcmanfm-qt"{,-git} "qterminal"{,-git})
source=("$_pkgname::git+https://github.com/lxde/translations.git")
sha256sums=("SKIP")

pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --always | sed 's:-:.:g'
}

build() {
  rm -Rf build && mkdir build
  cd build
  cmake "$srcdir/$_pkgname" -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
