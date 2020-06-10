# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=git-lfs-git
pkgver=2.11.0.r18.g8badaa96
pkgrel=2
pkgdesc="Git extension for versioning large files"
arch=('i686' 'x86_64')
url="https://git-lfs.github.com/"
license=('MIT')
depends=('glibc')
makedepends=('git' 'go' 'go-tools' 'ruby-ronn')
provides=('git-lfs')
conflicts=('git-lfs')
source=("git+https://github.com/git-lfs/git-lfs.git")
sha256sums=('SKIP')


pkgver() {
  cd "git-lfs"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "git-lfs"

  go build \
    -buildmode=pie \
    -mod=readonly \
    -trimpath \
    -modcacherw \
    -ldflags "-extldflags $LDFLAGS" \
    ./
  make man
}

check() {
  cd "git-lfs"

  go test \
    -mod=readonly \
    ./...
}

package() {
  cd "git-lfs"

  install -Dm755 "git-lfs" -t "$pkgdir/usr/bin"

  install -Dm644 "LICENSE.md" -t "$pkgdir/usr/share/licenses/git-lfs"
  install -Dm644 "man"/*.1 -t "$pkgdir/usr/share/man/man1"
  install -Dm644 "man"/*.5 -t "$pkgdir/usr/share/man/man5"
}
