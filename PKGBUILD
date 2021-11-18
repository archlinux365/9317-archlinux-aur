# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>
# Contributor: Michael Lutonsky <m@luto.at>
# Contributor: Tássio Virgínio <tassiovirginio@gmail.com>

_name='Beekeeper Studio'
_pkgname='beekeeper-studio'
pkgname="${_pkgname}-bin"
pkgver=2.1.5
pkgrel=1
pkgdesc='Modern and easy to use SQL client for MySQL, Postgres, SQLite, SQL Server, and more'
arch=('x86_64' 'aarch64')
url='https://www.beekeeperstudio.io'
_url_source='https://github.com/beekeeper-studio/beekeeper-studio'
license=('MIT')
depends=('libappindicator-gtk3' 'libnotify' 'libsecret' 'libxss' 'libxslt' 'nodejs' 'nss' 'xdg-utils')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}-${pkgver}-license::${_url_source}/raw/v${pkgver}/LICENSE.md")
source_x86_64=("${_url_source}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_amd64.deb")
source_aarch64=("${_url_source}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_arm64.deb")
sha256sums=('787ebc78ce29cd0cea3e52651936df7fef96b117782882fce389c3b7ce5683f5')
sha256sums_x86_64=('355fbaee9bce59d56ff038ca66b5c464283443307e8a3adf7a8bd974b3359564')
sha256sums_aarch64=('63dffa352b7c1913dacd90b6c6cce6a0204c5d72e37499f78c176f34c15eb1aa')

package() {
  tar -xvf 'data.tar.xz' -C "${pkgdir}"
  rm -rf "${pkgdir}/usr/share/doc"
  install -dv "${pkgdir}/usr/bin"
  ln -sfv "/opt/${_name}/${_pkgname}" -t "${pkgdir}/usr/bin"
  install -Dvm644 "${pkgdir}/opt/${_name}/"{'LICENSE.electron.txt','LICENSES.chromium.html'} \
    -t "${pkgdir}/usr/share/licenses/${_pkgname}"
  install -Dvm644 "${_pkgname}-${pkgver}-license" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}

# vim: ts=2 sw=2 et:
