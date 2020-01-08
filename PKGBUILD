# Maintainer: Matthew McGinn <mamcgi@gmail.com>
# Contributor: Håvard Pettersson <mail@haavard.me>
# Contributor: Andrew Stubbs <andrew.stubbs@gmail.com>

pkgname=balena-etcher
_pkgname=etcher
pkgver=1.5.70
pkgrel=4
epoch=2
pkgdesc='Flash OS images to SD cards & USB drives, safely and easily'
arch=(x86_64)
_github_url='https://github.com/balena-io/etcher'
url='https://etcher.io'
license=(Apache)
depends=("electron6" "gtk3" "libxtst" "libxss" "nss" "alsa-lib" "nodejs" "glib2" "polkit" "libusb")
makedepends=("npm" "python2" "git" "jq")
optdepends=("libnotify: for notifications")
conflicts=("${_pkgname}"
  "${_pkgname}-git"
  "${_pkgname}-bin"
)
options=('!strip')
source=("etcher::git+https://github.com/balena-io/${_pkgname}.git#tag=v${pkgver}"
        "${pkgname}-electron"
        "${pkgname}-electron.desktop"
        )
sha256sums=('SKIP'
            '911cca26a477c0525085410c78cd9292dc4b6bd27fb7340034fe762d333a3f52'
            'c950d9578f9cf60998c920bb60c6617559963f06a4918e7072fdc706b0ef5754'
           )

prepare() {
  cd "${_pkgname}"
  git submodule init
  git submodule update || cd "${srcdir}/${_pkgname}/scripts/resin" && git checkout --
}

build() {
  cd "${_pkgname}"
  export NPM_VERSION=$(npm --version)
  make electron-develop
  make webpack
  npm prune --production
}

package() {
  cd "${_pkgname}"

  _appdir="${pkgdir}/usr/lib/${pkgname}"
  install -d "${_appdir}"

  install package.json "${_appdir}"
  cp -a {lib,generated,node_modules} "${_appdir}"
  install -D assets/icon.png "${_appdir}/assets/icon.png"
  install -D lib/gui/app/index.html "${_appdir}/lib/gui/app/index.html"

  install -Dm755 "${srcdir}/${pkgname}-electron" "${pkgdir}/usr/bin/${pkgname}-electron"
  install -Dm644 "${srcdir}/${pkgname}-electron.desktop" \
    "${pkgdir}/usr/share/applications/${pkgname}-electron.desktop"

  for size in 16x16 32x32 48x48 128x128 256x256 512x512; do
    install -Dm644 "assets/iconset/${size}.png" \
      "${pkgdir}/usr/share/icons/hicolor/${size}/apps/${pkgname}-electron.png"
  done

  find "${pkgdir}" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'
}

# vim:set ts=2 sw=2 et:
