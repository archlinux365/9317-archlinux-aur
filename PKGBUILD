# Maintainer: kausban <mail at kausban com>
# Contributor: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Lenovsky <lenovsky at pm dot me>
# Contributor: aimileus <me at aimileus dot nl>

# Minimal fork of https://aur.archlinux.org/packages/protonmail-bridge/
# Compiled with 'nogui' option
# Included is a user systemd service. Try: systemctl status --user bridge.service
# You can login and register accounts using the interactive cli: protonmail-bridge --cli
# Once you have everything configured and automated. You can enable and use bridge.service to run bridge in background.

# The following is an alternative way to run the bridge in interactive cli mode encapsulated within a named screen session.
# Can be added to bridge.service
# ExecStart=/usr/bin/screen -Dm -S bridgedaemon sh -c "sleep 5; protonmail-bridge -c"
# ExecStop=/usr/bin/screen -X -S bridgedaemon quit


pkgname=protonmail-bridge-nogui

_pkgver=1.2.7
_rev="live.1"
_srcver="$_pkgver"-"$_rev"
_srcname=proton-bridge-"$_srcver"

pkgver="$_pkgver"."$_rev"
pkgrel=1

pkgdesc="Integrate ProtonMail paid account with any program that supports IMAP and SMTP"
arch=('x86_64')
url="https://www.protonmail.com/bridge"
license=('GPL3')
makedepends=('go' 'gcc')
depends=('libsecret')
optdepends=(
    'gnome-keyring: supported password manager (password manager is required)'
    'pass: supported password manager (password manager is required)'
)
conflicts=('protonmail-bridge-bin' 'protonmail-bridge')
options=('!emptydirs' '!strip')
source=("$_srcname.tar.gz::https://github.com/ProtonMail/proton-bridge/archive/v"$_srcver".tar.gz"
	"bridge.service")
sha256sums=('5a4c19b769cd72097507de6840b79e56d37fa6a54cf7269d4fec28c05016ca45'
            '6b2fd1e042b55dc6d0ffe5eb44e82ffd233452b4571ef571132600e7ec0d5d82')

prepare() {
    cd "${srcdir}"/"$_srcname"/
    export PATH=$PATH:$(go env GOPATH)/bin/
    make clean
    make build-nogui
}

package() {
    install -Dm644 "${srcdir}"/bridge.service -t "${pkgdir}"/usr/lib/systemd/user/
    cd "${srcdir}"/"$_srcname"/
    install -Dm644 ./LICENSE -t "${pkgdir}"/usr/share/licenses/"${pkgname}"/
    install -Dm644 ./Changelog.md -t "${pkgdir}"/usr/share/doc/"${pkgbame}"/
    install -Dm755 ./Desktop-Bridge "${pkgdir}"/usr/bin/protonmail-bridge
}
