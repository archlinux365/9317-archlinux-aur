# Maintainer: David Parrish <daveparrish@gmail.com>

pkgname=nxt-git
pkgver=1.5.12.r5.g5bbafe1
pkgrel=1
pkgdesc="The Nxt Reference Software Client for use with the Nxt Cryptocurrency."
arch=('any')
url="http://nxt.org"
license=('MIT' 'GPL' 'MPL' 'APACHE')
depends=('bash' 'java-runtime-openjdk=8')
makedepends=('java-environment-openjdk=8')
optdepends=('flashplugin: NRS clipboard support'
  'libnotify: NRS startup error notification'
  'tor: route NXT traffic through Tor')
source=("${pkgname}::git+https://bitbucket.org/JeanLucPicard/nxt.git"
  "nxt.service"
  "nxt-tor.service"
  "nxt.install"
  "nrs.sh"
  "nrs.desktop")
sha256sums=('SKIP'
            '293bf1e313677f769e4a12e6e0f78bbd58c796ebe7c34528ba50cd73bbea15a7'
            '87a725d1e2cf5af3554dd8d2775c94a952bc27313287777f0ca8984644f0d9b4'
            'b7575397d7dd19e9b1bab75e21a433f3bdc98279ad822fe57235b830c062abca'
            '24339c175f38aff974788c41d1b7db9f3df6e1e3121469cbdc6754fe75465b7b'
            '8381f120b645cca9079b5e958a8917326f71b55f031f15df3324703377638eee')
install='nxt.install'

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname}"
  ./compile.sh
}

package() {
  # Copy everything to /opt/nxt
  install -dm755 "$pkgdir/opt/nxt"
  cp -r "${pkgname}"/* "$pkgdir"/opt/nxt/

  # Service files
  install -Dm644 nxt.service "$pkgdir/usr/lib/systemd/system/nxt.service"
  install -Dm644 nxt-tor.service "$pkgdir/usr/lib/systemd/system/nxt-tor.service"

  # License files
  install -Dm644 "${pkgname}/COPYING.txt" "$pkgdir/usr/share/licenses/nxt/COPYING.txt"
  install -Dm644 "${pkgname}/3RD-PARTY-LICENSES.txt" "$pkgdir/usr/share/licenses/nxt/3RD-PARTY-LICENSES.txt"
  install -Dm644 "${pkgname}/LICENSE.txt" "$pkgdir/usr/share/licenses/nxt/LICENSES.txt"

  # NRS shortcut
  install -Dm644 "${pkgname}/html/nrs/icon.png" "${pkgdir}/usr/share/pixmaps/nrs.png"
  install -Dm644 nrs.desktop "${pkgdir}/usr/share/applications/nrs.desktop"
  install -Dm755 nrs.sh "$pkgdir/usr/bin/nrs"
}
