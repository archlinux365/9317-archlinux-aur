# Maintainer: Nocifer <apmichalopoulos at gmail dot com>
# Contributor: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>

pkgname='fcitx-mozc-ut'
pkgver=2.28.4770.102
pkgrel=1
pkgdesc='Mozc module for Fcitx'
arch=('x86_64')
url='https://github.com/fcitx/mozc'
license=('Apache' 'BSD' 'LGPL' 'custom')
depends=('fcitx' 'mozc>=2.28.4770.102')
makedepends=('bazel' 'git' 'python' 'qt5-base')
optdepends=('fcitx-configtool')
provides=('fcitx-mozc=2.28.4770.102')
conflicts=('fcitx-mozc')
options=(!distcc !ccache)
source=("${pkgname}-git::git+https://github.com/google/mozc.git#commit=5e3542b98adb743553e672f34caee6d5d8021b85"
        "fcitx.patch")
sha256sums=('SKIP'
            '02411077f078631811a90a7366d1da2f58d4a0440771c015dd40e5910c2cf4a2')

prepare() {
    cd ${pkgname}-git/src

    git submodule update --init --recursive

    # Restore the workspace to its original state
    [[ -f BUILD.fcitx.bazel ]] && rm BUILD.fcitx.bazel
    [[ -d unix/fcitx ]] && rm -r unix/fcitx
    git restore .

    # Patch in the out-of-source fcitx target (pulled from https://github.com/fcitx/mozc)
    patch -Np2 -i ${srcdir}/fcitx.patch

    # Fix the Qt5 include path
    sed -i -e 's/x86_64-linux-gnu\/qt5/qt/' config.bzl

    # Temp fix for the Android NDK error
    sed -i -e 's/android_ndk_repository(name = "androidndk")/#android_ndk_repository(name = "androidndk")/' WORKSPACE.bazel

    # Load the application icon dynamically
    sed -i -e 's|IconName=/usr/share/fcitx/mozc/icon/mozc.png|IconName=fcitx-mozc|' unix/fcitx/mozc.conf
}

build() {
    cd ${pkgname}-git/src

    export JAVA_HOME='/usr/lib/jvm/java-11-openjdk/'
    bazel build unix/fcitx:fcitx-mozc.so unix/icons --config oss_linux --compilation_mode opt
}

package() {
    cd ${pkgname}-git/src

    install -Dm644 ../LICENSE                                  ${pkgdir}/usr/share/licenses/fcitx-mozc/LICENSE
    install -Dm644 data/installer/credits_en.html              ${pkgdir}/usr/share/licenses/fcitx-mozc/credits_en.html

    install -Dm755 bazel-bin/unix/fcitx/fcitx-mozc.so          ${pkgdir}/usr/lib/fcitx/fcitx-mozc.so
    install -Dm644 unix/fcitx/fcitx-mozc.conf                  ${pkgdir}/usr/share/fcitx/addon/mozc.conf
    install -Dm644 unix/fcitx/mozc.conf                        ${pkgdir}/usr/share/fcitx/inputmethod/mozc.conf

    for pofile in unix/fcitx/po/*.po
    do
        filename=`basename ${pofile}`
        lang=${filename/.po/}
        mofile=${pofile/.po/.mo}
        msgfmt ${pofile} -o ${mofile}
        install -Dm644 ${mofile} ${pkgdir}/usr/share/locale/${lang}/LC_MESSAGES/fcitx-mozc.mo
    done

    cd bazel-bin/unix

    unzip -o icons.zip

    install -Dm644 mozc.png                                    ${pkgdir}/usr/share/icons/hicolor/128x128/apps/org.fcitx.Fcitx.fcitx-mozc.png
    install -Dm644 alpha_full.svg                              ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-alpha-full.svg
    install -Dm644 alpha_half.svg                              ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-alpha-half.svg
    install -Dm644 direct.svg                                  ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-direct.svg
    install -Dm644 hiragana.svg                                ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-hiragana.svg
    install -Dm644 katakana_full.svg                           ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-katakana-full.svg
    install -Dm644 katakana_half.svg                           ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-katakana-half.svg
    install -Dm644 outlined/dictionary.svg                     ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-dictionary.svg
    install -Dm644 outlined/properties.svg                     ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-properties.svg
    install -Dm644 outlined/tool.svg                           ${pkgdir}/usr/share/icons/hicolor/scalable/apps/org.fcitx.Fcitx.fcitx-mozc-tool.svg

    ln -s org.fcitx.Fcitx.fcitx-mozc.png                       ${pkgdir}/usr/share/icons/hicolor/128x128/apps/fcitx-mozc.png
    ln -s org.fcitx.Fcitx.fcitx-mozc-alpha-full.svg            ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-alpha-full.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-alpha-half.svg            ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-alpha-half.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-direct.svg                ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-direct.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-hiragana.svg              ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-hiragana.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-katakana-full.svg         ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-katakana-full.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-katakana-half.svg         ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-katakana-half.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-dictionary.svg            ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-dictionary.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-properties.svg            ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-properties.svg
    ln -s org.fcitx.Fcitx.fcitx-mozc-tool.svg                  ${pkgdir}/usr/share/icons/hicolor/scalable/apps/fcitx-mozc-tool.svg
}
