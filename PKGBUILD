# Maintainer: Uncle Hunto <unclehunto äτ ÝãΗ00 Ð0τ ÇÖΜ>
# Contributor: Jonathan la Cour <jon@lacour.me>
# Contributor: Pieter Kokx <pieter@kokx.nl>

pkgname=armory-goatpig-git
_name=${pkgname%-*-*}
_py2ver=$(pacman -Qi python2 | sed -n 's/\(.*Version *: \)\(.*\..*\)\(\..*\)/\2/p')
pkgver=v0.96.1.r1.gb77932c8
pkgrel=1
pkgdesc="Armory Bitcoin wallet, built from new, official github repo w/auto selection of current python2 version"
arch=('i686' 'x86_64')
url="https://github.com/goatpig/BitcoinArmory"
license=('AGPL3')
depends=('crypto++' 'swig' 'python2' 'qt4' 'python2-pyqt4' 'python2-bsddb' 'python2-psutil' 'rsync')
makedepends=('git' 'gcc' 'make' 'icoutils')
optdepends=('bitcoin-daemon: Communicate with the Bitcoin network')
install="${_name}.install"
provides=('armory')
conflicts=('armory' 'armory-git')
source=("${_name}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_name"
  git describe --tags --long | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  cd "$srcdir/$_name"
  git submodule update --init
  PYTHON_VERSION="$_py2ver" "$srcdir/$_name/autogen.sh"
}

build() {
  cd "$srcdir/$_name"
  "$srcdir/$_name/configure" --prefix="/usr" PYTHON_VERSION="$_py2ver"
  PYTHON_VERSION="$_py2ver" make -j"$(nproc)"
}

package() {
  cd "$srcdir/$_name"
  make DESTDIR="$pkgdir/" install

  mkdir -p "$pkgdir/usr/share/pixmaps"
  icotool -x -w 256 "$pkgdir/usr/share/armory/img/armory256x256.ico" \
                 -o "$pkgdir/usr/share/pixmaps/armory.png"
  cp "$pkgdir/usr/share/armory/img/armory_icon_green_64x64.png" \
     "$pkgdir/usr/share/pixmaps/armory_green.png"

  desktop-file-install -m 644 \
  --set-key="Exec" --set-value="/usr/bin/armory" \
  --set-icon="/usr/share/pixmaps/armory.png" \
  --dir="$pkgdir/usr/share/applications/" \
  "$srcdir/$_name/dpkgfiles/armory.desktop"

  desktop-file-install -m 644 \
  --set-key="Exec" --set-value="/usr/bin/armory --offline" \
  --set-icon="/usr/share/pixmaps/armory.png" \
  --dir="$pkgdir/usr/share/applications/" \
  "$srcdir/$_name/dpkgfiles/armoryoffline.desktop"

  desktop-file-install -m 644 \
  --set-key="Exec" --set-value="/usr/bin/armory --testnet" \
  --set-icon="/usr/share/pixmaps/armory_green.png" \
  --dir="$pkgdir/usr/share/applications/" \
  "$srcdir/$_name/dpkgfiles/armorytestnet.desktop"
}
