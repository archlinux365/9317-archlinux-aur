# Maintainer: garionion <garionion at entr0py.de>
# thanks to celogeek, sseneca, dr460nf1r3, dr460nf1r3 and AverytheFurry for pointing out multiple things

pkgname=fluffychat
pkgver=1.3.0
pkgrel=1
pkgdesc="Chat with your friends"
arch=('x86_64' 'aarch64')
url="https://fluffychat.im/"
license=('AGPL3')
depends=('gtk3' 'jsoncpp' 'libsecret')
makedepends=('clang'
             'ninja'
             'cmake'
             'git'
             'unzip'
             'flutter')
optdepends=('libolm: E2E Encryption support')
provides=("$pkgname")
conflicts=("$pkgname")
source=("fluffychat-v${pkgver}.tar.gz::https://gitlab.com/famedly/fluffychat/-/archive/v${pkgver}/fluffychat-v${pkgver}.tar.gz")
sha256sums=('c1ef22f69aaaea09e8d0637d9cd854cd76b38840e823485783651b9b5f4ce991')

prepare() {
  #####
  #thanks to @dreieck
  _flutter_dir="${srcdir}/flutter"
  PATH="${_flutter_dir}/bin:${PATH}"
  export PATH

  msg2 "Copying '/opt/flutter' to '${_flutter_dir}' ..."
  cp -a /opt/flutter "${_flutter_dir}"
  #####

  flutter config --no-analytics
  flutter config --enable-linux-desktop
  
  cd ${pkgname}-v$pkgver
  flutter clean
  flutter pub get
}

build() {
  _flutter_dir="${srcdir}/flutter"
  PATH="${_flutter_dir}/bin:${PATH}"
  export PATH  

  cd ${pkgname}-v$pkgver
  flutter build linux --release --verbose
}

package() {  
  # install
  install -dm755 ${pkgdir}/opt
  mv ${pkgname}-v$pkgver/build/linux/x64/release/bundle ${pkgdir}/opt/${pkgname}
  
  # link
  install -dm755 ${pkgdir}/usr/bin
  ln -s /opt/${pkgname}/${pkgname} ${pkgdir}/usr/bin/${pkgname}

  # icon
  install -Dm 644 ${pkgdir}/opt/${pkgname}/data/flutter_assets/assets/favicon.png ${pkgdir}/usr/share/pixmaps/${pkgname}.png

  # desktop entry

  install -dm 755 "${pkgdir}/usr/share/applications"
  cat > ${pkgdir}/usr/share/applications/${pkgname}.desktop << EOF
[Desktop Entry]
Type=Application
Version=${pkgver}
Name=FluffyChat
Comment=Matrix Client. Chat with your friends
Exec=${pkgname}
Icon=${pkgname}
Terminal=false
EOF

}

# vim: set sw=2 ts=2 et:
