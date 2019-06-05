# Maintainer: Anna <morganamilo@gmail.com>
# Co-Maintainer: E5ten <e5ten.arch@gmail.com>
# Co-Maintainer: Parker Reed <parker.l.reed@gmail.com>
# Contributor: Cayde Dixon <me@cazzar.net>
# Contributor: Anthony Anderson <aantony4122@gmail.com>

pkgname=discord-canary
pkgver=0.0.80
pkgrel=1
pkgdesc="All-in-one voice and text chat for gamers that's free and secure."
arch=('x86_64')
url='https://discordapp.com/'
provides=('discord')
license=('custom')
depends=('gtk3' 'gconf' 'libnotify' 'libxss' 'glibc' 'alsa-lib' 'nspr' 'nss' 'xdg-utils' 'libcups')
optdepends=('libpulse: For pulseaudio support'
            'noto-fonts-emoji: Google font for emoji support.'
            'ttf-symbola: Font for emoji support.'
            'noto-fonts-cjk: Font for special characters such as /shrug face.')
source=("https://dl-canary.discordapp.net/apps/linux/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        'LICENSE'
        "${pkgname}.sh")
sha256sums=('a51411b2f29be6f7a4f8c0b592262ce385953e7ab86b5b2bb360dd46ff1948a4'
            '9be5f85421c9094c390c25bf1f45157c3c8dcf592feb8acb0810a61f11d80b90'
            'ce8c521119e3a7432e7b8c8d4c1393b3fd6d8add4da9518a0ddf90850b646ae7')

package() {
    # Install the main files.
    install -d "${pkgdir}/opt/${pkgname}"
    cp -a "${srcdir}/DiscordCanary/." "${pkgdir}/opt/${pkgname}"

    # Desktop Entry
    install -Dm644 "${pkgdir}/opt/${pkgname}/${pkgname}.desktop" -t "${pkgdir}/usr/share/applications"
    sed -i "s%share/${pkgname}/DiscordCanary%bin/${pkgname}%" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    # Wrapper script enabling --no-sandbox
    install -Dm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"

    # Create symbolic link to the icon
    install -d "${pkgdir}/usr/share/pixmaps"
    ln -s "/opt/${pkgname}/discord.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

    # License
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

