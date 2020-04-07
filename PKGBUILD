# Maintainer: German Lashevich <german.lashevich@gmail.com>

pkgname=kubectl-gke-rapid-bin
pkgver=v1.16.8
pkgrel=1
pkgdesc='Kubernetes.io client binary, compatible with the GKE version from the rapid channel'
provides=("kubectl=v1.16.8")
conflicts=(kubectl kubectl-bin)
arch=(i686 x86_64 armv5 armv6h armv7h aarch64 )
url="https://github.com/kubernetes/kubectl"
license=('Apache-2.0')

package() {
  install -Dm755 "$srcdir/kubectl-v1.16.8" "$pkgdir/usr/bin/kubectl"
}

source_i686=('kubectl-v1.16.8::https://storage.googleapis.com/kubernetes-release/release/v1.16.8/bin/linux/386/kubectl')
sha256sums_i686=('de05dcdf45cee93e05ea4b7d83b48f64f1f24f70465abaef72cca002e5a13e7f')
source_x86_64=('kubectl-v1.16.8::https://storage.googleapis.com/kubernetes-release/release/v1.16.8/bin/linux/amd64/kubectl')
sha256sums_x86_64=('1d8602496ca4b843824a9746206509991eb8d30b5bb8436b36a02718729934ed')
source_armv5=('kubectl-v1.16.8::https://storage.googleapis.com/kubernetes-release/release/v1.16.8/bin/linux/arm/kubectl')
sha256sums_armv5=('803c3197845fd5f97c99bcba6e7a0af223128442deccca92df2d267d545db166')
source_armv6h=('kubectl-v1.16.8::https://storage.googleapis.com/kubernetes-release/release/v1.16.8/bin/linux/arm/kubectl')
sha256sums_armv6h=('803c3197845fd5f97c99bcba6e7a0af223128442deccca92df2d267d545db166')
source_armv7h=('kubectl-v1.16.8::https://storage.googleapis.com/kubernetes-release/release/v1.16.8/bin/linux/arm/kubectl')
sha256sums_armv7h=('803c3197845fd5f97c99bcba6e7a0af223128442deccca92df2d267d545db166')
source_aarch64=('kubectl-v1.16.8::https://storage.googleapis.com/kubernetes-release/release/v1.16.8/bin/linux/arm64/kubectl')
sha256sums_aarch64=('d08aab5f02db63690672e5d9052659589301323c010d90734788d5332ac99daa')
