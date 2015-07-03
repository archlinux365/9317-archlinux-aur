# $Id: PKGBUILD 130580 2015-04-03 18:10:17Z anatolik $
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor:  Bartłomiej Piotrowski <nospam@bpiotrowski.pl>
# Contributor: Kaiting Chen <kaitocracy@gmail.com>
# Contributor: tocer <tocer.deng@gmail.com>

pkgname=v8
# use http://omahaproxy.appspot.com/ to find stable v8 version
pkgver=3.30.33.16
pkgrel=2
pkgdesc='Fast and modern Javascript engine'
arch=(i686 x86_64)
url='http://code.google.com/p/v8'
license=(BSD)
depends=(readline icu)
makedepends=(python2 ninja)
# unfortunately https://github.com/$pkgname/$pkgname does not contain all tags
source=(https://commondatastorage.googleapis.com/chromium-browser-official/$pkgname-$pkgver-lite.tar.bz2
        v8.pc)
sha256sums=('a9eed0d858abe1999c1d4500039afd16feb5f8ee6ca1820eb467efafdccf2cf6'
            '2b054309df9af9fb2e3e14527e88360b44745649b4866e592fb357ac90935f5d')

case "$CARCH" in
  x86_64) V8_ARCH='x64' ;;
  i686) V8_ARCH='ia32' ;;
esac

prepare() {
  cd v8-$pkgver

  find build/ test/ tools/ src/ -type f -exec \
    sed -e 's_^#!/usr/bin/env python$_&2_' \
        -e 's_^#!/usr/bin/python$_&2_' \
        -e "s_'python'_'python2'_" -i {} \;

  sed 's/\bpython\b/python2/' -i Makefile build/gyp/gyp

  sed "s/@VERSION@/$pkgver/g" -i "$srcdir/v8.pc"
}

build() {
  cd v8-$pkgver

  build/gyp_v8 -Dv8_enable_i18n_support=1 -Duse_system_icu=1 -Dconsole=readline -Dcomponent=shared_library -Dv8_target_arch=$V8_ARCH -Dwerror= -f ninja

  ninja -C out/Release all # or target 'v8 d8' if you do not need tests
}

check() {
  cd v8-$pkgver

  # the test fails https://code.google.com/p/v8/issues/detail?id=2899
  rm test/intl/collator/default-locale.js

  tools/run-tests.py --no-presubmit --outdir=out --buildbot --arch=$V8_ARCH --mode=Release # --progress=dots
}

package() {
  cd v8-$pkgver

  install -Dm755 out/Release/d8 "$pkgdir"/usr/bin/d8
  install -Dm755 out/Release/lib/libv8.so "$pkgdir"/usr/lib/libv8.so

  # V8 has several header files and ideally if it had its own folder in /usr/include
  # But doing it here will break all users. Ideally if they use provided pkgconfig file.
  install -d "$pkgdir"/usr/include
  install -Dm644 include/*.h "$pkgdir"/usr/include

  install -d "$pkgdir"/usr/lib/pkgconfig
  install -m644 "$srcdir/v8.pc" "$pkgdir"/usr/lib/pkgconfig

  install -d "$pkgdir"/usr/share/licenses/v8
  install -m644 LICENSE* "$pkgdir"/usr/share/licenses/v8
}
