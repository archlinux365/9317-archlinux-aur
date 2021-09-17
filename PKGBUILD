# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=kubectl-gke-rapid-bin
pkgver=v1.19.15
pkgrel=1
pkgdesc='Kubernetes.io client binary, compatible with the GKE version from the rapid channel'
provides=("kubectl=v1.19.15")
conflicts=(kubectl kubectl-bin)
arch=(i686 x86_64 armv5 armv6h armv7h aarch64 )
url="https://github.com/kubernetes/kubectl"
license=('Apache-2.0')

package() {
  install -Dm755 "$srcdir/kubectl-v1.19.15" "$pkgdir/usr/bin/kubectl"
}

source_i686=('kubectl-v1.19.15::https://storage.googleapis.com/kubernetes-release/release/v1.19.15/bin/linux/386/kubectl')
sha256sums_i686=('605142269a84e1f2b7c12d3b9124e731225c161af38834ab041a61e7fe629049')
source_x86_64=('kubectl-v1.19.15::https://storage.googleapis.com/kubernetes-release/release/v1.19.15/bin/linux/amd64/kubectl')
sha256sums_x86_64=('6f2ac7db8cfd59f660abc9891c1bb7da2dabd1cf5e114d836f2ffd39ee677d04')
source_armv5=('kubectl-v1.19.15::https://storage.googleapis.com/kubernetes-release/release/v1.19.15/bin/linux/arm/kubectl')
sha256sums_armv5=('5103ed095ba01cdf04e9d0f2a05f5bbc5b5db4dd8c99d0ba6db4a613b494e6a3')
source_armv6h=('kubectl-v1.19.15::https://storage.googleapis.com/kubernetes-release/release/v1.19.15/bin/linux/arm/kubectl')
sha256sums_armv6h=('5103ed095ba01cdf04e9d0f2a05f5bbc5b5db4dd8c99d0ba6db4a613b494e6a3')
source_armv7h=('kubectl-v1.19.15::https://storage.googleapis.com/kubernetes-release/release/v1.19.15/bin/linux/arm/kubectl')
sha256sums_armv7h=('5103ed095ba01cdf04e9d0f2a05f5bbc5b5db4dd8c99d0ba6db4a613b494e6a3')
source_aarch64=('kubectl-v1.19.15::https://storage.googleapis.com/kubernetes-release/release/v1.19.15/bin/linux/arm64/kubectl')
sha256sums_aarch64=('3c3179888b516a4dadf7aa25e5c93577a2f763031e615c56c78f8413bc706f4d')
