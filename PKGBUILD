# Maintainer: David Anderson <dave@natulte.net>

pkgname="tailscale-unstable-bin"
_version="1.5.4"
pkgver="1.5.4"
pkgrel="1"
pkgdesc="A mesh VPN that makes it easy to connect your devices, wherever they are."
arch=("x86_64")
url="https://tailscale.com"
license=("MIT")
depends=("glibc")
provides=("tailscale")
conflicts=("tailscale")
backup=("etc/default/tailscaled")
source=("$pkgname-$pkgver.tgz::https://pkgs.tailscale.com/unstable/tailscale_${_version}_amd64.tgz")
sha256sums=('03ccfe6503e01b262e4d36ab0ea3fed0334085b92d257ed4fb11932480d4e96a')
install="tailscale.install"

package() {
    cd tailscale_${_version}_amd64
  mkdir -p "$pkgdir/usr/bin" "$pkgdir/etc/default" "$pkgdir/usr/lib/systemd/system"
  install -m755 tailscale tailscaled "$pkgdir/usr/bin"
  install -m644 systemd/tailscaled.defaults "$pkgdir/etc/default/tailscaled"
  install -m644 systemd/tailscaled.service "$pkgdir/usr/lib/systemd/system"
}
