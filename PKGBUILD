# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Lenovsky <lenovsky at pm dot me>
# Contributor: aimileus <me at aimileus dot nl>

pkgname=protonmail-bridge-bin
pkgver=1.2.6
pkgrel=1
_pkgrel=1
pkgdesc="Integrate ProtonMail paid account with any program that supports IMAP and SMTP"
arch=('x86_64')
url="https://www.protonmail.com/bridge"
license=('MIT')
depends=('hicolor-icon-theme' 'libsecret' 'qt5-multimedia' 'ttf-dejavu')
optdepends=(
    'gnome-keyring: supported password manager (password manager is required)'
    'pass: supported password manager (password manager is required)'
)
conflicts=('protonmail-bridge')
options=('!emptydirs' '!strip')
source=("https://protonmail.com/download/protonmail-bridge_${pkgver}-${_pkgrel}_amd64.deb")
sha256sums=('34fdc917fb2c6f06ec6c6a71041f31ad3599b4ee5556e09ad919c36d71eac247')

prepare() {
    tar xf data.tar.xz

#    mkdir -p usr/share/icons/hicolor/scalable/apps
#    mv usr/share/icons/protonmail/ProtonMail_Bridge.svg \
#        usr/share/icons/hicolor/scalable/apps/"${pkgname}".svg
#
#    mv usr/share/applications/ProtonMail_Bridge.desktop \
#        usr/share/applications/"${pkgname}".desktop
#    sed -i "s|Icon=.*|Icon=protonmail-bridge-bin|" \
#        usr/share/applications/"${pkgname}".desktop

}

package() {
    mv usr/ "${pkgdir}"

    install -D -m644 "${pkgdir}"/usr/lib/protonmail/bridge/{eula.txt,LICENSE} \
        -t "${pkgdir}"/usr/share/licenses/"${pkgname}"
}

