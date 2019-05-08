# PKGBUILD generated by pipman
# Python package author: Standard Ebooks <standardebooks@googlegroups.com>
# Maintainer: Tassos Natsakis <7712382@eipieq.com>
pkgname=python-standardebooks
pkgver = 1.0.11
pkgrel=2
pkgdesc="The toolset used to produce Standard Ebooks epub ebooks."
arch=(any)
url="https://standardebooks.org"
license=(GPLv3)
makedepends=("python" "python-pip")
build() {
  pip install --no-deps --target="standardebooks" standardebooks==$pkgver
}
package() {
  sitepackages=$(python -c "import site; print(site.getsitepackages()[0])")
  mkdir -p $pkgdir/"$sitepackages"
  cp -r $srcdir/standardebooks/* $pkgdir/"$sitepackages"
}
