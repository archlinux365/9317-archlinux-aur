# Maintainer: tuftedocelot@fastmail.fm
_basename=git-prompt
_pkgname=${_basename}-rs
pkgname=${_pkgname}-git
pkgver=62
pkgrel=1
pkgdesc='Fast git prompt for various shells written in rust'
arch=('i686' 'x86_64')
url="https://github.com/aignas/git-prompt-rs"
license=('MIT')
depends=()
makedepends=('rust' 'cargo' 'git')
provides=('git-prompt-rs')
conflicts=('git-prompt-rs')
source=("git+${SRC_OVERRIDE:-https://github.com/aignas/git-prompt-rs.git}")
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$_pkgname"
    git rev-list --count HEAD
}

package() {
    make -C "$pkgname"
}

package() {
    cd "$srcdir/$_pkgname"
    mkdir -p "$pkgdir/usr/bin"
    make \
        DESTDIR="$pkgdir" \
        PREFIX="/usr" \
        BASHDIR=/etc/bash_completion.d \
        ZSHDIR=/usr/share/zsh/site-functions \
        FISHDIR=/usr/share/fish/vendor_completions.d \
        install
    install -Dm644 LICENSE \
        "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 "$srcdir/$_pkgname/doc/$_basename.man" "$pkgdir/usr/share/man/man1/$_basename.1"
}
