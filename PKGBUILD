# Maintainer: Stephen Zhang <zsrkmyn at gmail dot com>
# Co-maintainer: Jiachen Yang <farseerfc@gmail.com>
# Co-maintainer: lilydjwg <lilydjwg@gmail.com>

pkgname=nvchecker-git
epoch=1
pkgver=2.1dev.r6
pkgrel=1
pkgdesc="a tool for checking if a new version of some software has been released."
arch=('any')
url="https://github.com/lilydjwg/nvchecker"
license=('MIT')
depends=('python' 'python-setuptools' 'python-structlog' 'python-tornado' 'python-pycurl' 'python-toml' 'python-appdirs')
makedepends=('git')
optdepends=('pyalpm: for "sort_version_key = vercmp" config')
conflicts=('nvchecker')
provides=("nvchecker=$pkgver")
source=('git://github.com/lilydjwg/nvchecker.git')
md5sums=('SKIP')

_gitroot=nvchecker

pkgver() {
  cd "$srcdir/$_gitroot"
  echo $(awk '$1 == "__version__" { gsub(/\x27/, "", $3); print $3 }' nvchecker/__init__.py).r$(git describe --long | cut -d- -f2)
}

build() {
  cd $srcdir/$_gitroot
  python3 setup.py build
}

package() {
  cd $srcdir/$_gitroot
  python3 setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 sample_config.toml docs/usage.rst -t "$pkgdir/usr/share/doc/$pkgname/"
}

# vim:set ts=2 sw=2 et:
