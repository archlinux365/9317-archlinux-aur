# $Id$
# Maintainer: winlu <derwinlu@gmail.com>

pkgname=erl_call
pkgver=18.2.1
pkgrel=1
pkgdesc='Symlink erl_call to /usr/bin'
arch=('any')
url="erlang.org"
license=('APACHE')
depends=('erlang-nox')
source=()


package() {
  install -dm755 "$pkgdir/usr/bin"
  ln -s "/usr/lib/erlang/lib/erl_interface-3.8.1/bin/erl_call" "$pkgdir/usr/bin/${pkgname}"
}
