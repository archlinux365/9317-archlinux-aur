# Maintainer: dreieck


_pkgbase=db-wifi-login
_pkgname="${_pkgbase}"
pkgbase="${_pkgbase}"
pkgname="${_pkgname}"
epoch=0
pkgver=0.1_20220708.03b
pkgrel=1
pkgdesc='Captive portal login script for WIFIonICE/ WLAN@DB public WiFi by Deutsche Bahn.'
url="https://aur.archlinux.org/pkgbase/${pkgbase}"
arch=(any)
license=(GPL3)
depends=(
  'awk'
  'bash'
  # 'coreutils'  # This is always assumed to be installed, no need to explicitly mention it.
  # 'curl'       # This is always assumed to be installed, no need to explicitly mention it.
  # 'grep'       # This is always assumed to be installed, no need to explicitly mention it.
  # 'sed'        # This is always assumed to be installed, no need to explicitly mention it.
)
makedepends=()
optdepends=(
  "db-wifi-login-woice-compat: To act as a drop-in replacement for 'woice'."
)
provides=()
conflicts=()
source=(
  'db-wifi-login.sh'
)
sha256sums=(
  '120f8459dc93953bedccdda69d4e12033854a67b1bd940de3e5f97556c86ff3e'
)

pkgver() {
  cd "${srcdir}"

  _ver="$(grep -E '[[:space:]]*_VERSION=' 'db-wifi-login.sh' | tail -n1 | awk -F= '{print $2}' | tr -d -)"
  if [ -z "${_ver}" ]; then
    error "Could not determine version."
    return 1
  else
    printf '%s' "${_ver}"
  fi
}

package() {
  cd "${srcdir}"

  install -D -v -m755 'db-wifi-login.sh' "${pkgdir}/usr/bin/db-wifi-login"
}
