# Maintainer: Chris Hobbs (RX14) <chris@rx14.co.uk>

pkgname=nadeshiko
pkgver=2.9.11
pkgrel=1
pkgdesc="A Linux tool to cut short videos with ffmpeg"
arch=('any')
url="https://github.com/deterenkelt/$pkgname"
license=('GPL3')
depends=("bc" "xdg-user-dirs" "ffmpeg" "mediainfo" "perl-file-mimeinfo" "mkvtoolnix-cli" "time" "wget"
         "xmlstarlet" "inotify-tools" "lsof" "jq" "socat" "python-gobject")
optdepends=("libnotify: desktop notifications"
            "mpv: nadeshiko-mpv script"
            "gtk3: nadeshiko-mpv script")
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/deterenkelt/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('95c74f1d0fc7118b261e8f712d0e261a7829044f29380fddc34478b22f773e01')

prepare() {
    cd $srcdir/Nadeshiko-$pkgver

    sed -i 's/check_for_updates=yes/check_for_updates=no/' defconf/nadeshiko.10_main.rc.sh
}

package() {
    cd $srcdir/Nadeshiko-$pkgver

    make install DESTDIR="$pkgdir" PREFIX=/usr
}
