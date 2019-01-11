# Maintainer:  Esben Haabendal <esben@haabendal.dk>
# Contributor: Ivy Foster <joyfulgirl@archlinux.us>
# Contributor: Stefan Husmann <stefan.husmann@t-online.de>
# Contributor: Peter Simons <simons@cryp.to>
# Contributor: Just Lest <just.lest@gmail.com>
# Contributor: Daniel White <daniel@whitehouse.id.au>

pkgname=emacs-magit-git
pkgver=2.90.1.r93.4f2144cf108a
pkgrel=1
pkgdesc="It's Magit! A Emacs mode for Git."
arch=('any')
_github_org="magit"
_github_repo="magit"
url="http://github.com/${_github_org}/${_github_repo}"
license=('GPL3')
depends=('emacs>=25.1' 'git>=2.0.0' 'emacs-dash>=2.14.1' 'emacs-ghub>=3.2.0' 'emacs-magit-popup>=2.12.5' 'emacs-with-editor>=2.7.3')
provides=('emacs-magit')
conflicts=('emacs-magit')
install="${pkgname}.install"
source=("git+https://github.com/${_github_org}/${_github_repo}.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/${_github_repo}"
  printf "%s" "$(git describe --long | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
  cd "$srcdir/${_github_repo}"
  make LOAD_PATH="-L /usr/share/emacs/site-lisp -L /usr/share/emacs/site-lisp/dash -L ${srcdir}/magit/lisp" \
       lisp docs
}

package() {
  cd "$srcdir/${_github_repo}"
  make PREFIX="/usr" DESTDIR="${pkgdir}" install
}
