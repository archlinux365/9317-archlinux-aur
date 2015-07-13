# Maintainer: McLenin <mclenin at gooogles email>

pkgname=purple-facebook-git
_gitname="purple-facebook"
pkgver=201507013
pkgrel=1
pkgdesc="A purple (pidgin, finch, ...) plugin for Facebook chat, based on the new Facebook 
Messenger 
protocol"
url="https://github.com/jgeboski/purple-facebook/"
arch=('i686' 'x86_64')
license='GPL2'

source=('purple-facebook::git+https://github.com/jgeboski/purple-facebook'
)
md5sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  git log -1 --format="%cd" --date=short | sed "s|-||g"
}


depends=(
  libpurple json-glib zlib
)
makedepends=(mercurial)


build() {
  msg2 "This will take a bit as it needs to download more code"
  cd "$_gitname"
  ./autogen.sh
  make
}

package() {
  cd "$_gitname"
  make DESTDIR="$pkgdir/" install
}
