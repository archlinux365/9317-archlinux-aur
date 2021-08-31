# Maintainer: Ben Mitchell <bjosephmitchell@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=mcpkg-bin
pkgver=2.2
source=(mcpkg-1617f2f8534c878c0f19881666b2c9153a788cab::https://github.com/CRISPYricePC/mcpkg/releases/download/2.2/mcpkg-2.2.jar https://raw.githubusercontent.com/CRISPYricePC/mcpkg/2.2/README.md https://raw.githubusercontent.com/CRISPYricePC/mcpkg/2.2/LICENSE)
_checksum=1617f2f8534c878c0f19881666b2c9153a788cab
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Package manager for Minecraft resource packs, datapacks and crafting tweaks, wrapped around vanillatweaks.net '
pkgrel=1
arch=("any")
license=("GPL-3.0")
url='https://github.com/CRISPYricePC/mcpkg'
provides=(mcpkg)
conflicts=()
sha1sums=(
  "$_checksum"                  # for the mcpkg binary
  SKIP                          # for the readme
  SKIP                          # for the license
)

package() {
  install -Dm755 "mcpkg-$_checksum" "$pkgdir/usr/bin/mcpkg"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

