# Maintainer: qvshuo

_instname=WeChat
pkgname=wechat-nativefier
pkgver=20210503.1
pkgrel=1
pkgdesc="WeChat desktop built with nativefier (electron)"
arch=("x86_64")
url="https://wx.qq.com/"
license=("MIT")
makedepends=("nodejs-nativefier")
source=(
  "${pkgname}.css"
  "${pkgname}.js"
  "${pkgname}.desktop"
  "${pkgname}.png"
)
sha512sums=(
  "afc40d22dcfe06a7fd28324567b3112ab1ddabbd77f621401031e8be1bfceb69af6cba053a16aea6431f431b8f40fe8aaa3324791152d71623f7e7f9d1406da4"
  "d0fff3abb41f93104e60d1659cfe27a5512836fa4dd7a0ab859438345f016681465959e907346d840f26b9d8f850758f81ee92b576d71b6fed9659d50602286e"
  "7386c8f93d262a09baac34f815487c10e8998439416bd9276a61405e2b85e2087f77db91a1bb4b34d428c01775bdb40f8ea6f68f4927ae527cd4e42c8b505bb8"
  "718d0a44567a32a9ae4e875df8ee905b93f52bc6570dd7b75120bd5f801d2d350ae6d378e84b243cb8af80ccf85c1c873f43a8138efb880f27df8e356a2bcfce"
)

build() {
  nativefier \
    --name "${_instname}" \
    --icon "${pkgname}.png" \
    --inject "${pkgname}.css" \
    --inject "${pkgname}.js" \
    --internal-urls ".*?" \
    --file-download-options '{"saveAs": true}' \
    "${url}"
}

package() {
    install -d "$pkgdir"/opt "$pkgdir"/usr/{bin,share/pixmaps}
    install -Dm644 $pkgname.desktop "$pkgdir"/usr/share/applications/$_instname.desktop

    cp -rL $_instname-linux-* "$pkgdir"/opt/$pkgname
    ln -sf /opt/$pkgname/$_instname "$pkgdir"/usr/bin/$_instname
    ln -sf /opt/$pkgname/resources/app/icon.png "$pkgdir"/usr/share/pixmaps/$_instname.png

    chmod 666 "$pkgdir"/opt/$pkgname/resources/app/nativefier.json
}
