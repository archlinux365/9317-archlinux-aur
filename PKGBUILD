# Maintainer: Michael Taboada <michael@2mb.solutions>
# Maintainer: Storm Dragon <stormdragon2976@gmail.com>
_pkgname=raspotify
pkgname=raspotify-git
pkgver=0.14.0.r0.822c0d8
pkgrel=1
pkgdesc="A spotify connect client that just works"
arch=('any')
url="https://github.com/dtcooper/raspotify"
license=('MIT')
depends=('librespot-git')
makedepends=('git')
backup=('etc/default/raspotify')
source=("raspotify::git+https://github.com/dtcooper/raspotify.git"
        "raspotify.sysusers"
        "raspotify.tmpfiles")
md5sums=('SKIP'
	'd84a7ef3935010c2e00d783dc307933f'
        '719300eb8f7d4f933c56c06a6ebaa9c1')

pkgver() {
  cd "$_pkgname"
  printf "%s" "$(git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

package() {
	cd "$_pkgname"
  install -Dm644 "raspotify/lib/systemd/system/raspotify.service" "${pkgdir}/usr/lib/systemd/system/raspotify.service"
  install -Dm644 "../raspotify.sysusers" "${pkgdir}/usr/lib/sysusers.d/raspotify.conf"
  install -Dm644 "../raspotify.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/raspotify.conf"
  install -Dm644 "raspotify/etc/default/raspotify" "${pkgdir}/etc/default/raspotify"
}
