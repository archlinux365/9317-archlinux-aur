# Maintainer: Andrea Denisse Gómez-Martínez <aur at denisse dot dev>

pkgname=hyperfox-bin
_pkgname=${pkgname%-bin}
pkgver=2.0.0
pkgrel=1
url='https://github.com/malfunkt/hyperfox'
pkgdesc='HTTP/HTTPS MITM proxy and recorder'
arch=(x86_64 i686 armv7h)
license=("MIT")
provides=($_pkgname)
conflicts=($_pkgname)
source=("${url}/releases/download/v${pkgver}/${_pkgname}_linux_amd64.gz")
source_i686=("${url}/releases/download/v${pkgver}/${_pkgname}_linux_386.gz")
source_armv7h=("${url}/releases/download/v${pkgver}/${_pkgname}_linux_armv7.gz")
sha256sums=('2b579111567c5e4bb984cc4d631fdd03770a12e8dbeafba6d95e54e93bd29cb5')
sha256sums_i686=('1c8aabd89dbbdda849988d803be1003f2b1883c2ddd970e2f5a15b7c5c6bb0dc')
sha256sums_armv7h=('2e521e0e57aa5f834105596708ffeb282028695a2bf7bb7b6e460341c34e41c5')
sha512sums=('b7896af7c01730fa44de1434f6e095f983b1dbe2010b4b8afb555e6c850e2e826757eb2eb6e470fa0f2f56834a9e91ae9fd78be35206d8b1ff403a172af1899e')
sha512sums_i686=('8ed2adac968f0bb02d2d79ef7d01a2a05d388c59759322e8a632eca7781a4f9f1ffeddb67b5253903c49dec35211f6aacc6568d7a60d0bc313e8d1e4204b7a09')
sha512sums_armv7h=('8578afe9aef7b070fe4327a701813a9054018d06450675e81eab96f462b47ae1a6ae903acc3c1f01b0b90576efbcbc2f06dc625c1851b51dd276b25a3d19c32c')
b2sums=('b33967cc7365be08ff22139ab03476c86dc8cd2e2184132ea7626d01e44d2ce33da0007790457332091dfc16805be57599ca2ddfd680564e8bd649c4106da16a')
b2sums_i686=('e07410d1880b9baf4a51629e6f1a45f2faf2c9959cdcf46957aa38386334cfa24fdc732f75082e3b8d1d735ae26d6cff25efc0cd1e5b857bfaebe83d8e94c8e0')
b2sums_armv7h=('14f27131e99a68b6956f6ea3dcd7c04f6946e179828b4b2f32f204483faa584627da5126f3d3dd951cd61c08cff445c9076269e9618b00a07dd77a091458ce76')

prepare() {
  cd "$srcdir"

  if [ -f "hyperfox_linux_amd64" ]; then
    mv hyperfox_linux_amd64 hyperfox
  elif [ -f "hyperfox_linux_386" ]; then
    mv hyperfox_linux_386 hyperfox
  else
    mv hyperfox_linux_armv7 hyperfox
  fi
}

package() {
  install -Dm755 "$srcdir/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}
