# Maintainer: mathieui <mathieui[at]mathieui.net>

pkgname=poezio-git
_pkgname=poezio
pkgrel=1
pkgver=20170108.806485d
pkgdesc="A full-featured command-line irc-like (muc-centered) jabber client (git)"
arch=('i686' 'x86_64')
url="http://poez.io"
conflicts=('poezio')
provides=('poezio')
license=('zlib')
depends=('python' 'python-setuptools' 'python-slixmpp-git')
makedepends=('git' 'python-sphinx')
optdepends=('pure-python-otr-git: OTR plugin'
            'gnupg: GPG plugin'
            'python-pyinotify: screen/tmux detach plugin'
            'figlet: ASCII art plugin')

source=("git://git.poez.io/poezio/")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  git log -1 --format='%cd.%h' --date=short | tr -d - | sed 's/-/./'
}

build() {
  cd "$srcdir/$_pkgname"
  make
}

package() {
  cd "$srcdir/$_pkgname"
  make DESTDIR="$pkgdir/" prefix=/usr install
}
