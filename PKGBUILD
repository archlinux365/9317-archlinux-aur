# Maintainer: Hikari Takahashi <nomenclatura@tuta.io>
# Previous Maintainers: Sefa Eyeoglu <contact@scrumplex.net>
# Contributor: Thaodan <theodorstormgrade@gmail.com>
# Contributor: Weng Xuetian <wengxt@gmail.com>
# Contributor: Marc Mettke <marc@itmettke.de>

pkgname=firefox-kde-opensuse-rpm
pkgver="83.0.882.3"
_pkgver="83.0-882.3"
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org with OpenSUSE patch, integrate better with KDE - Binary from OBS"
epoch=2  # Because of update 76.0.1-833.1
arch=(x86_64)
license=("MPL" "GPL" "LGPL")
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=("mozilla-common" "startup-notification" "mime-types" "dbus-glib" "libvpx"  "libevent" "hunspell" "libnotify" "kmozillahelper" "ffmpeg" "gtk3" "gtk2" "dav1d" "aom" "libwebp" "libevent")
optdepends=("networkmanager: Location detection via available WiFi networks" "speech-dispatcher: Text-to-Speech")
makedepends=("gzip")
provides=("firefox=${pkgver}")
conflicts=("firefox" "firefox-kde-opensuse" "firefox-kde-opensuse-bin")
source_x86_64=(https://download.opensuse.org/repositories/mozilla:/Factory/openSUSE_Factory/x86_64/MozillaFirefox-${_pkgver}.x86_64.rpm)
sha512sums_x86_64=('d87fe9be6136d060fcebfcbd09374ed633040069b025f4f6848dbe870ce07ac9642b5e997e05f37cb7570dd3e8b5b643b48ce8160e32d23e66f9f53c2431107b')


prepare() {
    cd "usr"

    # Cleanup openSUSE Branding
    # We keep the "mozilla" directories as there might be other things in there in the future.
    rm -rf "share/mozilla/extensions"
    rm -rf "lib64/mozilla/extensions"

    # unzip man pages, let makepkg handle them
    gunzip -f "share/man/man1/firefox.1.gz"

    sed -i "s|/usr/lib64/firefox|/usr/lib/firefox|g" "lib64/firefox/firefox.sh"
    sed -i "s|/usr/lib64/firefox|/usr/lib/firefox|g" "share/man/man1/firefox.1"
}

package() {
    cd "usr"

    install -d "${pkgdir}/usr"

    cp -r "." "${pkgdir}/usr/"
    mv "${pkgdir}/usr/lib64" "${pkgdir}/usr/lib"  # Make file structure more in-line with Arch
    ln -sf "/usr/lib/firefox/firefox.sh" "${pkgdir}/usr/bin/firefox"
}
