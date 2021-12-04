# Set this flag to 1 if you want to hide Bismuth tray icon.
HIDE_TRAY_ICON=1

pkgname=kwin-bismuth-git
pkgver=2.1.0.r27.g84a0ac5
pkgrel=1
pkgdesc="Addon for KDE Plasma to arrange your windows automatically and switch between them using keyboard shortcuts, like tiling window managers."
arch=('x86_64')
url="https://github.com/Bismuth-Forge/bismuth"
license=('MIT')
depends=('systemsettings')
makedepends=('git' 'npm' 'cmake' 'ninja' 'extra-cmake-modules' 'kcoreaddons' 'kconfig' 'ki18n' 'kcmutils' 'kdeclarative')
provides=('kwin-bismuth')
conflicts=('kwin-bismuth')
options=('!emptydirs')

source=('hide-tray-icon.patch')
sha512sums=('333a495c907652bfc583a6f365acac70077fb622817a390853524f2ec21debad00841b29b3ffd88271077287182814790496b4961c90412d71eae6d1a9d6e919')

pkgver() {
    cd "${srcdir}/repo"
    git describe --long --tags --abbrev=7 | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}"

    if [ ! -d "repo" ]; then
        git clone --filter=tree:0 --sparse --no-checkout "${url}" "repo"
    fi

    cd "repo"

    git fetch -f origin
    git sparse-checkout set "/package.json" "/CMakeLists.txt" "/src" "/LICENSES"
    git checkout -f

    if [ ${HIDE_TRAY_ICON} = 1 ]; then
        patch -p0 -N -i "${srcdir}/hide-tray-icon.patch"
    fi

    local ver=$(perl -ne'/"esbuild":\s*"(\S+)",?/ && print $1' <"package.json")
    rm "package.json"

    npm i -E --package-lock=false "esbuild"@"${ver}"
}

build() {
    cd "${srcdir}/repo"

    cmake -S "." -B "build" -G Ninja -DCMAKE_BUILD_TYPE=MinSizeRel -DUSE_TSC=OFF
    cmake --build "build"
}

package() {
    cd "${srcdir}/repo"

    install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}/" && cp -rt "$_" "./LICENSES/"*

    DESTDIR="${pkgdir}" cmake --install "build"
}
