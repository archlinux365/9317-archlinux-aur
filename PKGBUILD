# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=kubectl-gke-rapid-bin
pkgver=v1.20.14
pkgrel=1
pkgdesc='Kubernetes.io client binary, compatible with the GKE version from the rapid channel'
provides=("kubectl=v1.20.14")
conflicts=(kubectl kubectl-bin)
arch=(i686 x86_64 armv5 armv6h armv7h aarch64 )
url="https://github.com/kubernetes/kubectl"
license=('Apache-2.0')

package() {
  install -Dm755 "$srcdir/kubectl-v1.20.14" "$pkgdir/usr/bin/kubectl"
}

source_i686=('kubectl-v1.20.14::https://storage.googleapis.com/kubernetes-release/release/v1.20.14/bin/linux/386/kubectl')
sha256sums_i686=('6e79b2b861c22e3446c486e04ba556b7cc8a14191bb3b9921ba3381ef0c737df')
source_x86_64=('kubectl-v1.20.14::https://storage.googleapis.com/kubernetes-release/release/v1.20.14/bin/linux/amd64/kubectl')
sha256sums_x86_64=('7b582833331dc98a20c01e27006c2949fe7141bb197d20d824ac7efe85230ea3')
source_armv5=('kubectl-v1.20.14::https://storage.googleapis.com/kubernetes-release/release/v1.20.14/bin/linux/arm/kubectl')
sha256sums_armv5=('30a0b11050e227006d5f5cf48a7db29da004faa6b3f20c8e0bf398a017266475')
source_armv6h=('kubectl-v1.20.14::https://storage.googleapis.com/kubernetes-release/release/v1.20.14/bin/linux/arm/kubectl')
sha256sums_armv6h=('30a0b11050e227006d5f5cf48a7db29da004faa6b3f20c8e0bf398a017266475')
source_armv7h=('kubectl-v1.20.14::https://storage.googleapis.com/kubernetes-release/release/v1.20.14/bin/linux/arm/kubectl')
sha256sums_armv7h=('30a0b11050e227006d5f5cf48a7db29da004faa6b3f20c8e0bf398a017266475')
source_aarch64=('kubectl-v1.20.14::https://storage.googleapis.com/kubernetes-release/release/v1.20.14/bin/linux/arm64/kubectl')
sha256sums_aarch64=('bfafaa9208b6c2e5806971e0b4fd9e98ba22940bfb42072b34426bc151125e9d')
