# Maintainer: colemickens <cole.mickens@gmail.com>
# https://packages.cloud.google.com/apt/dists/kubernetes-xenial/main/binary-amd64/Packages

pkgname=kubeadm-beta-bin
pkgdesc="Kubernetes.io kubeadm binary (beta)"
pkgver=1.10.0.rc1
pkgrel=1
arch=('x86_64')
url="http://kubernetes.io"
license=('apache')
depends=('kubelet-beta-bin')
provides=('kubeadm-bin')
conflicts=('kubernetes' 'kubeadm-bin')
source_x86_64=(
  'https://packages.cloud.google.com/apt/pool/kubeadm_1.9.5-00_amd64_3d2a1245ecfd2ef57d1d6f0f3897658d5e506ed467d8197f0669be445e9db259.deb'
  'https://dl.k8s.io/v1.10.0-rc.1/kubernetes-node-linux-amd64.tar.gz'
)
sha256sums_x86_64=(
  '3d2a1245ecfd2ef57d1d6f0f3897658d5e506ed467d8197f0669be445e9db259'
  'a3a3e27c2b77fa46b7c9ff3b8bfdc672c2657e47fc4b1ca3d76cdc102ca27630'
)

package() {
  tar -vxf data.tar.xz
  install -D -m0644 "./etc/systemd/system/kubelet.service.d/10-kubeadm.conf" "${pkgdir}/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"
  #install -D -m0755 "./usr/bin/kubeadm" "${pkgdir}/usr/bin/kubeadm"
  install -D -m0755 "./kubernetes/node/bin/kubeadm" "${pkgdir}/usr/bin/kubeadm"
}
