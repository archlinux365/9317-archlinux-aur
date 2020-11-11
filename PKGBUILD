# Maintainer: Thomas Mashos <thomas at mashos dot com>
pkgname=syrinscape-scifi-player
pkgver=1.4.10_p0
pkgrel=1
pkgdesc="Soundscape creator and sound design app for Sci-Fi games"
arch=('x86_64')
url="https://www.syrinscape.com"
license=('Proprietary')
groups=()
depends=()
options=(!strip)
source=("syrinscape-${pkgver//_/-}-linux-scifi.tar.gz::https://www.syrinscape.com/get-download/syrinscape-${pkgver//_/-}-linux-scifi.tar.gz?type=linux&version=${pkgver//_/-}"
        "local://syrinscape-scifi-player.desktop"
        )
sha256sums=('0df0234ae7e13eb64afc02e18cbc4dd16b9a5b58957493313a74ea3e66ef042a'  ## syrinscape-${pkgver//_/-}-linux-scifi.tar.gz
            'SKIP'  ## syrinscape-scifi-player.desktop
          ) 

# Look away, this is gross
download_func() {
  /usr/bin/curl "https://www.syrinscape.com/get-download/syrinscape-${pkgver//_/-}-linux-scifi.tar.gz?type=linux&version=${pkgver//_/-}" 2>&1 | /usr/bin/grep -P "\tlocation.href" | /usr/bin/cut -d "'" -f 2 | /usr/bin/xargs -n1 /usr/bin/curl -o syrinscape-${pkgver//_/-}-linux-scifi.tar.gz
}
export -f download_func; export pkgver; DLAGENTS=('https::/bin/bash -c download_func %o %u')

prepare() {
  mkdir -p "${srcdir}/usr/share/applications"
  cp "syrinscape-scifi-player.desktop" "${srcdir}/usr/share/applications/syrinscape-scifi-player.desktop"
}

package() {
  mkdir -p "${pkgdir}/opt"
  mv "Syrinscape Sci-Fi Player" "${pkgdir}/opt/Syrinscape Sci-Fi Player"

  mkdir -p "${pkgdir}/usr/share/applications"
  mv "usr/share/applications/syrinscape-scifi-player.desktop" "${pkgdir}/usr/share/applications/syrinscape-scifi-player.desktop"
}

