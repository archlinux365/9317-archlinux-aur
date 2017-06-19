# Maintainer: makz <contact+aur@makz.me>
# Maintainer: Light2Yellow <alexvilchansky@yahoo.com>

pkgname=ckb-next-latest-git
pkgver=0.2.7.r180.gcfc1750
pkgrel=1
epoch=1
pkgdesc="Corsair Keyboard and Mouse Input Driver, the latest version"
arch=('i686' 'x86_64')
url="https://github.com/mattanger/ckb-next"
license=('GPL2')
depends=('qt5-base' 'hicolor-icon-theme')
makedepends=('git')
conflicts=('ckb-git' 'ckb-git-latest' 'ckb-next-git')
install=ckb-next-latest-git.install
source=('ckb-next-latest-git::git+https://github.com/mattanger/ckb-next.git#branch=newdev')
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-VCS}"
  # based on annotated and lightweight tags, always has long version as it's a rolling release
  # discards v, replaces dashes with dots
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}


build() {
  cd "$srcdir/${pkgname%-VCS}"
  ./qmake-auto
  make -j$(nproc --all)
}

package() {
  cd "$srcdir/${pkgname%-VCS}"

  install -dm755 "$pkgdir/usr/bin"
  install -dm755 "$pkgdir/usr/lib/ckb-animations"
  install -Dm755 bin/ckb{,-daemon} "$pkgdir/usr/bin/"
  install -D bin/ckb-animations/* "$pkgdir/usr/lib/ckb-animations/"

  install -Dm644 usr/ckb.png "${pkgdir}/usr/share/icons/hicolor/512x512/apps/ckb.png"
  install -Dm644 usr/ckb.desktop "${pkgdir}/usr/share/applications/ckb.desktop"

  install -Dm644 service/systemd/ckb-daemon.service "${pkgdir}/usr/lib/systemd/system/ckb-daemon.service"
}
