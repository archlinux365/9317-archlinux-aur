# Maintainer: David Birks <david@tellus.space>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Alda <alda@leetchee.fr>
# Contributor: mrxx <mrxx at cyberhome dot at>
# Contributor: Jonhoo <jon at thesquareplanet.com>

pkgname=signal
pkgver=1.0.40
pkgrel=5
license=('GPL3')
pkgdesc='Signal Private Messenger for the Desktop'
depends=('gconf' 'gtk2' 'libxss')
makedepends=('npm' 'ruby-sass' 'python2' 'phantomjs' 'yarn' 'grunt-cli' 'git')
provides=('signal')
conflicts=('signal-desktop' 'signal-desktop-beta' 'signal-desktop-bin')
arch=("i686" "x86_64")
url='https://github.com/WhisperSystems/Signal-Desktop'
source=("git+${url}.git#tag=v${pkgver}"
        "signal.desktop"
        "https://api.github.com/users/scottnonnenberg/gpg_keys")
sha512sums=('SKIP'
	    'a264bfc7a4a7aac747daa588a2acbf1eddfd201bc795f0fbc18460a9b25f4460f364124e227a527fec22631cd84bc9e190f9f4978069e9c119eb556b9ff2d327'
            'SKIP')

prepare() {
  cd ${srcdir}/Signal-Desktop
  sed -i 's/icon-gen \&\& grunt/icon-gen \&\& grunt -f/' package.json
}

build() {
  #msg2 "Verifying developer signature..."
  #cd ${srcdir}/Signal-Desktop
  #_key_id=$(git verify-tag -v v${pkgver} 2>&1|grep 'gpg.*using.*key'|awk '{print $NF}')
  #grep "\"key_id\": \"$_key_id\"" ${srcdir}/gpg_keys && msg2 "Signature OK" || (msg2 "No valid developer signature found" && exit 1)
  
  cd ${srcdir}/Signal-Desktop
  yarn install | grep -Ev 'bin-mac|bin-win'
  yarn pack-prod
}

package() {
  cd ${srcdir}/Signal-Desktop/dist/linux-unpacked

  install -Ddm755 "${pkgdir}/usr/lib/${pkgname}"
  install -Ddm755 "${pkgdir}/usr/bin"

  cp -r * "${pkgdir}/usr/lib/${pkgname}/"

  install -dm755 "${pkgdir}"/usr/share/icons/hicolor/256x256/apps
  cp ../../build/icons/png/256x256.png \
      "${pkgdir}"/usr/share/icons/hicolor/256x256/apps/${pkgname}.png

  install -Dm644 "${srcdir}"/${pkgname}.desktop \
      "${pkgdir}"/usr/share/applications/${pkgname}.desktop

  ln -s /usr/lib/${pkgname}/signal-desktop "${pkgdir}/usr/bin/signal-desktop"
}
