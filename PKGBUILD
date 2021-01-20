# Maintainer: Logan Magee <mageelog@gmail.com>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: whoami <whoami@systemli.org>
# Contributor: Jefferson González <jgmdev@gmail.com>
# Contributor: Chloe Kudryavtsev <toast@toastin.space>

pkgname=vlang-git
pkgver=0.2.r548.gb3a4f746a
pkgrel=1
pkgdesc='Simple, fast, safe, compiled language for developing maintainable software'
arch=('x86_64')
url='https://vlang.io'
license=('MIT')
depends=('glibc')
makedepends=('git')
optdepends=('glfw: Needed for graphics support'
            'freetype2: Needed for graphics support'
            'openssl: Needed for http support')
provides=('vlang')
conflicts=('v' 'vlang' 'vlang-bin')
source=('vlang::git+https://github.com/vlang/v')
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/vlang"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}/vlang"
  touch cmd/tools/.disable_autorecompilation
}

build() {
  cd "${srcdir}/vlang"
  # We don't require optimizations when compiling the bootstrap executable and
  # -O2 actually breaks `./v self` (resulting in "cgen error:"), so we empty
  # CFLAGS and LDFLAGS to ensure successful compilation.
  CFLAGS="" LDFLAGS="" prod=1 make

  # We have to manually compile this tool before executing it since we disable
  # automatic compilation in prepare()
  ./v cmd/tools/vbuild-tools.v
  # vpm and vdoc fail to compile with "unsupported linker option" when LDFLAGS
  # is set
  LDFLAGS="" ./v build-tools
}

package() {
  cd "${srcdir}/vlang"
  install -d "$pkgdir/usr/lib/vlang" "$pkgdir/usr/share/vlang" "$pkgdir/usr/bin"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm755 v "$pkgdir/usr/lib/vlang"
  cp -a cmd "$pkgdir/usr/lib/vlang/"
  cp -a examples "$pkgdir/usr/share/vlang/"
  cp -a thirdparty "$pkgdir/usr/lib/vlang/"
  cp -a vlib "$pkgdir/usr/lib/vlang/"
  cp v.mod "$pkgdir/usr/lib/vlang/"
  ln -s /usr/lib/vlang/v "$pkgdir/usr/bin/v"
}
