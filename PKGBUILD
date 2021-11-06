# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=kubectl-gke-regular-bin
pkgver=v1.20.12
pkgrel=1
pkgdesc='Kubernetes.io client binary, compatible with the GKE version from the regular channel'
provides=("kubectl=v1.20.12")
conflicts=(kubectl kubectl-bin)
arch=(i686 x86_64 armv5 armv6h armv7h aarch64 )
url="https://github.com/kubernetes/kubectl"
license=('Apache-2.0')

package() {
  install -Dm755 "$srcdir/kubectl-v1.20.12" "$pkgdir/usr/bin/kubectl"
}

source_i686=('kubectl-v1.20.12::https://storage.googleapis.com/kubernetes-release/release/v1.20.12/bin/linux/386/kubectl')
sha256sums_i686=('c8f7f450b6e5a0a4f0a02851d19fb712723482d2803e568435e7c51fa8d29d37')
source_x86_64=('kubectl-v1.20.12::https://storage.googleapis.com/kubernetes-release/release/v1.20.12/bin/linux/amd64/kubectl')
sha256sums_x86_64=('1e1cee1294d6b2f5cae547123df729ca38a07e8c0c1c2b782fb5f31a6541f89b')
source_armv5=('kubectl-v1.20.12::https://storage.googleapis.com/kubernetes-release/release/v1.20.12/bin/linux/arm/kubectl')
sha256sums_armv5=('f0999194f5d7e33e0e4ae6fa929ecaf62ab6d23906e2f9742149dcfb9de52a63')
source_armv6h=('kubectl-v1.20.12::https://storage.googleapis.com/kubernetes-release/release/v1.20.12/bin/linux/arm/kubectl')
sha256sums_armv6h=('f0999194f5d7e33e0e4ae6fa929ecaf62ab6d23906e2f9742149dcfb9de52a63')
source_armv7h=('kubectl-v1.20.12::https://storage.googleapis.com/kubernetes-release/release/v1.20.12/bin/linux/arm/kubectl')
sha256sums_armv7h=('f0999194f5d7e33e0e4ae6fa929ecaf62ab6d23906e2f9742149dcfb9de52a63')
source_aarch64=('kubectl-v1.20.12::https://storage.googleapis.com/kubernetes-release/release/v1.20.12/bin/linux/arm64/kubectl')
sha256sums_aarch64=('2a315fcee435ae61a2d75f5d37051735dc0ee6a1abfe4ff032655de7bdee4adb')
