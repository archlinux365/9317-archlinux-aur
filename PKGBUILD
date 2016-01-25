# Maintainer: Afri 5chdn <aur@cach.co>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

pkgname=mist
pkgver=0.3.8
_pkgver=0-3-8
pkgrel=3
pkgdesc="Ethereum wallet for Ether accounts, wallets and smart contracts (includes Mist browser)."
arch=('x86_64')
depends=(
  'gmp'
  'leveldb'
  'qt5-base'
  'qt5-declarative'
  'qt5-quickcontrols'
  'qt5-webengine'
  'readline'
)
provides=(
  'mist'
  'libnode'
)
conflicts=(
  'mist-git'
  'libnode'
  'libnode-git'
)
optdepends=(
  'geth: The go-ethereum commandline client.'
  'ethereum: The cpp-ethereum commandline client.'
)
url="https://github.com/ethereum/mist"
license=('GPL')
source=("${pkgname}-${_pkgver}.zip::https://github.com/ethereum/$pkgname/releases/download/v${pkgver}/Ethereum-Wallet-linux64-$_pkgver.zip")
sha256sums=("6a96a2e18e21ce8b1995b508e05d7a59a701a5aa75a82624c4286a7f8ec9eee5")

package() {
  rm "${srcdir}/${pkgname}-${_pkgver}.zip"

  msg2 'Installing Mist...'
  install -d "${pkgdir}/usr/share/${pkgname}"
  cp -a "${srcdir}/Ethereum-Wallet-linux-x64-${_pkgver}/." "${pkgdir}/usr/share/${pkgname}"

  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/${pkgname}/Ethereum-Wallet" "${pkgdir}/usr/bin/mist"

  install -Dm644 "${pkgdir}/usr/share/${pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  rm "${pkgdir}/usr/share/${pkgname}/LICENSE"

  msg2 'Installing Libnode...'
  install -d "${pkgdir}/usr/lib"
  ln -s "/usr/share/${pkgname}/libnode.so" "${pkgdir}/usr/lib/libnode.so"

  ln -sf "/usr/lib/libgcrypt.so.11" "${pkgdir}/usr/share/${pkgname}/libgcrypt.so.11"
  ln -sf "/usr/lib/libnotify.so.4" "${pkgdir}/usr/share/${pkgname}/libnotify.so.4"

  find "${pkgdir}" -type d -exec chmod 755 {} +
  find "${pkgdir}" -type f -exec chmod 644 {} +
  chmod 755 "${pkgdir}/usr/share/${pkgname}/Ethereum-Wallet"
  chmod 755 "${pkgdir}/usr/share/${pkgname}/libnode.so"
}
