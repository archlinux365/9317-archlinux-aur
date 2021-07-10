# Maintainer: novenary <streetwalkermc@gmail.com>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: hexchain <i@hexchain.org>
pkgname=telegram-desktop9
pkgver=2.8.4
pkgrel=3
pkgdesc='Official Telegram Desktop client (personal build)'
arch=('x86_64')
url="https://desktop.telegram.org/"
license=('GPL3')
depends=('ffmpeg' 'hicolor-icon-theme' 'lz4' 'minizip' 'openal' 'ttf-opensans'
         'qt5-imageformats' 'xxhash' 'libdbusmenu-qt5' 'kwayland' 'gtk3' 'glibmm'
         'webkit2gtk' 'rnnoise' 'pipewire' 'libxtst' 'libxrandr' )
makedepends=('cmake' 'git' 'ninja' 'python' 'range-v3' 'tl-expected' 'microsoft-gsl'
             'libtg_owt' 'extra-cmake-modules')
provides=('telegram-desktop')
conflicts=('telegram-desktop')
source=("https://github.com/telegramdesktop/tdesktop/releases/download/v${pkgver}/tdesktop-${pkgver}-full.tar.gz"
        "fix-gcc11-assert._patch::https://raw.githubusercontent.com/archlinux/svntogit-community/fcf886c3eae607f9827627957016cdfe1b81be33/trunk/fix-gcc11-assert.patch"
        "fix-freeze-after-file-dialog._patch::https://github.com/telegramdesktop/tdesktop/commit/1261c775d4ca6fb78277ec213794da7c15e304e2.patch"
        "revert-qmenubar-fix-global-menu._patch::https://github.com/telegramdesktop/tdesktop/commit/6f031a715e5f9db1f75ec230cf06538d77d5b4ec.patch"

        "always_delete_for_everyone.patch"
        "always_pin_without_notify.patch"
        "always_send_as_photo_or_album.patch"
        "clicky_sticker_panel.patch"
        "dont_pulse_mentions.patch"
        "no_circles.patch"
        "use_xdg-open.patch"
        "fix_thread_context_menu.patch"
        "mediaviewer_nofullscreen.patch")
sha512sums=('b0e78aa9bffa1707425f058737b0d0a0db26e8fba14e1413e465eefcbbc95dc0eaee642d1ebc4a82c8239188a3eed677c5c3eb748203348a14ba2ace61afd779'
            'd94c21f45a14eea009f4dc099a0be7774aa9c64d6bdb2745eb866a505ad4d95e4e75e53e110bcdc2db553809d8aea485e3fa321feccc7660120c0f418f4d5e3f'
            '2a5c8f5ca5a3a34872567ac98032717c40689baab2926d9fa8960404c6630925732f028dc7fdcf28bef11dd247a78779c3f5ca631f8b75abf23e23dab8d0f24c'
            '9a49f7e074f8e5c2ecad0092146af2647f7afd5e7b7904d3634013fcba7fb81eaff7ccca35c955ee55010431172b2c1bcdbe7f01d3d5a391d950b278b491fb54'
            'fdef3a430bdd60d88c9e9011ee878805e7803699204a2a7e22797d0f8729bf7dc0543851083ad700a4ece32bc768b6bfeb6f0135c8c039e035b22afb6df1171d'
            'dc5ffda130496c44bfe52792e856dac811b1a8e48b463529dd54396ad1b45915f8b6d9fcb6cb254f9350b3440d7b94a67d1c19660962f0350015061b021af6f1'
            '4da055da633b40b6133d14fd13d1aa9d933b3ba4b19370bc0edbccc02d4e31a9291191f7dc3a2aca9225da8dabca6ed33f90ab757435bebd034b6fed28ac8092'
            '91e6b5af2db63f4c24a43f8e6799be44e27775ef3f0615f760552b1d691b6e734812a87cba9b9753272dc1d3dc5d33ad2890d2dc0be4b9e87680a6dc8a26997c'
            '673e2a28781d0d604549c621592b1017ad306ddaf6d1beedfe73f3f1357fbb6afd994a324dfa15029789bdf8a4d6e85ad12a3877519618f6585bbc1927c06900'
            '8ec6b1739a1391b75a2653fff704a7d22e830c526acffe138936bbd20047bd24831e42558fa22069d7e914e762bbcfa2e1b14a8fd3911fd8bbbd0662d8baac14'
            'fd8d0bf64e1e682711f161b1f22ada8ab7551e6bbd794aa3bc53cdfecc0d60c688c1b82525d87ae26c6eb7f9b958c836a0ed57851ef95d32d031921a973e0675'
            'e6a10c1304e01676373c77d27629d93c085fa4e34e80ce1e4bd10af9cfb0a24c1fe2077cc0fdda83162e865cfab6811c9bc27aa13661c6d300c54749ffaef796'
            'f38793e89a735ce0bc86158d567c156bad83ab5a924898aec6429c61317e64261c533cbe463630815f061c18bf24a378ea0256ed6c28fe968af74f222bdbc546')

prepare() {
    cd tdesktop-$pkgver-full

    local src
    for src in "${source[@]}"; do
        src="${src%%::*}"
        src="${src##*/}"
        [[ $src = *.patch ]] || continue
        msg2 "Applying patch $src..."
        patch -Np1 < "../$src"
    done

    cd cmake
    # force webrtc link to libjpeg and X11 libs
    echo "target_link_libraries(external_webrtc INTERFACE jpeg)" | tee -a external/webrtc/CMakeLists.txt
    echo "find_package(X11 REQUIRED COMPONENTS Xcomposite Xdamage Xext Xfixes Xrender Xrandr Xtst)" | tee -a external/webrtc/CMakeLists.txt
    echo "target_link_libraries(external_webrtc INTERFACE Xcomposite Xdamage Xext Xfixes Xrandr Xrender Xtst)" | tee -a external/webrtc/CMakeLists.txt

    cd ..
    patch -b -d Telegram/lib_webview/ -Np1 -i ${srcdir}/fix-gcc11-assert._patch
    # backport file dialog patch
    patch -Np1 -i ${srcdir}/fix-freeze-after-file-dialog._patch
    patch -Np1 -i ${srcdir}/revert-qmenubar-fix-global-menu._patch
}

build() {
    cd tdesktop-$pkgver-full

    # Turns out we're allowed to use the official API key that telegram uses for their snap builds:
    # https://github.com/telegramdesktop/tdesktop/blob/8fab9167beb2407c1153930ed03a4badd0c2b59f/snap/snapcraft.yaml#L87-L88
    # Thanks @primeos!
    cmake . \
        -B build \
        -G Ninja \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_BUILD_TYPE=Release \
        -DTDESKTOP_API_ID=611335 \
        -DTDESKTOP_API_HASH=d524b414d21f4d37f08684c1df41ac9c \
        -DTDESKTOP_LAUNCHER_BASENAME="telegramdesktop" \
        -DDESKTOP_APP_SPECIAL_TARGET="" \
        -DDESKTOP_APP_DISABLE_SPELLCHECK=ON
    ninja -C build
}

package() {
    cd tdesktop-$pkgver-full
    DESTDIR=$pkgdir ninja -C build install
}
