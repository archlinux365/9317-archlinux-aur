pkgname=raccoon-bin
pkgver=4.21.0
pkgrel=1
arch=('any')
pkgdesc="Alternative Google Play (with GUI) client to download Android APK files to your computer, binary version"
url="http://raccoon.onyxbits.de"
license=('Apache')
depends=('java-environment')
provides=('raccoon')
source=('raccoon.desktop'
        'https://github.com/onyxbits/Raccoon/raw/master/artwork/icon.svg'
        "https://raccoon.onyxbits.de/apk-downloader/raccoon-${pkgver}.jar")
noextract=('${pkgname}-${pkgver}.jar')
sha512sums=('99ae7ab9aa77f6de0779c9179e16dbccd36362adc710cd5d7289c473b6aff62d39a0e29be63840bc7f614e360d17b51f877ff2bf2fda938da8fa13e3f9248647'
            'f63e94b86f5b111b8833d53767b0f6eada48426e1b0e30df0137bed455c80ec37087f656e2f0cac9386f4d25441686df82c988252120fc335028d2885b8653f6'
            '1a7661b41d7e75565ec0f483e58522091bce936da904c92d54484087d6d664ec0072ebe58b7606a3992a2066460cc82be3539991b682caf7d78e1881a2d4795f')

package() {
  # install files to java shared dir
  mkdir -p "$pkgdir/usr/share/java/${pkgname/-bin}"
  install -Dm644 raccoon-$pkgver.jar "$pkgdir/usr/share/java/${pkgname/-bin}"

  # install icon and desktop database entry
  install -Dm644 icon.svg "$pkgdir/usr/share/pixmaps/raccoon.svg"
  install -Dm644 raccoon.desktop  "$pkgdir/usr/share/applications/raccoon.desktop"

  # starter
  mkdir -p "$pkgdir/usr/bin"
  cat > "$pkgdir/usr/bin/raccoon" << \here
#!/bin/sh
exec java -Dawt.useSystemAAFontSettings=on -Dswing.defaultlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel -Draccoon.home="$HOME/.Raccoon" -jar /usr/share/java/raccoon/raccoon-pkgver.jar "$@"
exit $?
here
    sed -i "s/pkgver/$pkgver/" "$pkgdir/usr/bin/raccoon"
    chmod a+x "$pkgdir/usr/bin/raccoon"
}
