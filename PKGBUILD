# Maintainer: juanrubio

_githubname=tizonia-openmax-il
pkgname=tizonia-all-git
pkgver=0.18.0.r55.g28b2b257
pkgrel=1
pkgdesc="Command-line cloud music player for Linux with support for Spotify, Google Play Music, YouTube, SoundCloud, Dirble Internet Radio, Plex servers and Chromecast devices."
arch=('x86_64')
url="https://www.tizonia.org"
license=('LGPL')
makedepends=('git' 'boost' 'check')
depends=(
    # official repositories:
    'libmad'
    'taglib'
    'mediainfo'
    'sdl'
    'lame'
    'faad2'
    'libcurl-gnutls'
    'libvpx'
    'mpg123'
    'opusfile'
    'libfishsound'
    'liboggz'
    'libpulse'
    'boost-libs'
    'hicolor-icon-theme'
    'python-eventlet'

    # AUR:
    'log4c'
    'libspotify'
    'python-pafy'
    'python-gmusicapi'
    'python-soundcloud-git'
    'youtube-dl'
    'python-pychromecast-git'
    'python-plexapi'
    'python-fuzzywuzzy'
    'python-spotipy'
)
provides=('tizonia-all')
conflicts=('tizonia-all')
source=("${pkgname}"::git+https://github.com/tizonia/${_githubname}.git#branch=develop)
sha256sums=('SKIP')

pkgver() {
    cd "$pkgname"
    local _version="$(git tag | sort -Vr | head -n1 | sed 's/^v//')"
    local _revision="$(git rev-list v"${_version}"..HEAD --count)"
    local _shorthash="$(git rev-parse --short HEAD)"
    printf '%s.r%s.g%s' "$_version" "$_revision" "$_shorthash"
}

prepare() {
  command -v tizonia &> /dev/null \
      && { \
      echo >&2 "Please uninstall tizonia-all or tizonia-all-git before proceeding." ; \
      echo >&2 "See https://github.com/tizonia/tizonia-openmax-il/issues/485." ; \
      exit 1; }
  mkdir -p "$srcdir/path"
  # Tizonia expects Python 2
  ln -sf /usr/bin/python "$srcdir/path/python"
  ln -sf /usr/bin/python-config "$srcdir/path/python-config"
}

build() {
    export PATH="$srcdir/path:$PATH"
    export PYTHON="/usr/bin/python"
    cd "$pkgname"
    autoreconf -ifs
    ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --silent \
        --enable-silent-rules \
        CFLAGS='-O2 -s -DNDEBUG' \
        CXXFLAGS='-O2 -s -DNDEBUG -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security'
    make
}

package() {
    cd "$pkgname"
    make DESTDIR="$pkgdir/" install
}
