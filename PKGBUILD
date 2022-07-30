# Maintainer: Torsten Keßler <t dot kessler at posteo dot de>
# Contributor: JP-Ellis <josh@jpellis.me>

pkgname=rocm-hip-runtime
_pkgver_major=5
_pkgver_minor=2
_pkgver_patch=1
_pkgver_magic=79
pkgver=$_pkgver_major.$_pkgver_minor.$_pkgver_patch
pkgrel=1
pkgdesc="Packages to run HIP applications on the AMD platform"
arch=('x86_64')
url="https://rocm-documentation.readthedocs.io/en/latest/"
license=()
depends=('rocm-core' 'rocm-language-runtime' 'rocminfo' 'hip-runtime-amd' 'rocm-llvm' 'rocm-cmake')
makedepends=()
optdepends=('hipify-clang: Translate CUDA code into HIP. Requires CUDA.')
source=("${pkgname}-${pkgver}.deb::https://repo.radeon.com/rocm/apt/${pkgver}/pool/main/${pkgname:0:1}/${pkgname}/${pkgname}_${pkgver}.${_pkgver_major}$(printf '%02d' $_pkgver_minor $_pkgver_patch)-${_pkgver_magic}_amd64.deb")
sha256sums=('61d6227693cbbbe00a52905373a47536ba4e993da316088094d01026df7b1499')


package() {
    tar -xf data.tar.gz
    install -Dm644 opt/rocm-${pkgver}/.info/version-hiprt "$pkgdir/opt/rocm/.info/version-hiprt"
}
