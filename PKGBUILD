# Maintainer: Hao Long <imlonghao@archlinuxcn.org>
# Contributor: Daniel M. Capella <polycitizen@gmail.com>

pkgname=gitleaks
pkgver=5.0.0
pkgrel=1
pkgdesc='Audit Git repos for secrets and keys'
url=https://github.com/zricethezav/gitleaks
arch=('x86_64' 'i686')
license=('MIT')
depends=('glibc')
makedepends=('go')
source=("$url/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha256sums=('1bb629e7837724c23f1f285f12391d123806365a534cb8eeb2cefe5d3c25fcb2')

build() {
  cd "$pkgname-$pkgver"
  go build \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "-extldflags \"${LDFLAGS}\"" \
    .
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/"$pkgname"/LICENSE
  install -Dm755 "$pkgname" "$pkgdir"/usr/bin/"$pkgname"
}

# vim:set ts=2 sw=2 et:
