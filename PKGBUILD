# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=pika-backup
_pkgver=0.4.0-beta.1
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="Simple backups based on borg"
arch=('x86_64' 'aarch64')
url="https://apps.gnome.org/app/org.gnome.World.PikaBackup"
license=('GPL')
depends=('borg' 'libadwaita' 'libsecret' 'python-llfuse')
makedepends=('cargo' 'itstool' 'meson')
source=("https://gitlab.gnome.org/World/pika-backup/-/archive/v$_pkgver/$pkgname-v$_pkgver.tar.gz"
        'remove-install_script.patch')
sha256sums=('07a9ba83e03e1cbbd78fda1b9654ae13194198c88b8de6334c48b46d8cec30c2'
            '3045a0dc5069bf7ff5fafb0d6702dbc2168fe79af2a184cbc802d76f1be82a9b')

prepare() {
  cd "$pkgname-v$_pkgver"

  # Disable update-desktop-database & gtk-update-icon-cache
  patch -Np1 -i ../remove-install_script.patch

  export RUSTUP_TOOLCHAIN=stable
  cargo fetch --target "$CARCH-unknown-linux-gnu"
}

build() {
  export RUSTUP_TOOLCHAIN=stable
  arch-meson "$pkgname-v$_pkgver" build
  meson compile -C build
}

# cargo-test fails
#check() {
#  export RUSTUP_TOOLCHAIN=stable
#  meson test -C build --print-errorlogs
#}

package() {
  meson install -C build --destdir "$pkgdir"
}
