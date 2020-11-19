# Maintainer: GI Jack <GI_Jack@hackermail.com>

pkgname=zecwallet-lite
pkgver=1.3.3
pkgrel=2
pkgdesc="Z-Addr first, Sapling compatible lightwallet client for Zcash"
arch=('any')
url="https://github.com/adityapk00/zecwallet-lite"
license=('MIT')
depends=('electron')
makedepends=('rust' 'nodejs' 'yarn' 'npm')
provides=('zcash-wallet')
options=('!strip')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/adityapk00/zecwallet-lite/archive/v${pkgver}.tar.gz"
	"zecwallet-icons.tar.xz"
	"${pkgname}.desktop")
noextract=()
sha256sums=('7d5b6ca2089733520b2cd3a3877a6df3d0510d04f94c14c9aad918a02b38a444'
            '19d8b4acee2c6ff062e86ecbb2365123d0471f2991192323780b53630104574d'
            'a53083250c61d1e43cf3b5c371222bb5740e2befcdc4d9b7ea003a1f4ac30ef4')
            
prepare() {
  cd "${pkgname}-${pkgver}"
  yarn install
}

build() {
  cd "$pkgname-$pkgver"
  yarn package-linux
}

package() {
  cd ${srcdir}
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  
  cd "${pkgname}-${pkgver}"
  install -d "${pkgdir}/opt/${pkgname}/"
  cp -ra release/linux-unpacked/* "${pkgdir}/opt/${pkgname}/"
  cd ..
  
  # Icons
  cd ${srcdir}/zecwallet-icons
  resolutions="16x16 32x32 48x48 64x64 128x128 256x256 512x512 1024x1024"
  for res in ${resolutions};do
    install -Dm644 "${res}/apps/zecwallet-lite.png" "${pkgdir}/usr/share/icons/hicolor/${res}/apps/zecwallet-lite.png"
  done
}
