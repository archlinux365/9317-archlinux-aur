# Maintainer: katt <magunasu.b97@gmail.com>

pkgname=duckstation-git
pkgver=r5564.73a80d3a
pkgdesc='A Sony PlayStation (PSX) emulator, focusing on playability, speed, and long-term maintainability (git version)'
pkgrel=1
arch=(x86_64 aarch64)
url=https://github.com/stenzek/duckstation
license=(GPL3)
makedepends=(git cmake extra-cmake-modules qt6-tools libdrm libpulse alsa-lib sndio gtk3 ninja) # include jack2 to build jack cubeb backend
depends=(sdl2 qt6-base)
optdepends=()
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=(git+"$url".git)
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname%-git}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    # fix build for commit ef3ad91a
    patch -p1 -d "${srcdir}/${pkgname%-git}" << EOF
--- a/src/frontend-common/fullscreen_ui.cpp	2022-09-17 22:10:40.988720185 +0000
+++ b/src/frontend-common/fullscreen_ui.cpp	2022-09-17 22:37:55.911769613 +0000
@@ -1134,7 +1134,7 @@
     ImGui::SetCursorPos(ImVec2(ImGui::GetWindowWidth() - rev_size.x - LayoutScale(20.0f),
                                ImGui::GetWindowHeight() - rev_size.y - LayoutScale(20.0f)));
     ImGui::PushFont(g_medium_font);
-    ImGui::Text(g_scm_tag_str);
+    ImGui::Text("%s", g_scm_tag_str);
     ImGui::PopFont();
   }
EOF
}

build() {
    cmake -B build -S duckstation \
        -DBUILD_NOGUI_FRONTEND=OFF \
        -DUSE_WAYLAND=ON \
        -G Ninja \
        -Wno-dev
    ninja -C build
}

package() {
    # Main files
    install -m755 -d "${pkgdir}/opt"
    cp -rv build/bin "${pkgdir}/opt/${pkgname%-git}"

    # Symlink to /usr/bin
    install -m755 -d "${pkgdir}/usr/bin"
    ln -svt "${pkgdir}/usr/bin" /opt/"${pkgname%-git}"/"${pkgname%-git}"-qt

    # Desktop file
    cat > "${pkgname%-git}/data/resources/.desktop" << EOF
[Desktop Entry]
Type=Application
Name=DuckStation
GenericName=PlayStation 1 Emulator
Comment=Fast PlayStation 1 emulator
Icon=duckstation
TryExec=duckstation-qt
Exec=duckstation-qt %f
Categories=Game;Emulator;Qt;
EOF
    install -Dm644 "${pkgname%-git}/data/resources/.desktop" "${pkgdir}/usr/share/applications/duckstation-qt.desktop"
    install -Dm644 "${pkgname%-git}/data/resources/images/duck.png" "${pkgdir}/usr/share/pixmaps/duckstation.png"
}
