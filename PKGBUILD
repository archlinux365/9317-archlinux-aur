pkgdesc="Bash interface for systemd-nspawn container management"
pkgname=nspawn.sh
pkgver=master
pkgrel=0
arch=('i686' 'x86_64')
url="https://github.com/random-archer/nspawn.sh"
#source=("git+${url}.git#tag=v$pkgver")
source=("git+${url}.git#branch=master")
md5sums=('SKIP')
license=('Apache')
makedepends=('git')

package() {
  cd "$pkgname"
  install -D -m755 nspawn.sh "$pkgdir/usr/bin/nspawn.sh"
}
