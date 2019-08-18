# Maintainer: Mario O.M. <marioortizmanero@gmail.com>
pkgname=spotify-videos
pkgver=1.8
pkgrel=1
pkgdesc="Watch Youtube music videos for the currently playing Spotify songs"
arch=("any")
url="https://github.com/marioortizmanero/spotify-music-videos"
license=("custom:MIT")
depends=("python" "glib2" "python-gobject" "gtk3" "youtube-dl" "python-vlc"
         "python-lyricwikia" "python-pydbus" "python-requests" "python-six")
makedepends=("python-setuptools")
source=("https://github.com/marioortizmanero/spotify-music-videos/archive/$pkgver.tar.gz")
md5sums=('752c5b286d9e2aa4c9d2491c31ee687e')

build() {
    cd "spotify-music-videos-$pkgver"
    python setup.py build
}

package() {
    cd "spotify-music-videos-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
