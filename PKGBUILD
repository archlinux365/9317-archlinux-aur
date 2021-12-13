# Contributor: NexAdn <git@nexadn.de>
# Maintainer: javsanpar <javsanpar@riseup.net>
pkgname=abaddon
pkgver=0.1.2
pkgrel=1
pkgdesc='An alternative Discord client made with C++/gtkmm'
url='https://github.com/uowuo/abaddon'
source=("git+https://github.com/uowuo/abaddon#tag=v$pkgver"
        $pkgname.desktop)
arch=('x86_64')
license=('GPL3')
makedepends=('git' 'cmake' 'nlohmann-json')
depends=('gtkmm3')
conflicts=('abaddon')
provides=('abaddon')
sha256sums=('SKIP'
            '7840732362b8f2202cf79b7d7c2eb0e2cbd5a83dc45c5fca4609ec15b8bea6df')

prepare () {
  cd "$pkgname"

  git submodule init
  git submodule update
}

build () {
  cmake -B build -S "$pkgname"
  make -C build
}

package() {
  install -Dm755 build/abaddon "$pkgdir"/usr/bin/abaddon

  install -Dm644 "$pkgname"/res/css/* -t "$pkgdir"/usr/share/abaddon/css
  install -Dm644 "$pkgname"/res/res/* -t "$pkgdir"/usr/share/abaddon/res
  install -d "$pkgdir"/usr/share/abaddon/fonts
  cp -r "$pkgname"/res/fonts/* "$pkgdir"/usr/share/abaddon/fonts/

  install -Dm755 abaddon.desktop \
    "$pkgdir"/usr/share/applications/abaddon.desktop
}
