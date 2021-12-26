# Maintainer: Nocifer <apmichalopoulos at gmail dot com>
# Contributor: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>


pkgname='ibus-mozc'
pkgver=2.26.4596.102
pkgrel=2
pkgdesc='Mozc module for IBus'
arch=('x86_64')
url='https://github.com/google/mozc'
license=('Apache' 'BSD' 'LGPL' 'custom')
depends=('ibus>=1.4.1' 'mozc=2.26.4596.102')
makedepends=('bazel' 'git' 'pkgconf' 'python-six' 'qt5-base')
conflicts=('ibus-mozc-ut2' 'ibus-mozc-ut-united')
replaces=('ibus-mozc-ut')
source=("${pkgname}-git::git+https://github.com/google/mozc.git#commit=3735608")
sha256sums=('SKIP')

prepare() {
    cd ${pkgname}-git

    git submodule update --init --recursive

    cd src

    # Fix the Qt5 include path
    sed -i -e 's/x86_64-linux-gnu\/qt5/qt/' config.bzl

    # Fix the GLib include path
    sed -i -e 's/x86_64-linux-gnu\/glib/glib/' BUILD.ibus.bazel
}

build() {
    cd ${pkgname}-git/src

    env PATH="/usr/lib/jvm/java-11-openjdk/bin/:$PATH" bazel build renderer:mozc_renderer unix/ibus:ibus_mozc unix/icons --config oss_linux --compilation_mode opt
}

package() {
    cd ${pkgname}-git/src

    install -Dm644 ../LICENSE                                   ${pkgdir}/usr/share/licenses/ibus-mozc/LICENSE
    install -Dm644 data/installer/credits_en.html               ${pkgdir}/usr/share/licenses/ibus-mozc/credits_en.html

    install -Dm755 bazel-bin/renderer/mozc_renderer             ${pkgdir}/usr/lib/mozc/mozc_renderer

    install -Dm755 bazel-bin/unix/ibus/ibus_mozc                ${pkgdir}/usr/lib/ibus-mozc/ibus-engine-mozc
    install -Dm644 bazel-bin/unix/ibus/mozc.xml                 ${pkgdir}/usr/share/ibus/component/mozc.xml

    cd bazel-bin/unix

    unzip -o icons.zip

    install -Dm644 mozc.png                                     ${pkgdir}/usr/share/ibus-mozc/product_icon.png
    install -Dm644 alpha_full.svg                               ${pkgdir}/usr/share/ibus-mozc/alpha_full.svg
    install -Dm644 alpha_half.svg                               ${pkgdir}/usr/share/ibus-mozc/alpha_half.svg
    install -Dm644 direct.svg                                   ${pkgdir}/usr/share/ibus-mozc/direct.svg
    install -Dm644 hiragana.svg                                 ${pkgdir}/usr/share/ibus-mozc/hiragana.svg
    install -Dm644 katakana_full.svg                            ${pkgdir}/usr/share/ibus-mozc/katakana_full.svg
    install -Dm644 katakana_half.svg                            ${pkgdir}/usr/share/ibus-mozc/katakana_half.svg
    install -Dm644 outlined/dictionary.svg                      ${pkgdir}/usr/share/ibus-mozc/dictionary.svg
    install -Dm644 outlined/properties.svg                      ${pkgdir}/usr/share/ibus-mozc/properties.svg
    install -Dm644 outlined/tool.svg                            ${pkgdir}/usr/share/ibus-mozc/tool.svg
}
