# Maintainer: Abdó Roig-Maranges <abdo.roig@gmail.com>

pkgname=git-spindle-git
pkgver=3.2
pkgrel=1
pkgdesc="Git subcommands for integrating with central services like github, gitlab and bitbucket"
arch=('any')
url="http://github.com/seveas/git-spindle"
license=('GPLv3')
depends=('git' 'python' 'python-github3.py' 'python-whelk' 'python-docopt')
makedepends=('make' 'python-sphinx')
optdepends=()
provides=('git-spindle')
conflicts=('git-spindle')
source=("git+https://github.com/seveas/git-spindle.git")
md5sums=('SKIP')

pkgver() {
  git --git-dir="$srcdir/git-spindle/.git" describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  # NOTE: Since we only build the man page, we tweak docs configuration so that
  # it does not require a sphinx theme.
  sed -i '/csp/d' "$srcdir/git-spindle/docs/conf.py"
}

build() {
  cd "$srcdir/git-spindle"
  python setup.py build

  cd "$srcdir/git-spindle/docs"
  make man
}

package() {
  cd "$srcdir/git-spindle"
  python setup.py install --prefix=/usr --root="$pkgdir"

  cd "$srcdir/git-spindle/docs"
  install -d "$pkgdir/usr/share/man/man1/"
  install -m644 _build/man/*.1 "$pkgdir/usr/share/man/man1/"
}

# vim:set ts=2 sw=2 et:
