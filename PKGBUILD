# This is the reScribe AUR PKGBUILD file.
# For more information, see 'man PKGBUILD'.
# Maintainer: reScribe <rescribe.dev@gmail.com>

pkgname=rescribe-bin
# update version in package.json, not here
pkgver=0.0.13
pkgrel=1
epoch=
pkgdesc="reScribe code search engine. CLI for interacting with reScribe api."
arch=("x86_64")
url="https://rescribe.dev"
license=("CC-BY-NC-SA-4.0")
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=("!strip")
install=$pkgname.install
changelog=
source=("https://cli.rescribe.dev/linux.zip")
noextract=()
md5sums=("1313f337d5a8a198edb18585cbf950da")
validpgpkeys=()

package() {
  mkdir -p "$pkgdir/usr/bin"
  chmod +x rescribe
  mv rescribe "$pkgdir/usr/bin"
  mv nodegit.node "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/home/$USER"

  ./postinstall $pkgdir
}
