# Maintainer: Erik Sonnleitner <es at delta-xi dot net>

pkgname=morgen-bin
pkgver=2.3.1
pkgrel=1
pkgdesc='Morgen is a modern, intuitive and smart calendar application and successor to MineTime'
arch=('x86_64')
url='https://morgen.so'
license=('custom')
changelog='ChangeLog'
depends=('libsecret' 'libxss' 'dbus' 'hicolor-icon-theme' 'desktop-file-utils')
provides=('morgen')
source=("https://download.todesktop.com/210203cqcj00tw1/morgen-${pkgver}.deb" morgen)
b2sums=('340cf935a8c343add22e6c955661ff3b1a923e82dc415ae3779dd8e9ffec88fe5f06957786830623ef1f47b30355f93eaf31f9e9285330cf3cee4ab5dadbee4f'
        '22bb3535edf2320bcb51a81e8865b0775b129ff1fad8007c6c9f385f4cdc241b0d166dd8e51a700ad7a1bf72efdcb2d5a13bb3b39ec8aa2db0a71fc22dfeeb57')

package() {
  tar -xJC "${pkgdir}" -f data.tar.xz
  install -Dm 755 "${startdir}"/morgen "${pkgdir}"/usr/bin/morgen
}

