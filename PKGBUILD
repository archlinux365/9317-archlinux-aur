# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

libyaml_version=0.2.5

pkgname=zigmod
pkgver=98
pkgrel=1
pkgdesc="A package manager for the Zig programming language"
url="https://github.com/nektro/zigmod"
license=('MIT')
makedepends=('git' 'zig')
arch=('x86_64')
source=(
  "${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz"
  "https://github.com/yaml/libyaml/releases/download/${libyaml_version}/yaml-${libyaml_version}.tar.gz"
)
sha256sums=(
  'd9695e3a83b56445aef14f3771329d173a599ced2a94dbc0c485ca7cf97611e1'
  'c642ae9b75fee120b2d96c712538bd2cf283228d2337df2cf2988e3c02678ef4'
)

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  rm -r libs/yaml
  ln -s "${srcdir}/yaml-${libyaml_version}" libs/yaml
  zig build -Dbootstrap
  # See https://github.com/nektro/zigmod/issues/57#issuecomment-1028442152
  # > if you use `zigmod ci` instead of `zigmod fetch`
  # > It will pull in a working version of the dependencies that `zig build` will succeed for
  # and https://nektro.github.io/zigmod/commands/ci.html
  #./zig-out/bin/zigmod fetch
  ./zig-out/bin/zigmod ci
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  zig build -Dtag=v${pkgver}
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -D -m755 zig-out/bin/zigmod "${pkgdir}/usr/bin/zigmod"
  install -D -m644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  cp -r docs "${pkgdir}/usr/share/doc/${pkgname}/docs"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
