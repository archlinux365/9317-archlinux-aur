# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=altrace-hg
pkgver=r4.5142f3405002
pkgrel=1
pkgdesc="Debugging tool for applications that use OpenAL for audio"
arch=('x86_64')
url='https://icculus.org/altrace/'
license=('zlib')
makedepends=('cmake' 'ninja')
source=('hg+https://hg.icculus.org/icculus/altrace/')
sha256sums=('SKIP')
provides=(altrace)
conflicts=(altrace)

pkgver() {
  cd altrace
  #hg log -r . -T "{latesttag}{sub('^-0-.*', '', '.{latesttagdistance}+m{node|short}')}"
  printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

build() {
  cd altrace
  cmake \
    -G Ninja \
    -D CMAKE_BUILD_TYPE=Release \
    -D CMAKE_INSTALL_PREFIX=/usr \
    .
  ninja
}

package() {
  cd altrace
  #DESTDIR="$pkgdir" ninja install
  install -dm755 "$pkgdir"/usr/{bin,lib}
  install -m755 -t "$pkgdir"/usr/bin/ altrace_cli altrace_wx
  install -m755 -t "$pkgdir"/usr/lib/ libaltrace_record.so
}
