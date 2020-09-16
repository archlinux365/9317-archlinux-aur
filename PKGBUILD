# Maintainer: Giovanni 'ItachiSan' Santini <giovannisantini93@yahoo.it>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: hexchain <i@hexchain.org>

# Thanks Nicholas Guriev <guriev-ns@ya.ru> for the patches!
# https://github.com/mymedia2/tdesktop

pkgname=telegram-desktop-dev
pkgver=2.3.2
pkgrel=1
pkgdesc='Official Telegram Desktop client - development release'
arch=('i686' 'x86_64')
url="https://desktop.telegram.org/"
license=('GPL3')
depends=('hunspell' 'ffmpeg' 'gtk3' 'hicolor-icon-theme' 'libdbusmenu-qt5'
         'lz4' 'minizip' 'openal' 'qt5-imageformats' 'qt5-wayland' 'xxhash')
makedepends=('cmake' 'git' 'libwebrtc' 'microsoft-gsl' 'python' 'range-v3' 'tl-expected')
optdepends=('ttf-opensans: default Open Sans font family')

provides=('telegram-desktop')
conflicts=('telegram-desktop')
_commit="tag=v$pkgver"
#_commit="commit=COMMIT_SHA1"

# All the sources are Git repositories and might be adjusted when a build issue arise.
# These files might require modifications to be up-to-date.
# In such situation, extra patches will be added.
# All the submodules "source" definitions are generated them via:
# git submodule foreach --quiet 'echo \"${name##*/}::git+`git remote get-url origin`\"' | sort
source=(
    "tdesktop::git+https://github.com/telegramdesktop/tdesktop.git#$_commit"
    "https://raw.githubusercontent.com/archlinux/svntogit-community/packages/telegram-desktop/trunk/Use-tg_owt-webrtc-fork.patch"
    "https://raw.githubusercontent.com/archlinux/svntogit-community/packages/telegram-desktop/trunk/Fix_xcb_wayland.patch"
    "Catch::git+https://github.com/philsquared/Catch"
    "cmake::git+https://github.com/desktop-app/cmake_helpers.git"
    "codegen::git+https://github.com/desktop-app/codegen.git"
    "expected::git+https://github.com/TartanLlama/expected"
    "fcitx5-qt::git+https://github.com/fcitx/fcitx5-qt.git"
    "fcitx-qt5::git+https://github.com/fcitx/fcitx-qt5.git"
    "GSL::git+https://github.com/Microsoft/GSL.git"
    "hime::git+https://github.com/hime-ime/hime.git"
    "hunspell::git+https://github.com/hunspell/hunspell"
    "lib_base::git+https://github.com/desktop-app/lib_base.git"
    "lib_crl::git+https://github.com/desktop-app/lib_crl.git"
    "libdbusmenu-qt::git+https://github.com/desktop-app/libdbusmenu-qt.git"
    "lib_lottie::git+https://github.com/desktop-app/lib_lottie.git"
    "lib_qr::git+https://github.com/desktop-app/lib_qr.git"
    "libqtxdg::git+https://github.com/lxqt/libqtxdg.git"
    "lib_rlottie::git+https://github.com/desktop-app/lib_rlottie.git"
    "lib_rpl::git+https://github.com/desktop-app/lib_rpl.git"
    "lib_spellcheck::git+https://github.com/desktop-app/lib_spellcheck"
    "lib_storage::git+https://github.com/desktop-app/lib_storage.git"
    "libtgvoip::git+https://github.com/telegramdesktop/libtgvoip"
    "lib_tl::git+https://github.com/desktop-app/lib_tl.git"
    "lib_ui::git+https://github.com/desktop-app/lib_ui.git"
    "lib_webrtc::git+https://github.com/desktop-app/lib_webrtc.git"
    "lxqt-qtplugin::git+https://github.com/lxqt/lxqt-qtplugin.git"
    "lz4::git+https://github.com/lz4/lz4.git"
    "materialdecoration::git+https://github.com/desktop-app/materialdecoration.git"
    "nimf::git+https://github.com/hamonikr/nimf.git"
    "QR::git+https://github.com/nayuki/QR-Code-generator"
    "qt5ct::git+https://github.com/desktop-app/qt5ct.git"
    "range-v3::git+https://github.com/ericniebler/range-v3.git"
    "rlottie::git+https://github.com/desktop-app/rlottie.git"
    "tgcalls::git+https://github.com/TelegramMessenger/tgcalls.git"
    "variant::git+https://github.com/desktop-app/variant.git"
    "xxHash::git+https://github.com/Cyan4973/xxHash.git"
)
sha512sums=('SKIP'
            '071591c6bb71435f8186dcaf570703718051f00366dbbe3f13c4df3706d3de1f168bff4bfa707ad1d6f09f5505c925f0b01d76fd65efe904f3ba7db693d63f43'
            'b318ae7a78bcacc27d3cbfce34b60f16197d8fdb9f8fcc8a9125ecf0d0760a1ed3bb526167013de61c5b6cf9a53102a901826d019bf6e9ba879953ede7d07823'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

prepare() {
    cd "$srcdir/tdesktop"
    git submodule init

    # Same magic as above.
    # git submodule foreach --quiet 'echo git config submodule.$name.url \"\$srcdir/${name##*/}\"' | sort
    git config submodule.cmake.url "$srcdir/cmake"
    git config submodule.Telegram/codegen.url "$srcdir/codegen"
    git config submodule.Telegram/lib_base.url "$srcdir/lib_base"
    git config submodule.Telegram/lib_crl.url "$srcdir/lib_crl"
    git config submodule.Telegram/lib_lottie.url "$srcdir/lib_lottie"
    git config submodule.Telegram/lib_qr.url "$srcdir/lib_qr"
    git config submodule.Telegram/lib_rlottie.url "$srcdir/lib_rlottie"
    git config submodule.Telegram/lib_rpl.url "$srcdir/lib_rpl"
    git config submodule.Telegram/lib_spellcheck.url "$srcdir/lib_spellcheck"
    git config submodule.Telegram/lib_storage.url "$srcdir/lib_storage"
    git config submodule.Telegram/lib_tl.url "$srcdir/lib_tl"
    git config submodule.Telegram/lib_ui.url "$srcdir/lib_ui"
    git config submodule.Telegram/lib_webrtc.url "$srcdir/lib_webrtc"
    git config submodule.Telegram/ThirdParty/Catch.url "$srcdir/Catch"
    git config submodule.Telegram/ThirdParty/expected.url "$srcdir/expected"
    git config submodule.Telegram/ThirdParty/fcitx5-qt.url "$srcdir/fcitx5-qt"
    git config submodule.Telegram/ThirdParty/fcitx-qt5.url "$srcdir/fcitx-qt5"
    git config submodule.Telegram/ThirdParty/GSL.url "$srcdir/GSL"
    git config submodule.Telegram/ThirdParty/hime.url "$srcdir/hime"
    git config submodule.Telegram/ThirdParty/hunspell.url "$srcdir/hunspell"
    git config submodule.Telegram/ThirdParty/libdbusmenu-qt.url "$srcdir/libdbusmenu-qt"
    git config submodule.Telegram/ThirdParty/libqtxdg.url "$srcdir/libqtxdg"
    git config submodule.Telegram/ThirdParty/libtgvoip.url "$srcdir/libtgvoip"
    git config submodule.Telegram/ThirdParty/lxqt-qtplugin.url "$srcdir/lxqt-qtplugin"
    git config submodule.Telegram/ThirdParty/lz4.url "$srcdir/lz4"
    git config submodule.Telegram/ThirdParty/materialdecoration.url "$srcdir/materialdecoration"
    git config submodule.Telegram/ThirdParty/nimf.url "$srcdir/nimf"
    git config submodule.Telegram/ThirdParty/QR.url "$srcdir/QR"
    git config submodule.Telegram/ThirdParty/qt5ct.url "$srcdir/qt5ct"
    git config submodule.Telegram/ThirdParty/range-v3.url "$srcdir/range-v3"
    git config submodule.Telegram/ThirdParty/rlottie.url "$srcdir/rlottie"
    git config submodule.Telegram/ThirdParty/tgcalls.url "$srcdir/tgcalls"
    git config submodule.Telegram/ThirdParty/variant.url "$srcdir/variant"
    git config submodule.Telegram/ThirdParty/xxHash.url "$srcdir/xxHash"

    # Magic is over!
    git submodule update

    # Cheating! Linking fixed patches to their usual place
    #for fixed in $srcdir/*_fixed*
    #do
    #    ln -s $fixed ${fixed/_fixed/}
    #done
    # Patch here, if needed!
    # patch -Np1 -i "$srcdir/my_beautiful.patch"

    # Official package patches
    cd cmake
    patch -R -Np1 -i ${srcdir}/Use-tg_owt-webrtc-fork.patch
    sed 's|set(webrtc_build_loc ${webrtc_loc}/out/$<CONFIG>/obj)|set(webrtc_build_loc /usr/lib)|' -i external/webrtc/CMakeLists.txt
    cd ../
    patch -Np1 -i ${srcdir}/Fix_xcb_wayland.patch
}

build() {
    cd "$srcdir/tdesktop"

    # Before were used:
    # -DTDESKTOP_API_ID=17349
    # -DTDESKTOP_API_HASH=344583e45741c457fe1862106095a5eb
    # export CXXFLAGS="$CXXFLAGS -ffile-prefix-map=$srcdir/tdesktop="
    cmake . \
        -B build \
        -G "Unix Makefiles" \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_BUILD_TYPE=Release \
        -DTDESKTOP_API_ID=611335 \
        -DTDESKTOP_API_HASH=d524b414d21f4d37f08684c1df41ac9c \
        -DTDESKTOP_DISABLE_REGISTER_CUSTOM_SCHEME=ON \
        -DTDESKTOP_LAUNCHER_BASENAME="telegram-desktop" \
        -DDESKTOP_APP_SPECIAL_TARGET="" \
        -DDESKTOP_APP_WEBRTC_LOCATION=/usr/include/libwebrtc
    make -C build
}

package() {
    cd "$srcdir/tdesktop"
    DESTDIR="$pkgdir" make -C build install
}
