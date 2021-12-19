# Maintainer: somini <dev@somini.xyz>
pkgbase=inpulse-to-talk
pkgname=inpulse-to-talk
pkgver=v2.1
pkgrel=1
pkgdesc="Push-to-Talk with libinput + Pulseaudio"
url="https://gitlab.com/somini/inpulse-to-talk"
# Technically, 'pulseaudio-ctl' is optdepends
depends=('libinput' 'pulseaudio-ctl')
makedepends=('cargo')
license=('GPL3')
arch=('any')
source=(
    "$pkgname-$pkgver.tar.gz::https://gitlab.com/somini/inpulse-to-talk/-/archive/$pkgver/inpulse-to-talk-$pkgver.tar.gz"
    )
sha256sums=('d56827013e28cd9ac44b7a79c84813cdf931b69e47bcab51f7e48cab3703af7f')

prepare() {
    cd "${srcdir}/$pkgname-$pkgver"
    cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
    cd "${srcdir}/$pkgname-$pkgver"
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo build --frozen --release --all-features
}

package() {
    cd "${srcdir}/$pkgname-$pkgver"

    # Use polkit for privilege escalation
    patch -p1 <"polkit/polkit.patch"

    # Polkit Files
    install -dD -m750 "$pkgdir/usr/share/polkit-1/rules.d"
    install -D -m644 polkit/xyz.somini.inpulse-to-talk.run.policy "$pkgdir/usr/share/polkit-1/actions/xyz.somini.inpulse-to-talk.run.policy"
    install -D -m644 polkit/inpulse-to-talk.rules "$pkgdir/usr/share/polkit-1/rules.d/inpulse-to-talk.rules"

    # Binaries
    for bin in inpulse-daemon; do
        install -v -D -m755 "target/release/$bin" "$pkgdir/usr/bin/$bin"
    done
    # Shell Scripts
    for bin in inpulse-*; do
        echo "=> $bin"
        install -D -m755 "$bin" "$pkgdir/usr/bin/$bin"
    done
    # Autostart Desktop File
    install -D -m644 contrib/inpulse-to-talk.desktop -t "$pkgdir/etc/xdg/autostart"
}
