# Maintainer: Taboon Egon <te451 -_AT_- netcourrier -_DOT_- com>
# Contributor: relrel <relrelbachar at gmail dot com>

pkgname=scratch3
conflicts=("scratch3-bin")
pkgver=3.27.0
pkgrel=7
pkgdesc="Scratch 3.0 as a self-contained desktop application"
arch=("x86_64" "i686" "aarch64" "arm7h")
url="https://scratch.mit.edu"
license=("custom:BSD-3-Clause")
depends=("c-ares" "ffmpeg" "gtk3" "libevent" "libxslt" "minizip" "nss" "re2" "snappy")
optdepends=("xdg-utils: open URLs with desktop's default (xdg-email, xdg-open)")
makedepends=('npm' 'electron13')
source=("https://github.com/LLK/scratch-desktop/archive/refs/tags/v${pkgver}.tar.gz"
        "${pkgname}.desktop"
        "${pkgname}.xml"
        "$pkgname-icons.tar.gz"
        "$pkgname-patches.tar.gz")
sha256sums=('0bb89f64bc933a00a56fd87a3a27b2106b42d0dc1ba61cf1a9f3f19beae5cec8'
            '0f4f25e55b988e45a2f240487c35b18c96bbbce0f6be60bbe204b33f6d77d6da'
            '86c8e16d9316dcbe21c19928381a498f5198708cae0ed25bfa3c09371d02deaf'
            '326558f3f2d4044ea897d22baab2f23fbfc2034d7d11dfb8215ee6ba29106001'
            '5e96fa6431393256c0f3f2ad9170f28c69a2480b9097cd4591d2c6086a3beebf')

appOutputDir="linux-unpacked"

case "$CARCH" in
  x86_64)  appOutputDir="linux-unpacked";;
  i686)    appOutputDir="linux-ia32-unpacked";;
  aarch64) appOutputDir="linux-arm64-unpacked";;
  arm7h)   appOutputDir="linux-armv7l-unpacked";;
  *)       appOutputDir="linux-unpacked";;
esac

## Needs testing (for arm7h and i686)!
## arm and arm6h: they don't seem to be supported by Electron.
## Value for aarch64 given and tested by one user: ok on Raspberry Pi 4B.
## Other values deduced from previous one with no warranty.
## To find them out, start installation like usual.
## If it succeeds, fine. If not, in the output of the build,
## look for this kind of line, at the end of the (failed) build:
##   • packaging  platform=linux arch=????? electron=13.6.6 appOutDir=dist/linux-?????-unpacked
## In any case, please report to the maintainer, thanks.

prepare() {
   cd "$srcdir/"

#  Copy patch files to be able to compile on Linux platform
#  and with electron version (13.6.x) instead of default version (15.3.1)
#  due to issue (https://github.com/electron/electron/issues/31152).
   cp package-json.patch scratch-desktop-${pkgver}/
   cp electron-builder-yaml.patch scratch-desktop-${pkgver}/
   cp index-js.patch scratch-desktop-${pkgver}/src/main/

   cd "scratch-desktop-${pkgver}/"
   patch < package-json.patch
   patch < electron-builder-yaml.patch

   cd "src/main/"
   patch < index-js.patch
}

build(){
   cd "$srcdir/scratch-desktop-${pkgver}/"

#  Node modules installation & application compilation
   npm install
   npm run clean && npm run compile && npm run fetch

#  Remove all refs to $srcdir in dist/main/main.js and dist/renderer/renderer.js
#  in order to avoid warnings at package error research.

   cd "$srcdir/scratch-desktop-${pkgver}/dist/renderer/"
   rmString="/\*! ${srcdir}/scratch-desktop-3.27.0/src/renderer/index.js \*/"
   sed -e "s|${rmString}||" renderer.js > renderer2.js
   mv renderer2.js renderer.js

   cd "$srcdir/scratch-desktop-${pkgver}/dist/main/"
   rmString="/\*! ${srcdir}/scratch-desktop-3.27.0/src/main/index.js \*/"
   sed -e "s|${rmString}||" main.js > main2.js
   mv main2.js main.js
   
   cd "$srcdir/scratch-desktop-${pkgver}/"

#  File generation
   npx electron-builder --linux

#  To avoid the default Electron icon to be used
   cp ../icon256.png "dist/${appOutputDir}/resources/icon.png"

#  Copy/move all license files in one single place ($srcdir)
   cp LICENSE ../
   cp TRADEMARK ../
   mv dist/${appOutputDir}/LICENSE* ../

#  And the icon file in SVG format
   cp src/icon/ScratchDesktop.svg ../$pkgname.svg
}

package() {
   cd "$srcdir"
   install -dm755 ${pkgdir}/usr/bin
   ln -sf /opt/${pkgname}/${pkgname} ${pkgdir}/usr/bin/${pkgname}
   install -Dm644 "${pkgname}.desktop" $pkgdir/usr/share/applications/${pkgname}.desktop
   install -Dm644 "${pkgname}.xml" $pkgdir/usr/share/mime/packages/${pkgname}.xml
   install -Dm644 "$pkgname.svg" $pkgdir/usr/share/icons/hicolor/scalable/apps/$pkgname.svg
   install -Dm644 "cathead.svg" $pkgdir/usr/share/icons/hicolor/scalable/mimetypes/x-scratch3-sprite.svg
   install -Dm644 TRADEMARK "$pkgdir/usr/share/licenses/$pkgname/TRADEMARK"
   install -Dm644 LICENS* -t "$pkgdir/usr/share/licenses/$pkgname"
   install -dm755 "${pkgdir}/opt/$pkgname"
   cd "scratch-desktop-${pkgver}/dist/${appOutputDir}"
   cp -r * -t "$pkgdir/opt/$pkgname"
}
