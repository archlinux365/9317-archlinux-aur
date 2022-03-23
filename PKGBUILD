# Maintainer: Joan Bruguera Micó <joanbrugueram@gmail.com>
pkgname=sysbox-ce-bin
pkgver=0.5.0
pkgrel=1
pkgdesc="Container runtime with VM-like isolation (run Systemd, Docker, K8s in containers)"
url="https://github.com/nestybox/sysbox"
arch=('x86_64')
license=('Apache')
source=("https://downloads.nestybox.com/sysbox/releases/v${pkgver}/sysbox-ce_${pkgver}-0.linux_amd64.deb")
sha256sums=('7fa83a4f3b83018ec3dcef1f547ef25a99645f6c6544276bfbf8831e63a092d7')
install=install.sh
depends=('rsync' 'fuse2')
optdepends=('shiftfs: Operation without userns-remap')
provides=('sysbox-ce')
conflicts=('sysbox-ce')

prepare() {
	mkdir -p data
	tar xf data.tar.zst -C data
}

package() {
	cd "data"
	(cd usr/lib/modules-load.d && find . -type f -exec install -Dm644 "{}" "${pkgdir}/usr/lib/modules-load.d/{}" \; )
	(cd lib/sysctl.d && find . -type f -exec install -Dm644 "{}" "${pkgdir}/usr/lib/sysctl.d/{}" \; )
	(cd lib/systemd && find . -type f -exec install -Dm644 "{}" "${pkgdir}/usr/lib/systemd/{}" \; )
	(cd usr/bin && find . -type f -exec install -Dm755 "{}" "${pkgdir}/usr/bin/{}" \; )
	(cd usr/share/doc && find . -type f -exec install -Dm644 "{}" "${pkgdir}/usr/share/doc/{}" \; )
}
