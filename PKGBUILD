# Maintainer: SimPilotAdamT <adam_tazul@outlook.com>
# Developer: Taylor Marks <taylor@marksfam.com>

pkgname=python-playsound
pkgver=1.3.0
pkgrel=1
pkgdesc="Pure Python, cross platform, single function module with no dependencies for playing sounds."
arch=(any)
url="https://github.com/TaylorSMarks/playsound"
license=(MIT)
makedepends=("python-pip")
depends=("python")
build() {
  pip install --no-deps --target="playsound"
}
package() {
  sitepackages=$(python -c "import site; print(site.getsitepackages()[0])")
  mkdir -p $pkgdir/"$sitepackages"
  cp -r $srcdir/playsound/* $pkgdir/"$sitepackages"
}
