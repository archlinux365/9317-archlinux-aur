# Maintainer: Tim Visee <tim@visee.me>
#
# This PKGBUILD is managed externally, and is automatically updated here:
# - https://gitlab.com/timvisee/ffsend/blob/master/pkg/aur/ffsend/PKGBUILD
# - Mirror: https://github.com/timvisee/ffsend/blob/master/pkg/aur/ffsend/PKGBUILD

pkgname=ffsend
pkgver=0.2.68
pkgrel=1
pkgdesc="Easily and securely share files from the command line. A Firefox Send client."
url="https://gitlab.com/timvisee/ffsend"
license=('GPL3')
source=("ffsend-v$pkgver.tar.gz::https://gitlab.com/timvisee/ffsend/-/archive/v0.2.68/ffsend-v0.2.68.tar.gz")
sha256sums=('ffd8b161ef13c823c43417ac00402c1f4b0dfa4b3e6e4c5f7cdf0ceae9511c1d')
arch=('x86_64' 'i686')
provides=('ffsend')
depends=('ca-certificates')
makedepends=('openssl>=1.0' 'rust>=1.39' 'cargo' 'cmake')
optdepends=('xclip: clipboard support'
            'bash-completion: support auto completion for bash')

build() {
    cd "ffsend-v$pkgver"
    env CARGO_INCREMENTAL=0 cargo build --release
}

package() {
    cd "$srcdir/ffsend-v$pkgver"

    # Install Binary
    install -Dm755 "./target/release/ffsend" "$pkgdir/usr/bin/ffsend"

    # Install shell completions and LICENSE file
    install -Dm644 "contrib/completions/ffsend.bash" \
        "$pkgdir/etc/bash_completion.d/ffsend"
	install -Dm644 "contrib/completions/_ffsend" \
        "$pkgdir/usr/share/zsh/site-functions/_ffsend"
	install -Dm644 "contrib/completions/ffsend.fish" \
        "$pkgdir/usr/share/fish/vendor_completions.d/ffsend.fish"
    install -Dm644 "LICENSE" \
        "$pkgdir/usr/share/licenses/ffsend/LICENSE"
}
