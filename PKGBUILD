# Maintainer: amiga23 <t.scheller@email.de>
# Contributor: FabioLolix <fabio.loli@disroot.org>
# Contributor: duxet <duxetlg@gmail.com>
pkgname=k3s-1.25-bin
pkgver=1.25.2+k3s1
pkgrel=1
pkgdesc="Lightweight Kubernetes"
url="https://k3s.io"
license=('Apache')
arch=('x86_64' 'armv7h' 'aarch64')
provides=('k3s')
conflicts=('k3s')

backup=("etc/systemd/system/k3s.service.env")

source=(
  "k3s.service"
  "k3s.service.env"
  "k3s-killall.sh"
)

source_x86_64=(
  "k3s-${pkgver}-x86_64::https://github.com/k3s-io/k3s/releases/download/v${pkgver}/k3s"
)

source_armv7h=(
  "k3s-${pkgver}-armv7h::https://github.com/k3s-io/k3s/releases/download/v${pkgver}/k3s-armhf"
)

source_aarch64=(
  "k3s-${pkgver}-aarch64::https://github.com/k3s-io/k3s/releases/download/v${pkgver}/k3s-arm64"
)
sha256sums=('4f613d87b6fca9b2f2d15700f448538b5537b846405451a1fdc060727445c529'
            'cde96553e9609791cd9fe1ff33482e33c4cfec22761f7766f5c278a9ce2ec679'
            'a09747c9541cd22df97adcabc44c09d97a4305a9d976e9bf8191849cb1ce30b6')
sha256sums_x86_64=('1f76cfc0b8434a7eaa665dffcd016e477a2cff47f7ee2d4a3b7a3db23b05eff6')
sha256sums_armv7h=('d7863a57ac231e9db18ed58ff2c489cbce6e6fcfe40d536268cc6640ac7e7a32')
sha256sums_aarch64=('cfae82ed3fef3973756b2cd8a195506d09f95ed8b2327827a312be11d4f414bb')

package() {
  install -Dm 755 $srcdir/k3s-${pkgver}-${CARCH} $pkgdir/usr/bin/k3s

  install -dm 755 $pkgdir/usr/lib/systemd/system
  install -dm 755 $pkgdir/etc/systemd/system

  install -m 644 $srcdir/k3s.service $pkgdir/usr/lib/systemd/system/k3s.service
  install -m 400 $srcdir/k3s.service.env $pkgdir/etc/systemd/system/k3s.service.env

  install -m 700 $srcdir/k3s-killall.sh $pkgdir/usr/bin/k3s-killall
}
