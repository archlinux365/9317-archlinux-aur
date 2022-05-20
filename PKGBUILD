# Maintainer: Shiroko <hhx.xxm at gmail.com>
# Maintainer: Johnpoint <me at lvcshu.com>
pkgname=clash-for-windows-bin
pkgver=0.19.19
pkgrel=1
pkgdesc="A Windows/macOS/Linux GUI based on Clash and Electron."
arch=("x86_64" "aarch64")
url="https://github.com/Fndroid/clash_for_windows_pkg"
# logo_url="https://raw.githubusercontent.com/Dreamacro/clash/master/docs/logo.png"
logo_url="https://cdn.jsdelivr.net/gh/Dreamacro/clash@master/docs/logo.png"
install=clash-for-windows-bin.install

depends=('libxss' 'gtk3')

optdepends=(
    'nftables: TUN mode required.'
    'iproute2: TUN mode required.'
)

source=(
    "clash.png::${logo_url}"
    "clash-for-windows.desktop"
    "cfw"
    )

source_x86_64=(
    "${pkgname}-${pkgver}-x86_64-linux.tar.gz::${url}/releases/download/${pkgver}/Clash.for.Windows-${pkgver}-x64-linux.tar.gz"
    )

source_aarch64=(
    "${pkgname}-${pkgver}-aarch64-linux.tar.gz::${url}/releases/download/${pkgver}/Clash.for.Windows-${pkgver}-arm64-linux.tar.gz"
    )

sha256sums=(
    'SKIP'
    'a2997f604a486e264f6fc5344164ae9e1a9a01282006a41784dd181f7d1a2913'
    '4c0a9de624905e3717b0dd4effa24fbf5c79ad28221b3b3b15a4a0aca4d47e03'
    )

sha256sums_x86_64=(
    'e5c0a2e6014f1d3098d7fa922e8fb98abcdb70946f619415daaebd0ae4927662'
    )


sha256sums_aarch64=(
    '5e077cb1a3f0f9199887eaaa93bd3192f09e5138de07a34047a81a4031e047b2'
    )


build() {
    # generate .desktop file
    sed -i "s/pkgver/${pkgver}/" clash-for-windows.desktop
}

package() {
    local parch=$(echo ${arch} | sed "s/x86_64/x64/;s/aarch64/arm64/")
    cd "Clash for Windows-${pkgver}-${parch}-linux"
    echo "packaging resource files as 644"
    find . -type f -not \( -name "cfw" -or -name "clash-linux" -or -name "clash-core-service" -or -name "chrome-sandbox" -or -name "*.sh" \) \
        -exec install -Dm 644 {} "${pkgdir}/opt/${pkgname}"/{} \;
    echo "packaging executable files as 755"
    find . -type f \( -name "cfw" -or -name "clash-linux" -or -name "clash-core-service" -or -name "chrome-sandbox" -or -name "*.sh" \) \
       -exec install -Dm 755 {} "${pkgdir}/opt/${pkgname}"/{} \;
    install -Dm 755 ../cfw ${pkgdir}/usr/bin/cfw 
    install -Dm 644 ../clash.png ${pkgdir}/usr/share/pixmaps/clash.png
    install -Dm 644 ../clash-for-windows.desktop ${pkgdir}/usr/share/applications/clash-for-windows.desktop
}
