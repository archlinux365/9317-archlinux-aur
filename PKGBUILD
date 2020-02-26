# Maintainer: hawkeye116477 <hawkeye116477 at gmail dot com>
# Contributor: Plague-doctor <plague <at>> privacyrequired <<dot>> com >
# Contributor: Simon Kronberg <Simon.Kronberg at gmail dot com>

pkgname=waterfox-classic-bin
pkgver=2020.02.1
pkgrel=2
pkgdesc="Customizable privacy conscious web browser with primary support for legacy extensions"
arch=('x86_64')
url="https://www.waterfox.net"
license=('MPL')
depends=('gtk3' 'gtk2' 'libxt' 'startup-notification' 'mime-types' 'dbus-glib' 'ffmpeg'
    'hunspell' 'ttf-font' 'hicolor-icon-theme')
optdepends=('networkmanager: Location detection via available WiFi networks'
    'libnotify: Notification integration'
    'pulseaudio: Audio support'
    'alsa-lib: Audio support'
    'speech-dispatcher: Text-to-Speech')
provides=("waterfox-classic=${pkgver}")
conflicts=('waterfox-classic' 'waterfox-classic-git')
replaces=('waterfox-bin')

source=(
    'waterfox-classic.desktop'
    'https://storage-waterfox.netdna-ssl.com/releases/linux64/installer/waterfox-classic-'"${pkgver}"'.en-US.linux-x86_64.tar.bz2'
)

package() {
    # Create the directories.
    install -d "${pkgdir}"/{usr/{bin,share/applications},opt}

    # Install the desktop files.
    install -m644 "${srcdir}"/waterfox-classic.desktop "${pkgdir}"/usr/share/applications/

    # Copy the directory to /opt
    cp -r waterfox-classic "${pkgdir}"/opt/waterfox-classic

    # Install icons
    for i in 16 22 24 32 48 64 128 256; do
        install -d "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps"
        ln -Ts /opt/waterfox-classic/browser/chrome/icons/default/default$i.png \
            "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/waterfox-classic.png"
    done

    # Install a wrapper to avoid confusion about binary path
    install -Dm755 /dev/stdin "$pkgdir/usr/bin/waterfox-classic" <<END
#!/bin/sh
exec /opt/waterfox-classic/waterfox "\$@"
END

    # Replace duplicate binary with wrapper
    # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
    ln -srf "$pkgdir/usr/bin/waterfox-classic" \
        "$pkgdir/opt/waterfox-classic/waterfox-bin"

    # Use system-provided dictionaries
    rm -r "$pkgdir"/opt/waterfox-classic/dictionaries
    ln -Ts /usr/share/hunspell "$pkgdir/opt/waterfox-classic/dictionaries"
    ln -Ts /usr/share/hyphen "$pkgdir/opt/waterfox-classic/hyphenation"
}

sha256sums=('67bcd2aed38969553130872652946ddd00a804ba2046c14a554e9bb99de54b24'
    'fdb29a5504f378165a8c126772f419472ff3e4e058abe901f29068ff12ff521e')
