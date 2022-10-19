# Maintainer: Shatur95 <genaloner@gmail.com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: ful1e5 <kaizmandhu at gmail dot com>

pkgname=bibata-cursor-theme
pkgver=2.0.2
pkgrel=2
pkgdesc="Material Based Cursor Theme"
arch=('any')
url="https://github.com/ful1e5/Bibata_Cursor"
license=('GPL3')
makedepends=('python-clickgen>=2.0.0')
options=('!strip')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('2f5fa22eab91397845d8d64082c3daf3932a25f10a7178159708e78d9b6906e1')

prepare() {
  cd Bibata_Cursor-$pkgver
  rm -rf themes
}

build() {
  cd Bibata_Cursor-$pkgver

  declare -A names
  names["Bibata-Modern-Amber"]="Yellowish and rounded edge Bibata cursors."
  names["Bibata-Modern-Classic"]="Black and rounded edge Bibata cursors."
  names["Bibata-Modern-Ice"]="White and rounded edge Bibata cursors."
  names["Bibata-Original-Amber"]="Yellowish and sharp edge Bibata cursors."
  names["Bibata-Original-Classic"]="Black and sharp edge Bibata cursors."
  names["Bibata-Original-Ice"]="White and sharp edge Bibata cursors."

  for key in "${!names[@]}"; do
    comment="${names[$key]}";
    ctgen build.toml -p x11 -d "bitmaps/$key" -n "$key" -c "$comment" &
    PID=$!
    wait $PID
  done
}

package() {
  cd Bibata_Cursor-$pkgver
  install -d "$pkgdir"/usr/share/icons
  cp -r themes/Bibata-* "$pkgdir"/usr/share/icons/
}
