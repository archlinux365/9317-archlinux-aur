# Maintainer: Anna <morganamilo@gmail.com>
# Co-Maintainer: E5ten <e5ten.arch@gmail.com>
# Contributor: Cayde Dixon <me@cazzar.net>
# Contributor: Anthony Anderson <aantony4122@gmail.com>

pkgname='discord-canary'
pkgver=0.0.72
pkgrel=1
pkgdesc="All-in-one voice and text chat for gamers that's free and secure."
arch=('x86_64')
url='https://discordapp.com/'
provides=('discord')
license=('custom')
depends=('gtk3' 'gconf' 'libnotify' 'libxss' 'glibc' 'alsa-lib' 'nspr' 'nss' 'libc++' 'xdg-utils' 'libcups')
optdepends=('libpulse: For pulseaudio support'
            'noto-fonts-emoji: Google font for emoji support.'
            'ttf-symbola: Font for emoji support.'
            'noto-fonts-cjk: Font for special characters such as /shrug face.')
source=("https://dl-canary.discordapp.net/apps/linux/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        'LICENSE')
sha256sums=('163a9ac0cf8da4ac69615414ebd0f5570bdd3b38edcff215385b23365b190690'
            '9be5f85421c9094c390c25bf1f45157c3c8dcf592feb8acb0810a61f11d80b90')

package() {
    # Install the main files.
    install -d "${pkgdir}/opt/${pkgname}"
    cp -a "${srcdir}/DiscordCanary/." "${pkgdir}/opt/${pkgname}"

    # Exec bit
    chmod 755 "${pkgdir}/opt/${pkgname}/DiscordCanary"

    # Desktop Entry
    install -d "${pkgdir}/usr/share/applications"
    install "${pkgdir}/opt/${pkgname}/${pkgname}.desktop" "${pkgdir}/usr/share/applications"
    sed -i 's%/usr/share%/opt%' "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    # Main binary
    mkdir -p "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/DiscordCanary" "${pkgdir}/usr/bin/${pkgname}"

    # Create symbolic link to the icon
    install -d "${pkgdir}/usr/share/pixmaps"
    ln -s "/opt/${pkgname}/discord.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

    # License
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

