# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=sleep-inhibitor
pkgver=1.8
pkgrel=2
pkgdesc="Program to run plugins to inhibit system sleep/suspend"
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
backup=("etc/$pkgname.conf")
depends=("python>=3.6" "python-ruamel-yaml")
makedepends=("python-pip" "python-wheel")
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha1sums=('1e907ddcbd36c7fa1736d74ef6f2a3034bce5723')

package() {
  cd "$srcdir/$pkgname-$pkgver"

  PIP_CONFIG_FILE=/dev/null pip install \
    --root="$pkgdir" \
    --isolated \
    --ignore-installed \
    --no-deps \
    --disable-pip-version-check \
    --no-python-version-warning \
    --no-warn-script-location \
    --no-cache-dir \
    --no-compile \
    .

  local pdir=$(python -c "import site; print(site.getsitepackages()[0])")
  local _pkgname=${pkgname//-/_}
  cd "$pkgdir/$pdir"
  rm -f $_pkgname-*.dist-info/direct_url.json
  python -O -m compileall -q .

  cd "$srcdir/$pkgname-$pkgver"
  install -D -m 644 "$pkgname.service" \
    "$pkgdir/usr/lib/systemd/system/$pkgname.service"
}

# vim:set ts=2 sw=2 et:
