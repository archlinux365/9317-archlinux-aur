# Maintainer : Ashcon Mohseninia <ashcon50@gmail.com>

pkgver() {
  cd "razer-laptop-control"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}
pkgver=v1.0.1.r60.gdd4ffa0
pkgname="razer-laptop-control-git"
pkgrel=1
pkgdesc="Daemon and CLI for razer laptop's for RGB, fan and power control"
arch=('i686' 'x86_64')
url="https://github.com/rnd-ash/razer-laptop-control"
license=("GPL2")
depends=('razer-laptop-control-dkms-git')
makedepends=('git' 'rust' 'cargo')
source=("git+https://github.com/rnd-ash/razer-laptop-control")
md5sums=("SKIP")
conflicts=("openrazer-meta" "openrazer-driver-dkms" "openrazer-meta-git" "openrazer-daemon-git")
install=daemon.install

prepare() {
    cd $reponame
}

package() {
    cd "razer-laptop-control/razer_control_gui"
    cargo build --release
    mkdir -p "$pkgdir/usr/share/razercontrol/"
    mkdir -p "$pkgdir/usr/bin/"
    mkdir -p "$pkgdir/etc/systemd/system/"
    cp "target/release/razer-cli" "$pkgdir/usr/bin/"
    cp "target/release/daemon" "$pkgdir/usr/share/razercontrol/"
    cp "razerdaemon.service" "$pkgdir/etc/systemd/system/"
}
