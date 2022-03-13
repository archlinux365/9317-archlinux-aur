# $Id$
# Maintainer: CountMurphy <spartan1086@gmail.com>
pkgname=mediatracker
__pkgname="MediaTracker"
pkgver=0.0.7
pkgrel=1
arch=('i686' 'x86_64')
url="https://github.com/bonukai/MediaTracker.git"
pkgdesc="Self hosted platform for tracking movies, tv shows, video games, books and audiobooks."
license=('MIT')
depends=('nodejs' 'sqlite')
conflicts=(mediatracker-git)
makedepends=('npm')
source=("https://github.com/bonukai/MediaTracker/archive/refs/tags/v$pkgver.tar.gz")
md5sums=(abed68c5bbffcb7d99812370a134adc6)


build() {
  cd "$srcdir/MediaTracker-$pkgver"
  npm install
  npm run build
}

package() {
  mkdir -p $pkgdir/srv/MediaTracker
  cp -Ra $srcdir/MediaTracker-$pkgver/* "$pkgdir/srv/MediaTracker/"
  install=mediatracker.install
  install -Dm 644 ../mediatracker.service -t "$pkgdir"/usr/lib/systemd/system/
}


