# Maintainer: Torsten Keßler <t dot kessler at posteo dot de>
# Contributor: JP-Ellis <josh@jpellis.me>

pkgname=rocm-hip-sdk
_pkgver_major=5
_pkgver_minor=1
_pkgver_patch=0
_pkgver_magic=36
pkgver=$_pkgver_major.$_pkgver_minor.$_pkgver_patch
pkgrel=1
pkgdesc="Develop applications using HIP and libraries for AMD platforms"
arch=('x86_64')
url="https://rocm-documentation.readthedocs.io/en/latest/"
license=()
depends=('rocm-core' 'rocm-hip-runtime' 'rocm-hip-libraries'
        'hipcub' 'rocfft' 'rocrand' 'hipblas' 'rocsparse' 'rocprim'
        'rccl' 'hipfort' 'rocalution' 'rocthrust' 'hipsparse' 'hipfft')
makedepends=()
source=("${pkgname}-${pkgver}.deb::https://repo.radeon.com/rocm/apt/${pkgver%.*}/pool/main/${pkgname:0:1}/${pkgname}/${pkgname}_${pkgver}.${_pkgver_major}$(printf '%02d' $_pkgver_minor $_pkgver_patch)-${_pkgver_magic}_amd64.deb")
sha256sums=('8bb57bdc263f1fb8cc84f27857a2dd5e97781b2d78e90a0e6cc095af16336e0e')


package() {
    tar -xf data.tar.gz
    install -D opt/rocm-${pkgver}/.info/version-hip-sdk "$pkgdir/opt/rocm/.info/version-hip-sdk"
}
