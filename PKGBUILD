# Maintainer: Ian MacKay <immackay0@gmail.com>
# Prior Maintainer: Mikel Pintado <mikelaitornube2010@gmail.com>
# Contributor: Jiawen Geng

_pkgname='github-desktop'
pkgname="${_pkgname}"
pkgver=2.5.3
_pkgver="${pkgver}-linux1"
gitname="release-${_pkgver}"
pkgrel=1
pkgdesc="GUI for managing Git and GitHub."
arch=('x86_64')
url="https://desktop.github.com"
license=('MIT')
depends=('gnome-keyring' 'libsecret' 'git' 'curl' 'libxss' 'gconf' 'nss' 'nspr' 'unzip')
optdepends=('hub: CLI interface for GitHub.')
makedepends=('xorg-server-xvfb' 'nodejs>=10.16.0' 'yarn' 'python2' 'unzip')
DLAGENTS=("http::/usr/bin/git clone --branch ${gitname} --single-branch %u")
source=(
  git+https://github.com/shiftkey/desktop.git#tag=${gitname}
  ${_pkgname}.desktop
)
sha256sums=(
  'SKIP'
  932e4c456e8c6db03d27172cf0daa37806bf025bb560d8b3d758c0997d1a618c
)
build() {
  cd desktop
  export DISPLAY=':99.0'
  Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
  yarn install
  yarn build:prod
}
package() {
  install -d "${pkgdir}/opt/${_pkgname}"
  cp -r --preserve=mode desktop/dist/github-desktop-linux-x64/* "${pkgdir}/opt/${_pkgname}/"
  install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 "desktop/app/static/logos/1024x1024.png" "${pkgdir}/usr/share/icons/hicolor/1024x1024/apps/${_pkgname}.png"
  install -Dm644 "desktop/app/static/logos/512x512.png" "${pkgdir}/usr/share/icons/hicolor/512x512/apps/${_pkgname}.png"
  install -Dm644 "desktop/app/static/logos/256x256.png" "${pkgdir}/usr/share/icons/hicolor/256x256/apps/${_pkgname}.png"
  printf "#!/bin/sh\n\n/opt/${_pkgname}/github-desktop \"\$@\"\n" | install -Dm755 /dev/stdin "${pkgdir}/usr/bin/${_pkgname}"
}
