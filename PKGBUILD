# Maintainer: Thomas Gerbet <thomas at gerbet dot me>

# yubikey-agent can be started with `systemctl --user start yubikey-agent.service`
# Enabled with the user session with `systemctl --user enable yubikey-agent.service`
# The PC/SC Smart Card Daemon must activated: `systemctl enable --now pcscd.socket`
# Socket path is "${XDG_RUNTIME_DIR}/yubikey-agent/yubikey-agent.sock"

pkgname=yubikey-agent
pkgver=0.1.3
pkgrel=4
pkgdesc='A seamless ssh-agent for YubiKeys'
arch=('x86_64' 'aarch64')
url="https://filippo.io/yubikey-agent"
license=('BSD')
depends=('pcsclite' 'pinentry')
makedepends=('go')
source=(
  "https://github.com/FiloSottile/yubikey-agent/archive/v${pkgver}.tar.gz"
  "https://github.com/FiloSottile/yubikey-agent/raw/5000c3231e05c8998dbee18cddb5413c1f6a5fe5/contrib/systemd/user/yubikey-agent.service"
)
sha256sums=(
  '58c597551daf0c429d7ea63f53e72b464f8017f5d7f88965d4dae397ce2cb70a'
  'e76c9d5850755e6066478baafbb2d9717ef1f0ffa1a7ed9fc415b7479034e36d'
)

build() {
  cd $pkgname-$pkgver
  go build \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "-extldflags $LDFLAGS" \
    -o $pkgname .
}

package() {
  cd $pkgname-$pkgver
  install -Dm755 $pkgname "$pkgdir"/usr/bin/$pkgname
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  install -Dm644 "$srcdir"/yubikey-agent.service "$pkgdir"/usr/lib/systemd/user/yubikey-agent.service
}
