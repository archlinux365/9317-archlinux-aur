# Maintainer: Oscar Garcia Amor <ogarcia@connectical.com>

pkgbase=vault-bin
pkgname=('vault-bin' 'vault-cli-bin')
pkgver=1.7.2
pkgrel=1
url='https://vaultproject.io/'
license=('MPL')
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
depends=('glibc')
source=('vault.tmpfiles'
        'vault.sysusers'
        'vault.service'
        'vault.hcl'
        'LICENSE')
source_i686=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_386.zip")
source_x86_64=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_amd64.zip")
source_armv7h=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_arm.zip")
source_aarch64=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_arm64.zip")
sha512sums=('aa56041c53434195dbf544ce9bf18d7bfb530bf65c9b692163621185b0a46035273a4eeda6454ceb93201117f23662e44ac9c88eda3cf12153cdce40df0fde09'
            '92616ccf83fa5ca9f8b0d022cf8ceb1f3549e12b66bf21d9f77f3eb26bd75ec1dc36c155948ec987c642067b85fbfc30a9217d6c503d952a402aa5ef63e50928'
            'a97d10208fd99b29cf532c9b5882fe1bbb3faee1d1d706f95a9c379fef461c65a9f16c8530438920024e69871ebd8c7329e6b65025ad65092950bfb74ce393b3'
            '8f8769f2c285f77b10c1f96e43acb233c70509ca657a8113f9d1f13a73ba55de6acdc6984597a4e1da19d6a7748e05f3523461a3b4bce10b9541aa5340400dd6'
            'dd6de68678d972517c135992217f625a3bc728a6495e1f6052df9926cf9cbc212dfa2a612be5a25d7ce5eeeef41e2b12f0d82af6176a6e0ca043b43c622c6347')
sha256sums_i686=('675d874af68d7de894dbacc362c3f7a66ab72ce0d7b1e7bd1d1af8e8e6ece71c')
sha256sums_x86_64=('5ee6bb8119b55c27cd3864c982177714a0a4a3813927ccafdb262e78e4bb67bc')
sha256sums_armv7h=('38782995fecb298f4a6c55e5568a7ea54a8516a7ea4ebaf25bb7caf0f6111c4a')
sha256sums_aarch64=('2bb9d49b253893ffa2149ee85ce2f2bc72360a2c14ac8775155f34c572344533')

package_vault-bin () {
  pkgdesc='A tool for managing secrets'
  conflicts=('vault' 'vault-git' 'vault-cli-bin')
  install='vault.install'
  backup=('etc/vault.hcl')

  install -Dm755 vault "${pkgdir}/usr/bin/vault"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${srcdir}/vault.hcl" "${pkgdir}/etc/vault.hcl"
  install -Dm644 "${srcdir}/vault.service" \
    "${pkgdir}/usr/lib/systemd/system/vault.service"
  install -Dm644 "${srcdir}/vault.sysusers" \
    "${pkgdir}/usr/lib/sysusers.d/vault.conf"
  install -Dm644 "${srcdir}/vault.tmpfiles" \
    "${pkgdir}/usr/lib/tmpfiles.d/vault.conf"
}

package_vault-cli-bin () {
  pkgdesc='A tool for managing secrets (CLI Only)'
  conflicts=('vault' 'vault-git' 'vault-bin')

  install -Dm755 vault "${pkgdir}/usr/bin/vault"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
