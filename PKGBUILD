# Maintainer: Anatoly Rugalev <anatoly.rugalev gmail com>

pkgname=kube-commander
pkgver=0.7.1
pkgrel=1
pkgdesc="kubecom is terminal UI for easy interaction with Kubernetes"
url="https://github.com/AnatolyRugalev/kube-commander"
license=('MIT')
arch=('x86_64')
depends=('kubectl')

source=("kubecom_0.7.1::https://github.com/AnatolyRugalev/kube-commander/releases/download/0.7.1/kubecom_0.7.1_linux_amd64" 'kube-commander' 'kubectl-ui')
sha256sums=('3869d1db0df319c0085af84194f1b03497a4d0abd021d37509255c0444fe2b1f' 'SKIP' 'SKIP')
package() {
  cd "$srcdir"
  install -d "$pkgdir/usr/bin"
  install -m755 kube-commander "$pkgdir/usr/bin/kube-commander"
  install -m755 kubectl-ui "$pkgdir/usr/bin/kubectl-ui"
  install -m755 kubecom_0.7.1 "$pkgdir/usr/bin/kubecom"
}
