# Maintainer: Alan Jenkins <alan.james.jenkins@gmail.com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Marcel Unbehaun <f.rostze.ux at gmail dot com>
pkgname=steamtinkerlaunch
pkgver=1.6.4
pkgrel=1
pkgdesc="Wrapper script for Steam custom launch options"
arch=('any')
url="https://github.com/frostworx/steamtinkerlaunch"
license=('GPL3')
depends=('bash')
optdepends=(
    'strace: write a strace log of the launched game'
    'gamemode: for using GameMode per game'
    'mangohud: for using MangoHUD per game'
    'vkbasalt: for using vkBasalt per game'
    'winetricks: winetricks support'
    'wget: for optional reshade download'
    'unzip: for optional reshade download'
    'git: for pulling optional shaders'
    'xdotool: for playing regular games side-by-side in VR'
    'xorg-xwininfo: for playing regular games side-by-side in VR'
    'vr-video-player: for playing regular games side-by-side in VR'
    'nyrna: for using Nyrna per game'
    'replay-sorcery: for using Replay-Sorcery per game'
    'wmctrl: for optional minimize/maximize of all open windows on game start/stop'
    'net-tools: for optional network monitoring'
    'boxtron: for optional Boxtron support'
    'scummvm: for optional ScummVM support via Roberta'
    'wine: for optional Vortex Mod Manager support'
    'gameconqueror: for optional cheating'
    'xorg-xprop: for optional window toggle and side-by-side VR'
)

source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('e452256f851e184a2a08de1c93370a3414a52271fc3f43468c14afe0e95c01ca')

package() {
    cd "$srcdir/$pkgname-${pkgver}"
    install -Dm755 stl -t "$pkgdir/usr/bin"

    install -d "$pkgdir/usr/share/stl"
    cp -r categories regs tweaks "$pkgdir/usr/share/stl"

    install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}
